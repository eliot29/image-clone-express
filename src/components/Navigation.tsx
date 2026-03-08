import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Solutions", href: "#prestations" },
  { label: "Cas concrets", href: "#cas" },
  { label: "Pourquoi S54 ?", href: "#approche" },
  { label: "Méthode", href: "#methode" },
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
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-full px-6 py-3 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-navy/70 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo - centered on mobile */}
        <a href="#accueil" className="flex-shrink-0 md:mr-4">
          <img
            src="/logo-semaine54-blanc-new.svg"
            alt="Semaine 54"
            className="h-10 md:h-14 w-auto"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center justify-between flex-1">
          <div className="flex items-center justify-around flex-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-2 py-1.5 text-lg font-dm text-blanc-casse/80 hover:text-or-mat transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Button variant="ctaNav" size="default" className="ml-3 flex-shrink-0 text-base" asChild>
            <a href="#contact">Audit gratuit</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-blanc-casse p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-3 pb-4 flex flex-col gap-1 border-t border-blanc-casse/20 pt-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2.5 text-base font-dm text-blanc-casse hover:text-or-mat hover:bg-blanc-casse/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button variant="cta" size="default" className="mt-3 mx-4" asChild>
            <a href="#contact" onClick={() => setMobileOpen(false)}>Audit gratuit</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
