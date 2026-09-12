import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Machine Learning & Software Engineer",
    "Full-Stack Web Developer",
    "Regulatory Bodies Aspirant (RBI • SEBI • IRDAI)",
    "Data Scientist & Systems Thinker"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-16 md:py-20">
      {/* Main hero content */}
      <div className="text-center mb-16">
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-pink-600">Shrutik</span> 👋
          </h1>
          
          {/* Animated role switcher */}
          <div className="h-9 mb-6">
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              <span className="inline-block min-w-0 transition-all duration-500 ease-in-out">
                {roles[currentRole]}
              </span>
            </p>
          </div>
        </div>

        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          IIT Kharagpur graduate (Dual Degree B.Tech + M.Tech) with proven experience in <strong>Machine Learning</strong>, 
          <strong> AI Data Systems</strong>, and <strong>Full-Stack Web Development</strong>. 
          Currently preparing for and pivoting toward <strong>Indian Regulatory Bodies</strong> (RBI, SEBI, IRDAI, NABARD), 
          bridging computational problem-solving with macroeconomics, financial governance, and policy analysis.
        </p>

        {/* Quick stats or highlights */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-gray-600">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium text-gray-800">Available for Freelance & High-Impact Roles</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
            <span className="text-blue-600 font-semibold">IIT Kharagpur</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-700 font-medium">Class of 2025</span>
          </div>
        </div>
      </div>

      {/* Regulatory Bodies Spotlight Card */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-pink-50/90 via-purple-50/70 to-blue-50/90 rounded-2xl p-6 md:p-8 border border-pink-200 shadow-sm hover:shadow-md transition-all">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-100 text-pink-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-2">
                Strategic Pivot & Focus
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Pivoting to Indian Regulatory Bodies
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['RBI Grade B', 'SEBI', 'IRDAI', 'NABARD'].map((org) => (
                <span key={org} className="px-3 py-1 bg-white/80 text-gray-800 text-xs font-semibold rounded-lg border border-pink-200 shadow-xs">
                  {org}
                </span>
              ))}
            </div>
          </div>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Delving deeply into Indian macroeconomic policy, central banking operations, financial market regulation, and developmental economics. 
            Combining quantitative rigor, systems thinking, and data-driven analysis with economic and public governance frameworks.
          </p>
        </div>
      </div>

      {/* Two-column layout for detailed organization */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
        
        {/* About & Core Expertise */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-pink-500 rounded"></span>
              Background & Vision
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              With a foundation in Chemical Engineering from IIT Kharagpur, I have developed analytical rigor that translates across software, machine learning, and economics. I have delivered production websites for clients (including enterprises affiliated with NSE-listed firms) and coordinated AI data annotation pipelines at scale.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              My multidisciplinary journey unites deep technical execution with public-interest policy and macroeconomic systems.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-blue-500 rounded"></span>
              Core Pillars
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-1">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  AI & Deep Learning
                </div>
                <p className="text-xs text-gray-600">PyTorch, YOLOv8, Transformers, FAISS & NLP</p>
              </div>

              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Full-Stack Web
                </div>
                <p className="text-xs text-gray-600">React, Vite, Tailwind CSS, Sanity CMS & APIs</p>
              </div>

              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-1">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Regulatory & Macro
                </div>
                <p className="text-xs text-gray-600">RBI, SEBI, IRDAI, Financial Markets & Policy</p>
              </div>

              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Data & Operations
                </div>
                <p className="text-xs text-gray-600">Statistical Modeling, QC Pipelines & Ops</p>
              </div>
            </div>
          </div>
        </div>

        {/* Opportunities & Action */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-green-500 rounded"></span>
              Engagements & Capabilities
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              I collaborate with businesses and teams on impactful initiatives:
            </p>

            <div className="space-y-3">
              {[
                { 
                  title: "Freelance Web Development", 
                  subtitle: "High-performance production websites (React, Vite, CMS, responsive UI for brands & enterprises)" 
                },
                { 
                  title: "AI, ML & Data Pipelines", 
                  subtitle: "End-to-end computer vision, NLP models, vector search, and annotation workflow orchestration" 
                },
                { 
                  title: "Analytical & Policy Research", 
                  subtitle: "Financial data analysis, quantitative problem solving, and regulatory intelligence" 
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-3.5 hover:bg-gray-100 transition-colors border border-gray-100">
                  <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-600 mt-0.5">{item.subtitle}</p>
                </div>
              ))}
            </div>

            {/* CTA section */}
            <div className="pt-5 flex flex-col sm:flex-row gap-3">
              <a
                href="#projects"
                className="flex-1 bg-pink-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-pink-700 transition-colors text-center text-sm shadow-sm"
              >
                Explore Live Work & Projects
              </a>
              <a
                href="https://drive.google.com/file/d/1906Q53lxbXc51HCpCc0SlB9swB_txyak/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border-2 border-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-medium hover:border-gray-300 hover:bg-gray-50 transition-colors text-center text-sm"
              >
                View CV / Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-12">
        <a href="#projects" className="animate-bounce p-2 text-gray-400 hover:text-pink-600 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </a>
      </div>
    </section>
  );
}