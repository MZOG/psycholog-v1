import Image from "next/image";

type MediaProps = {
  /** Placeholder text shown until a real image is provided. */
  placeholder: string;
  /** Accessible description (alt text once `src` is set). */
  label: string;
  /** Path to an image in /public, e.g. "/portret.jpg". */
  src?: string;
  /** Height utility, e.g. "h-110". */
  className?: string;
  sizes?: string;
};

export function Media({ placeholder, label, src, className = "", sizes = "(min-width: 1120px) 540px, 100vw" }: MediaProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden rounded-card bg-sand ${className}`}>
        <Image src={src} alt={label} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center rounded-card bg-sand p-6 text-center text-xs text-muted ${className}`}
    >
      {placeholder}
    </div>
  );
}
