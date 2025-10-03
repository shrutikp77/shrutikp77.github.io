import React, { useState } from 'react';

// ProjectCard Component
function ProjectCard({ title, year, description, tags, link, isLive }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group cursor-pointer relative overflow-hidden">
     
      {/* Subtle gradient accent - pink themed */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
     
      {/* HEADER */}
      <div className="mb-3 flex justify-between items-start">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors leading-tight pr-2">
          {title}
        </h3>
        {year && (
          <span className="text-xs text-gray-400 font-medium whitespace-nowrap">
            {year}
          </span>
        )}
      </div>
     
      {/* DESCRIPTION with refined typography */}
      <p className="text-gray-600 text-[13px] leading-relaxed mb-5 flex-grow">
        {description}
      </p>
     
      {/* TAGS with improved styling */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag, idx) => (
            <span key={idx} className="px-3 py-1 text-[11px] bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-full border border-gray-200 font-medium">
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="px-3 py-1 text-[11px] bg-pink-50 text-pink-600 rounded-full border border-pink-200 font-medium">
              +{tags.length - 4} more
            </span>
          )}
        </div>
       
        {/* Action area */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2 text-[11px] text-gray-400">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-gray-300 rounded-full"></div>
              ))}
            </div>
            <span>{tags.length} technologies</span>
          </div>
         
          {link && link !== '#' && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] text-pink-600 hover:text-pink-700 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              View Project
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}