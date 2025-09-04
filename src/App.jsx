import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Miscellaneous from "./components/Miscellaneous";
import FloatingToolbar from "./components/FloatingToolbar";

export default function App() {
  return (
    <div className="min-h-screen bg-pink-50 dark:bg-gray-900">
      {/* Main Content Container - Centered with constrained width */}
      <main className="max-w-4xl mx-auto px-10 sm:px-10 lg:px-10 py-20">
        <div className="space-y-16">
          <Hero />
          <Projects />
          <Resume />
          <Miscellaneous />
        </div>
      </main>
     
      <Footer />
      <FloatingToolbar />
    </div>
  );
}