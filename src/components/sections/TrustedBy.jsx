import Container from "../ui/Container";

export default function TrustedBy() {
  const companies = ["TechNova", "Nova Café", "Elite Gym", "AutoPro", "Dental Plus"];

  return (
    <section className="border-y border-slate-800/80 bg-slate-950/80 py-12">
      <Container>
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.24em] text-slate-500 sm:text-sm">
          Empresas que confían en nuestro trabajo
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {companies.map((company) => (
            <span
              key={company}
              className="text-xl font-black text-slate-500 transition-colors duration-300 hover:text-white sm:text-2xl"
            >
              {company}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
