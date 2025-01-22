import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 py-20 text-center md:py-32">
      <h1 className="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
        IACL Internal Tools
      </h1>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        Access all your internal tools and resources in one place. Streamline
        your workflow with our centralized platform.
      </p>
      <div className="flex gap-4">
        <Button size="lg" asChild>
          <Link href="/auth">Get Started</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/docs">Documentation</Link>
        </Button>
      </div>
    </div>
  );
}
