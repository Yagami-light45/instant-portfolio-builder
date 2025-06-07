import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Instant Portfolio Builder</title>
        <meta name="description" content="Build and deploy your personal portfolio instantly." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        <header className="bg-gradient-to-b from-[#292b60] to-black p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">⚡ XFolio</h1>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#features" className="text-gray-300 hover:text-white">Features</Link>
              <Link href="#how" className="text-gray-300 hover:text-white">How It Works</Link>
              <a href="https://github.com/Yagami-light45/Instant-Portfolio-Builder-Web-App" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">GitHub</a>
              <Link href="/builder">
                <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">Start Building</button>
              </Link>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-3xl">
                &#9776;
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 items-center">
              <Link href="#features" className="text-gray-300 hover:text-white">Features</Link>
              <Link href="#how" className="text-gray-300 hover:text-white">How It Works</Link>
              <a href="https://github.com/Yagami-light45/Instant-Portfolio-Builder-Web-App" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">GitHub</a>
              <Link href="/builder">
                <button className="bg-blue-700 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 w-full">Start Building</button>
              </Link>
            </div>
          )}
        </header>

        <main>
          <section
            className="text-center py-20 px-5"
            style={{ backgroundImage: "url('/ocean.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <h1 className="text-5xl font-bold mb-4 text-shadow">⚡XFolio</h1>
            <h2 className="text-4xl font-semibold mb-6 text-shadow">Build Your Portfolio Instantly</h2>
            <p className="max-w-3xl mx-auto mb-8">
              Creating a stunning personal portfolio has never been easier. With our platform, you don’t need to write a single line of code — just enter your details, and your website is ready in one click.
            </p>
            <Link href="/builder">
              <button className="bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-blue-600">Get Started Now</button>
            </Link>
            <div className="mt-20 flex justify-center">
                <Image src="/welcome_page.png" alt="Portfolio Example" width={800} height={450} className="rounded-lg shadow-2xl" />
            </div>
          </section>

          <div className="bg-gradient-to-b from-[#000110] via-[#001a40] to-[#000110] py-10">
            <section id="how" className="py-16 text-center">
              <h2 className="text-4xl font-bold mb-10">How It Works</h2>
              <div className="flex flex-wrap gap-8 justify-center max-w-5xl mx-auto px-5">
                <div className="bg-[#003891] p-6 rounded-lg shadow-lg max-w-sm">
                  <h3 className="text-2xl font-semibold mb-2">📝 Fill the Form</h3>
                  <p>Enter your name, bio, projects, and social links.</p>
                </div>
                <div className="bg-[#003891] p-6 rounded-lg shadow-lg max-w-sm">
                  <h3 className="text-2xl font-semibold mb-2">👀 Live Preview</h3>
                  <p>See your portfolio update in real time as you type.</p>
                </div>
                <div className="bg-[#003891] p-6 rounded-lg shadow-lg max-w-sm">
                  <h3 className="text-2xl font-semibold mb-2">🚀 Publish & Share</h3>
                  <p>Get a shareable link or download your portfolio.</p>
                </div>
              </div>
            </section>

            <section id="features" className="py-16 text-center">
              <h2 className="text-4xl font-bold mb-10">Why Use Us?</h2>
              <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto px-5">
                <div className="bg-[#003891] p-4 rounded-lg shadow-lg">📱 Responsive Design</div>
                <div className="bg-[#003891] p-4 rounded-lg shadow-lg">🎨 Clean Templates</div>
                <div className="bg-[#003891] p-4 rounded-lg shadow-lg">🔗 Shareable Links</div>
                <div className="bg-[#003891] p-4 rounded-lg shadow-lg">💾 Download as HTML</div>
                <div className="bg-[#003891] p-4 rounded-lg shadow-lg">🌗 Light/Dark Mode</div>
              </div>
            </section>
          </div>
        </main>

        <footer className="bg-black text-center p-6">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="#how" className="text-gray-400 hover:text-white">How It Works</Link>
            <a href="https://github.com/Yagami-light45/Instant-Portfolio-Builder-Web-App" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">GitHub</a>
          </div>
          <p className="text-gray-500">© 2025 Instant Portfolio Builder</p>
        </footer>
      </div>
    </>
  );
}