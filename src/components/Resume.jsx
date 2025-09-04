// src/pages/Resume.jsx

import { useState } from 'react';

export default function Resume() {
  // ... (your data arrays remain the same) ...
  const workExperience = [
    { company: "Outlier AI", role: "AI Engineer", date: "June 2025 - Present", icon: "O" },
    { company: "Darzee App", role: "Software Engineer", date: "May 2024 - Aug 2024", icon: "F" },
  ];
  const education = [
    { school: "Indian Institute of Technology, Kharagpur", degree: "Bachelor and Master's (dual degree) of Technology in Chemical Engineering", date: "2020 - 2025",img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYOhXbc8qMqc9UXtm9ibAU6cxiAjHEKPGFg&shttps://datahubkgp.org/images/logo/iit.png'}
  ];
  const skills = [
    "Python", "LangChain", "Transformers", "LLMs", "NLP", "FastAPI", "RAG", "PyTorch", "OpenCV", "React", "scikit-learn", "spaCy"
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Work Experience */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-8 text-gray-800 uppercase tracking-wider">Work Experience</h2>
          <div className="space-y-8">
            {workExperience.map((job, idx) => (
              <div key={idx} className="flex items-start justify-between">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-gray-200 text-xl font-bold text-gray-700 flex-shrink-0">
                    {job.icon}
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-800 mb-1">{job.company}</div>
                    <div className="text-sm text-gray-600">{job.role}</div>
                  </div>
                </div>
                <div className="text-gray-500 text-sm font-medium ml-4 flex-shrink-0">{job.date}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          {/* 👇 ADDED mt-16 for spacing above the heading */}
          <h2 className="mt-16 text-xl font-bold mb-8 text-gray-800 uppercase tracking-wider">Education</h2>
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="flex items-start justify-between">
                <div className="flex items-start space-x-6">
                  {edu.img ? (
                    <img 
                      src={edu.img} 
                      alt="logo" 
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200 flex-shrink-0" 
                    />
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-gray-200 text-xl font-bold text-gray-700 flex-shrink-0">
                      {edu.icon}
                    </div>
                  )}
                  <div>
                    <div className="text-lg font-semibold text-gray-800 mb-1">{edu.school}</div>
                    <div className="text-sm text-gray-600">{edu.degree}</div>
                  </div>
                </div>
                <div className="text-gray-500 text-sm font-medium ml-4 flex-shrink-0">{edu.date}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          {/* 👇 ADDED mt-16 for spacing above the heading */}
          <h2 className="mt-16 text-xl font-bold mb-8 text-gray-800 uppercase tracking-wider">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span 
                key={idx} 
                className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-lg text-xs font-medium transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}