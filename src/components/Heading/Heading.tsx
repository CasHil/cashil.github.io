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
  animated,
  alignment,
  divider,
}: HeadingProps) {
  const tailwindColor = (c?: string) => (c ? `text-${c}` : "text-white");

  if (size === "h2") {
    return (
      <>
        <h2
          className={`text-2xl md:text-4xl sm:text-2xl mb-1 ${
            alignment === "center" ? "text-center" : ""
          } ${tailwindColor(color)}`}
        >
          {title}
        </h2>
        {divider && (
          <>
            <br />
            <h2 className="text-2xl md:text-4xl">-</h2>
          </>
        )}
      </>
    );
  }

  if (size === "h3") {
    return (
      <>
        <h3
          className={`text-md md:text-xl ${
            alignment === "center" ? "text-center" : ""
          } ${tailwindColor(color)}`}
        >
          {title}
        </h3>
        {divider && (
          <>
            <br />
            <h3 className="text-md md:text-xl">-</h3>
          </>
        )}
      </>
    );
  }

  return (
    <h1
      className={`text-3xl md:text-5xl mb-5 inline-block ${tailwindColor(
        color
      )} ${animated ? "intro-animation" : ""}`}
    >
      {title}
    </h1>
  );
}
