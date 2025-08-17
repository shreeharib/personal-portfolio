"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
    { href: "#workshops", label: "Workshops" },
  { href: "#research", label: "Awards" },
  { href: "#experience", label: "Experience" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-background/80 backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-4">
        {/* <Link href="/" className="flex items-center gap-2 font-bold text-base">
          <Mountain className="h-5 w-5 text-primary" />
          <span>Shree Hari B</span>
        </Link> */}
        <Link href="/" className="flex items-center gap-2 font-bold text-base">
          <Image
            src="https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/logoimage.png"
            alt="Shree Hari B Logo"
            width={20}
            height={20}
            className="text-primary"
          />
          <span>Shree Hari B</span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/70 transition-colors hover:text-foreground text-xs"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="#contact" className="hidden md:inline-block">
            <Button size="sm">Contact Me</Button>
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden h-8 w-8"
              >
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-5 p-6">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold"
                  onClick={() => setOpen(false)}
                >
                  <Mountain className="h-5 w-5 text-primary" />
                  <span className="text-base font-bold">Shree Hari B</span>
                </Link>
                <nav className="grid gap-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="py-2 text-base font-medium"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="#contact"
                    className="py-2 text-base font-medium"
                    onClick={() => setOpen(false)}
                  >
                    Contact Me
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
