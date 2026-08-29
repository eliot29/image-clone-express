import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Solutions", href: "#prestations" },
  { label: "Cas concrets", href: "#cas" },
  { label: "Pourquoi moi", href: "#approche" },
  { label: "Méthode", href: "#methode" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const ids = navLinks.map((l) => l.href.slice(1));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-full px-6 py-2 max-w-6xl mx-auto ${
        scrolled
          ? "bg-navy/90 backdrop-blur-md shadow-lg"
          : "bg-navy shadow-md"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo - centered on mobile */}
        <a href="#accueil" className="flex-shrink-0 md:mr-4">
          <img
            src="/logo-semaine54-blanc-new.svg"
            alt="Semaine 54"
            className="h-9 md:h-10 w-auto"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center justify-end flex-1">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-1 py-1.5 text-[15px] font-dm transition-colors whitespace-nowrap hover:text-or-mat ${
                  activeId === link.href.slice(1) ? "text-or-mat" : "text-blanc-casse/80"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <Button variant="ctaNav" size="default" className="ml-8 flex-shrink-0 text-[15px]" asChild>
            <a href="#contact">Être rappelé</a>
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
              className={`px-4 py-2.5 text-[15px] font-dm hover:text-or-mat hover:bg-blanc-casse/5 rounded-lg transition-colors ${
                activeId === link.href.slice(1) ? "text-or-mat" : "text-blanc-casse"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button variant="cta" size="default" className="mt-3 mx-4" asChild>
            <a href="#contact" onClick={() => setMobileOpen(false)}>Être rappelé</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
