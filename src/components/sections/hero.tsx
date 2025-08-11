import { Button } from '@/components/ui/button';
import { ArrowDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="hero" className="w-full py-16 md:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="container mx-auto max-w-3xl px-4 md:px-6 text-center">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
            Product Manager, AI/ML
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-base">
            I build and ship user-centric products with measurable impact — from initial research to go-to-market. 
            Proven ability to grow audiences, with over <span className="text-primary font-semibold">80k+ video views</span> and <span className="text-primary font-semibold">33k+ monthly LinkedIn impressions</span>.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="#contact">
              <Button
                size="sm"
                className="group w-full sm:w-auto"
              >
                Get in Touch <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="/shree-hari-b-cv.pdf" download>
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                <ArrowDown className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
