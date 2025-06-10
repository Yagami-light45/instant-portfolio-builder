export default function PortfolioForm({ data, setters }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-white">Your Details</h2>
      <label className="text-white block mb-1">Full Name</label>
      <input
        type="text"
        value={data.fullName}
        onChange={(e) => setters.setFullName(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <label className="text-white block mt-4 mb-1">Title / Role</label>
      <input
        type="text"
        value={data.title}
        onChange={(e) => setters.setTitle(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <label className="text-white block mt-4 mb-1">Bio</label>
      <textarea
        value={data.bio}
        onChange={(e) => setters.setBio(e.target.value)}
        className="w-full h-32 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}