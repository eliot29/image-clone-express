import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Le concept", href: "#concept" },
  { label: "Cas concrets", href: "#cas" },
  { label: "Prestations", href: "#prestations" },
  { label: "Méthode", href: "#methode" },
  { label: "Pourquoi nous", href: "#approche" },
  { label: "Secteurs", href: "#secteurs" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full px-4 py-2 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-navy/70 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center gap-1">
        <a href="#accueil" className="font-syne font-extrabold text-blanc-casse text-lg mr-4 whitespace-nowrap">
          S54
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm font-dm text-blanc-casse/80 hover:text-or-mat transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button variant="ctaNav" size="sm" className="ml-3 hidden lg:inline-flex" asChild>
          <a href="#contact">Audit gratuit</a>
        </Button>

        {/* Mobile toggle */}
        <button
          className="lg:hidden ml-2 text-blanc-casse"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-3 pb-3 flex flex-col gap-2 border-t border-blanc-casse/10 pt-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 text-sm font-dm text-blanc-casse/80 hover:text-or-mat transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="cta" size="sm" className="mt-2" asChild>
            <a href="#contact" onClick={() => setMobileOpen(false)}>Audit gratuit</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
