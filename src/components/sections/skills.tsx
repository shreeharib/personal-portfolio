import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, TestTube2, Waypoints, Wrench } from "lucide-react";

const skillsData = {
  product: {
    title: "Product Management",
    icon: <Waypoints className="h-5 w-5" />,
    skills: ["PRDs", "Roadmapping", "A/B Testing", "Analytics", "GTM Strategy"],
  },
  ai: {
    title: "AI/ML",
    icon: <Bot className="h-5 w-5" />,
    skills: ["LLMs", "RAG", "NLP", "Embeddings", "LangChain", "FAISS"],
  },
  tools: {
    title: "Tools & Tech",
    icon: <Wrench className="h-5 w-5" />,
    skills: ["Jira", "Notion", "Looker Studio"],
  },
  ux: {
    title: "UX & Research",
    icon: <TestTube2 className="h-5 w-5" />,
    skills: [
      "Wireframing",
      "User Journeys",
      "Prototyping",
      "User Interviews",
      "Competitive Analysis",
    ],
  },
};

export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-16 bg-secondary">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Skills & Strengths
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-base">
            A versatile skill set to build, launch, and grow products from
            concept to scale, grounded in research and experimentation.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mx-auto grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {Object.values(skillsData).map((category) => (
            <Card
              key={category.title}
              className="bg-card/80 border border-border/50 backdrop-blur-sm hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 ease-in-out"
            >
              <CardHeader className="flex flex-row items-center gap-4 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <CardTitle className="text-lg font-semibold">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 p-4 pt-0">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs px-2 py-0.5 font-medium rounded-full hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
