import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Machine Learning Engineer",
    "Data Scientist", 
    "Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20">
      {/* Main hero content */}
      <div className="text-center mb-16">
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">Shrutik</span> 👋
          </h1>
          
          {/* Animated role switcher */}
          <div className="h-8 mb-6">
            <p className="text-xl md:text-2xl text-gray-600">
              <span className="inline-block min-w-0 transition-all duration-500 ease-in-out">
                {roles[currentRole]}
              </span>
            </p>
          </div>
        </div>

        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
          Passionate about leveraging <strong>Machine Learning</strong> and <strong>Deep Learning</strong> to solve real-world problems. 
          Experienced in building intelligent systems from research to production, with expertise in 
          <strong> NLP</strong>, <strong>Computer Vision</strong>, and <strong>GenAI</strong>.
        </p>

        {/* Quick stats or highlights */}
        <div className="flex justify-center gap-8 mt-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Available for opportunities</span>
          </div>
        </div>
      </div>

      {/* Two-column layout for better organization */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* About section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded"></span>
              About Me
            </h2>
            <p className="text-gray-700 leading-relaxed">
              I am an aspiring Machine Learning Engineer with a strong foundation in the mathematics and deep learning. My project work spans NLP, computer vision, and statistical modeling. 
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Core Expertise</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>Deep Learning</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span>NLP & GenAI</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Computer Vision</span>
              </div>
            </div>
          </div>
        </div>

        {/* What I'm looking for section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-green-500 rounded"></span>
              Open to Opportunities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Currently seeking challenging roles where I can apply my ML expertise to solve impactful problems.
            </p>
          </div>

          <div className="space-y-3">
            {[
              { title: "Data Scientist / ML Engineer", subtitle: "Internship & Full-time positions" },

              { title: "Consulting Projects", subtitle: "ML solutions for real-world problems" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.subtitle}</p>
              </div>
            ))}
          </div>

          {/* CTA section */}
          <div className="pt-4">
            <div className="flex gap-4">
              <a
  href="https://drive.google.com/file/d/1906Q53lxbXc51HCpCc0SlB9swB_txyak/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors text-center"
>
  View Resume
</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-16">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </div>
    </section>
  );
}