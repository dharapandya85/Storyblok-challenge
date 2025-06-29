import { useState } from 'react';

export default function ResourceFinder() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    setLoading(true);
    setResult('');

    const res = await fetch('/api/ask-gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    setResult(data.result || 'No results found.');
    setLoading(false);
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">AI Resource Finder</h1>
      <input
        type="text"
        className="border w-full p-2"
        placeholder="Ask about Vue tutorials, React guides, etc."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white p-2 mt-2"
        onClick={handleSearch}
      >
        {loading ? 'Searching...' : 'Ask AI'}
      </button>
      <pre className="bg-gray-100 p-4 mt-4 whitespace-pre-wrap">{result}</pre>
    </div>
  );
}
