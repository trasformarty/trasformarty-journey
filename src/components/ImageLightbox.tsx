import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ImageLightboxProps {
  src: string | null;
  alt: string;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
}

export const ImageLightbox = ({
  src,
  alt,
  onClose,
  onPrevious,
  onNext,
}: ImageLightboxProps) => {
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (!src) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrevious?.();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        onNext?.();
      }
    };

    window.addEventListener("keydown", onKeyDown, true);

    return () => {
      window.removeEventListener("keydown", onKeyDown, true);
    };
  }, [src, onClose, onPrevious, onNext]);

  if (!src) return null;

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = touchEndX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 45) return;

    if (distance > 0) {
      onPrevious?.();
    } else {
      onNext?.();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-forest-deep/80 backdrop-blur-sm flex items-center justify-center p-5 md:p-8 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      tabIndex={-1}
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 md:top-8 md:right-8 z-20 text-ivory/80 hover:text-ivory transition-colors"
        aria-label="Close image preview"
      >
        <X size={30} strokeWidth={1.3} />
      </button>

      {onPrevious && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onPrevious();
          }}
          className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-ivory/14 text-ivory backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-ivory/24"
          aria-label="Previous image"
        >
          <ChevronLeft size={26} strokeWidth={1.5} />
        </button>
      )}

      {onNext && (
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
          className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-ivory/14 text-ivory backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-ivory/24"
          aria-label="Next image"
        >
          <ChevronRight size={26} strokeWidth={1.5} />
        </button>
      )}

      <img
        src={src}
        alt={alt}
        className="max-h-[86vh] max-w-[92vw] rounded-[2rem] object-contain shadow-organic animate-scale-in"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
};

export default ImageLightbox;
