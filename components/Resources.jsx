// components/Resources.jsx
const Resources = ({ blok }) => {
  if (!blok || !blok.title) return <p>No resources available.</p>;

  return (
    <div className="p-4 border rounded-md shadow">
      <h2 className="text-xl font-bold mb-2">{blok.title}</h2>
      <p className="text-gray-600 mb-2">{blok.description}</p>
      {blok.link?.url && (
        <a
          href={blok.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Visit Resource
        </a>
      )}
    </div>
  );
};

export default Resources;
