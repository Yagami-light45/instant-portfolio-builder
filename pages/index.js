import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { supabase } from '../lib/supabaseClient';


const AuthComponentWithNoSSR = dynamic(() => import('../components/Auth'), { ssr: false });

export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
    };
    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <Head>
        <title>Instant Portfolio Builder</title>
        <meta name="description" content="Build and deploy your personal portfolio instantly." />
      </Head>

      <header>
        <div className="nav">
          <h1>⚡ XFolio</h1>
          <div className="menu-toggle" id="menu-toggle">&#9776;</div>
          <nav id="nav-links">
            <a href="#features">Features</a>
            <a href="#how">How It Works</a>
            <a href="#contact">About us</a>
            <a href="https://github.com/Yagami-light45/Instant-Portfolio-Builder-Web-App" target="_blank">GitHub</a>
            {session ? (
              <>
                <Link href="/builder"><button className="start-btn">Go to Builder</button></Link>
                <button onClick={handleLogout} className="start-btn" style={{ marginLeft: '1rem', background: 'red' }}>Logout</button>
              </>
            ) : (
              <a href="#auth"><button className="start-btn">Start Building</button></a>
            )}
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="top">
          <h1>⚡XFolio</h1>
          <h2>Build Your Portfolio Instantly</h2>
          <p>
           Creating a stunning personal portfolio has never been easier. With our platform, you don’t need to write a single line of code — just enter your details, and your website is ready in one click. Whether you're a student, developer, designer, or professional, we help you showcase your work beautifully. Save time, skip the technical hassle, and go live instantly.
<br/>Build your digital identity effortlessly, today.
          </p>
          <a href="#auth" className="start-btn">Get Started Now..</a>
        </div>
        <div className="bottom">
          <img src="/welcome_page.png" alt="Welcome" />
        </div>
      </section>

      <div className="both">
        <section className="how-it-works" id="how">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step"><h3>📝 Fill the Form</h3><p>Enter your name, bio, projects, and social links.</p></div>
            <div className="step"><h3>👀 Live Preview</h3><p>See your portfolio update in real time as you type.</p></div>
            <div className="step"><h3>🚀 Publish & Share</h3><p>Get a shareable link or download your portfolio.</p></div>
          </div>
        </section>

        <section className="features" id="features">
          <h2>Why Use Us?</h2>
          <div className="feature-list">
            <div className="feature">📱 Responsive Design</div>
            <div className="feature">🎨 Clean Templates</div>
            <div className="feature">🔗 Shareable Links</div>
            <div className="feature">💾 Download as HTML</div>
            <div className="feature">🌗 Light/Dark Mode</div>
          </div>
        </section>
      </div>

      <section id="auth" className="text-center mt-10">
        {!session && <AuthComponentWithNoSSR />}
      </section>

      <footer>
        <div className="footer-links">
          <a href="#how">How It Works</a>
          <a href="https://github.com/Yagami-light45/Instant-Portfolio-Builder-Web-App" target="_blank">GitHub</a>
          <a href="#contact">About us</a>
        </div>
        <p>© 2025 Instant Portfolio Builder. Built by <a href="https://github.com/Yagami-light45/Instant-Portfolio-Builder-Web-App" target="_blank">AC</a>.</p>
      </footer>

      <script dangerouslySetInnerHTML={{
        __html: `
          const toggle = document.getElementById('menu-toggle');
          const navLinks = document.getElementById('nav-links');
          toggle?.addEventListener('click', () => {
            navLinks?.classList.toggle('show');
          });
        `
      }} />
    </>
  );
}
