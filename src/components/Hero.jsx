import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Software & ML Engineer",
    "Freelance Web Developer",
    "Regulatory Bodies Aspirant (RBI • SEBI)",
    "IIT Kharagpur Graduate"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-12 md:py-16">
      {/* Intro Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-pink-700 text-xs font-semibold rounded-full border border-pink-200 shadow-xs mb-4">
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
          IIT Kharagpur '25 • Based in India
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Hi, I'm <span className="text-pink-600">Shrutik Patil</span> 👋
        </h1>

        <div className="h-8 mb-6">
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            <span>{roles[currentRole]}</span>
          </p>
        </div>

        <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
          <p>
            I recently graduated from <strong>IIT Kharagpur</strong> with a Dual Degree (B.Tech + M.Tech) in Chemical Engineering. 
            I love building things—whether that's clean, snappy web applications for clients, or training machine learning models to solve practical problems.
          </p>
          <p>
            Over the past year, I've worked as a freelance web developer building live production websites (like <a href="https://acquir.in/" target="_blank" rel="noreferrer" className="text-pink-600 font-semibold underline decoration-pink-300 hover:decoration-pink-600">Acquir</a> and <a href="https://www.emceemanoj.in/" target="_blank" rel="noreferrer" className="text-pink-600 font-semibold underline decoration-pink-300 hover:decoration-pink-600">Emcee Manoj</a>), and coordinated large-scale AI data annotation programs at ConsultBae.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-6">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-xl bg-pink-600 text-white font-medium text-sm hover:bg-pink-700 transition-colors shadow-sm shadow-pink-200"
          >
            See What I've Built ↓
          </a>
          <a
            href="https://drive.google.com/file/d/1906Q53lxbXc51HCpCc0SlB9swB_txyak/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-50 hover:border-gray-300 transition-colors"
          >
            View Resume ↗
          </a>
          <a
            href="mailto:shrutikpatil.iitkgp25@gmail.com"
            className="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-gray-700 font-medium text-sm hover:bg-gray-50 hover:border-gray-300 transition-colors"
          >
            Get in Touch ✉️
          </a>
        </div>
      </div>

      {/* Regulatory Bodies & Current Focus Card */}
      <div className="bg-white rounded-2xl p-6 md:p-7 border border-pink-100 shadow-sm mb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-pink-500 to-rose-600"></div>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-pink-600">
              Current Direction
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-0.5">
              Preparing for Indian Regulatory Bodies
            </h2>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['RBI Grade B', 'SEBI', 'IRDAI', 'NABARD'].map((org) => (
              <span key={org} className="px-2.5 py-1 text-xs font-semibold bg-pink-50 text-pink-700 rounded-lg border border-pink-100">
                {org}
              </span>
            ))}
          </div>
        </div>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Alongside building software, I am currently preparing for Indian regulatory body examinations. 
          Coming from an engineering background, I've always enjoyed breaking down complex systems—and central banking, financial markets, and economic policy are some of the most critical systems around. 
          I spend my days studying macroeconomics, monetary policy mechanisms, and financial regulation, bringing an analytical, problem-solving mindset to economic questions.
        </p>
      </div>

      {/* Quick Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-xs">
          <div className="text-2xl mb-2">💻</div>
          <h3 className="font-bold text-gray-900 text-base mb-1">Web Development</h3>
          <p className="text-gray-600 text-xs leading-relaxed">
            Building live production sites with React, Vite, and Tailwind CSS. Working with Sanity CMS for easy client content updates.
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-xs">
          <div className="text-2xl mb-2">🤖</div>
          <h3 className="font-bold text-gray-900 text-base mb-1">Machine Learning</h3>
          <p className="text-gray-600 text-xs leading-relaxed">
            Hands-on experience in computer vision (YOLOv8), NLP (transformers & embeddings with FAISS), and multimodal search.
          </p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-xs">
          <div className="text-2xl mb-2">📊</div>
          <h3 className="font-bold text-gray-900 text-base mb-1">Economics & Policy</h3>
          <p className="text-gray-600 text-xs leading-relaxed">
            Deeply curious about Indian financial architecture, central banking operations, and quantitative economic analysis.
          </p>
        </div>
      </div>
    </section>
  );
}