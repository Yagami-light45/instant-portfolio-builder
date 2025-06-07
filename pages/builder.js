import { useState } from 'react';
import Link from 'next/link';

function PortfolioPreview({ name, bio }) {
  return (
    <div className="bg-white text-black p-8 rounded-lg shadow">
      <h1 className="text-4xl font-bold">{name || 'Your Name'}</h1>
      <p className="mt-2 text-lg leading-relaxed">{bio || 'Your bio will appear here...'}</p>
    </div>
  );
}

export default function Builder() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white py-4 shadow-md z-10">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="text-2xl font-bold">
            ⚡ XFolio Builder
          </Link>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            Publish
          </button>
        </div>
      </header>

      <main className="flex flex-1 flex-col md:flex-row container mx-auto px-4 mt-6 gap-6">
        <section className="w-full md:w-1/3 bg-gray-900 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-white">Your Details</h2>

          <label className="text-white block mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <label className="text-white block mt-4 mb-1">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full h-32 p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </section>

        <section className="w-full md:w-2/3 bg-gray-700 p-6 rounded-lg overflow-auto">
          <h2 className="text-2xl font-semibold mb-4 text-white">Live Preview</h2>
          <PortfolioPreview name={name} bio={bio} />
        </section>
      </main>
    </div>
  );
}
