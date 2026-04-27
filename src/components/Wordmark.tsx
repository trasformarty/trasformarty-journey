interface WordmarkProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * TrasforMarti — handwritten signature wordmark.
 * One attached word with emphasized capital M.
 */
const sizeMap = {
  sm: "text-2xl",
  md: "text-3xl md:text-4xl",
  lg: "text-5xl md:text-7xl",
};

export const Wordmark = ({ className = "", size = "md" }: WordmarkProps) => {
  return (
    <span
      className={`signature ${sizeMap[size]} ${className}`}
      aria-label="TrasforMarti"
    >
      Trasfor<span className="cap-m">M</span>arti
    </span>
  );
};

export default Wordmark;
