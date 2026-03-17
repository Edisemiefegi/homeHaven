import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We begin with a deep conversation about your vision, lifestyle, and aspirations for the space.",
  },
  {
    number: "02",
    title: "Concept & Moodboard",
    description: "We develop a cohesive design direction through curated moodboards, material palettes, and spatial narratives.",
  },
  {
    number: "03",
    title: "Design Planning",
    description: "Detailed floor plans, 3D visualizations, and technical drawings bring the concept to life.",
  },
  {
    number: "04",
    title: "Implementation",
    description: "We oversee every aspect of construction and installation, ensuring precision in every detail.",
  },
  {
    number: "05",
    title: "Final Styling",
    description: "The finishing touches — art placement, accessory curation, and the reveal of your transformed space.",
  },
];

const DesignProcess = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-24 md:py-36 section-padding bg-secondary" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-primary mb-4">
            How We Work
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight">
            Our Process
          </h2>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex gap-8 md:gap-12 py-10 border-t border-border last:border-b transition-all duration-700 ease-studio ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-sans text-sm text-primary tabular-nums font-medium shrink-0 pt-1">
                {step.number}
              </span>
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed prose-width">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
