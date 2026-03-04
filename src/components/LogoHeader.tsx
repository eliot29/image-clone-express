const LogoHeader = () => {
  return (
    <section className="bg-blanc-casse flex items-center justify-center py-4 md:py-6">
      <div className="w-full flex items-center justify-center overflow-hidden">
        <div className="w-[400px] md:w-[580px] lg:w-[720px] mx-auto">
          <img
            src="/logo-semaine54.png?v=4"
            alt="Semaine 54 — Partenaire IA au service du temps des PME"
            className="w-full h-auto block scale-[1.8] origin-center"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
      </div>
    </section>
  );
};

export default LogoHeader;
