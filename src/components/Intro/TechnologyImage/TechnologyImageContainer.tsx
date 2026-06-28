import { ReactNode } from "react";

interface TechnologyImageContainerProps {
  children: ReactNode;
}

export default function TechnologyImageContainer({
  children,
}: TechnologyImageContainerProps) {
  return <div className="flex flex-row flex-wrap gap-3 my-4">{children}</div>;
}
