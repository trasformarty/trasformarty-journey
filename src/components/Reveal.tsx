import { useEffect, useRef } from "react";

/**
 * Wraps children and reveals them with a soft fade-in once they enter the viewport.
 * Honors prefers-reduced-motion via the global CSS rule on .reveal.
 */
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export const Reveal = ({ children, className = "", delay = 0, as: Tag = "div" }: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.transitionDelay = `${delay}ms`;
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  // @ts-expect-error dynamic tag
  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>;
};

export default Reveal;
