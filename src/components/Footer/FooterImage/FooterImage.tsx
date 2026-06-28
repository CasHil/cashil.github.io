interface FooterImageProps {
  src: string;
  alt: string;
  href: string;
}

export default function FooterImage({ src, alt, href }: FooterImageProps) {
  return (
    <a href={href}>
      <img
        className="w-10 h-10"
        src={process.env.PUBLIC_URL + "/images/" + src}
        alt={alt}
        style={{ filter: "invert(1)" }}
      />
    </a>
  );
}
