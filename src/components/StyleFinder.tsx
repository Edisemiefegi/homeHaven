import { useState, useRef, useEffect } from "react";

const questions = [
  {
    question: "What vibe speaks to you?",
    options: [
      { label: "Minimal", icon: "◻" },
      { label: "Cozy", icon: "◐" },
      { label: "Luxury", icon: "◆" },
      { label: "Modern", icon: "△" },
    ],
  },
  {
    question: "What colors draw you in?",
    options: [
      { label: "Neutral", icon: "○" },
      { label: "Dark", icon: "●" },
      { label: "Warm", icon: "◉" },
    ],
  },
  {
    question: "What space are you designing?",
    options: [
      { label: "Apartment", icon: "▢" },
      { label: "House", icon: "⌂" },
      { label: "Office", icon: "▤" },
    ],
  },
];

const styleResults: Record<string, { style: string; desc: string; services: string[] }> = {
  "Minimal-Neutral": { style: "Scandinavian Minimal", desc: "Clean lines, natural materials, and serene spaces that prioritize function and calm.", services: ["Space Planning", "Interior Styling"] },
  "Minimal-Dark": { style: "Japanese Modernism", desc: "Dark tones meet zen simplicity. Wabi-sabi aesthetics with intentional imperfection.", services: ["Residential Design", "Interior Styling"] },
  "Minimal-Warm": { style: "Warm Minimalism", desc: "Pared-back elegance with warm natural textures — linen, wood, and soft light.", services: ["Residential Design", "Space Planning"] },
  "Cozy-Neutral": { style: "Modern Farmhouse", desc: "Inviting textures, natural materials, and a warm, lived-in aesthetic.", services: ["Renovation", "Interior Styling"] },
  "Cozy-Dark": { style: "Moody Bohemian", desc: "Rich, layered interiors with deep colors, velvet, and curated eclecticism.", services: ["Interior Styling", "Residential Design"] },
  "Cozy-Warm": { style: "Mediterranean Warmth", desc: "Sun-drenched warmth, terracotta, natural stone, and organic curves.", services: ["Renovation", "Residential Design"] },
  "Luxury-Neutral": { style: "Quiet Luxury", desc: "Understated opulence — premium materials, expert craftsmanship, timeless elegance.", services: ["Residential Design", "Space Planning"] },
  "Luxury-Dark": { style: "Art Deco Revival", desc: "Glamorous dark palettes with gold accents, geometric patterns, and statement pieces.", services: ["Commercial Design", "Interior Styling"] },
  "Luxury-Warm": { style: "Contemporary Elegance", desc: "Sophisticated warmth with premium finishes, curated art, and bespoke furniture.", services: ["Residential Design", "Interior Styling"] },
  "Modern-Neutral": { style: "Nordic Contemporary", desc: "Functional beauty with clean geometry, natural light, and Scandinavian precision.", services: ["Space Planning", "Residential Design"] },
  "Modern-Dark": { style: "Industrial Chic", desc: "Raw materials meet polished design — concrete, steel, and dramatic lighting.", services: ["Commercial Design", "Renovation"] },
  "Modern-Warm": { style: "Mid-Century Modern", desc: "Organic forms, warm woods, and iconic silhouettes from the golden age of design.", services: ["Residential Design", "Interior Styling"] },
};

const StyleFinder = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
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

  const handleSelect = (label: string) => {
    const newAnswers = [...answers, label];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // show result
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
  };

  const getResult = () => {
    const key = `${answers[0]}-${answers[1]}`;
    return styleResults[key] || styleResults["Minimal-Neutral"];
  };

  const showResult = step >= questions.length;

  return (
    <section className="py-24 md:py-36 section-padding bg-secondary" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ease-studio ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-primary mb-4">
            Discover Your Style
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-tight">
            Style Finder
          </h2>
        </div>

        <div
          className={`rounded-3xl bg-background p-8 md:p-12 transition-all duration-700 ease-studio ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ boxShadow: "var(--shadow-elegant)" }}
        >
          {!showResult ? (
            <div>
              {/* Progress */}
              <div className="flex gap-2 mb-10">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${
                      i <= step ? "bg-primary" : "bg-border"
                    }`}
                  />
                ))}
              </div>

              <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Question {step + 1} of {questions.length}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-light mb-8">
                {questions[step].question}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => handleSelect(opt.label)}
                    className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-secondary hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300"
                  >
                    <span className="text-2xl">{opt.icon}</span>
                    <span className="font-sans text-sm text-foreground">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="font-sans text-xs uppercase tracking-[0.25em] text-primary mb-2">
                Your Style
              </p>
              <h3 className="font-serif text-3xl md:text-4xl font-light mb-4">
                ✨ {getResult().style}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-md mx-auto mb-8">
                {getResult().desc}
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {getResult().services.map((s) => (
                  <span
                    key={s}
                    className="font-sans text-xs uppercase tracking-[0.15em] px-4 py-2 rounded-full bg-secondary text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center font-sans text-sm uppercase tracking-[0.15em] bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300"
                >
                  Book Consultation
                </a>
                <button
                  onClick={reset}
                  className="font-sans text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StyleFinder;
