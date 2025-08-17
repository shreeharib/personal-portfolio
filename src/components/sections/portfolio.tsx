"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const projects = [
  {
    category: "AI/ML",
    title: "RAG-based LLM QA bot for fashion ecommerce! 🛍️💻",
    description:
      "Imagine being able to ask your ecommerce website anything... and getting accurate answers!",
    tags: ["AWS Bedrock", "FAISS", "LLM", "React"],
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/aiml/ragbot.jpeg",
    imageHint: "AI dashboard analytics",
    link: "https://github.com/shreeharib/RAG-QAbot-Ecomm",
  },
  {
    category: "AI/ML",
    title: "Media Player Controller Using Hand Gestures! ",
    description:
      "A sophisticated agent built with Ollama and LangChain for contextual document analysis.",

    tags: ["CNN", "pyautogui", "Tensorflow", "Python"],
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/aiml/mediaplayer.jpg",
    imageHint: "team meeting",
    link: "https://www.linkedin.com/posts/shreeharib_computervision-handgesturerecognition-mediaplayercontroller-activity-7181720357253312512-BNcM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADijABgBmaqCgeZ4J8njAX7ZU8pJbTPJAGQ",
  },

  {
    category: "AI/ML",
    title: "Predictive Maintenance System Powered with AI Chat Bot",
    description:
      "A real-time visualization and alert system for industrial machinery, built with Flask and React.",
    outcome: "Real-time viz + alerts",
    tags: ["Flask", "React", "OpenAI", "Data Viz"],
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/aiml/predictivedash.jpg",
    imageHint: "factory machinery",
    link: "https://www.linkedin.com/posts/shreeharib_shlokathon2024-machinelearning-ai-activity-7181353221272084480-iPL3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADijABgBmaqCgeZ4J8njAX7ZU8pJbTPJAGQ",
  },

  {
    category: "Design",
    title: "Designed Landing Page UI for E-comm Website in Figma",
    description:
      "Leverages Gemini and FAISS to extract and synthesize insights from multiple PDF documents at speed.",
    tags: ["Figma", "UI", "UX", "Conversions"],
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/design/landingpage.jpg",
    imageHint: "document analysis",
    link: "https://www.figma.com/design/qClAzOcarh0CufUsG3voST/wireframe?node-id=0-1&t=iTrjMNLbrqb7oSHL-1",
  },
  {
    category: "Design",
    title: "Designed Ad Posters for Brands in Figma",
    description:
      "Leverages Gemini and FAISS to extract and synthesize insights from multiple PDF documents at speed.",
    tags: ["Figma", "UI", "UX", "Creatives"],
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/design/adposter.jpg",
    imageHint: "document analysis",
    link: "#",
  },
  {
    category: "Marketing",
    title: "YouTube channel has crossed 1500+ subscribers",
    description:
      "Crossed 1.5K+ subscribers on Machine with Brain, sharing simple, impactful AI tutorials for the Tamil community.",
    tags: [
      "AI Education",
      "Tamil AI Community",
      "Machine Learning Tutorials",
      "Retrieval Augmented Generation",
    ],
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/marketing/IMG_1D954FF6D784-1.jpeg",
    imageHint: "document analysis",
    link: "https://www.youtube.com/@hari_and_ai",
  },
  {
    category: "Marketing",
    title: "Impressions in Linkedin",
    description: "Got more than 33,000 impressions on my LinkedIn posts.",
    tags: [
      "LinkedIn growth",
      "content strategy",
      "social media tips",
      "audience engagement",
    ],
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/marketing/linkeinpost1.jpeg",
    imageHint: "document analysis",
    link: "https://www.linkedin.com/posts/shreeharib_shreeharibaskar-activity-7345071738977730561--n0R?utm_source=share&utm_medium=member_desktop&rcm=ACoAADijABgBmaqCgeZ4J8njAX7ZU8pJbTPJAGQ",
  },
  {
    category: "Marketing",
    title: "Landing Page Case study",
    description:
      "People visit your page, but they are not converting into your lead. Why?",
    tags: [
      "conversions",
      "content strategy",
      "landing page",
      "audience engagement",
    ],
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/marketing/1751870069621.jpeg",
    imageHint: "document analysis",
    link: "https://www.linkedin.com/posts/shreeharib_here-is-why-your-saas-landing-page-is-not-activity-7347875647412760577-KS_b?utm_source=share&utm_medium=member_desktop&rcm=ACoAADijABgBmaqCgeZ4J8njAX7ZU8pJbTPJAGQ",
  },
  {
    category: "Marketing",
    title: "Branding Case study - Starbucks",
    description: "What makes Starbucks more than just a coffee shop?",
    tags: [
      "Branding",
      "content strategy",
      "landing page",
      "audience engagement",
    ],
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/marketing/starbuckscasestudy.gif",
    imageHint: "document analysis",
    link: "https://www.linkedin.com/posts/shreeharib_what-makes-starbucks-more-than-just-a-coffee-activity-7341381008014921729-lV6j?utm_source=share&utm_medium=member_desktop&rcm=ACoAADijABgBmaqCgeZ4J8njAX7ZU8pJbTPJAGQ",
  },
  {
    category: "Research",
    title:
      "Design and Evaluation of a Brain Signal-Based Monitoring System for Differently Abled People at ICEARS’23 Conference",
    description:
      "A system was designed to monitor differently-abled patients by capturing EEG signals, mapping them to predefined ranges, and classifying brain states using machine learning models.",
    outcome: "The model achieved 80% accuracy",
    tags: [
      "EEG",
      "Machine Learning",
      "Healthcare Monitoring",
      "Signal Processing",
    ],
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/researchprev.jpg",
    imageHint: "satellite imagery",
    link: "https://ieeexplore.ieee.org/document/10085207",
  },
  {
    category: "Research",
    title:
      "Enhancing the Spatial Resolution of Aerial Images using a Deep Generative Approach with Multi-Stage Residual Refinement at AMATHE’24 Conference",
    description:
      "Applying Enhanced Deep Super-Resolution models to improve the precision of aerial and geospatial imagery.",
    outcome: "PSNR ↑1.05%, SSIM ↑0.34%, MAE ↓0.0045, NRMSE ↓1.23%",
    tags: ["EDSR", "PyTorch", "Computer Vision", "Research"],
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/research2.jpg",
    imageHint: "satellite imagery",
    link: "https://ieeexplore.ieee.org/document/10582158",
  },
];

