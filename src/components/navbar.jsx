export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-pink-50/80 border-b border-pink-100/60 transition-colors">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-3.5 flex items-center justify-between">
        <a href="#about" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center text-white font-bold text-xs shadow-sm shadow-pink-200 group-hover:scale-105 transition-transform">
            SP
          </div>
          <span className="font-bold text-gray-800 text-sm sm:text-base tracking-tight group-hover:text-pink-600 transition-colors">
            Shrutik Patil
          </span>
        </a>
        <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium text-gray-600">
          <a href="#about" className="px-2.5 py-1 rounded-lg hover:text-pink-600 hover:bg-white/80 transition-all">About</a>
          <a href="#projects" className="px-2.5 py-1 rounded-lg hover:text-pink-600 hover:bg-white/80 transition-all">Projects</a>
          <a href="#resume" className="px-2.5 py-1 rounded-lg hover:text-pink-600 hover:bg-white/80 transition-all">Experience</a>
          <a href="#miscellaneous" className="px-2.5 py-1 rounded-lg hover:text-pink-600 hover:bg-white/80 transition-all">Beyond Code</a>
        </nav>
      </div>
    </header>
  );
}
