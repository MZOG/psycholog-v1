const tones = {
  default: "",
  white: "border-y border-line bg-white",
  accent: "bg-accent text-center text-white",
} as const;

type SectionProps = {
  tone?: keyof typeof tones;
  /** Vertical padding utilities. */
  padding?: string;
  className?: string;
  children: React.ReactNode;
};

export function Section({ tone = "default", padding = "py-section", className = "", children }: SectionProps) {
  return <section className={`px-gutter ${padding} ${tones[tone]} ${className}`}>{children}</section>;
}
