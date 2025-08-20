"use client";
import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import Particles from "../Particles";

export function Hero() {
  return (
    <section
      id="hero"
      className="w-full py-16 md:py-20 lg:py-24 relative overflow-hidden min-h-[600px] flex items-center"
    >
      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Particles
          particleColors={["#0a0a0a", "#1f1f1f"]} // Very dark charcoal variations
          particleCount={200}
          particleSpread={27}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/20 backdrop-blur-[0.5px] z-10"></div>

      {/* Hero Content */}
      <div className="container mx-auto max-w-3xl px-4 md:px-6 text-center relative z-20">
        <div className="flex flex-col justify-center space-y-6">
          {/* Badge/Label */}

          {/* Main Title */}
          <h1 className="text-xl md:text-2xl lg:text-3xl font-black tracking-tight">
            Welcome to my profile!
          </h1>

          {/* Description */}
{/*           <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg leading-relaxed">
            I love exploring ideas and sharing what I learn with this community.
            Have a look at my profile, and if you love solving problems, let's get
            connected.
          </p> */}

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-4 pt-4">
{/*             <Link href="#contact">
              <Button
                size="lg"
                className="group w-full sm:w-auto shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                Get in Touch{" "}
                <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link> */}
            <Link href="#projects">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-primary/20 hover:bg-primary/5 transition-all duration-300"
              >
                View Projects
              </Button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-8">
            <Link href="#skills">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <ArrowDown className="h-4 w-4 animate-bounce" />
                <span className="ml-2 text-xs">Explore Skills</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
