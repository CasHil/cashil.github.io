
export default function HighlightsBento() {
  return (
    <div className="mt-12 space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-[#eaeaea] dark:border-[#24211d]">
        <span className="font-mono text-[11px] uppercase tracking-wider text-[#756e62] dark:text-[#a1998b]">
          ENGINEERING PILLARS // TECHNICAL PROFILE
        </span>
        <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
          PROVEN IN PRODUCTION
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: High-Scale Payments @ Tikkie */}
        <div className="p-1 rounded-2xl bg-[#f7f6f3] dark:bg-[#1a1714] border border-[#dedede] dark:border-[#2b2722] transition-all hover:border-amber-400/40">
          <div className="h-full p-4 rounded-[calc(1rem-2px)] bg-[#ffffff] dark:bg-[#12100e] flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-500/20">
                  FINTECH & CLOUD
                </span>
                <span className="font-mono text-[10px] text-[#756e62] dark:text-[#a1998b]">
                  TIKKIE
                </span>
              </div>
              <h3 className="font-bold text-base text-[#111111] dark:text-[#f4f1ea]">
                High-Concurrency Payments
              </h3>
              <p className="mt-2 text-xs text-[#5a5a57] dark:text-[#b5af9f] leading-relaxed">
                Building Tikkie Business within ABN AMRO. Architecting resilient payment flows, mission-critical APIs, and internal tools supporting millions of daily Dutch transactions.
              </p>
            </div>
            <div className="pt-2 border-t border-[#eaeaea] dark:border-[#24211d] font-mono text-[10px] text-[#756e62] dark:text-[#a1998b]">
              TypeScript • AWS • Distributed Systems
            </div>
          </div>
        </div>

        {/* Card 2: Compilers & Gradual Typing @ TU Delft */}
        <div className="p-1 rounded-2xl bg-[#f7f6f3] dark:bg-[#1a1714] border border-[#dedede] dark:border-[#2b2722] transition-all hover:border-amber-400/40">
          <div className="h-full p-4 rounded-[calc(1rem-2px)] bg-[#ffffff] dark:bg-[#12100e] flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold border border-amber-500/20">
                  MSc RESEARCH
                </span>
                <span className="font-mono text-[10px] text-[#756e62] dark:text-[#a1998b]">
                  TU DELFT
                </span>
              </div>
              <h3 className="font-bold text-base text-[#111111] dark:text-[#f4f1ea]">
                Gradual Compilers & Hedy
              </h3>
              <p className="mt-2 text-xs text-[#5a5a57] dark:text-[#b5af9f] leading-relaxed">
                Completed Double Master's in Computer Science (Data Science) and Science Education. Thesis researching AST transformations for Hedy, a gradual language for early programmers.
              </p>
            </div>
            <div className="pt-2 border-t border-[#eaeaea] dark:border-[#24211d] font-mono text-[10px] text-[#756e62] dark:text-[#a1998b]">
              Language Design • Data Science • Compilers
            </div>
          </div>
        </div>

        {/* Card 3: Human-Computer Interaction @ KTH Stockholm */}
        <div className="p-1 rounded-2xl bg-[#f7f6f3] dark:bg-[#1a1714] border border-[#dedede] dark:border-[#2b2722] transition-all hover:border-amber-400/40">
          <div className="h-full p-4 rounded-[calc(1rem-2px)] bg-[#ffffff] dark:bg-[#12100e] flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-blue-500/10 text-blue-700 dark:text-blue-400 font-bold border border-blue-500/20">
                  HCI & INTERFACES
                </span>
                <span className="font-mono text-[10px] text-[#756e62] dark:text-[#a1998b]">
                  KTH STOCKHOLM
                </span>
              </div>
              <h3 className="font-bold text-base text-[#111111] dark:text-[#f4f1ea]">
                Haptic & Tangible UX
              </h3>
              <p className="mt-2 text-xs text-[#5a5a57] dark:text-[#b5af9f] leading-relaxed">
                Specialized in multi-sensory feedback and human-computer interaction in Stockholm. Bringing physical audio hardware responsiveness into modern browser software.
              </p>
            </div>
            <div className="pt-2 border-t border-[#eaeaea] dark:border-[#24211d] font-mono text-[10px] text-[#756e62] dark:text-[#a1998b]">
              Design Systems • Web Audio DSP • Motion
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
