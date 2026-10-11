import "./Intro.css";

export default function Intro() {
  return (
    <div className="content">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] dark:text-[#f4f1ea] mb-6 leading-tight">
        Software engineer and musician based in the Netherlands.
      </h1>

      <div className="space-y-4 text-base sm:text-lg text-[#5a5a57] dark:text-[#b5af9f] leading-relaxed">
        <p>
          I work as a Full Stack Software Engineer at{" "}
          <a
            href="https://www.tikkie.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111] dark:text-[#ffffff] font-medium underline underline-offset-4 decoration-[#dedede] dark:decoration-[#332f29] hover:decoration-[#111111] dark:hover:decoration-[#ffffff] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 rounded-sm"
          >
            Tikkie
          </a>
          , focusing on <strong>Tikkie Business</strong>. Before this, I completed Master's
          degrees in Computer Science (Data Science) and Science Education at{" "}
          <span className="text-[#111111] dark:text-[#f4f1ea] font-medium">Delft University of Technology</span>,
          along with an exchange in Human-Computer Interaction at{" "}
          <span className="text-[#111111] dark:text-[#f4f1ea] font-medium">KTH Royal Institute of Technology</span> in
          Stockholm.
        </p>
      </div>
    </div>
  );
}