const filters = ["All", "AI/ML", "Design", "Marketing", "Research"];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="w-full py-16 md:py-20 lg:py-24 scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tighter sm:text-2xl">
              Project Portfolio
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-base">
              A selection of projects that demonstrate my ability to ship
              impactful products.
            </p>
          </div>
        </div>

        <div className="flex justify-center py-6">
          <div className="inline-flex h-auto flex-wrap justify-center rounded-md bg-secondary p-1 text-muted-foreground sm:h-9 sm:flex-nowrap">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant="ghost"
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "w-full sm:w-auto px-3 py-1.5 text-xs font-medium transition-all duration-300 ease-in-out",
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:text-white"
                    : "hover:bg-accent hover:text-foreground"
                )}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="group"
              target="_blank"
            >
              <Card className="overflow-hidden bg-card border-border transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-lg flex flex-col h-full transform">
                <CardHeader className="p-0">
                  <div className="overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      data-ai-hint={project.imageHint}
                      className="w-full h-auto object-cover aspect-[3/2] transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <CardTitle className="mb-1 text-base transition-colors duration-200 group-hover:text-primary">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-xs mb-3 transition-colors duration-200">
                    {project.outcome}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="font-light text-xs transition-all duration-200 hover:bg-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 mt-auto">
                  <div className="text-xs text-muted-foreground flex items-center w-full transition-all duration-200 group-hover:text-primary">
                    View Project
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
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
