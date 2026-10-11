import TechnologyImage from "../TechnologyImage/TechnologyImage";

export default function IntroLinks() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Studio Artist Portrait Sleeve */}
      <div className="relative mb-5 w-full max-w-[200px] sm:max-w-[220px]">
        <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-[#38342e] bg-[#141210] shadow-2xl group">
          <img
            className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105 motion-reduce:transform-none"
            src="/images/profile.jpg"
            alt="Portrait of Casper Hildebrand"
            width="220"
            height="220"
          />
          {/* Subtle vinyl badge */}
          <div
            aria-hidden="true"
            className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#0c0b0a]/80 backdrop-blur-md border border-[#38342e] text-[10px] font-mono text-amber-400"
          >
            SIDE A
          </div>
        </div>
      </div>

      {/* Name in warm Fraunces serif */}
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#f4f1ea] tracking-tight mb-1">
        Casper Hildebrand
      </h2>

      {/* Headline */}
      <p className="text-amber-400 font-medium text-sm mb-3">
        Full Stack Software Engineer &amp; Musician
      </p>

      {/* Studio Status Tape */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-mono bg-[#1b1916] text-[#c7c1b5] border border-[#38342e] mb-5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
        </span>
        <span className="sr-only">Current status: </span>
        <span>REC: TIKKIE BUSINESS // FULL STACK</span>
      </div>

      {/* Studio Metas */}
      <div className="w-full text-left p-3.5 rounded-xl bg-[#141210] border border-[#2b2722] text-xs font-mono text-[#a1998b] space-y-1.5 mb-5">
        <div className="flex justify-between">
          <span className="text-stone-500">DEGREE</span>
          <span className="text-[#e6e2d8]">MSc Data Science (TU Delft)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-500">EXCHANGE</span>
          <span className="text-[#e6e2d8]">HCI &amp; UX (KTH Sweden)</span>
        </div>
        <div className="flex justify-between">
          <span className="text-stone-500">INTERESTS</span>
          <span className="text-amber-400">Agents • Code • Sound</span>
        </div>
      </div>

      {/* Social Profiles */}
      <nav className="flex justify-center items-center gap-2.5" aria-label="Social and contact links">
        <TechnologyImage
          src="linkedin.svg"
          alt="LinkedIn"
          link="https://www.linkedin.com/in/casper-hildebrand/"
        />
        <TechnologyImage
          src="github.svg"
          alt="GitHub"
          link="https://github.com/CasHil"
        />
        <a
          href="mailto:casperhildebrand@gmail.com"
          aria-label="Send email to Casper Hildebrand"
          className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1b1916] border border-[#38342e] hover:border-amber-500/50 hover:bg-[#24211d] transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141210]"
          title="Email casperhildebrand@gmail.com"
        >
          <svg
            className="w-5 h-5 text-[#a1998b] group-hover:text-amber-400 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.75}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>
      </nav>
    </div>
  );
}
