import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroButton({
  children,
  href,
  variant = "default",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "default" | "ghost";
}) {
  return (
    <Button asChild size="lg" variant={variant} className="px-5 text-base">
      <Link href={href}>
        <span className="text-nowrap">{children}</span>
      </Link>
    </Button>
  );
}
