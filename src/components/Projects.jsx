import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

// Main Projects Component
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const projects = [
    {
      title: "Acquir Managed Offices",
      year: "2025 - 2026",
      description: "Designed and engineered the production web platform for Acquir Managed Offices, owned by an NSE-listed firm entity. Built with React and Vite for fast performance, integrated headless Sanity CMS for seamless publishing of editorial blogs, and implemented structured SEO/meta tags for search visibility.",
      technologies: ["React", "Vite", "Sanity CMS", "Tailwind CSS", "SEO & Meta", "Responsive UI"],
      category: "web",
      link: "https://acquir.in/",
      isLive: true
    },
    {
      title: "Emcee Manoj Official Portfolio",
      year: "2025",
      description: "Built the official brand and portfolio platform for Emcee Manoj, one of India's top corporate and wedding anchors (8+ years, 1000+ shows). Features high-energy multimedia showcases, dynamic event gallery, interactive client testimonials, and a direct inquiry booking pipeline.",
      technologies: ["React", "Tailwind CSS", "Vite", "Responsive UI", "Multimedia Showcase"],
      category: "web",
      link: "https://www.emceemanoj.in/",
      isLive: true
    },
    {
      title: "Client Platforms & Web Portals",
      year: "2026",
      description: "Currently developing 2-3 custom web applications and bespoke client management tools for emerging businesses, implementing scalable React architectures, API integrations, and intuitive user workflows.",
      technologies: ["React", "Vite", "Tailwind CSS", "REST APIs", "Modern Web Architecture"],
      category: "web",
      link: "#",
      isLive: false
    },
    {
      title: "Hand Glove Detection System",
      year: "2025",
      description: "Built a real-time glove detection & classification system using YOLOv8, achieving 88% precision, 85% recall, and 82% mAP@0.5. Developed an industrial safety compliance pipeline with 91% classification accuracy and critical miss rate under 3%; optimized to 15 FPS inference.",
      technologies: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Safety Compliance"],
      category: "cv",
      link: "#",
      isLive: false
    },
    {
      title: "Sentiment Analysis with BERT",
      year: "2025",
      description: "Fine-tuned a BERT transformer on the Twitter dataset using the AdamW optimizer, achieving a 90.08% F1 score across three validation splits. Built a real-time Gradio sentiment prediction demo integrating the fine-tuned model for interactive user inference.",
      technologies: ["NLP", "Transformers", "BERT", "Hugging Face", "Gradio", "PyTorch"],
      category: "nlp",
      link: "#",
      isLive: false
    },
    {
      title: "AI Agent for Trend Analysis",
      year: "2025",
      description: "Built a multi-agent NLP pipeline classifying 50K+ app reviews with 85% deduplication accuracy via SentenceTransformer embeddings + FAISS clustering. Enabled automated topic-evolution tracking, prevented 89+ duplicate topics, and generated trend matrices for product insights.",
      technologies: ["Python", "SentenceTransformers", "FAISS", "scikit-learn", "Multi-Agent NLP"],
      category: "nlp",
      link: "#",
      isLive: false
    },
    {
      title: "BooksThatFeelLikeThis",
      year: "2024",
      description: "Built a multimodal book recommendation engine combining MiniLM text and CLIP image embeddings across a 20K+ book corpus. Achieved 82% Precision@5, improving accuracy by 12% over the baseline MiniLM-only model with an adjustable weighting interface.",
      technologies: ["Python", "PyTorch", "MiniLM-L6-v2", "CLIP", "FAISS Vector Search"],
      category: "ml",
      link: "#",
      isLive: false
    },
    {
      title: "Warehouse Inventory Forecasting",
      year: "2022",
      description: "Predicted monthly warehouse inventory using ML and time-series models on 2+ years of historical SKU data in the IIT Kharagpur Inter-Hall Data Analytics competition. Improved forecast accuracy from 48.63% MAPE (ARIMA baseline) to 1.31% MAPE using an LSTM neural network.",
      technologies: ["Python", "LSTM", "Time Series", "ARIMA Baseline", "Pandas", "NumPy"],
      category: "ml",
      link: "#",
      isLive: false
    },
    {
      title: "Clutch Performance Detection in T20 Cricket",
      year: "2024",
      description: "Engineered a win probability model using logistic regression on over 15K deliveries to quantify clutch performance. Improved player ranking accuracy by 37% through Bayesian inference and data processing of over 1M deliveries.",
      technologies: ["Python", "Streamlit", "Logistic Regression", "Bayesian Inference", "Pandas"],
      category: "ml",
      link: "#",
      isLive: false
    },
    {
      title: "Zero-Shot CLIP-Based Defect Classification",
      year: "2023",
      description: "Developed a zero-shot defect classification pipeline for industrial quality inspection using CLIP and Vision Transformer (ViT) architectures. Achieved 72% accuracy on the MVTec-AD benchmark dataset.",
      technologies: ["Python", "PyTorch", "CLIP", "Vision Transformer", "Computer Vision"],
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
    <section id="projects" className="py-16 px-4">
      {/* Enhanced header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 text-pink-700 text-xs font-semibold rounded-full uppercase tracking-wider mb-2 border border-pink-200">
          Portfolio & Engineering
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
          Featured Projects & Client Work
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          A showcase of live freelance web applications, enterprise platforms, and machine learning research projects.
        </p>
      </div>

      {/* Category filter tabs */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-10 max-w-3xl mx-auto">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 cursor-pointer ${
              selectedCategory === category.id
                ? 'bg-pink-600 text-white shadow-md shadow-pink-200'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
            }`}
          >
            {category.label}
            <span className={`ml-2 px-2 py-0.5 text-xs rounded-full font-semibold ${
              selectedCategory === category.id
                ? 'bg-white/20 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
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