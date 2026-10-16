import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import IntroLinks from "./components/Intro/IntroLinks/IntroLinks";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import SoundToggle from "./components/Audio/SoundToggle";
import BackgroundSynth from "./components/Audio/BackgroundSynth";
import { ThemeProvider } from "./context/ThemeContext";
import { AudioProvider } from "./context/AudioContext";
import { useEffect, useState } from "react";

function AppContent() {
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
    <>
      {/* Skip link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#111111] focus:text-[#ffffff] dark:focus:bg-[#ffffff] dark:focus:text-[#111111] focus:font-mono focus:font-medium focus:text-xs focus:rounded focus:outline-none focus:ring-2 focus:ring-stone-400"
      >
        Skip to main content
      </a>

      <div className="relative min-h-screen bg-[#f7f6f3] dark:bg-[#0c0b0a] text-[#111111] dark:text-[#f4f1ea] overflow-x-hidden selection:bg-[#fbf3db] selection:text-[#956400] dark:selection:bg-amber-950/40 dark:selection:text-amber-200 transition-colors duration-200">
        {/* Ambient background synthesizer & oscilloscope */}
        <BackgroundSynth />
        <div className="ambient-studio-glow-1" aria-hidden="true" />
        <div className="ambient-studio-glow-2" aria-hidden="true" />

        {/* Mobile Navigation Header */}
        <header className="sticky top-0 z-40 lg:hidden bg-[#ffffff]/95 dark:bg-[#141210]/95 backdrop-blur-md border-b border-[#eaeaea] dark:border-[#24211d] transition-colors duration-200">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-2.5 group rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
            >
              <img
                src="/images/profile.jpg"
                alt=""
                aria-hidden="true"
                width="30"
                height="30"
                className="w-7 h-7 rounded object-cover border border-[#eaeaea] dark:border-[#2b2722]"
              />
              <span className="font-mono font-medium text-xs tracking-wider text-[#111111] dark:text-[#f4f1ea] uppercase">
                CASPER HILDEBRAND
              </span>
            </Link>

            <div className="flex items-center gap-2">
              <SoundToggle />
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded text-[#5a5a57] dark:text-[#8a8376] hover:text-[#111111] dark:hover:text-[#f4f1ea] hover:bg-[#eaeaea]/50 dark:hover:bg-[#1a1815] border border-[#eaeaea] dark:border-[#24211d] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-menu"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                  aria-hidden="true"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile dropdown drawer */}
          {mobileMenuOpen && (
            <div
              id="mobile-navigation-menu"
              className="px-4 pb-4 pt-2 border-t border-[#eaeaea] dark:border-[#24211d] bg-[#ffffff] dark:bg-[#141210] animate-in fade-in slide-in-from-top-2 duration-150"
            >
              <Header handleClick={closeMobileMenu} orientation="vertical" />
            </div>
          )}
        </header>

        {/* Main Editorial Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          {/* Top Bar for Desktop */}
          <div className="hidden lg:flex justify-end items-center gap-2 mb-6">
            <SoundToggle />
            <ThemeToggle />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Column */}
            <aside className="lg:col-span-4" aria-label="Author and navigation">
              <div className="lg:sticky lg:top-8 p-6 sm:p-7 rounded-xl bg-[#ffffff] dark:bg-[#141210] border border-[#eaeaea] dark:border-[#24211d] shadow-[0_2px_8px_rgba(0,0,0,0.02)] dark:shadow-none transition-colors duration-200">
                <IntroLinks />
                <div className="hidden lg:block mt-6 pt-6 border-t border-[#eaeaea] dark:border-[#24211d]">
                  <Header orientation="vertical" />
                </div>
              </div>
            </aside>

            {/* Main Content Column */}
            <div className="lg:col-span-8 p-6 sm:p-8 md:p-10 rounded-xl bg-[#ffffff] dark:bg-[#141210] border border-[#eaeaea] dark:border-[#24211d] shadow-[0_2px_8px_rgba(0,0,0,0.02)] dark:shadow-none transition-colors duration-200">
              <Body />
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-6 border-t border-[#eaeaea] dark:border-[#24211d] transition-colors duration-200">
          </footer>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AudioProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AudioProvider>
    </ThemeProvider>
  );
}
