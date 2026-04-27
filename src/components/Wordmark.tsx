import logoDark from "@/assets/transformarty-logo.png";
import logoIvory from "@/assets/transformarty-logo-ivory.png";

interface WordmarkProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "auto" | "dark" | "ivory";
}

const sizeMap = {
  sm: "h-8 md:h-9",
  md: "h-12 md:h-14",
  lg: "h-24 md:h-36",
};

export const Wordmark = ({ className = "", size = "md", variant = "auto" }: WordmarkProps) => {
  // "auto": show ivory on dark backgrounds (parent uses text-ivory) via currentColor not possible w/ raster.
  // We render the ivory version when variant === "ivory", otherwise the dark ink.
  const src = variant === "ivory" ? logoIvory : logoDark;

  return (
    <img
      src={src}
      alt="Transformarty"
      className={`${sizeMap[size]} w-auto inline-block select-none ${className}`}
      draggable={false}
    />
  );
};

export default Wordmark;
