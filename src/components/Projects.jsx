import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const projects = [
    {
      title: "Clutch Performance Detection in T20 Cricket",
      year: "2024",
      description: "Engineered a win probability model using logistic regression on over 15K deliveries to quantify clutch performance. Improved player ranking accuracy by 37% through Bayesian inference and data processing of over 1M deliveries.",
      technologies: ["Python", "Streamlit", "Pandas", "Seaborn", "Logistic Regression", "Bayesian Inference"],
      category: "ml",
      link: "#",
      isLive: false
    },
    {
      title: "Books That Feel Like This",
      year: "2024",
      description: "Built a multimodal book recommendation engine combining text (MiniLM) and image (CLIP) embeddings. Designed a scalable FAISS vector search pipeline for over 20,000 books, achieving 82% Precision@5 in recommendations.",
      technologies: ["Python", "PyTorch", "SentenceTransformers", "FAISS", "CLIP", "Reddit API", "spaCy"],
      category: "ml",
      link: "#",
      isLive: true
    },
    {
      title: "Zero-Shot CLIP-Based Defect Classification",
      year: "2023",
      description: "Developed a zero-shot defect classification pipeline for industrial quality inspection using CLIP and Vision Transformer (ViT) architectures. Achieved 72% accuracy on the MVTec-AD benchmark dataset.",
      technologies: ["Python", "PyTorch", "Computer Vision", "CLIP", "Vision Transformer"],
      category: "cv",
      link: "#",
      isLive: false
    },
    {
      title: "AI-Powered YouTube Video Summarization",
      year: "2023",
      description: "Developed an end-to-end NLP pipeline that automatically extracts transcripts from YouTube videos, restores punctuation, and leverages GPT-3.5 to generate concise and relevant summaries.",
      technologies: ["Python", "OpenAI GPT-3.5", "NLP", "API Integration", "YouTubeTranscriptAPI"],
      category: "nlp",
      link: "#",
      isLive: false
    },
    {
      title: "Modeling COVID-19 Transmission Dynamics",
      year: "2022",
      description: "Designed a forecasting pipeline using LSTM and SIR models to predict COVID-19 transmission, improving accuracy by 26% over baseline ARIMA models and achieving a Mean Absolute Error of 0.21 on forecasts.",
      technologies: ["Python", "LSTM", "SIR Models", "ARIMA", "Neural Networks", "Time Series"],
      category: "ml",
      link: "#",
      isLive: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ml', label: 'Machine Learning', count: projects.filter(p => p.category === 'ml').length },
    { id: 'nlp', label: 'NLP', count: projects.filter(p => p.category === 'nlp').length },
    { id: 'cv', label: 'Computer Vision', count: projects.filter(p => p.category === 'cv').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-8">
      {/* Enhanced header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A collection of projects showcasing expertise in machine learning, NLP, and computer vision
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-blue-100 text-blue-700 border-2 border-blue-200'
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border-2 border-transparent'
            }`}
          >
            {category.label}
            <span className="ml-2 px-2 py-0.5 text-xs bg-white rounded-full">
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Projects grid with stagger animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <div
            key={project.title}
            className="animate-fadeIn"
            style={{ 
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'both'
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.technologies}
              link={project.link}
            />
          </div>
        ))}
      </div>

      {/* Add CSS for fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}