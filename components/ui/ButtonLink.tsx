import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  primary: "bg-accent text-white",
  outline: "border-[1.5px] border-accent text-accent",
  inverse: "bg-white text-ink",
} as const;

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
};

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return (
    <Link
      className={`box-content inline-flex min-h-12 items-center rounded-button px-7 font-semibold no-underline ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
