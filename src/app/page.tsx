import { Hero } from "@/components/home/hero";
import { ToolsShowcase } from "@/components/home/tools-showcase";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <Hero />
        <div className="container">
          <div className="my-8 border-b" />
        </div>
        <ToolsShowcase />
      </main>
    </div>
  );
}
