import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-20 lg:py-24">
      <div className="container mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 md:grid-cols-2 md:px-6">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tighter sm:text-2xl">Get In Touch</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-base">
              Have a project in mind, a question, or just want to connect? Feel free to reach out.
            </p>
          </div>
          <div className="space-y-3">
            <a href="mailto:shreeharib@example.com" className="group flex items-center gap-3">
              <div className="rounded-md bg-secondary p-2 text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-sm">Email</p>
                <p className="text-sm text-muted-foreground">shreeharib@example.com</p>
              </div>
            </a>
            <a href="tel:+1234567890" className="group flex items-center gap-3">
              <div className="rounded-md bg-secondary p-2 text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-sm">Phone</p>
                <p className="text-sm text-muted-foreground">(123) 456-7890</p>
              </div>
            </a>
             <Link href="https://www.linkedin.com/in/shreeharib" target="_blank" className="group flex items-center gap-3">
              <div className="rounded-md bg-secondary p-2 text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Linkedin className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-sm">LinkedIn</p>
                <p className="text-sm text-muted-foreground">/in/shreeharib</p>
              </div>
            </Link>
            <Link href="https://github.com/shreeharib" target="_blank" className="group flex items-center gap-3">
              <div className="rounded-md bg-secondary p-2 text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Github className="h-4 w-4" />
              </div>
              <div>
                <p className="font-semibold text-sm">GitHub</p>
                <p className="text-sm text-muted-foreground">/shreeharib</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center rounded-lg bg-secondary p-6 shadow-md">
            <form className="space-y-3">
                <h3 className="text-base font-bold">Send a Message</h3>
                <Input placeholder="Your Name" name="name" />
                <Input type="email" placeholder="Your Email" name="email" />
                <Textarea placeholder="Your Message" rows={4} name="message" />
                <Button type="submit" className="w-full" size="sm">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                </Button>
            </form>
        </div>
      </div>
    </section>
  );
}
