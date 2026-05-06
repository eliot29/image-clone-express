import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface InternalLink {
  label: string;
  to: string;
}

interface InternalLinksProps {
  links: InternalLink[];
  variant?: "light" | "dark";
}

const InternalLinks = ({ links, variant = "light" }: InternalLinksProps) => {
  const bg = variant === "dark" ? "bg-navy" : "bg-blanc-casse";
  return (
    <section className={`${bg} py-8`}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl lg:max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {links.map((l) => (
              <Button key={l.to} variant="ctaOutline" size="default" asChild>
                <Link to={l.to}>
                  {l.label}
                  <ArrowRight size={16} />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;