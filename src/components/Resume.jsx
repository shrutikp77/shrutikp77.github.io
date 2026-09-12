import React from 'react';

export default function Resume() {
  const workExperience = [
    {
      company: "ConsultBae",
      role: "Project Coordinator – AI Data Services",
      date: "Jan 2026 – Mar 2026",
      avatar: "CB",
      avatarBg: "bg-pink-100 text-pink-700 border-pink-200",
      bullets: [
        "Managed delivery of three major audio annotation pipelines (Seamless 27, Seamless 29, and Hayee) totaling 750 files on Appen/MatrixGo.",
        "Coordinated daily workflows for 150+ freelance contributors and sub-team leads.",
        "Built a multi-tier quality framework reaching 98% accuracy and cutting rework cycles.",
        "Ran a German speech transcription proof-of-concept for call-center and meeting datasets."
      ]
    },
    {
      company: "Freelance Client Work",
      role: "Full-Stack Web Developer",
      date: "2024 – Present",
      avatar: "FW",
      avatarBg: "bg-rose-100 text-rose-700 border-rose-200",
      bullets: [
        "Designed and shipped acquir.in for an NSE-listed enterprise brand using React, Vite, and Sanity CMS.",
        "Engineered emceemanoj.in, a high-converting portfolio for one of India's premier corporate event hosts.",
        "Currently developing custom client dashboards and web tools for independent businesses."
      ]
    },
    {
      company: "Darzee",
      role: "Software Engineer Intern",
      date: "May 2024 – Aug 2024",
      avatar: "DZ",
      avatarBg: "bg-purple-100 text-purple-700 border-purple-200",
      bullets: [
        "Built a responsive client dashboard in React with 20+ reusable components, cutting UI turnaround time by 25%.",
        "Refined Flutter mobile screens based on live feedback, improving daily active session depth."
      ]
    },
    {
      company: "Outlier AI",
      role: "AI Engineer (Contract)",
      date: "2025",
      avatar: "OA",
      avatarBg: "bg-stone-100 text-stone-700 border-stone-200",
      bullets: [
        "Benchmarked frontier LLMs across mathematical reasoning, coding correctness, and instruction following."
      ]
    }
  ];

  const education = [
    {
      school: "Indian Institute of Technology (IIT), Kharagpur",
      degree: "B.Tech + M.Tech (Dual Degree), Chemical Engineering",
      date: "Nov 2020 – Jul 2025",
      avatar: "IIT",
      avatarBg: "bg-amber-100 text-amber-800 border-amber-200",
      note: "Won 1st place in the Inter-Hall Data Analytics Competition by building an LSTM neural network that forecasted warehouse inventory down to 1.31% MAPE."
    }
  ];

  const skills = [
    "Python", "C++", "JavaScript", "React", "Vite", "Tailwind CSS",
    "Sanity CMS", "PyTorch", "Hugging Face", "SentenceTransformers",
    "FAISS", "YOLOv8", "SQL", "REST APIs", "Git", "Linux",
    "Macroeconomics", "Monetary Policy", "Financial System Regulation"
  ];

  return (
    <section id="resume" className="space-y-10">
      {/* Section Header */}
      <div>
        <h2 className="text-xl font-bold tracking-tight text-gray-900">
          Work Experience
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Roles in AI data operations, web engineering, and software development.
        </p>
      </div>

      {/* Work List */}
      <div className="space-y-6">
        {workExperience.map((job, idx) => (
          <div key={idx} className="group relative">
            <div className="flex items-start gap-3.5">
              {/* Avatar circle */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border shrink-0 mt-0.5 ${job.avatarBg}`}>
                {job.avatar}
              </div>

              {/* Job Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                    {job.company}
                  </h3>
                  <span className="text-xs text-gray-400 font-mono shrink-0">
                    {job.date}
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-medium mt-0.5">
                  {job.role}
                </p>

                {/* Bullets */}
                <ul className="mt-2.5 space-y-1.5 text-xs text-gray-600 leading-relaxed list-disc list-outside ml-3.5">
                  {job.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Regulatory Preparation Callout */}
      <div className="rounded-xl p-4 sm:p-5 bg-white/80 backdrop-blur-sm border border-pink-200/80 shadow-xs space-y-2">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-base">🏛️</span>
            <h3 className="text-sm font-semibold text-gray-900">
              Indian Regulatory Bodies Pivot
            </h3>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            {['RBI Grade B', 'SEBI', 'IRDAI', 'NABARD'].map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] font-medium bg-pink-50 text-pink-700 rounded-md border border-pink-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">
          Currently dedicating focused preparation to central banking, monetary economics, financial stability frameworks, and capital market supervision. 
          Looking to bring an analytical, engineering-first perspective to economic governance and regulatory research.
        </p>
      </div>

      {/* Education */}
      <div className="space-y-4 pt-2">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            Education
          </h2>
        </div>

        <div className="space-y-4">
          {education.map((edu, idx) => (
            <div key={idx} className="flex items-start gap-3.5">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border shrink-0 mt-0.5 ${edu.avatarBg}`}>
                {edu.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {edu.school}
                  </h3>
                  <span className="text-xs text-gray-400 font-mono shrink-0">
                    {edu.date}
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-medium mt-0.5">
                  {edu.degree}
                </p>
                {edu.note && (
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    {edu.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-3 pt-2">
        <h2 className="text-xl font-bold tracking-tight text-gray-900">
          Skills & Toolkit
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-xs rounded-md bg-white/80 text-gray-700 border border-gray-200 hover:border-pink-300 hover:text-pink-700 transition-colors font-medium cursor-default shadow-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
