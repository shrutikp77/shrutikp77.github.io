import React, { useState } from 'react';

// --- Data (defined once at the top level) ---
const youtubeChannels = [
    { name: "Cricket by JB", url: "https://youtube.com/@cricketbyjb" },
    { name: "StatQuest with Josh Starmer", url: "https://youtube.com/@statquest" },
    { name: "Visually Explained", url: "https://youtube.com/@VisuallyExplained" },
    { name: "3Blue1Brown", url: "https://youtube.com/@3blue1brown" },
    { name: "DataMListic", url: "https://youtube.com/@datamlistic" }
];

const miscItems = [
    { title: "Letterboxd", description: "Movie reviews & watchlist", link: "https://letterboxd.com/shru_007/", icon: "🎬" },
    { title: "Reading List", description: "Papers on ML & optimization", link: "#", icon: "📚" },
    { title: "Tech Blog", description: "AI, ML & dev thoughts", link: "#", icon: "✍️", isComingSoon: true }
];

// --- Icon Components ---
const YouTubeIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
);

const ExternalLinkIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-gray-600 transition-colors">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
    </svg>
);

const ChevronDownIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform">
      <polyline points="6,9 12,15 18,9"></polyline>
    </svg>
);

// --- Compact UI Components ---
function CompactMiscCard({ item }) {
    return (
        <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 group relative">
            {item.isComingSoon && (
                <div className="absolute top-2 right-2">
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Soon</span>
                </div>
            )}
            <div className="flex items-start gap-3">
                <div className="text-xl">{item.icon}</div>
                <div className="flex-grow min-w-0">
                    <h4 className="text-base font-semibold text-gray-900 flex items-center gap-2">
                        {item.title}
                        {!item.isComingSoon && <ExternalLinkIcon />}
                    </h4>
                    <p className="text-gray-600 text-xs mt-1">{item.description}</p>
                    {!item.isComingSoon && (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-blue-600 hover:text-blue-800 text-xs font-medium">
                            Visit →
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

function CompactChannelLink({ channel }) {
    return (
        <a href={channel.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100 hover:shadow-md hover:border-red-200 transition-all duration-200 group text-sm">
            <YouTubeIcon />
            <span className="font-medium text-gray-700 group-hover:text-gray-900">{channel.name}</span>
        </a>
    );
}

// --- Main Component with Collapsible Option ---
export default function CompactMiscellaneous() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="miscellaneous" className="space-y-6">
            {/* Header with toggle */}
            <div className="text-center">
                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center justify-center gap-2 mx-auto group hover:bg-gray-50 rounded-lg px-4 py-2 transition-colors"
                >
                    <h2 className="text-2xl font-bold text-gray-800">Beyond Code</h2>
                    <div className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                        <ChevronDownIcon />
                    </div>
                </button>
                {!isExpanded && (
                    <p className="text-gray-600 text-sm mt-1">Some things I enjoy apart from programming</p>
                )}
            </div>

            {/* Collapsible content */}
            <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-6">
                    {/* YouTube channels in a more compact layout */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-800 text-center">Favorite YouTube Channels</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
                            {youtubeChannels.map((channel) => (
                                <CompactChannelLink key={channel.name} channel={channel} />
                            ))}
                        </div>
                    </div>
                    
                    {/* Misc items in a more compact grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
                        {miscItems.map((item) => (
                            <CompactMiscCard key={item.title} item={item} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Always visible preview when collapsed */}
            {!isExpanded && (
                <div className="flex justify-center gap-4 flex-wrap max-w-2xl mx-auto">
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-600">
                        <span>🎬</span> Movies
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-600">
                        <YouTubeIcon />
                        <span>YouTube Videos</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-600">
                        <span>📚</span> Research Papers
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-600">
                        <span>🏏</span> Cricket
                    </div>
                </div>
            )}
        </section>
    );
}