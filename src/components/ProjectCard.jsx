import React from 'react';

export default function ProjectCard({ title, year, description, tags, link, isLive, linkType = "Website" }) {
  const hasLink = link && link !== '#';

  return (
    <div className="rounded-xl p-4 sm:p-5 bg-white/80 backdrop-blur-sm border border-gray-200/80 hover:border-pink-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Header: Title + Live status + Year */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-pink-600 transition-colors leading-snug">
            {title}
          </h3>
          <div className="flex items-center gap-1.5 shrink-0">
            {isLive && (
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600 bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Live
              </span>
            )}
            {year && (
              <span className="text-[11px] text-gray-400 font-mono">
                {year}
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-600 leading-relaxed mb-4">
          {description}
        </p>
      </div>

      {/* Footer: Tags and Action Link */}
      <div className="space-y-3 pt-2">
        <div className="flex flex-wrap gap-1">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-medium px-2 py-0.5 rounded bg-pink-50/70 text-pink-900/80 border border-pink-100/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {hasLink && (
          <div className="pt-2 border-t border-gray-100 flex justify-end">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-900 text-white hover:bg-pink-600 transition-colors shadow-2xs"
            >
              <span>{linkType}</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}