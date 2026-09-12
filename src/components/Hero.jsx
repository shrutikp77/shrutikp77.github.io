import React from 'react';

export default function Hero() {
  return (
    <section id="about" className="space-y-8 pt-4">
      {/* Intro Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Hi, I'm Shrutik 👋
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-snug">
            Software engineer & ML builder from IIT Kharagpur, currently preparing for Indian regulatory bodies (RBI, SEBI).
          </p>
          <div className="flex items-center gap-2 pt-1 text-xs text-gray-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>Available for freelance web projects & analytical roles</span>
          </div>
        </div>

        {/* Monogram Brand Avatar */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-md shadow-pink-200/80 flex-shrink-0 select-none">
          SP
        </div>
      </div>

      {/* About Section */}
      <div className="space-y-3">
        <h2 className="text-lg font-bold text-gray-900">About</h2>
        <div className="text-sm text-gray-600 leading-relaxed space-y-3">
          <p>
            I recently graduated from <strong>IIT Kharagpur</strong> with a Dual Degree (B.Tech + M.Tech) in Chemical Engineering. 
            I enjoy building software from scratch—from fast, responsive websites for clients to machine learning pipelines. 
            Recently, I led AI data operations at <strong>ConsultBae</strong> and worked as a freelance web developer building production platforms like <a href="https://acquir.in/" target="_blank" rel="noreferrer" className="text-pink-600 font-semibold underline decoration-pink-300 hover:decoration-pink-600">Acquir</a> and <a href="https://www.emceemanoj.in/" target="_blank" rel="noreferrer" className="text-pink-600 font-semibold underline decoration-pink-300 hover:decoration-pink-600">Emcee Manoj</a>.
          </p>
          <p>
            Coming from an engineering background, I love breaking down complex systems. That curiosity has led me to delve deeply into central banking, financial markets, and macroeconomics.
          </p>
        </div>

        {/* Focus list inspired by Gauri Tripathi */}
        <div className="pt-3 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
            What I'm focused on right now:
          </p>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-pink-500 font-bold">•</span>
              <span>
                <strong>Regulatory Bodies:</strong> Actively preparing for <strong>RBI Grade B, SEBI, IRDAI, and NABARD</strong>, studying monetary policy, financial stability, and capital markets.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 font-bold">•</span>
              <span>
                <strong>Freelance Web Development:</strong> Engineering fast, clean websites using React, Vite, Tailwind CSS, and Sanity CMS for brands and independent clients.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 font-bold">•</span>
              <span>
                <strong>Collaboration:</strong> Open to high-impact software/ML projects, freelance web builds, and analytical research opportunities.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}