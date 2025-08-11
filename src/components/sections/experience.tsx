const experienceData = [
  {
    date: 'Present',
    title: 'Product Manager',
    company: 'AI-Focused Startup (Conceptual)',
    description: 'Leading the development of AI-driven products, from ideation and research to launch and iteration. Defining product roadmaps and working with cross-functional teams.'
  },
  {
    date: '2022 - 2023',
    title: 'AI/ML Research Intern',
    company: 'Tech Solutions Inc.',
    description: 'Contributed to cutting-edge research in Natural Language Processing and Computer Vision. Developed and implemented models for predictive analytics.'
  },
  {
    date: '2021',
    title: 'Software Development Intern',
    company: 'Innovate Corp.',
    description: 'Worked on full-stack web application development, contributing to both frontend and backend services. Gained experience in agile development cycles.'
  }
];

export function Experience() {
  return (
    <section id="experience" className="w-full py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 text-center">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-tighter sm:text-2xl">Experience Timeline</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-base">
              A journey of growth, learning, and impact in the tech industry.
            </p>
          </div>
        </div>
        <div className="relative mt-10">
          <div className="absolute left-3 top-0 h-full w-0.5 -translate-x-1/2 bg-border md:left-1/2"></div>
          {experienceData.map((item, index) => (
            <div key={index} className="relative mb-6 pl-10 md:pl-0">
              <div className="absolute left-3 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2"></div>
              <div className="md:flex md:items-center">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-6' : 'md:pl-6 md:text-right'}`}>
                  {index % 2 !== 0 && <ExperienceCard {...item} isRight />}
                </div>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-6' : 'md:pr-6'}`}>
                   {index % 2 === 0 && <ExperienceCard {...item} />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ date, title, company, description, isRight = false }: (typeof experienceData)[0] & { isRight?: boolean }) {
  return (
    <div className={`w-full max-w-sm rounded-lg border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md ${isRight ? 'md:ml-auto' : ''}`}>
      <p className="text-xs text-muted-foreground">{date}</p>
      <h3 className="text-base font-bold mt-1">{title}</h3>
      <p className="font-semibold text-primary-foreground bg-primary rounded-full px-2 py-0.5 text-xs inline-block my-1">{company}</p>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
