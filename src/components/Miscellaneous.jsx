import React from 'react';

export default function Miscellaneous() {
  const youtubeChannels = [
    { name: "Cricket by JB", url: "https://youtube.com/@cricketbyjb" },
    { name: "StatQuest with Josh Starmer", url: "https://youtube.com/@statquest" },
    { name: "Visually Explained", url: "https://youtube.com/@VisuallyExplained" },
    { name: "3Blue1Brown", url: "https://youtube.com/@3blue1brown" },
    { name: "DataMListic", url: "https://youtube.com/@datamlistic" }
  ];

  return (
    <section id="miscellaneous" className="space-y-4 pt-2">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-gray-900">
          Beyond Code
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          A few things I enjoy when stepping away from the editor and textbooks.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Letterboxd / Cinema */}
        <a
          href="https://letterboxd.com/shru_007/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl p-3.5 bg-white/80 backdrop-blur-sm border border-gray-200/80 hover:border-pink-300 hover:shadow-xs transition-all flex items-start justify-between group"
        >
          <div className="flex items-center gap-2.5">
            <span className="text-lg">🎬</span>
            <div>
              <h3 className="text-xs font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                Cinema & Letterboxd
              </h3>
              <p className="text-[11px] text-gray-500 mt-0.5">
                Films, logging, and reviews (@shru_007)
              </p>
            </div>
          </div>
          <span className="text-gray-400 group-hover:text-pink-600 transition-colors text-xs mt-0.5">
            ↗
          </span>
        </a>

        {/* Cricket Analytics */}
        <div className="rounded-xl p-3.5 bg-white/80 backdrop-blur-sm border border-gray-200/80 flex items-start gap-2.5">
          <span className="text-lg">🏏</span>
          <div>
            <h3 className="text-xs font-semibold text-gray-900">
              Cricket & Pressure Metrics
            </h3>
            <p className="text-[11px] text-gray-500 mt-0.5">
              Deep interest in T20 match situations, win forecasting & ball tracking.
            </p>
          </div>
        </div>
      </div>

      {/* YouTube learning channels */}
      <div className="rounded-xl p-4 bg-white/80 backdrop-blur-sm border border-gray-200/80 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-800">
            Favorite Channels & Thinkers
          </span>
          <span className="text-[10px] text-gray-400 font-mono">
            Math • Stats • Visuals
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {youtubeChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-pink-50/70 hover:bg-pink-100 text-pink-900/90 border border-pink-100 transition-colors"
            >
              <span>{channel.name}</span>
              <span className="text-pink-400 text-[9px]">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}