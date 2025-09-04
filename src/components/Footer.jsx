export default function Footer() {
  return (
    <footer id="contact" className="py-8 text-center text-gray-600">
      <p>© {new Date().getFullYear()} Shrutik Patil</p>
      <div className="flex justify-center mt-4 space-x-4">
        <a href="https://github.com/shrutikp77" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/shrutikpatil77/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:shrutikpatil.iitkgp25@gmail.com">Email</a>
      </div>
    </footer>
  );
}
