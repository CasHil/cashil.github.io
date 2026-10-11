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
      className="p-1.5 rounded-md border border-[#eaeaea] dark:border-[#24211d] bg-[#ffffff] dark:bg-[#141210] hover:border-[#dedede] dark:hover:border-[#332f29] hover:bg-[#f7f6f3] dark:hover:bg-[#1a1815] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
    >
      <img
        className="w-5 h-5 opacity-75 hover:opacity-100 transition-opacity dark:filter dark:invert"
        src={"/images/" + src}
        alt=""
        aria-hidden="true"
        width="20"
        height="20"
      />
    </a>
  );
}
