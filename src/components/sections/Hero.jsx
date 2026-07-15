import { ArrowRight, CheckCircle2 } from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Container from "../ui/Container";
import DashboardPreview from "../ui/DashboardPreview";
import Stats from "../ui/Stats";
import BackgroundGlow from "../ui/BackgroundGlow";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp, staggerContainer } from "../../animations";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36"
    >
      <BackgroundGlow />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] xl:gap-20"
        >
          <motion.div variants={fadeLeft} className="max-w-3xl">
            <Badge>Desarrollo Web Profesional</Badge>

            <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.04] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Creamos páginas web que convierten visitantes en clientes.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Diseñamos sitios web modernos, rápidos y optimizados para ayudar a
              empresas a crecer y destacar en internet.
            </p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href="#contacto">
                 <Button size="lg" className="w-full sm:w-auto">
                Solicitar Cotización
                <ArrowRight size={20} />
              </Button>
              </a>
            
              <a href="#portafolio">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Ver Portafolio
              </Button>
              </a>
            
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-300 sm:text-base">
              {["SEO", "Responsive", "Alto rendimiento"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-cyan-400" />
                  {item}
                </span>
              ))}
            </div>

            <div className="my-10 h-px max-w-xl bg-slate-800" />

            <motion.div variants={fadeUp}>
              <Stats />
            </motion.div>
          </motion.div>

          <motion.div variants={fadeRight} className="flex justify-center lg:justify-end">
            <DashboardPreview />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
