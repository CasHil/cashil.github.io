interface FooterImageProps {
  src: string;
  alt: string;
  href: string;
}

export default function FooterImage({ src, alt, href }: FooterImageProps) {
  return (
    <a
      href={href}
      aria-label={alt}
      title={alt}
      className="p-1.5 rounded-xl border border-[#38342e] bg-[#1b1916] hover:border-amber-500/50 hover:bg-[#24211d] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141210]"
    >
      <img
        className="w-10 h-10"
        src={"/images/" + src}
        alt=""
        aria-hidden="true"
        width="40"
        height="40"
        style={{ filter: "invert(1)" }}
      />
    </a>
  );
}
