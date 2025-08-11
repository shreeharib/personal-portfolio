import Link from 'next/link';
import { Mountain, Github, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-secondary border-t border-border/50">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Mountain className="h-5 w-5 text-primary" />
          <span className="text-base font-bold">Shree Hari B</span>
        </Link>
        <p className="text-xs text-muted-foreground">&copy; {year} Shree Hari B. All Rights Reserved.</p>
        <div className="flex items-center gap-3">
          <Link href="https://github.com/shreeharib" target="_blank" aria-label="GitHub">
            <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="https://www.linkedin.com/in/shreeharib" target="_blank" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="https://youtube.com/@shreeharib" target="_blank" aria-label="YouTube">
            <Youtube className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
