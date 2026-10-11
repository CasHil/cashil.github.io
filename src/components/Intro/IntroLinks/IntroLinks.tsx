import TechnologyImage from "../TechnologyImage/TechnologyImage";

export default function IntroLinks() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Portrait Frame */}
      <div className="relative mb-5 w-full max-w-[180px] sm:max-w-[200px]">
        <div className="relative aspect-square rounded-lg overflow-hidden border border-[#eaeaea] dark:border-[#24211d] bg-[#f7f6f3] dark:bg-[#141210]">
          <img
            className="w-full h-full object-cover object-top"
            src="/images/profile.jpg"
            alt="Portrait of Casper Hildebrand"
            width="200"
            height="200"
          />
        </div>
      </div>

      {/* Name */}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] dark:text-[#f4f1ea] tracking-tight mb-1">
        Casper Hildebrand
      </h2>

      {/* Subtitle */}
      <p className="text-[#5a5a57] dark:text-[#b5af9f] text-sm mb-6">
        Software Engineer at Tikkie
      </p>

      {/* Social Links */}
      <nav className="flex justify-center items-center gap-2" aria-label="Social and contact links">
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
          className="flex items-center justify-center w-9 h-9 rounded-md bg-[#ffffff] dark:bg-[#141210] border border-[#eaeaea] dark:border-[#24211d] hover:border-[#dedede] dark:hover:border-[#332f29] hover:bg-[#f7f6f3] dark:hover:bg-[#1a1815] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
          title="Email casperhildebrand@gmail.com"
        >
          <svg
            className="w-4 h-4 text-[#5a5a57] dark:text-[#b5af9f] hover:text-[#111111] dark:hover:text-[#ffffff] transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>
      </nav>
    </div>
  );
}
