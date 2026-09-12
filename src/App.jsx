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
      <Navbar />
      {/* Main Content Container - Focused reading width inspired by minimal portfolios */}
      <main className="max-w-2xl mx-auto px-5 sm:px-6 py-8 sm:py-12">
        <div className="space-y-14 sm:space-y-16">
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