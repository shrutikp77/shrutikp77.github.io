export default function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer relative overflow-hidden">
      
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      
      {/* HEADER */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
          {title}
        </h3>
      </div>
      
      {/* DESCRIPTION with better typography */}
      <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      
      {/* TAGS with improved styling */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag, idx) => (
            <span key={idx} className="px-3 py-1 text-xs bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-full border border-gray-200 font-medium">
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="px-3 py-1 text-xs bg-blue-50 text-blue-600 rounded-full border border-blue-200 font-medium">
              +{tags.length - 4} more
            </span>
          )}
        </div>
        
        {/* Action area */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
              ))}
            </div>
            <span>{tags.length} technologies</span>
          </div>
          
          {link && link !== '#' && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              View Project
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}