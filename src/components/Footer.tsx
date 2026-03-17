const Footer = () => {
  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-16 md:py-20 section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="font-serif text-2xl font-light text-foreground">
              Studio Haven
            </a>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mt-4 max-w-sm">
              Crafting refined, timeless interiors that honor the art of living. Based in Milan, working worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Navigation
            </p>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-sans text-sm text-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Contact
            </p>
            <div className="space-y-3 font-sans text-sm text-foreground">
              <p>hello@studiohaven.com</p>
              <p>+39 02 1234 5678</p>
              <p>Via della Spiga, 26<br />20121 Milan, Italy</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} Studio Haven. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Instagram", "Pinterest", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
