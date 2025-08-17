// import { Github, Linkedin, Mail, Phone } from "lucide-react";
// import Link from "next/link";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// export function Contact() {
//   return (
//     <section
//       id="contact"
//       className="w-full py-16 md:py-20 lg:py-24 bg-background"
//     >
//       <div className="container mx-auto max-w-6xl px-4 md:px-6">
//         {/* Header Section */}
//         <div className="text-center space-y-4 mb-12">
//           <Badge variant="secondary" className="text-sm font-medium">
//             Let's Connect
//           </Badge>
//           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
//             Get In Touch
//           </h2>
//           <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
//             Have a project in mind, a question, or just want to connect? I'd
//             love to hear from you.
//           </p>
//         </div>

//         {/* Contact Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Email Card */}
//           <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
//             <CardContent className="p-6">
//               <a
//                 href="mailto:shreeharib@example.com"
//                 className="flex flex-col items-center text-center space-y-4"
//               >
//                 <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
//                   <Mail className="h-6 w-6" />
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="font-semibold text-lg">Email</h3>
//                   <p className="text-sm text-muted-foreground break-all">
//                     shreehari.work7@gmail.com
//                   </p>
//                 </div>
//               </a>
//             </CardContent>
//           </Card>

//           {/* LinkedIn Card */}
//           <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
//             <CardContent className="p-6">
//               <Link
//                 href="https://www.linkedin.com/in/shreeharib"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex flex-col items-center text-center space-y-4"
//               >
//                 <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
//                   <Linkedin className="h-6 w-6" />
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="font-semibold text-lg">LinkedIn</h3>
//                   <p className="text-sm text-muted-foreground">
//                     /in/shreeharib
//                   </p>
//                 </div>
//               </Link>
//             </CardContent>
//           </Card>

//           {/* GitHub Card */}
//           <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
//             <CardContent className="p-6">
//               <Link
//                 href="https://github.com/shreeharib"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex flex-col items-center text-center space-y-4"
//               >
//                 <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
//                   <Github className="h-6 w-6" />
//                 </div>
//                 <div className="space-y-2">
//                   <h3 className="font-semibold text-lg">GitHub</h3>
//                   <p className="text-sm text-muted-foreground">/shreeharib</p>
//                 </div>
//               </Link>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Call to Action */}
//         <div className="mt-16 text-center">
//           <div className="inline-flex items-center justify-center rounded-full bg-primary/5 px-6 py-3">
//             <p className="text-sm text-muted-foreground">
//               Available for freelance opportunities and collaborations
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-16 md:py-20 lg:py-24 bg-background"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="text-sm font-medium">
            Let's Connect
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have a project in mind, a question, or just want to connect? I'd
            love to hear from you.
          </p>
        </div>

        {/* Contact Cards Grid - Centered for 3 cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
            {/* Email Card */}
            <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <a
                  href="mailto:shreehari.work7@gmail.com"
                  className="flex flex-col items-center text-center space-y-4"
                >
                  <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-sm text-muted-foreground break-all">
                      shreehari.work7@gmail.com
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>

            {/* LinkedIn Card */}
            <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <Link
                  href="https://www.linkedin.com/in/shreeharib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center space-y-4"
                >
                  <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">
                      /in/shreeharib
                    </p>
                  </div>
                </Link>
              </CardContent>
            </Card>

            {/* GitHub Card */}
            <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-primary/20 sm:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <Link
                  href="https://github.com/shreeharib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center space-y-4"
                >
                  <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Github className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">GitHub</h3>
                    <p className="text-sm text-muted-foreground">/shreeharib</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center rounded-full bg-primary/5 px-6 py-3 border border-primary/10">
            <p className="text-sm text-muted-foreground">
              Available for freelance opportunities and collaborations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
