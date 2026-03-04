const LogoHeader = () => {
  return (
    <section className="bg-blanc-casse flex items-center justify-center py-16 md:py-24">
      <img
        src="/logo-semaine54.png"
        alt="Semaine 54 — Partenaire IA au service du temps des PME"
        className="w-[280px] md:w-[420px] lg:w-[520px] h-auto"
        style={{ filter: "brightness(0) saturate(100%) invert(15%) sepia(30%) saturate(1200%) hue-rotate(185deg) brightness(92%) contrast(92%)" }}
      />
    </section>
  );
};

export default LogoHeader;
