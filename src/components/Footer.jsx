import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="pt-10 pb-28 text-center text-xs text-gray-500">
      <div className="max-w-2xl mx-auto px-5 space-y-3">
        <p className="leading-relaxed">
          Crafted with care using React & Tailwind CSS. Hosted on GitHub Pages.
        </p>
        <p className="text-gray-400">
          © {new Date().getFullYear()} Shrutik Patil. Built to be minimal, humane & grounded.
        </p>
      </div>
    </footer>
  );
}
