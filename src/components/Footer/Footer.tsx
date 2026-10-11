import FooterImage from "./FooterImage/FooterImage";

export default function Footer() {
  return (
    <footer className="mt-8 py-4 border-t border-[#24211d] flex items-center justify-center gap-3 text-stone-400">
      <FooterImage
        src="github.svg"
        alt="GitHub"
        href="https://github.com/CasHil"
      />
      <FooterImage
        src="linkedin.svg"
        alt="LinkedIn"
        href="https://www.linkedin.com/in/casper-hildebrand/"
      />
    </footer>
  );
}
