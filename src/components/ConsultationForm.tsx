import { useState, useEffect, useRef } from "react";

const ConsultationForm = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ease-studio ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-primary mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight mb-4">
            Book a Consultation
          </h2>
          <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Tell us about your project and we'll schedule a complimentary consultation to discuss your vision.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16 rounded-3xl bg-secondary" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-light mb-2">Thank You</h3>
            <p className="font-sans text-sm text-muted-foreground">We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`space-y-8 p-8 md:p-12 rounded-3xl bg-secondary transition-all duration-700 ease-studio delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-border pb-3 font-sans text-sm text-foreground focus:border-primary focus:outline-none transition-colors duration-300 placeholder:text-muted-foreground/40"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <label className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-border pb-3 font-sans text-sm text-foreground focus:border-primary focus:outline-none transition-colors duration-300 placeholder:text-muted-foreground/40"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Project Type
                </label>
                <select
                  className="w-full bg-transparent border-b border-border pb-3 font-sans text-sm text-foreground focus:border-primary focus:outline-none transition-colors duration-300 appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>Select a project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="renovation">Renovation</option>
                  <option value="styling">Styling</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Budget Range
                </label>
                <select
                  className="w-full bg-transparent border-b border-border pb-3 font-sans text-sm text-foreground focus:border-primary focus:outline-none transition-colors duration-300 appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>Select budget range</option>
                  <option value="50-100k">$50,000 – $100,000</option>
                  <option value="100-250k">$100,000 – $250,000</option>
                  <option value="250-500k">$250,000 – $500,000</option>
                  <option value="500k+">$500,000+</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-border pb-3 font-sans text-sm text-foreground focus:border-primary focus:outline-none transition-colors duration-300 resize-none placeholder:text-muted-foreground/40"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full font-sans text-sm uppercase tracking-[0.15em] bg-primary text-primary-foreground py-4 rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              Schedule Consultation
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ConsultationForm;
