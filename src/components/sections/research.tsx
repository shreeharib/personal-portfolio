import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Award, Trophy, FileText } from "lucide-react";

const researchItems = [
  {
    icon: <Trophy className="h-5 w-5 text-primary" />,
    title: "Rank Holder",
    description:
      "Awarded Shield for securing second highest SGPA in 4th semester.Issued by Head of the Department - Computer Science · Feb 2023",
    tags: ["Academic Excellence", "Computer Science", "High Performance"],
    link: "https://www.linkedin.com/in/shreeharib/details/honors/",
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/rewards/reward1.jpeg",
    imageHint: "brain waves technology",
  },
  {
    icon: <Award className="h-5 w-5 text-primary" />,
    title: "Winner up : Paper Presentation",
    description:
      "Secured First place in Paper Presentation at Techscientia, KITS",
    tags: ["Research", "Competition", "Academic"],
    link: "https://www.linkedin.com/in/shreeharib/details/honors/",
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/rewards/reward2.jpeg",
    imageHint: "AI surveillance security",
  },
  {
    icon: <Award className="h-5 w-5 text-primary" />,
    title: "NPTEL Gold Rank Holder in Big Data Computing",
    description: "Secured 98% in Big Data Computing with a Gold medal",
    tags: ["Big Data", "Academic Excellence", "Gold Medal"],
    link: "https://www.linkedin.com/in/shreeharib/details/honors/",
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/rewards/reward3.jpg",
    imageHint: "conference speaker stage",
  },
  {
    icon: <Award className="h-5 w-5 text-primary" />,
    title: "Second prize in the Intel Unnati Ignite",
    description:
      "Introduction to TensorFlow workshop, held on February 15th, 2023",
    tags: ["Tensorflow", "Machine Learning", "second prize"],
    link: "https://www.linkedin.com/posts/shreeharib_thankyou-team-experience-activity-7035422398686408704-AGgQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADijABgBmaqCgeZ4J8njAX7ZU8pJbTPJAGQ",
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/rewards/intelaward.jpeg",
    imageHint: "conference speaker stage",
  },
];

export function Research() {
  return (
    <section id="research" className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tighter sm:text-2xl">
              Awards and Honours
            </h2>
    
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 pt-10 md:grid-cols-2 lg:grid-cols-3">
          {researchItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="group"
              target="_blank"
            >
              <Card className="flex h-full flex-col overflow-hidden border-gray-200 bg-white shadow-md transition-transform duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-xl">
                <CardHeader className="p-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={300}
                    data-ai-hint={item.imageHint}
                    className="h-auto w-full object-cover aspect-[3/2]"
                  />
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <div className="flex items-start gap-3 mb-3">
                    {item.icon}
                    <CardTitle className="text-base leading-snug">
                      {item.title}
                    </CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-1.5 p-4 pt-0">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-gray-300 text-black text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
