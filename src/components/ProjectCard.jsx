import React from 'react';

// ProjectCard Component
export default function ProjectCard({ title, year, description, tags, link, isLive }) {
  const hasLink = link && link !== '#';

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-pink-200 hover:-translate-y-1 transition-all duration-300 flex flex-col group relative overflow-hidden h-full">
      
      {/* Gradient top accent on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

      {/* Header: Title, Live badge & Year */}
      <div className="mb-3 flex justify-between items-start gap-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors leading-snug">
              {title}
            </h3>
            {isLive && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Live
              </span>
            )}
          </div>
        </div>
        {year && (
          <span className="text-xs text-gray-400 font-medium whitespace-nowrap bg-gray-50 px-2 py-0.5 rounded-md">
            {year}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
        {description}
      </p>

      {/* Tags */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-xs bg-gray-50 text-gray-700 rounded-lg border border-gray-100 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action / Footer Area */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-400">
            {tags.length} technologies
          </span>

          {hasLink ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-pink-50 text-pink-700 hover:bg-pink-100 hover:text-pink-800 transition-colors shadow-xs"
              onClick={(e) => e.stopPropagation()}
            >
              <span>{isLive ? 'Visit Live Site' : 'View Project'}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          ) : (
            <span className="text-xs text-gray-400 italic">
              Production / Internal
            </span>
          )}
        </div>
      </div>
    </div>
  );
}