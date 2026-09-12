export default function Navbar() {
  return (
    <nav className="flex justify-center py-4 text-base md:text-lg font-semibold text-gray-700">
      <a href="#about" className="mx-3 md:mx-4 hover:text-pink-600 transition-colors">About</a>
      <a href="#projects" className="mx-3 md:mx-4 hover:text-pink-600 transition-colors">Projects</a>
      <a href="#resume" className="mx-3 md:mx-4 hover:text-pink-600 transition-colors">Experience</a>
      <a href="#contact" className="mx-3 md:mx-4 hover:text-pink-600 transition-colors">Contact</a>
    </nav>
  );
}
