interface WordmarkProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * TrasforMarti — signature-style wordmark.
 * The word stays attached, with Marti revealed through the capital M.
 */
const sizeMap = {
  sm: "text-3xl",
  md: "text-4xl md:text-5xl",
  lg: "text-6xl md:text-8xl",
};

export const Wordmark = ({ className = "", size = "md" }: WordmarkProps) => {
  return (
    <span
      className={`signature ${sizeMap[size]} ${className}`}
      aria-label="Transformarty"
    >
      Transformarty
    </span>
  );
};

export default Wordmark;
