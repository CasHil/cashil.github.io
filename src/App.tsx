import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import IntroLinks from "./components/Intro/IntroLinks/IntroLinks";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import LanguageToggle from "./components/LanguageToggle/LanguageToggle";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import "./App.css";

function AppContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-canvas text-zinc-900 dark:text-gray-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-800 dark:selection:text-emerald-300 transition-colors">
      {/* Ambient Lighting Gradient */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(16,185,129,0.06),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(16,185,129,0.09),transparent)]"
        aria-hidden="true"
      />

      <BrowserRouter>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-emerald-700 text-white rounded-[2px] font-mono text-xs shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          Skip to main content
        </a>

        {/* Mobile Sticky Top Bar */}
        <div className="sticky top-0 z-40 flex items-center justify-between px-4 py-3 bg-canvas/90 backdrop-blur-md border-b border-zinc-200 dark:border-white/10 lg:hidden">
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5"
          >
            <img
              src="/images/profile.jpg"
              alt="Casper Hildebrand"
              className="h-8 w-8 rounded-full object-cover ring-1 ring-zinc-300 dark:ring-white/20"
            />
            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-sm text-zinc-900 dark:text-white tracking-tight leading-tight">
                Casper Hildebrand
              </span>
              <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 leading-tight">
                Full Stack @ Tikkie
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-[2px] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5 border border-zinc-300 dark:border-zinc-700 transition-colors"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-x-0 top-[57px] bottom-0 z-30 bg-canvas/95 backdrop-blur-lg border-b border-zinc-200 dark:border-white/10 p-6 flex flex-col justify-between overflow-y-auto lg:hidden animate-in fade-in duration-150">
            <div className="space-y-6">
              <Header handleClick={closeMobileMenu} orientation="vertical" />
            </div>
            <div className="pt-6 border-t border-zinc-200 dark:border-white/10">
              <div className="flex items-center justify-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <a
                  href="https://github.com/CasHil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <span>•</span>
                <a
                  href="https://www.linkedin.com/in/casper-hildebrand/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
                <span>•</span>
                <a
                  href="mailto:casperhildebrand@gmail.com"
                  className="hover:text-emerald-700 dark:text-emerald-400 transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Main Desktop & Responsive Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-12">
              <div className="rounded-[4px] border border-zinc-200 dark:border-white/10 bg-white dark:bg-surface p-6 shadow-sm dark:shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-200/80 dark:border-white/5">
                  <LanguageToggle />
                  <ThemeToggle />
                </div>
                <IntroLinks />
                <div className="pt-5 border-t border-zinc-200 dark:border-white/10">
                  <Header orientation="vertical" />
                </div>
                <div className="pt-4 border-t border-zinc-200/80 dark:border-white/5 text-center">
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {t.sidebar.year}
                  </p>
                </div>
              </div>
            </aside>

            {/* Content Column */}
            <div className="lg:col-span-8">
              <Body />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
