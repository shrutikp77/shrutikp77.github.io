import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

// Main Projects Component
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const projects = [
    {
      title: "Acquir Managed Offices",
      year: "2025 - 2026",
      description: "Official web platform for Acquir Managed Offices, a flexible workspace brand owned by an NSE-listed firm entity. Built with React and Vite for sub-second page loads, integrated with Sanity CMS for marketing blogs, and optimized for search crawler indexing.",
      technologies: ["React", "Vite", "Sanity CMS", "Tailwind CSS", "SEO"],
      category: "web",
      link: "https://acquir.in/",
      isLive: true
    },
    {
      title: "Emcee Manoj — Portfolio",
      year: "2025",
      description: "Portfolio website built for Emcee Manoj, a leading corporate and wedding anchor with 1,000+ shows across India. Built with interactive multimedia galleries, video showcases, and a streamlined event inquiry system.",
      technologies: ["React", "Tailwind CSS", "Vite", "UI/UX Design"],
      category: "web",
      link: "https://www.emceemanoj.in/",
      isLive: true
    },
    {
      title: "BooksThatFeelLikeThis (BookMatch.AI)",
      year: "2024",
      description: "A multimodal book recommendation engine where you describe what kind of book you feel like reading. Combines text embeddings (MiniLM) and image aesthetics (CLIP) across 20,000+ books with FAISS vector search. Deployed live on Hugging Face Spaces.",
      technologies: ["Python", "PyTorch", "Hugging Face Spaces", "CLIP", "MiniLM", "FAISS"],
      category: "ml",
      link: "https://huggingface.co/spaces/Shrutikp70/BookMatch.AI",
      isLive: true
    },
    {
      title: "Client Web Tools & Portals",
      year: "2026",
      description: "Currently developing 2-3 custom full-stack web applications for independent businesses and creators, focusing on lightweight dashboards and clean user workflows.",
      technologies: ["React", "Vite", "Tailwind CSS", "REST APIs"],
      category: "web",
      link: "#",
      isLive: false
    },
    {
      title: "Hand Glove Detection System",
      year: "2025",
      description: "Real-time safety compliance tool built with YOLOv8 to verify whether industrial workers are wearing protective gear. Achieved 88% precision and 85% recall, optimized to run at 15 FPS with automatic compliance logging.",
      technologies: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
      category: "cv",
      link: "#",
      isLive: false
    },
    {
      title: "BERT Sentiment Analysis",
      year: "2025",
      description: "Fine-tuned a BERT transformer on Twitter data to classify sentiments across three validation splits, reaching a 90.08% F1 score. Wrapped with an interactive Gradio interface for live inference testing.",
      technologies: ["NLP", "Transformers", "BERT", "Hugging Face", "Gradio"],
      category: "nlp",
      link: "#",
      isLive: false
    },
    {
      title: "Review Trend Analysis Pipeline",
      year: "2025",
      description: "Processed 50K+ customer app reviews using SentenceTransformers and FAISS clustering to group user feedback, identify emerging feature requests, and eliminate duplicate topics with 85% deduplication accuracy.",
      technologies: ["Python", "SentenceTransformers", "FAISS", "scikit-learn"],
      category: "nlp",
      link: "#",
      isLive: false
    },
    {
      title: "Warehouse Inventory Forecasting",
      year: "2022",
      description: "Won 1st place in the IIT Kharagpur Inter-Hall Data Analytics competition by forecasting warehouse SKU demand. Built an LSTM neural network on 2+ years of SKU history, improving accuracy from 48.6% to 1.31% MAPE.",
      technologies: ["Python", "LSTM", "Time-Series", "Pandas", "NumPy"],
      category: "ml",
      link: "#",
      isLive: false
    },
    {
      title: "Clutch Performance in T20 Cricket",
      year: "2024",
      description: "Developed a win probability model using logistic regression and Bayesian inference on 1M+ ball-by-ball deliveries to measure how cricketers perform under extreme match pressure.",
      technologies: ["Python", "Streamlit", "Bayesian Inference", "Pandas"],
      category: "ml",
      link: "#",
      isLive: false
    },
    {
      title: "Zero-Shot Defect Classification",
      year: "2023",
      description: "Built a zero-shot defect classification model for manufacturing lines using CLIP and Vision Transformers (ViT), achieving 72% accuracy on the MVTec-AD benchmark without task-specific training data.",
      technologies: ["Python", "PyTorch", "CLIP", "Vision Transformers"],
      category: "cv",
      link: "#",
      isLive: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web & Client Work', count: projects.filter(p => p.category === 'web').length },
    { id: 'ml', label: 'Machine Learning', count: projects.filter(p => p.category === 'ml').length },
    { id: 'nlp', label: 'NLP & LLMs', count: projects.filter(p => p.category === 'nlp').length },
    { id: 'cv', label: 'Computer Vision', count: projects.filter(p => p.category === 'cv').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-12 md:py-16">
      {/* Header */}
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-pink-600">
          Portfolio
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1 mb-2">
          Projects & Client Work
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl">
          A selection of live client websites, machine learning models, and software tools I've built.
        </p>
      </div>

      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-150 cursor-pointer ${
              selectedCategory === category.id
                ? 'bg-pink-600 text-white shadow-xs'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {category.label}
            <span className={`ml-1.5 px-1.5 py-0.2 text-xs rounded font-semibold ${
              selectedCategory === category.id
                ? 'bg-white/20 text-white'
                : 'bg-gray-100 text-gray-500'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            year={project.year}
            description={project.description}
            tags={project.technologies}
            link={project.link}
            isLive={project.isLive}
          />
        ))}
      </div>
    </section>
  );
}