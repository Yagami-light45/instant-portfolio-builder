import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import PortfolioForm from '../components/PortfolioForm';
import PortfolioPreview from '../components/PortfolioPreview';

export default function Builder() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [title, setTitle] = useState('');
  const [bio, setBio] = useState('');
  const [projects, setProjects] = useState([{ title: '', description: '', github_link: '' }]);

  const portfolioData = { fullName, title, bio, projects };
  const portfolioSetters = { setFullName, setTitle, setBio, setProjects };

  useEffect(() => {
    const checkUser = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            setUser(user);
        } else {
            router.push('/'); 
        }
    }
    checkUser();
  }, [router]);

  const handlePublish = async () => {
    if (!user) {
      alert('You must be logged in to publish.');
      return;
    }
    alert('Publishing feature to be implemented! Data will be saved to Supabase here.');
    // major task to save the portfolioData to supabase tables.
  };

  if (!user) {
    return <p className="text-center mt-20">Loading...</p>; 
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4">
          <h1 className="text-2xl font-bold">⚡ XFolio Builder</h1>
          <button
            onClick={handlePublish}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Publish
          </button>
        </div>
      </header>

      <main className="flex flex-1 flex-col md:flex-row container mx-auto px-4 mt-6 gap-6">
        <section className="w-full md:w-1/3 bg-gray-900 p-6 rounded-lg">
          <PortfolioForm data={portfolioData} setters={portfolioSetters} />
        </section>

        <section className="w-full md:w-2/3 bg-gray-700 p-6 rounded-lg overflow-auto">
          <PortfolioPreview data={portfolioData} />
        </section>
      </main>
    </div>
  );
}