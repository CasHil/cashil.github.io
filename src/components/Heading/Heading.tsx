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
  className?: string;
}

export default function Heading({
  title,
  size = "h1",
  color,
  animated,
  alignment = "left",
  divider,
  className = "",
}: HeadingProps) {
  const alignClass = alignment === "center" ? "text-center" : "text-left";
  const colorClass = color ? color : "text-zinc-900 dark:text-white";

  if (size === "h2") {
    return (
      <div className={alignClass}>
        <h2
          className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${colorClass} ${className}`}
        >
          {title}
        </h2>
        {divider && <hr className="my-3 border-zinc-200 dark:border-white/10" />}
      </div>
    );
  }

  if (size === "h3") {
    return (
      <div className={alignClass}>
        <h3
          className={`font-display text-lg sm:text-xl font-bold ${colorClass} ${className}`}
        >
          {title}
        </h3>
        {divider && <hr className="my-2 border-zinc-200 dark:border-white/10" />}
      </div>
    );
  }

  return (
    <div className={alignClass}>
      <h1
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${colorClass} ${
          animated ? "intro-heading-animation" : ""
        } ${className}`}
      >
        {title}
      </h1>
      {divider && <hr className="my-4 border-zinc-200 dark:border-white/10" />}
    </div>
  );
}
