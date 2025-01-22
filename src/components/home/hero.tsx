"use client";

import { Button } from "@/components/ui/button";
import { Particles } from "@/components/ui/particles";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background to-background/50">
      <Particles />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_var(--tw-gradient-to)_100%)] from-teal-500/10 to-blue-500/10"
        style={{
          maskImage: "radial-gradient(circle at center, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black, transparent)",
        }}
      />
      <div className="container relative flex min-h-screen flex-col items-center justify-center gap-8 py-20 text-center md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.h1
            className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            IACL Internal Tools
          </motion.h1>
          <motion.p
            className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Access all your internal tools and resources in one place.
            Streamline your workflow with our centralized platform.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-teal-600 to-blue-600 transition-transform hover:scale-105 hover:opacity-90"
            asChild
          >
            <Link href="/auth">Get Started</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-teal-600/20 backdrop-blur-sm transition-transform hover:scale-105 hover:border-blue-600/20"
            asChild
          >
            <Link href="/docs">Documentation</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
