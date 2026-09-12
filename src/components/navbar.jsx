export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-pink-50/85 border-b border-pink-100/70 transition-colors">
      <div className="max-w-2xl mx-auto px-5 sm:px-6 py-3 flex items-center justify-between">
        <a href="#about" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white font-bold text-xs shadow-xs group-hover:scale-105 transition-transform">
            SP
          </div>
          <span className="font-semibold text-gray-900 text-sm tracking-tight group-hover:text-pink-600 transition-colors">
            Shrutik Patil
          </span>
        </a>
        <nav className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-gray-600">
          <a href="#about" className="px-2 py-1 rounded-md hover:text-pink-600 hover:bg-white/70 transition-colors">About</a>
          <a href="#projects" className="px-2 py-1 rounded-md hover:text-pink-600 hover:bg-white/70 transition-colors">Projects</a>
          <a href="#resume" className="px-2 py-1 rounded-md hover:text-pink-600 hover:bg-white/70 transition-colors">Work</a>
          <a
            href="https://drive.google.com/file/d/1906Q53lxbXc51HCpCc0SlB9swB_txyak/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-md text-pink-700 bg-pink-100/70 hover:bg-pink-100 font-medium transition-colors"
          >
            Resume ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
