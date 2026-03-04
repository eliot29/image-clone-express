const LogoHeader = () => {
  return (
    <section className="bg-blanc-casse flex items-center justify-center pt-16 md:pt-20 pb-6 md:pb-8 px-4">
      <div className="max-w-[280px] md:max-w-[400px] lg:max-w-[500px] w-full overflow-hidden mx-auto">
        <img
          src="/logo-semaine54.png?v=4"
          alt="Semaine 54 — Partenaire IA au service du temps des PME"
          className="w-full h-auto block translate-y-[8%]"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>
    </section>
  );
};

export default LogoHeader;
