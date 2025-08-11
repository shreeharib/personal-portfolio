import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, TestTube2, Waypoints, Wrench } from 'lucide-react';

const skillsData = {
  product: {
    title: 'Product Management',
    icon: <Waypoints className="h-5 w-5" />,
    skills: ['Agile/Scrum', 'PRDs', 'Roadmapping', 'A/B Testing', 'Analytics', 'GTM Strategy'],
  },
  ai: {
    title: 'AI/ML',
    icon: <Bot className="h-5 w-5" />,
    skills: ['LLMs', 'RAG', 'NLP', 'Embeddings', 'LangChain', 'FAISS'],
  },
  tools: {
    title: 'Tools & Tech',
    icon: <Wrench className="h-5 w-5" />,
    skills: ['Jira', 'Notion', 'GA', 'Looker', 'SQL', 'Docker', 'AWS Bedrock'],
  },
  ux: {
    title: 'UX & Research',
    icon: <TestTube2 className="h-5 w-5" />,
    skills: ['Wireframing', 'User Journeys', 'Prototyping', 'User Interviews', 'Competitive Analysis'],
  },
};

export function Skills() {
  return (
    <section id="skills" className="w-full py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tighter sm:text-2xl">Skills & Strengths</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-base">
              A versatile skill set to build, launch, and grow products from concept to scale.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-4 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {Object.values(skillsData).map((category) => (
            <Card key={category.title} className="bg-card border-border/50 hover:border-primary/50 transition-colors duration-300">
              <CardHeader className="flex flex-row items-center gap-3 p-4">
                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  {category.icon}
                </div>
                <CardTitle className="text-base">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-1 p-4 pt-0">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs font-light">
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
