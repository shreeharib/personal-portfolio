"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const projects = [
  {
    category: 'AI/ML',
    title: 'AI Research Assistant',
    description: 'An AI-powered tool leveraging AWS Bedrock and FAISS to streamline research workflows.',
    outcome: 'Cut research time by ~40%',
    tags: ['AWS Bedrock', 'FAISS', 'LLM', 'React'],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'AI dashboard analytics',
    link: '#',
  },
  {
    category: 'AI/ML',
    title: 'RAG Research Agent',
    description: 'A sophisticated agent built with Ollama and LangChain for contextual document analysis.',
    outcome: 'Simplified comprehension by ~35%',
    tags: ['Ollama', 'LangChain', 'RAG', 'Python'],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'team meeting',
    link: '#',
  },
  {
    category: 'PM',
    title: 'Placement Assistant',
    description: 'An ATS-integrated tool using Gemini and Docker to help candidates track applications.',
    outcome: 'Increased application tracking efficiency.',
    tags: ['Gemini API', 'Docker', 'ATS', 'Product Management'],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'kanban board',
    link: '#',
  },
  {
    category: 'AI/ML',
    title: 'Predictive Maintenance Dashboard',
    description: 'A real-time visualization and alert system for industrial machinery, built with Flask and React.',
    outcome: 'Real-time viz + alerts',
    tags: ['Flask', 'React', 'OpenAI', 'Data Viz'],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'factory machinery',
    link: '#',
  },
  {
    category: 'AI/ML',
    title: 'Multi-PDF RAG System',
    description: 'Leverages Gemini and FAISS to extract and synthesize insights from multiple PDF documents at speed.',
    outcome: 'Insights at speed',
    tags: ['Gemini', 'FAISS', 'RAG', 'PDF Processing'],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'document analysis',
    link: '#',
  },
  {
    category: 'Research',
    title: 'EDSR Aerial Super-Resolution',
    description: 'Applying Enhanced Deep Super-Resolution models to improve the precision of aerial and geospatial imagery.',
    outcome: 'Geospatial precision',
    tags: ['EDSR', 'PyTorch', 'Computer Vision', 'Research'],
    image: 'https://placehold.co/600x400.png',
    imageHint: 'satellite imagery',
    link: '#',
  },
];

const filters = ['All', 'AI/ML', 'PM', 'Research'];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="w-full py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tighter sm:text-2xl">Project Portfolio</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-base">
              A selection of projects that demonstrate my ability to ship impactful products.
            </p>
          </div>
        </div>
        <div className="flex justify-center py-6">
          <div className="inline-flex h-auto flex-wrap justify-center rounded-md bg-secondary p-1 text-muted-foreground sm:h-9 sm:flex-nowrap">
            {filters.map(filter => (
              <Button
                key={filter}
                variant="ghost"
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  'w-full sm:w-auto px-3 py-1.5 text-xs font-medium transition-colors',
                  activeFilter === filter ? 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90' : 'hover:bg-accent hover:text-foreground'
                )}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
             <Link key={index} href={project.link} className="group" target="_blank">
              <Card className="overflow-hidden bg-card border-border transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-lg flex flex-col h-full">
                <CardHeader className="p-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    data-ai-hint={project.imageHint}
                    className="w-full h-auto object-cover aspect-[3/2]"
                  />
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <CardTitle className="mb-1 text-base">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-xs mb-3">{project.outcome}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="font-light text-xs">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 mt-auto">
                  <div className="text-xs text-muted-foreground flex items-center w-full">
                      View Project <ArrowRight className="ml-2 h-3 w-3" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
