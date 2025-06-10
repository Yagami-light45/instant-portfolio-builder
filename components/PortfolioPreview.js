export default function PortfolioPreview({ data }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-white">Live Preview</h2>
      <div className="bg-white text-black p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold">{data.fullName || 'Your Name'}</h1>
        <p className="text-xl text-gray-600 mt-1">{data.title || 'Your Title'}</p>
        <p className="mt-4 text-lg leading-relaxed">{data.bio || 'Your bio will appear here...'}</p>

        <h2 className="text-3xl font-bold mt-8 border-t pt-6">Projects</h2>
        <p className="text-gray-500 mt-2">Your projects will be listed here.</p>
      </div>
    </div>
  );
}