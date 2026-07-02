import Container from "../ui/Container";
import Button from "../ui/Button";
import { ArrowRight, CheckCircle2, MessageCircle, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-slate-900 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-950/75 px-6 py-12 text-center shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:px-10 lg:px-16 lg:py-16">
          <div className="absolute inset-x-0 top-0 mx-auto h-48 max-w-3xl bg-cyan-500/10 blur-[100px]" />

          <div className="relative">
            <span className="inline-flex rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300 ring-1 ring-cyan-400/20">
              Comienza hoy
            </span>

            <h2 className="mx-auto mt-7 max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              ¿Listo para impulsar tu negocio?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Creamos páginas web rápidas, modernas y optimizadas para ayudarte a
              conseguir más clientes.
            </p>

            <div className="mt-9">
              <Button size="lg">
                Solicitar Cotización
                <ArrowRight size={20} />
              </Button>
            </div>

            <div className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-semibold text-slate-300 sm:text-base">
              <span className="inline-flex items-center gap-2"><Zap size={17} className="text-cyan-300" /> Respuesta en menos de 24 horas</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-cyan-300" /> Atención personalizada</span>
              <span className="inline-flex items-center gap-2"><MessageCircle size={17} className="text-cyan-300" /> WhatsApp</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
