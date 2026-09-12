// src/pages/Resume.jsx

export default function Resume() {
  const workExperience = [
    { 
      company: "ConsultBae", 
      role: "Project Coordinator – AI Data Services", 
      date: "Jan 2026 – Mar 2026", 
      badge: "Recent",
      details: [
        "Managed end-to-end delivery of three complex audio annotation workflows (Seamless 27, Seamless 29, and Hayee) totaling 750 audio files on Appen/MatrixGo.",
        "Structured daily operations for 150+ freelancers, coordinating execution and quality control sub-teams.",
        "Designed a multi-tier quality framework that reached 98% accuracy across batches and eliminated redundant rework cycles.",
        "Delivered a German audio transcription proof-of-concept (call center & meeting data) with full quality validation."
      ]
    },
    { 
      company: "Freelance Client Work", 
      role: "Full-Stack Web Developer", 
      date: "2024 – Present", 
      badge: "Live Projects",
      details: [
        "Built and shipped production client websites, including acquir.in (developed for an enterprise owned by an NSE-listed firm) using React, Vite, and Sanity CMS.",
        "Developed emceemanoj.in, a high-engagement portfolio for one of India's leading corporate event anchors.",
        "Currently building 2-3 additional custom web tools and client management portals."
      ]
    },
    { 
      company: "Darzee", 
      role: "Software Engineer Intern", 
      date: "May 2024 – Aug 2024", 
      details: [
        "Built a responsive web dashboard in React with 20+ reusable components, cutting down UI development time by 25%.",
        "Improved the Flutter mobile app UI based on user feedback, noticeably boosting daily session duration."
      ]
    },
    { 
      company: "Outlier AI", 
      role: "AI Engineer (Contract)", 
      date: "2025", 
      details: [
        "Evaluated and benchmarked instruction-following fidelity, mathematical reasoning, and Python code generation across frontier large language models."
      ]
    }
  ];

  const education = [
    { 
      school: "Indian Institute of Technology (IIT), Kharagpur", 
      degree: "B.Tech + M.Tech (Dual Degree) in Chemical Engineering", 
      date: "Nov 2020 – Jul 2025",
      details: [
        "Won 1st place in the Inter-Hall Data Analytics Competition by building an LSTM neural network that forecasted warehouse inventory on 2+ years of historical SKU data (slashed forecast error to 1.31% MAPE)."
      ]
    }
  ];

  const skillCategories = [
    {
      category: "Languages & Core",
      skills: ["Python", "C++", "JavaScript", "HTML5 / CSS3", "SQL"]
    },
    {
      category: "Machine Learning & NLP",
      skills: ["PyTorch", "scikit-learn", "Hugging Face Transformers", "FAISS", "SentenceTransformers", "YOLOv8", "spaCy", "LangChain"]
    },
    {
      category: "Web & Frontend",
      skills: ["React", "Vite", "Tailwind CSS", "Sanity CMS", "Streamlit", "Gradio", "REST APIs"]
    },
    {
      category: "Data Analysis & Tools",
      skills: ["NumPy", "Pandas", "Matplotlib & Seaborn", "Plotly", "Tableau", "Power BI", "Git / GitHub", "Linux"]
    },
    {
      category: "Regulatory & Financial Economics",
      skills: ["Macroeconomics", "Monetary Economics", "Indian Financial System", "Capital Markets Regulation", "RBI / SEBI / IRDAI / NABARD Frameworks"]
    }
  ];

  return (
    <section id="resume" className="py-12 md:py-16">
      {/* Section Header */}
      <div className="mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-pink-600">
          Career & Journey
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1 mb-2">
          Experience & Education
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl">
          A timeline of my work in AI data systems, software development, engineering education, and regulatory preparation.
        </p>
      </div>

      {/* Regulatory Bodies Narrative Banner */}
      <div className="mb-12 bg-white rounded-2xl p-6 md:p-7 border border-pink-100 shadow-sm relative overflow-hidden">
        <div className="flex items-start gap-3">
          <span className="text-2xl mt-0.5">🏛️</span>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <h3 className="text-lg font-bold text-gray-900">
                Pivoting to Indian Regulatory Bodies
              </h3>
              <div className="flex flex-wrap gap-1">
                {['RBI Grade B', 'SEBI', 'IRDAI', 'NABARD'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-[11px] font-semibold bg-pink-50 text-pink-700 rounded-md border border-pink-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              I am actively preparing for regulatory examinations, focusing on Indian macroeconomic trends, monetary policy formulation, capital market supervision, and credit architecture. 
              My aim is to apply quantitative problem-solving and systems thinking to public policy and financial governance.
            </p>
          </div>
        </div>
      </div>

      {/* Work Experience Timeline (inspired by itsshnik.github.io) */}
      <div className="mb-14">
        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span className="w-2 h-5 bg-pink-500 rounded"></span>
          Work Experience
        </h3>

        <div className="relative border-l-2 border-pink-200 ml-3 md:ml-4 pl-6 md:pl-8 space-y-10">
          {workExperience.map((job, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-3 border-pink-500 group-hover:scale-125 transition-transform"></div>

              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-xs hover:shadow-sm transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-base font-bold text-gray-900">{job.role}</h4>
                    <span className="text-gray-400 font-normal">at</span>
                    <span className="font-semibold text-pink-600">{job.company}</span>
                    {job.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-pink-100 text-pink-700 rounded-full">
                        {job.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-medium text-gray-500 whitespace-nowrap">
                    {job.date}
                  </span>
                </div>

                <ul className="list-disc list-outside ml-4 mt-3 space-y-1.5 text-xs md:text-sm text-gray-600 leading-relaxed">
                  {job.details.map((detail, dIdx) => (
                    <li key={dIdx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Timeline */}
      <div className="mb-14">
        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span className="w-2 h-5 bg-blue-500 rounded"></span>
          Education
        </h3>

        <div className="relative border-l-2 border-blue-200 ml-3 md:ml-4 pl-6 md:pl-8">
          {education.map((edu, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-3 border-blue-500 group-hover:scale-125 transition-transform"></div>

              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                  <div>
                    <h4 className="text-base font-bold text-gray-900">{edu.school}</h4>
                    <p className="text-xs md:text-sm text-gray-600 font-medium">{edu.degree}</p>
                  </div>
                  <span className="text-xs font-medium text-gray-500 whitespace-nowrap">
                    {edu.date}
                  </span>
                </div>

                {edu.details && (
                  <ul className="list-disc list-outside ml-4 mt-3 space-y-1.5 text-xs md:text-sm text-gray-600 leading-relaxed">
                    {edu.details.map((item, dIdx) => (
                      <li key={dIdx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Groups */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span className="w-2 h-5 bg-purple-500 rounded"></span>
          Skills & Toolkit
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 border border-gray-100 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5">
                {cat.category}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="bg-gray-50 hover:bg-pink-50 hover:text-pink-700 text-gray-700 px-2.5 py-1 rounded-md text-xs font-medium border border-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
