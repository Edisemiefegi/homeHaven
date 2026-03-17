import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin with a deep conversation about your vision, lifestyle, and aspirations for the space.",
  },
  {
    number: "02",
    title: "Concept & Moodboard",
    description:
      "We develop a cohesive design direction through curated moodboards, material palettes, and spatial narratives.",
  },
  {
    number: "03",
    title: "Design Planning",
    description:
      "Detailed floor plans, 3D visualizations, and technical drawings bring the concept to life.",
  },
  {
    number: "04",
    title: "Implementation",
    description:
      "We oversee every aspect of construction and installation, ensuring precision in every detail.",
  },
  {
    number: "05",
    title: "Final Styling",
    description:
      "The finishing touches — art placement, accessory curation, and the reveal of your transformed space.",
  },
];

const DesignProcess = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={ref}
      className="py-24 md:py-36 section-padding bg-secondary"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-primary mb-4">
            How We Work
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight">
            Our Process
          </h2>
        </div>

        {/* Steps */}
        <div>
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative flex gap-8 md:gap-12 py-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${
                visible
                  ? "opacity-100 translate-y-0 scale-100 blur-0"
                  : "opacity-0 translate-y-12 scale-[0.98] blur-sm"
              }`}
              style={{
                transitionDelay: `${i * 180}ms`,
              }}
            >
              {/* Animated divider line */}
              <div
                className={`absolute top-0 left-0 h-[1px] bg-border transition-all duration-700
                ${visible ? "w-full" : "w-0"}`}
                style={{
                  transitionDelay: `${i * 180}ms`,
                }}
              />

              {/* Number */}
              <span
                className={`font-sans text-sm text-primary tabular-nums font-medium shrink-0 pt-1
                transition-all duration-700
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionDelay: `${i * 180}ms`,
                }}
              >
                {step.number}
              </span>

              {/* Content */}
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

        {/* Bottom border (for last item) */}
        <div
          className={`h-[1px] bg-border transition-all duration-700 mt-2
          ${visible ? "w-full" : "w-0"}`}
          style={{
            transitionDelay: `${steps.length * 180}ms`,
          }}
        />
      </div>
    </section>
  );
};

export default DesignProcess;
