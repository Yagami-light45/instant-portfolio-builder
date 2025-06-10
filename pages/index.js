import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { supabase } from '../lib/supabaseClient';
import dynamic from 'next/dynamic';

const AuthComponentWithNoSSR = dynamic(
  () => import('../components/Auth'),
  { ssr: false }
);

export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        setSession(session);
    }
    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();
  }

  return (
    <>
      <Head>
        <title>Instant Portfolio Builder</title>
        <meta name="description" content="Build and deploy your personal portfolio instantly." />
      </Head>

      <div className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-5xl font-bold">⚡ XFolio</h1>
        <p className="mt-4 text-xl text-gray-400">Build Your Portfolio Instantly.</p>

        <div className="mt-10">
          {!session ? (
            <AuthComponentWithNoSSR />
          ) : (
            <div>
              <p className="text-lg">Welcome back, {session.user.email}!</p>
              <Link href="/builder">
                <button className="mt-4 bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-blue-600">
                  Go to Builder
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="mt-4 ml-4 bg-red-500 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
