// src/pages/Resume.jsx

export default function Resume() {
  const workExperience = [
    { 
      company: "ConsultBae", 
      role: "Project Coordinator – AI Data Services", 
      date: "Jan 2026 – Mar 2026", 
      icon: "C",
      badge: "Recent",
      details: [
        "Owned end-to-end delivery of 3 high-complexity annotation programs: Seamless 27, Seamless 29, and Hayee Workflow (750 audios total) on Appen/MatrixGo.",
        "Designed operating model for 150+ freelancers across execution and QC sub-teams; managed vendor strategy and outsourcing.",
        "Built quality framework achieving 98% accuracy across all batches; introduced specialist QC layer eliminating rework cycles.",
        "Delivered German audio transcription POC (call-centre & meeting data) with full program management and quality validation."
      ]
    },
    { 
      company: "Freelance Client Work", 
      role: "Full-Stack Web Developer", 
      date: "2024 – Present", 
      icon: "W",
      badge: "Live Projects",
      details: [
        "Engineered and launched production web platforms for corporate and individual clients, including acquir.in (owned by an NSE-listed firm entity) and emceemanoj.in (official portfolio of a leading corporate emcee).",
        "Built responsive frontends with React, Vite, and Tailwind CSS, integrating Sanity CMS for headless publishing and structured SEO.",
        "Actively developing 2-3 additional custom client web platforms and management portals."
      ]
    },
    { 
      company: "Darzee", 
      role: "Software Engineer Intern", 
      date: "May 2024 – Aug 2024", 
      icon: "D",
      details: [
        "Built a responsive React.js website with 20+ reusable components, reducing development time by 25%.",
        "Optimised Flutter mobile app with data-driven UI enhancements that measurably increased user session duration."
      ]
    },
    { 
      company: "Outlier AI", 
      role: "AI Engineer", 
      date: "2025", 
      icon: "O",
      details: [
        "Evaluated and benchmarked instruction-following fidelity, mathematical reasoning, and complex code generation for frontier LLMs."
      ]
    }
  ];

  const education = [
    { 
      school: "Indian Institute of Technology (IIT), Kharagpur", 
      degree: "B.Tech + M.Tech (Dual Degree) in Chemical Engineering", 
      date: "Nov 2020 – Jul 2025",
      icon: "IIT",
      details: [
        "Data Analytics Competition – Inter Hall Winner: Predicted warehouse inventory using ML and time-series models on 2+ years of historical SKU data, improving forecast accuracy from 48.63% MAPE to 1.31% MAPE via an LSTM neural network."
      ]
    }
  ];

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "C++", "JavaScript", "HTML5/CSS3", "SQL"]
    },
    {
      category: "Machine Learning & NLP",
      skills: ["scikit-learn", "PyTorch", "TensorFlow", "Transformers (Hugging Face)", "LangChain", "SentenceTransformers", "spaCy", "NLTK", "FAISS", "YOLOv8"]
    },
    {
      category: "Web & Frameworks",
      skills: ["React", "Vite", "Tailwind CSS", "Sanity CMS", "Streamlit", "Gradio", "Flask", "REST APIs"]
    },
    {
      category: "Data Analysis & Visualization",
      skills: ["NumPy", "Pandas", "SciPy", "Matplotlib", "Seaborn", "Plotly", "Tableau", "Power BI", "MS Excel"]
    },
    {
      category: "Regulatory & Financial Economics",
      skills: ["Macroeconomics", "Monetary Policy", "Indian Financial System", "Securities & Capital Markets", "RBI / SEBI / IRDAI / NABARD Frameworks"]
    }
  ];

  return (
    <div id="resume" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 text-pink-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-2 border border-pink-200">
            Trajectory & Credentials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Experience & Education
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            My professional journey across AI data systems, web development, engineering, and regulatory economic preparation.
          </p>
        </div>

        {/* Regulatory Bodies Callout Banner */}
        <div className="mb-14 bg-gradient-to-r from-purple-50 via-pink-50 to-amber-50 rounded-2xl p-6 border border-pink-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🏛️</span>
              <h3 className="text-lg font-bold text-gray-900">
                Current Preparation: Indian Regulatory Bodies
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['RBI Grade B', 'SEBI', 'IRDAI', 'NABARD'].map((tag) => (
                <span key={tag} className="px-2.5 py-0.5 bg-white text-gray-800 text-xs font-semibold rounded-md border border-gray-200 shadow-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Actively pivoting toward policy, central banking, and regulatory governance. Focusing on Indian macroeconomics, monetary transmission mechanisms, capital market stability, insurance supervision, and agricultural credit infrastructure.
          </p>
        </div>

        {/* Work Experience */}
        <section className="mb-14">
          <h3 className="text-xl font-bold mb-8 text-gray-900 flex items-center gap-2 pb-3 border-b border-gray-100">
            <span className="w-2 h-6 bg-pink-500 rounded"></span>
            Work Experience
          </h3>
          <div className="space-y-8">
            {workExperience.map((job, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-pink-50 border border-pink-200 text-lg font-bold text-pink-600 flex-shrink-0">
                      {job.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-base md:text-lg font-bold text-gray-900">{job.company}</h4>
                        {job.badge && (
                          <span className="px-2 py-0.5 text-[11px] font-semibold bg-pink-100 text-pink-700 rounded-full">
                            {job.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-medium text-gray-600">{job.role}</div>
                    </div>
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-gray-500 bg-gray-50 px-3 py-1 rounded-lg border border-gray-100">
                    {job.date}
                  </div>
                </div>

                {/* Job details bullet points */}
                {job.details && job.details.length > 0 && (
                  <ul className="list-disc list-outside ml-6 mt-4 text-sm text-gray-600 space-y-2 leading-relaxed">
                    {job.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-14">
          <h3 className="text-xl font-bold mb-8 text-gray-900 flex items-center gap-2 pb-3 border-b border-gray-100">
            <span className="w-2 h-6 bg-blue-500 rounded"></span>
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 flex-shrink-0">
                      {edu.icon}
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-gray-900">{edu.school}</h4>
                      <div className="text-sm font-medium text-gray-600">{edu.degree}</div>
                    </div>
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-gray-500 bg-gray-50 px-3 py-1 rounded-lg border border-gray-100">
                    {edu.date}
                  </div>
                </div>

                {edu.details && (
                  <ul className="list-disc list-outside ml-6 mt-4 text-sm text-gray-600 space-y-1 leading-relaxed">
                    {edu.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Categorized */}
        <section>
          <h3 className="text-xl font-bold mb-8 text-gray-900 flex items-center gap-2 pb-3 border-b border-gray-100">
            <span className="w-2 h-6 bg-purple-500 rounded"></span>
            Technical & Analytical Skills
          </h3>
          <div className="space-y-4">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 border border-gray-100 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="bg-gray-50 hover:bg-pink-50 hover:text-pink-700 hover:border-pink-200 text-gray-700 px-3 py-1 rounded-lg text-xs font-medium border border-gray-200 transition-colors duration-150"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
