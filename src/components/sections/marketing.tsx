import { Youtube, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const marketingMetrics = [
  {
    icon: <Youtube className="h-8 w-8 text-destructive" />,
    title: 'YouTube Creator',
    metric: '80,000+',
    label: 'Total Views',
    subMetric: '1.5k+ Subscribers',
    description: 'Built and scaled a YouTube channel from scratch, creating content on AI and technology.',
  },
  {
    icon: <Linkedin className="h-8 w-8 text-primary" />,
    title: 'LinkedIn Voice',
    metric: '33,000+',
    label: 'Impressions in 30 Days',
    subMetric: 'Growing professional network',
    description: 'Consistently share insights and project updates, fostering a strong professional presence.',
  },
];

export function Marketing() {
  return (
    <section id="marketing" className="w-full py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tighter sm:text-2xl">Audience & Growth</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-base">
              Demonstrated ability to build communities and market ideas effectively.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 pt-10 md:grid-cols-2">
          {marketingMetrics.map((metric, index) => (
            <Card key={index} className="text-center shadow-md">
              <CardHeader className="items-center p-4">
                {metric.icon}
                <CardTitle className="mt-2 text-base">{metric.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 p-4 pt-0">
                <div>
                  <p className="text-4xl font-bold text-primary">{metric.metric}</p>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                </div>
                <p className="text-sm font-semibold">{metric.subMetric}</p>
                <p className="text-sm text-muted-foreground px-4">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
