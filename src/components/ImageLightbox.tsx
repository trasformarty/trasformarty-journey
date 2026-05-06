import { useEffect } from "react";
import { X } from "lucide-react";

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

  return (
    <div
      className="fixed inset-0 z-[100] bg-forest-deep/80 backdrop-blur-sm flex items-center justify-center p-5 md:p-8 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      tabIndex={-1}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 md:top-8 md:right-8 z-10 text-ivory/80 hover:text-ivory transition-colors"
        aria-label="Close image preview"
      >
        <X size={30} strokeWidth={1.3} />
      </button>

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
