import React from "react";

// Minimal SVG Icons
const HomeIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);

const ProjectsIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="7" height="7" x="3" y="3" rx="1"/>
    <rect width="7" height="7" x="14" y="3" rx="1"/>
    <rect width="7" height="7" x="14" y="14" rx="1"/>
    <rect width="7" height="7" x="3" y="14" rx="1"/>
  </svg>
);

const ResumeIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733-16z"/>
    <path d="M4 20l6.768-6.768m2.464-2.464l6.768-6.768"/>
  </svg>
);

const MailIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

export default function FloatingToolbar() {
  const internalLinks = [
    { href: "#about", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: ProjectsIcon, label: "Projects" },
    { href: "#resume", icon: ResumeIcon, label: "Experience" }
  ];

  const externalLinks = [
    { href: "https://github.com/shrutikp77", icon: GithubIcon, label: "GitHub" },
    { href: "https://www.linkedin.com/in/shrutikpatil77", icon: LinkedinIcon, label: "LinkedIn" },
    { href: "https://x.com/shrutikpatil15", icon: TwitterIcon, label: "Twitter" },
    { href: "mailto:shrutikpatil.iitkgp25@gmail.com", icon: MailIcon, label: "Email" }
  ];

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/90 dark:border-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-black/40">
        {internalLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            className="p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-pink-100/60 transition-all hover:scale-110 active:scale-95"
            title={label}
            aria-label={label}
          >
            <Icon />
          </a>
        ))}

        <div className="w-px h-4 bg-gray-200 mx-1"></div>

        {externalLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-gray-600 hover:text-pink-600 hover:bg-pink-100/60 transition-all hover:scale-110 active:scale-95"
            title={label}
            aria-label={label}
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
}
