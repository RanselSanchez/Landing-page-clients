import Container from "../ui/Container";

export default function TrustedBy() {
 const features = [
    "Diseño personalizado",
    "Optimización móvil",
    "Carga rápida",
    "Soporte inicial",
  ];

  return (
    <section className="border-y border-slate-800/80 bg-slate-950/80 py-12">
      <Container>
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.24em] text-slate-500 sm:text-sm">
          Lo que incluye cada proyecto
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {features.map((feature) => (
            <span
              key={feature}
              className="text-xl font-black text-slate-500 transition-colors duration-300 hover:text-white sm:text-2xl"
            >
              {feature}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
