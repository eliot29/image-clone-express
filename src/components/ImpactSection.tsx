import { useCountUpInt } from "@/hooks/use-count-up";

const ImpactSection = () => {
  const { ref, value } = useCountUpInt(120);

  return (
    <section id="impact" className="bg-navy py-16 md:py-24">
      <div className="section-shell">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 text-left">
          <span
            ref={ref as React.RefObject<HTMLSpanElement>}
            className="font-dm font-extrabold text-or-mat text-[72px] lg:text-[120px] leading-none tabular-nums"
          >
            {value}
          </span>
          <div>
            <p className="font-dm font-bold text-blanc-casse text-[24px] leading-tight">
              heures par an
            </p>
            <p className="font-dm text-blanc-casse/70 text-[15px] mt-2 max-w-md leading-relaxed">
              30 minutes gagnées par jour ouvré, sur 240 jours travaillés
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
