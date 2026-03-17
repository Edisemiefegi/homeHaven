import { useState, useEffect } from "react";

function NavBar() {
const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];    

  return (
<nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-studio ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-[var(--shadow-elegant)]"
          : "bg-transparent"
      }`}
    >
      <div className="section-padding flex items-center justify-between h-20">
        <a href="#" className="font-serif text-2xl font-light tracking-tight text-foreground">
          Studio Haven
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative font-sans text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-sans text-sm uppercase tracking-[0.15em] bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-foreground transition-all duration-300 ease-studio ${
              isOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-foreground transition-all duration-300 ease-studio ${
              isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-background/95 backdrop-blur-lg overflow-hidden transition-all duration-500 ease-studio ${
          isOpen ? "max-h-96 pb-8" : "max-h-0"
        }`}
      >
        <div className="section-padding flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-2xl font-light text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="font-sans text-sm uppercase tracking-[0.15em] bg-primary text-primary-foreground px-6 py-3 rounded-lg text-center"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </nav>  )
}

export default NavBar