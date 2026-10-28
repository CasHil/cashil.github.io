import { useLanguage } from "../../../context/LanguageContext";
import TechnologyImage from "../TechnologyImage/TechnologyImage";

export default function IntroLinks() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-4">
        <img
          className="h-32 w-32 sm:h-36 sm:w-36 rounded-full object-cover ring-2 ring-zinc-200 dark:ring-white/10 ring-offset-4 ring-offset-canvas shadow-md dark:shadow-xl"
          src="/images/profile.jpg"
          alt="Casper Hildebrand"
        />
        <span
          className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-canvas"
          title="Building Tikkie Business"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-canvas" />
        </span>
      </div>

      <div className="font-display text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-1">
        {t.sidebar.name}
      </div>

      <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-400 mb-1">
        {t.sidebar.role}
      </p>

      <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mb-4">
        {t.sidebar.degrees}
      </p>

      <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-6">
        {t.sidebar.location}
      </p>

      <nav aria-label="Social and Contact Profiles" className="flex items-center justify-center gap-3 mb-6">
        <TechnologyImage
          src="github.svg"
          alt="GitHub"
          link="https://github.com/CasHil"
        />
        <TechnologyImage
          src="linkedin.svg"
          alt="LinkedIn"
          link="https://www.linkedin.com/in/casper-hildebrand/"
        />
        <a
          href="mailto:casperhildebrand@gmail.com"
          className="inline-flex h-8 w-8 items-center justify-center rounded-[2px] bg-zinc-100 dark:bg-surface border border-zinc-200 dark:border-white/10 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-white/20 transition-all duration-150 shadow-sm"
          aria-label="Send email to Casper"
          title="Email Casper"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>
      </nav>

      {/* Core Engineering Competencies */}
      <div className="w-full pt-4 border-t border-zinc-200 dark:border-white/10 text-left space-y-2">
        <p className="text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
          {t.sidebar.coreDomainsLabel}
        </p>
        <div className="space-y-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400">
          <div>
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">Languages:</span>{" "}
            TypeScript · Python · SQL
          </div>
          <div>
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">Full Stack:</span>{" "}
            React · Node.js · AWS · Postgres
          </div>
          <div>
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">Domains:</span>{" "}
            Fintech Scale · CS Pedagogy
          </div>
        </div>
      </div>
    </div>
  );
}
