const LogoHeader = () => {
  return (
    <section className="bg-blanc-casse flex items-center justify-center py-3 md:py-4 px-4">
      <img
        src="/logo-semaine54.png?v=4"
        alt="Semaine 54 — Partenaire IA au service du temps des PME"
        className="max-w-[280px] md:max-w-[400px] lg:max-w-[500px] w-full h-auto block mx-auto"
        style={{ mixBlendMode: "multiply" }}
      />
    </section>
  );
};

export default LogoHeader;
