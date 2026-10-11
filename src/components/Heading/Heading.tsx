import "./Heading.css";

type HeadingSize = "h1" | "h2" | "h3";
type HeadingAlignment = "center" | "left";

interface HeadingProps {
  title: string;
  size?: HeadingSize;
  color?: string;
  animated?: boolean;
  alignment?: HeadingAlignment;
  divider?: boolean;
}

export default function Heading({
  title,
  size,
  color,
  alignment = "left",
  divider,
}: HeadingProps) {
  const alignClass = alignment === "center" ? "text-center" : "text-left";

  if (size === "h2") {
    return (
      <div className={`mb-1 ${alignClass}`}>
        <h2
          className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${
            color === "black" ? "text-stone-900" : "text-[#f4f1ea]"
          }`}
        >
          {title}
        </h2>
        {divider && (
          <div
            aria-hidden="true"
            className="h-px w-12 bg-amber-500/40 my-3"
          />
        )}
      </div>
    );
  }

  if (size === "h3") {
    return (
      <div className={`mb-0.5 ${alignClass}`}>
        <h3
          className={`text-sm sm:text-base font-mono font-medium ${
            color === "black" ? "text-stone-600" : "text-amber-400"
          }`}
        >
          {title}
        </h3>
        {divider && (
          <div
            aria-hidden="true"
            className="h-px w-8 bg-amber-500/30 my-2"
          />
        )}
      </div>
    );
  }

  return (
    <div className={`mb-6 ${alignClass}`}>
      <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f4f1ea]">
        {title}
      </h1>
    </div>
  );
}
