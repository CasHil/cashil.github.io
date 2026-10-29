import { BrowserRouter, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import LanguageToggle from "./components/LanguageToggle/LanguageToggle";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import "./App.css";

function Masthead() {
  const { t } = useLanguage();

  return (
    <header className="pt-8 sm:pt-14 pb-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Identity */}
        <Link to="/" className="group flex items-center gap-3.5 focus:outline-none">
          <div className="relative shrink-0">
            <img
              src="/images/profile.webp"
              alt="Casper Hildebrand"
              className="relative h-11 w-11 rounded-full object-cover ring-1 ring-zinc-300/80 dark:ring-white/20 ring-offset-2 ring-offset-canvas transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div>
            <div className="font-display font-bold text-base sm:text-lg text-zinc-900 dark:text-white tracking-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
              {t.sidebar.name}
            </div>
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {t.sidebar.role}
            </p>
          </div>
        </Link>

        {/* Action Controls & Social */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 self-start sm:self-auto">
          {/* Social Profiles with Accessible 44px Touch Targets */}
          <nav aria-label="Social Profiles" className="flex items-center text-zinc-500 dark:text-zinc-400">
            <a
              href="https://github.com/CasHil"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-full hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 hover:text-zinc-950 dark:hover:text-white transition-colors"
              aria-label="GitHub profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/casper-hildebrand/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-full hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 hover:text-zinc-950 dark:hover:text-white transition-colors"
              aria-label="LinkedIn profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:casperhildebrand@gmail.com"
              className="w-9 h-9 sm:w-8 sm:h-8 flex items-center justify-center rounded-full hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
              aria-label="Email Casper"
              title="casperhildebrand@gmail.com"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </nav>

          <span className="h-4 w-[1px] bg-zinc-200 dark:bg-white/10" aria-hidden="true" />

          {/* Toggles */}
          <div className="flex items-center gap-1.5">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Primary Navigation */}
      <div className="border-b border-zinc-200/80 dark:border-white/10 pb-3">
        <Header orientation="horizontal" />
      </div>
    </header>
  );
}

function AppContent() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-canvas text-zinc-900 dark:text-gray-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-800 dark:selection:text-emerald-300 transition-colors">
      {/* Bespoke Organic Topographic Contour Layer */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-35 dark:opacity-20"
        aria-hidden="true"
      >
        <svg
          className="absolute -top-24 right-0 w-[840px] h-[840px] text-zinc-400/30 dark:text-zinc-600/25 stroke-current"
          viewBox="0 0 800 800"
          fill="none"
        >
          <path
            d="M100 200 C 250 120, 420 280, 580 180 C 700 100, 780 160, 850 220"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <path
            d="M50 320 C 200 240, 380 400, 560 300 C 680 230, 760 280, 850 340"
            strokeWidth="1.2"
          />
          <path
            d="M0 450 C 180 360, 340 520, 540 430 C 660 370, 740 410, 850 470"
            strokeWidth="1"
            strokeDasharray="2 6"
          />
          <path
            d="M-50 580 C 150 500, 310 640, 520 560 C 650 510, 730 550, 850 600"
            strokeWidth="1.2"
          />
        </svg>
        {/* Warm subtle ambient radial gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-amber-500/[0.03] via-emerald-500/[0.02] to-transparent blur-3xl pointer-events-none" />
      </div>

      <BrowserRouter>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-emerald-700 text-white rounded-[2px] font-mono text-xs shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          Skip to main content
        </a>

        {/* Centered Single-Column Editorial Canvas */}
        <div className="relative z-10 max-w-2xl sm:max-w-3xl mx-auto px-6 sm:px-8">
          <Masthead />
          <Body />

          {/* Clean Editorial Footer with Tapered Gradient Divider */}
          <div className="mt-16 h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-300/80 dark:via-zinc-700/80 to-transparent" aria-hidden="true" />
          <footer className="pt-8 pb-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <div>
              {t.sidebar.year}
            </div>
            <div className="flex items-center gap-3">
              <a href="mailto:casperhildebrand@gmail.com" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                casperhildebrand@gmail.com
              </a>
              <span className="opacity-40">·</span>
              <a href="https://github.com/CasHil" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                GitHub
              </a>
              <span className="opacity-40">·</span>
              <a href="https://www.linkedin.com/in/casper-hildebrand/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
                LinkedIn
              </a>
            </div>
          </footer>
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
