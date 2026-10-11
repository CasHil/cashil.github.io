import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import IntroLinks from "./components/Intro/IntroLinks/IntroLinks";
import { useEffect, useState } from "react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <BrowserRouter>
      {/* Skip link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-amber-500 focus:text-stone-950 focus:font-mono focus:font-bold focus:text-xs focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-[#0c0b0a]"
      >
        Skip to main content
      </a>

      <div className="relative min-h-screen bg-[#0c0b0a] text-[#e6e2d8] overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-200">
        {/* Ambient warm analog glows */}
        <div className="ambient-studio-glow-1" aria-hidden="true" />
        <div className="ambient-studio-glow-2" aria-hidden="true" />

        {/* Mobile Navigation Header */}
        <header className="sticky top-0 z-40 lg:hidden bg-[#141210]/95 backdrop-blur-xl border-b border-[#2b2722]">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-2.5 group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141210]"
            >
              <img
                src="/images/profile.jpg"
                alt=""
                aria-hidden="true"
                width="32"
                height="32"
                className="w-8 h-8 rounded-lg object-cover border border-[#38342e]"
              />
              <span className="font-mono font-bold text-xs tracking-wider text-[#f4f1ea] group-hover:text-amber-400 transition-colors uppercase">
                CASPER // STUDIO
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#a1998b] hover:text-[#f4f1ea] hover:bg-[#1c1916] border border-[#2b2722] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141210]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile dropdown drawer */}
          {mobileMenuOpen && (
            <div
              id="mobile-navigation-menu"
              className="px-4 pb-4 pt-2 border-t border-[#2b2722] bg-[#141210] animate-in fade-in slide-in-from-top-2 duration-200 motion-reduce:animate-none"
            >
              <Header handleClick={closeMobileMenu} orientation="vertical" />
            </div>
          )}
        </header>

        {/* Main Page Layout */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Sidebar with Profile & Navigation */}
            <aside className="lg:col-span-4" aria-label="Profile and sidebar navigation">
              <div className="lg:sticky lg:top-8 p-6 sm:p-7 rounded-2xl bg-[#141210]/90 border border-[#2b2722] backdrop-blur-xl shadow-2xl">
                <IntroLinks />
                <div className="hidden lg:block mt-6 pt-6 border-t border-[#2b2722]">
                  <Header orientation="vertical" />
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="lg:col-span-8 p-6 sm:p-8 md:p-10 rounded-2xl bg-[#141210]/75 border border-[#2b2722] backdrop-blur-xl shadow-2xl">
              <Body />
            </div>
          </div>

          {/* Studio Console Footer */}
          <footer className="mt-12 pt-6 border-t border-[#24211d] text-center text-xs font-mono text-stone-500">
            <p>
              CASPER HILDEBRAND • SOFTWARE &amp; SOUND • 44.1 kHz • BUILT WITH REACT, TYPESCRIPT &amp; WEB AUDIO API
            </p>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}
