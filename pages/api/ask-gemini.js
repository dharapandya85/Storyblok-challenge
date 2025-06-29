import { getResources } from '../../lib/storyblok';
import { askGeminiForResources } from '../../lib/gemini';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  try {
    const resources = await getResources();
    const result = await askGeminiForResources(query, resources);
    res.status(200).json({ result });
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}
