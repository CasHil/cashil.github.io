import React from "react";
import FooterImage from "./FooterImage/FooterImage";

export default function Footer() {
  return (
    <div className="bg-amber-50 fixed left-0 bottom-0 w-screen flex flex-row p-2 gap-3 z-20">
      <FooterImage
        src="github.svg"
        alt="GitHub"
        href="https://github.com/CasHil"
      ></FooterImage>
      <FooterImage
        src="linkedin.svg"
        alt="LinkedIn"
        href="https://www.linkedin.com/in/casper-hildebrand/"
      ></FooterImage>
    </div>
  );
}
