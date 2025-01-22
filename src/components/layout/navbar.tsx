"use client";

import { ModeToggle } from "@/components/themes/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">IACL Tools</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button variant="default" size="sm" asChild>
            <Link href="/auth">Sign In</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
