"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Users,
  GraduationCap,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const workshopItems = [
  {
    icon: <BookOpen className="h-4 w-4 text-primary" />,
    title: "RAG Workshop",
    description:
      "conducted a 2-hour workshop on Retrieval Augmented Generation (RAG) with Gemini API",
    link: "https://www.linkedin.com/posts/shreeharib_rag-ai-machinelearning-activity-7214484116497420288-E5wR?utm_source=share&utm_medium=member_desktop&rcm=ACoAADijABgBmaqCgeZ4J8njAX7ZU8pJbTPJAGQ",
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/Workshops/workshop1.jpg",
    imageHint: "machine learning workshop session",
  },
  {
    icon: <GraduationCap className="h-4 w-4 text-primary" />,
    title: "How AI works? - Workshop @Holy cross college, Trichy",
    description:
      "Invited as a resource person for a workshop on AI at Holy Cross College, Tiruchirappalli!",
    link: "https://www.linkedin.com/posts/shreeharib_ai-ml-dl-activity-7216628657161744384-FIN9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADijABgBmaqCgeZ4J8njAX7ZU8pJbTPJAGQ",
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/Workshops/workshop-2.jpg",
    imageHint: "deep learning training session",
  },
  {
    icon: <Users className="h-4 w-4 text-primary" />,
    title: "Technical aspects of the Deepseek-r1-zero model",
    description:
      "High-level understanding of how these models reason and function.",
    link: "https://www.linkedin.com/posts/shreeharib_ai-deepseek-reasoningmodels-activity-7292427422077988867-Tuq4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADijABgBmaqCgeZ4J8njAX7ZU8pJbTPJAGQ",
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/Workshops/workshop-deepseek.jpeg",
    imageHint: "data analytics workshop",
  },
  {
    icon: <Lightbulb className="h-4 w-4 text-primary" />,
    title: "Why do we need Linear algebra for machine learning? - Workshop",
    description:
      "Conducted a workshop on the importance of linear algebra in machine learning and deep learning.",
    link: "https://www.linkedin.com/in/shreeharib/",
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/Workshops/workshop4.jpg",
    imageHint: "IoT sensors workshop",
  },
  {
    icon: <BookOpen className="h-4 w-4 text-primary" />,
    title: "Reinforcement Learning: Mastering Decision-Making",
    description:
      "Delivered a guest lecture at Karunya Institute of Technology and Sciences on 'Mastering Decision-Making: An Introduction to Reinforcement Learning and Its Applications.'",
    link: "https://www.linkedin.com/posts/shreeharib_on-april-1st-i-had-the-honour-of-being-invited-activity-7328395309649219584-jKmL?utm_source=share&utm_medium=member_desktop&rcm=ACoAADijABgBmaqCgeZ4J8njAX7ZU8pJbTPJAGQ",
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/Workshops/wokrshop-karunya.jpeg",
    imageHint: "reinforcement learning workshop",
  },
  {
    icon: <BookOpen className="h-4 w-4 text-primary" />,
    title: "Model Context Protocol - Explained",
    description: "Took a workshop on MCP with practical implementation",
    link: "https://www.linkedin.com/posts/shreeharib_just-posted-a-new-video-on-youtube-where-activity-7328805111370043392-VImh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADijABgBmaqCgeZ4J8njAX7ZU8pJbTPJAGQ",
    image:
      "https://pyeuqqzatlinajcoygxq.supabase.co/storage/v1/object/public/templates/Workshops/1747323299179.jpeg",
    imageHint: "Mcp workshop",
  },
];

export function Workshops() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Calculate maximum slide index
  const maxSlideIndex = Math.max(0, workshopItems.length - slidesToShow);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset currentSlide if it's out of bounds when slidesToShow changes
  useEffect(() => {
    const newMaxIndex = Math.max(0, workshopItems.length - slidesToShow);
    if (currentSlide > newMaxIndex) {
      setCurrentSlide(newMaxIndex);
    }
  }, [slidesToShow, currentSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxIndex = Math.max(0, workshopItems.length - slidesToShow);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 8000);

    return () => clearInterval(timer);
  }, [slidesToShow]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxIndex = Math.max(0, workshopItems.length - slidesToShow);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxIndex = Math.max(0, workshopItems.length - slidesToShow);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const goToSlide = (index: number): void => {
    const maxIndex = Math.max(0, workshopItems.length - slidesToShow);
    setCurrentSlide(Math.min(index, maxIndex));
  };

  return (
    <section id="workshops" className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-2 text-center mb-8">
          <h2 className="text-lg font-bold tracking-tighter sm:text-xl">
            Workshops
          </h2>
          <p className="max-w-[600px] text-sm text-muted-foreground">
            Conducted several workshops and webinars on AI & ML
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons - Only show if more items than visible */}
          {workshopItems.length > slidesToShow && (
            <>
              <Button
                variant="outline"
                size="sm"
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-2 h-8 w-8 rounded-full border-gray-300 bg-white/90 p-0 shadow-md hover:bg-white"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-2 h-8 w-8 rounded-full border-gray-300 bg-white/90 p-0 shadow-md hover:bg-white"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}

          {/* Slides Container */}
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (currentSlide * 100) / slidesToShow
                }%)`,
              }}
            >
              {workshopItems.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <Link
                    href={item.link}
                    target="_blank"
                    className="group block"
                  >
                    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-600 hover:shadow-md hover:-translate-y-0.5">
                      {/* Image Section */}
                      <div className="relative">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={300}
                          data-ai-hint={item.imageHint}
                          className="h-48 w-full object-cover sm:h-52 md:h-56 lg:h-60"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="p-4">
                        <div className="flex items-start gap-2 mb-3">
                          {item.icon}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-semibold leading-tight text-gray-900 group-hover:text-primary">
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-xs text-muted-foreground mb-3 overflow-hidden">
                          <span className="block line-clamp-2 sm:line-clamp-3">
                            {item.description}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator - Only show if more items than visible */}
          {workshopItems.length > slidesToShow && (
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({
                length: maxSlideIndex + 1,
              }).map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
