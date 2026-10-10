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
      className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1b1916] border border-[#38342e] hover:border-amber-500/50 hover:bg-[#24211d] transition-all duration-200 group"
    >
      <img
        src={"/images/" + src}
        alt={alt}
        className="w-5 h-5 opacity-75 group-hover:opacity-100 transition-opacity"
        style={{ filter: "invert(1)" }}
        width="20"
        height="20"
      />
    </a>
  );
}
