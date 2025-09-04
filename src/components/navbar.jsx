export default function Navbar() {
  return (
    <nav className="flex justify-center py-4 text-lg font-semibold">
      <a href="#about" className="mx-4 hover:underline">About</a>
      <a href="#projects" className="mx-4 hover:underline">Projects</a>
      <a href="#contact" className="mx-4 hover:underline">Contact</a>
    </nav>
  );
}
