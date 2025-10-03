import React, { useState } from 'react';

// ProjectCard Component
function ProjectCard({ title, year, description, tags, link, isLive }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-300 hover:-translate-y-1">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-pink-600 leading-tight pr-2">
          {title}
        </h3>
        {year && (
          <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
            {year}
          </span>
        )}
      </div>
      
      <p className="text-gray-700 text-sm leading-relaxed mb-4">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.slice(0, 4).map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {tags.length > 4 && (
        <button className="text-xs text-pink-600 font-medium hover:text-pink-700 mb-2">
          +{tags.length - 4} more
        </button>
      )}
      
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
        <span className="text-xs text-gray-400">
          ••• {tags.length} technologies
        </span>
      </div>
    </div>
  );
}

// Main Projects Component
export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const projects = [
    {
      title: "Hand Glove Detection System",
      year: "2025",
      description: "Built real-time hand detection, glove classification system using YOLOv8 achieving 88% precision, 85% recall, 82% mAP@0.5. Developed safety compliance pipeline with 91% classification accuracy and critical miss rate reduced to under 3%. Optimized for production deployment with 15 FPS inference speed, data augmentation, and automated JSON logging system.",
      technologies: ["Python", "YOLOv8", "OpenCV", "PyTorch"],
      category: "cv",
      link: "#",
      isLive: false
    },
    {
      title: "Sentiment Analysis with BERT",
      year: "2025",
      description: "Trained a sentiment analysis model on the Twitter dataset with three validation splits, improving sentiment generalization. Fine-tuned a BERT-based transformer model using Hugging Face and AdamW optimizer, achieving a 90.08% F1 score. Designed a real-time sentiment prediction demo app with Gradio, integrating the pre-trained model for user interactions.",
      technologies: ["NLP", "LLMs", "BERT", "Hugging Face", "Gradio"],
      category: "nlp",
      link: "#",
      isLive: false
    },
    {
      title: "AI Agent for Trend Analysis",
      year: "2025",
      description: "Built multi-agent NLP pipeline to classify and analyze 50K+ app reviews with 85% deduplication accuracy. Applied SentenceTransformer embeddings + FAISS clustering preventing 89+ duplicate topics improving trend detection. Enabled automated topic evolution tracking, discovering new issue categories and generating trend matrices.",
      technologies: ["Python", "SentenceTransformers", "scikit-learn", "FAISS"],
      category: "nlp",
      link: "#",
      isLive: false
    },
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
    <section id="projects" className="py-12 px-4">
      {/* Enhanced header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-3" style={{ 
          background: 'linear-gradient(135deg, #db2777, #be185d)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Featured Projects
        </h2>
        <p className="text-gray-600 text-base max-w-2xl mx-auto">
          A collection of projects showcasing expertise in machine learning, NLP, and computer vision
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-blue-50 text-blue-700 border-2 border-blue-300 shadow-sm'
                : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300'
            }`}
          >
            {category.label}
            <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
              selectedCategory === category.id
                ? 'bg-white text-blue-700'
                : 'bg-gray-100 text-gray-600'
            }`}>
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
              year={project.year}
              description={project.description}
              tags={project.technologies}
              link={project.link}
              isLive={project.isLive}
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