import Heading from "../Heading/Heading";
import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <Heading title={t.about.title} size="h1" />
        <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mt-4 max-w-[56ch]">
          <p>{t.about.paragraph1}</p>
          <p>{t.about.paragraph2}</p>
          <p>{t.about.paragraph3}</p>
        </div>
      </div>

      <div className="pt-8 border-t border-zinc-200 dark:border-white/10 space-y-6">
        <div>
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.about.beyondHeading}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            {t.about.beyondSubtitle}
          </p>
        </div>

        <div className="space-y-6 divide-y divide-zinc-200 dark:divide-zinc-800/80">
          {t.about.interests.map((item) => (
            <div
              key={item.title}
              className="pt-6 first:pt-0 space-y-1.5"
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400">
                  {item.subtitle}
                </p>
              </div>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-[58ch]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
