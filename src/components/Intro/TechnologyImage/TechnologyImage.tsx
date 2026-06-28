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
    <a href={href}>
      <img
        src={"/images/" + src}
        alt={alt}
        className="w-10 h-10"
        style={{ filter: "invert(1)" }}
      />
    </a>
  );
}
