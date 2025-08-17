// const experienceData = [
//   {
//     date: "Present",
//     title: "AI Content Creator & Community Builder",
//     company: "Machine with Brain - Instagram, YouTube (Remote) ",
//     description:
//       "Built and scaled a content brand simplifying complex AI topics in Tamil, growing to over 1000 followers on Instagram and YouTube organically while leading the end-to-end content product pipeline from ideation, market research, content scripting, and analytics-based iteration. Achieved 52.9K+ views and 1.3K+ watch hours in the last 365 days, driving 970+ new subscribers through targeted storytelling and engagement strategies.",
//   },
//   {
//     date: "Aug ‘22- Jul’24",
//     title: "Under Graduate Researcher",
//     company: "Karunya Institute of Technology and Sciences, Coimbatore",
//     description:
//       "Published paper on 'Design and Evaluation of a Brain Signal-Based Monitoring System for Differently Abled People' at ICEARS'23 Conference and published paper on 'Enhancing the Spatial Resolution of Aerial Images using a Deep Generative Approach with Multi-Stage Residual Refinement' at AMATHE'24 Conference.",
//   },
//   {
//     date: "Jan ’23 – Mar ’23",
//     title: "Front End UI developer",
//     company: "Sanctus Technologies, Chennai (Remote) ",
//     description:
//       "Collaborated with engineering and design teams to build internal tools using ReactJS, enhancing UI efficiency for data workflows, while creating wireframes and proposing UI enhancements that improved usability and reduced user errors in table navigation. Additionally, translated product requirements into user stories and worked closely with developers to ensure sprint deliverables matched design goals.",
//   },
//   {
//     date: "Dec ’22 – Feb ’23",
//     title: "AI Research Intern",
//     company: "IBM SkillsBuild (Remote) ",
//     description:
//       "Learnt about Artificial Intelligence concepts including Machine Learning, Deep Learning, NLP, and Computer Vision, and built a computer vision model for AI Sign Language Recognition achieving 92% accuracy.",
//   },
//   {
//     date: "Nov ‘20- Aug ‘21",
//     title: "Junior Officer",
//     company:
//       "ITC paperboards and specialty paper Division, Bhadrachalam, Telangana, India  ",
//     description:
//       "Refabrication and maintenance of Machineries and equipment’s (pumps, gears, valves, boilers etc.,)",
//   },
// ];

// export function Experience() {
//   return (
//     <section
//       id="experience"
//       className="w-full py-16 md:py-20 lg:py-24 bg-secondary"
//     >
//       <div className="container mx-auto max-w-4xl px-4 md:px-6">
//         <div className="flex flex-col items-center justify-center space-y-3 text-center">
//           <div className="space-y-2">
//             <h2 className="text-xl font-bold tracking-tighter sm:text-2xl">
//               Experience Timeline
//             </h2>
//             <p className="max-w-[700px] text-muted-foreground md:text-base">
//               A journey of growth, learning, and impact in the tech industry.
//             </p>
//           </div>
//         </div>
//         <div className="relative mt-10">
//           <div className="absolute left-3 top-0 h-full w-0.5 -translate-x-1/2 bg-border md:left-1/2"></div>
//           {experienceData.map((item, index) => (
//             <div key={index} className="relative mb-6 pl-10 md:pl-0">
//               <div className="absolute left-3 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2"></div>
//               <div className="md:flex md:items-center">
//                 <div
//                   className={`md:w-1/2 ${
//                     index % 2 === 0 ? "md:pr-6" : "md:pl-6 md:text-right"
//                   }`}
//                 >
//                   {index % 2 !== 0 && <ExperienceCard {...item} isRight />}
//                 </div>
//                 <div
//                   className={`md:w-1/2 ${
//                     index % 2 === 0 ? "md:pl-6" : "md:pr-6"
//                   }`}
//                 >
//                   {index % 2 === 0 && <ExperienceCard {...item} />}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ExperienceCard({
//   date,
//   title,
//   company,
//   description,
//   isRight = false,
// }: (typeof experienceData)[0] & { isRight?: boolean }) {
//   return (
//     <div
//       className={`w-full max-w-sm rounded-lg border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md ${
//         isRight ? "md:ml-auto" : ""
//       }`}
//     >
//       <p className="text-xs text-muted-foreground">{date}</p>
//       <h3 className="text-base font-bold mt-1">{title}</h3>
//       <p className="font-semibold text-primary-foreground bg-primary rounded-full px-2 py-0.5 text-xs inline-block my-1">
//         {company}
//       </p>
//       <p className="mt-1 text-sm text-muted-foreground">{description}</p>
//     </div>
//   );
// }
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, MapPin } from "lucide-react";

