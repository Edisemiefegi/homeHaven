import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "Studio Haven transformed our penthouse into something beyond our imagination. Every room tells a story, and every detail feels intentional.",
    name: "Catherine Beaumont",
    role: "Homeowner, Paris",
    rating: 5,
  },
  {
    quote: "Working with Elena was an absolute dream. She understood our vision immediately and elevated it in ways we never expected.",
    name: "James & Sarah Chen",
    role: "Homeowners, London",
    rating: 5,
  },
  {
    quote: "The attention to materiality and proportion is extraordinary. Our office space now reflects the caliber of work we do.",
    name: "Marcus Thompson",
    role: "CEO, Archetype Studios",
    rating: 5,
  },
];

const TestimonialsSection = () => {
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
    <section className="py-24 md:py-36 section-padding bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-primary mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`p-8 md:p-10 rounded-3xl bg-background transition-all duration-700 ease-studio ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: `${i * 100}ms`,
                boxShadow: "var(--shadow-elegant)",
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="font-serif text-lg md:text-xl font-light leading-relaxed text-foreground mb-8 italic">
                "{t.quote}"
              </blockquote>

              <div>
                <p className="font-sans text-sm font-medium text-foreground">{t.name}</p>
                <p className="font-sans text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
