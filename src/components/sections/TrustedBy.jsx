import Container from "../ui/Container";

export default function TrustedBy() {
  const companies = [
    "TechNova",
    "Nova Café",
    "Elite Gym",
    "AutoPro",
    "Dental Plus",
  ];

  return (
    <section className="py-16 border-y border-slate-800">
      <Container>

        <p className="text-center text-slate-400 uppercase tracking-widest text-sm mb-10">
          Empresas que confían en nuestro trabajo
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12">

          {companies.map((company) => (
            <span
              key={company}
              className="text-2xl font-bold text-slate-500 hover:text-white transition-colors duration-300"
            >
              {company}
            </span>
          ))}

        </div>

      </Container>
    </section>
  );
}