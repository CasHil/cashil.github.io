interface TechnologyImageProps {
  src: string;
  alt: string;
  link?: string;
  wiki?: string;
}

export default function TechnologyImage({
  src,
  alt,
  link,
  wiki,
}: TechnologyImageProps) {
  const href = link ?? `https://en.wikipedia.org/wiki/${wiki}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
      title={alt}
      className="inline-flex h-8 w-8 items-center justify-center rounded-[2px] bg-zinc-100 dark:bg-surface border border-zinc-200 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/20 hover:bg-zinc-200/60 dark:hover:bg-surface-hover transition-all duration-150 shadow-sm"
    >
      <img
        src={"/images/" + src}
        alt={alt}
        className="w-4 h-4 opacity-75 hover:opacity-100 transition-opacity dark:invert"
      />
    </a>
  );
}
