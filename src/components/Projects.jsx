import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: "Acquir Managed Offices",
      year: "2025 – 2026",
      description: "Official web platform for Acquir Managed Offices, owned by an NSE-listed firm entity. Built with React and Vite for fast load speeds, integrated with Sanity CMS for editorial content, and optimized for SEO.",
      technologies: ["React", "Vite", "Sanity CMS", "Tailwind CSS", "SEO"],
      category: "web",
      link: "https://acquir.in/",
      isLive: true,
      linkType: "Website"
    },
    {
      title: "Emcee Manoj — Portfolio",
      year: "2025",
      description: "Portfolio website built for Emcee Manoj, one of India's premier corporate and event anchors (1,000+ shows). Designed with interactive video showcases, client testimonials, and a seamless booking inquiry flow.",
      technologies: ["React", "Tailwind CSS", "Vite", "UI/UX"],
      category: "web",
      link: "https://www.emceemanoj.in/",
      isLive: true,
      linkType: "Website"
    },
    {
      title: "BooksThatFeelLikeThis (BookMatch.AI)",
      year: "2024",
      description: "Multimodal book discovery engine where readers describe what kind of book they feel like reading. Combines CLIP and MiniLM embeddings across 20,000+ books with FAISS vector search.",
      technologies: ["Python", "PyTorch", "Hugging Face", "CLIP", "FAISS"],
      category: "ml",
      link: "https://huggingface.co/spaces/Shrutikp70/BookMatch.AI",
      isLive: true,
      linkType: "Hugging Face"
    },
    {
      title: "Client Web Tools & Portals",
      year: "2026",
      description: "Currently building custom lightweight web applications and client management dashboards for independent businesses and creators.",
      technologies: ["React", "Vite", "Tailwind CSS", "REST APIs"],
      category: "web",
      link: "#",
      isLive: false
    },
    {
      title: "Hand Glove Safety Detection",
      year: "2025",
      description: "Industrial safety compliance system using YOLOv8 to verify personal protective equipment in real-time at 15 FPS, logging incidents with 88% precision.",
      technologies: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
      category: "cv",
      link: "#",
      isLive: false
    },
    {
      title: "BERT Sentiment Classifier",
      year: "2025",
      description: "Fine-tuned BERT transformer on conversational text achieving 90.08% F1 score, wrapped with an interactive Gradio interface for live inference testing.",
      technologies: ["BERT", "Transformers", "Hugging Face", "Gradio"],
      category: "nlp",
      link: "#",
      isLive: false
    },
    {
      title: "Warehouse Inventory Forecasting",
      year: "2022",
      description: "Won 1st place in the IIT Kharagpur Inter-Hall Data Analytics competition. Built an LSTM neural network forecasting warehouse SKU demand down to 1.31% MAPE.",
      technologies: ["Python", "LSTM", "Time-Series", "Pandas"],
      category: "ml",
      link: "#",
      isLive: false
    },
    {
      title: "Pressure Modeling in T20 Cricket",
      year: "2024",
      description: "Bayesian inference model trained on 1M+ ball-by-ball deliveries to quantify player composure and performance in high-pressure match situations.",
      technologies: ["Python", "Bayesian Stats", "Streamlit", "Pandas"],
      category: "ml",
      link: "#",
      isLive: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web / Freelance' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'nlp', label: 'NLP' },
    { id: 'cv', label: 'Vision' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory || (selectedCategory === 'ml' && (p.category === 'nlp' || p.category === 'cv')));

  return (
    <section id="projects" className="space-y-6">
      {/* Header with pill badge */}
      <div className="space-y-2">
        <div className="inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold bg-pink-100/70 text-pink-700 border border-pink-200/50">
          My Projects
        </div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
          Check out my latest work
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 max-w-xl">
          A blend of live client websites, machine learning applications, and full-stack tools I've built.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-gray-900 text-white shadow-2xs'
                : 'bg-white/80 text-gray-600 hover:bg-white border border-gray-200/80 hover:text-gray-900'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            year={project.year}
            description={project.description}
            tags={project.technologies}
            link={project.link}
            isLive={project.isLive}
            linkType={project.linkType}
          />
        ))}
      </div>
    </section>
  );
}