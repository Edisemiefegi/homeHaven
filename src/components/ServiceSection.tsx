import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Residential Interior Design",
    description: "Complete interior transformations for homes, from concept to completion. We create spaces that reflect your personality and lifestyle.",
  },
  {
    title: "Commercial Interior Design",
    description: "Thoughtful commercial spaces that enhance brand identity and create memorable experiences for clients and employees.",
  },
  {
    title: "Renovation & Remodeling",
    description: "Breathing new life into existing spaces through strategic renovation, preserving character while introducing modern comfort.",
  },
  {
    title: "Interior Styling & Decoration",
    description: "Curated styling services that elevate your space with carefully selected furnishings, art, and accessories.",
  },
  {
    title: "Space Planning",
    description: "Optimized spatial layouts that maximize flow, function, and natural light for residential and commercial environments.",
  },
];

const ServicesSection = () => {
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
    <section id="services" className="py-24 md:py-36 section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-primary mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight">
            Our Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group p-8 md:p-10 rounded-3xl bg-secondary hover:bg-card transition-all duration-500 ease-studio cursor-default ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: `${i * 80}ms`,
                boxShadow: "var(--shadow-elegant)",
              }}
            >
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-medium mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed prose-width">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
