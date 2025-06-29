//components/Resource.jsx
const Resource=({blok})=>(
    <div>
    <h2>{blok.title}</h2>
    <p>{blok.description}</p>
    <p><strong>Tags:</strong>{blok.tags}</p>
    <p><strong>Type:</strong>{blok.type}</p>
    </div>
);
export default Resource;