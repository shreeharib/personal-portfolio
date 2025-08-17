import { Youtube, Linkedin, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const marketingMetrics = [
  {
    icon: <Youtube className="h-6 w-6 text-destructive" />,
    platform: "YouTube",
    title: "Content Creator",
    metric: "80,000+",
    label: "Total Views",
    subMetric: "1.5k+",
    subLabel: "Subscribers",
    description:
      "Built and scaled a YouTube channel from scratch, creating content on AI and technology.",
    growth: "+25% this month",
  },
  {
    icon: <Linkedin className="h-6 w-6 text-blue-600" />,
    platform: "LinkedIn",
    title: "Professional Voice",
    metric: "33,000+",
    label: "Monthly Impressions",
    subMetric: "4.4k+",
    subLabel: "Connections",
    description: "Sharing something what iam learning",
    growth: "Growing network",
  },
];

export function Marketing() {
  return (
    <section
      id="marketing"
      className="w-full py-8 md:py-12 lg:py-16 bg-secondary"
    >
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-2 text-center mb-8">
          <Badge variant="outline" className="mb-2">
            <TrendingUp className="h-3 w-3 mr-1" />
            Marketing & Growth
          </Badge>
          <h2 className="text-2xl font-bold tracking-tight">
            Audience & Reach
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {marketingMetrics.map((metric, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20"
            >
              <CardContent className="p-6">
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                      {metric.icon}
                    </div>
                    <div>
                      <Badge
                        variant="secondary"
                        className="text-xs font-medium"
                      >
                        {metric.platform}
                      </Badge>
                      <p className="text-sm font-medium mt-1">{metric.title}</p>
                    </div>
                  </div>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </div>

                {/* Main Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <p className="text-2xl font-bold text-foreground">
                      {metric.metric}
                    </p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      {metric.label}
                    </p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <p className="text-2xl font-bold text-primary">
                      {metric.subMetric}
                    </p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      {metric.subLabel}
                    </p>
                  </div>
                </div>

                {/* Growth Indicator */}
                <div className="flex items-center justify-center mb-3">
                  <Badge variant="outline" className="text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {metric.growth}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground text-center leading-relaxed">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA or additional info */}
      </div>
    </section>
  );
}
