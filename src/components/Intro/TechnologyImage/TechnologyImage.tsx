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
      className="flex items-center justify-center w-9 h-9 rounded-md bg-[#ffffff] dark:bg-[#141210] border border-[#eaeaea] dark:border-[#24211d] hover:border-[#dedede] dark:hover:border-[#332f29] hover:bg-[#f7f6f3] dark:hover:bg-[#1a1815] transition-all duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
    >
      <img
        src={"/images/" + src}
        alt=""
        aria-hidden="true"
        className="w-4 h-4 opacity-75 group-hover:opacity-100 transition-opacity dark:filter dark:invert"
        width="16"
        height="16"
      />
    </a>
  );
}