const experienceData = [
  {
    date: "Present",
    title: "AI Content Creator & Community Builder",
    company: "Machine with Brain",
    location: "Remote",
    type: "Instagram, YouTube",
    description:
      "Built and scaled a content brand simplifying complex AI topics in Tamil, growing to over 1000 followers on Instagram and YouTube organically while leading the end-to-end content product pipeline from ideation, market research, content scripting, and analytics-based iteration. Achieved 52.9K+ views and 1.3K+ watch hours in the last 365 days, driving 970+ new subscribers through targeted storytelling and engagement strategies.",
    skills: [
      "Content Creation",
      "Community Building",
      "Analytics",
      "Tamil Content",
    ],
  },
  {
    date: "Aug '22 - Jul '24",
    title: "Under Graduate Researcher",
    company: "Karunya Institute of Technology and Sciences",
    location: "Coimbatore",
    type: "Research",
    description:
      "Published paper on 'Design and Evaluation of a Brain Signal-Based Monitoring System for Differently Abled People' at ICEARS'23 Conference and published paper on 'Enhancing the Spatial Resolution of Aerial Images using a Deep Generative Approach with Multi-Stage Residual Refinement' at AMATHE'24 Conference.",
    skills: [
      "Research",
      "Academic Writing",
      "Brain Signals",
      "Computer Vision",
    ],
  },
  {
    date: "Jan '23 – Mar '23",
    title: "Front End UI Developer",
    company: "Sanctus Technologies",
    location: "Chennai",
    type: "Internship",
    description:
      "Collaborated with engineering and design teams to build internal tools using ReactJS, enhancing UI efficiency for data workflows, while creating wireframes and proposing UI enhancements that improved usability and reduced user errors in table navigation. Additionally, translated product requirements into user stories and worked closely with developers to ensure sprint deliverables matched design goals.",
    skills: ["ReactJS", "UI/UX Design", "Wireframing", "Agile Development"],
  },
  {
    date: "Dec '22 – Feb '23",
    title: "AI Research Intern",
    company: "IBM SkillsBuild",
    location: "Remote",
    type: "Internship",
    description:
      "Learnt about Artificial Intelligence concepts including Machine Learning, Deep Learning, NLP, and Computer Vision, and built a computer vision model for AI Sign Language Recognition achieving 92% accuracy.",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP"],
  },
  {
    date: "Nov '20 - Aug '21",
    title: "Junior Officer",
    company: "ITC Paperboards and Specialty Paper Division",
    location: "Bhadrachalam, Telangana",
    type: "Full-time",
    description:
      "Refabrication and maintenance of Machineries and equipment's (pumps, gears, valves, boilers etc.,)",
    skills: [
      "Equipment Maintenance",
      "Industrial Operations",
      "Mechanical Systems",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-16 md:py-20 lg:py-24 bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Experience Timeline
            </h2>
            <p className="max-w-[600px] text-muted-foreground text-base">
              A journey of growth, learning, and impact across technology and
              research.
            </p>
          </div>
          <Separator className="w-24 mx-auto" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"></div>

          <div className="space-y-8">
            {experienceData.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full ring-4 ring-background -translate-x-1/2 z-10"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:flex md:items-start ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <ExperienceCard {...item} isEven={index % 2 === 0} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  date,
  title,
  company,
  location,
  type,
  description,
  skills,
  isEven,
}: (typeof experienceData)[0] & { isEven: boolean }) {
  return (
    <Card className="w-full shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-l-primary">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span className="font-medium">{date}</span>
          </div>
          <Badge variant="secondary" className="w-fit">
            {type}
          </Badge>
        </div>

        <CardTitle className="text-lg leading-tight">{title}</CardTitle>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-primary">{company}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed mb-4">
          {description}
        </CardDescription>

        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="outline"
              className="text-xs border-primary/20 text-primary hover:bg-primary/10"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
