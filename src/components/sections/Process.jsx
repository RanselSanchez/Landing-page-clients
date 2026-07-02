import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import process from "../../config/process";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Process() {
  return (
    <section id="proceso" className="bg-slate-950 py-24 sm:py-28">
      <Container>
        <SectionTitle
          subtitle="Cómo Trabajamos"
          title="Un proceso simple, claro y enfocado en resultados"
        />

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, index) => (
            <div key={step.id} className="relative group">
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/65 p-7 shadow-lg shadow-slate-950/20 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl font-black text-cyan-300">
                  {step.number}
                </div>

                <h3 className="text-xl font-black text-white">{step.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{step.description}</p>
              </div>

              {index < process.length - 1 && (
                <>
                  <div className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-cyan-400 lg:flex">
                    <ArrowRight size={24} />
                  </div>
                  <div className="flex justify-center py-5 text-cyan-400 lg:hidden">
                    <ArrowDown size={24} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
