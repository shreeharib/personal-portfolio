import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Portfolio } from "@/components/sections/portfolio";
import { Research } from "@/components/sections/research";
import { Marketing } from "@/components/sections/marketing";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Workshops } from "@/components/sections/workshops";
export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Portfolio />
        <Workshops />
        <Research />
        <Marketing />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
