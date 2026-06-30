import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Container from "../ui/Container";
import DashboardPreview from "../ui/DashboardPreview";
import Stats from "../ui/Stats";
import BackgroundGlow from "../ui/BackgroundGlow";
import { motion } from "framer-motion";

import {
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
} from "../../animations";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden min-h-screen flex items-center pt-24"

    >
      <BackgroundGlow />
      <Container>
        <motion.div
          className="grid lg:grid-cols-2 gap-20 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >

          {/* Columna izquierda */}
          <motion.div variants={fadeLeft}>

            <Badge>
              🚀 Desarrollo Web Profesional
            </Badge>

            <h1
              className=" mt-8 max-w-2xl text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              Creamos páginas web que convierten visitantes en clientes.
            </h1>

            <p className=" mt-8 max-w-xl text-lg leading-8 text-slate-400">
              Diseñamos sitios web modernos, rápidos y optimizados para ayudar a empresas a crecer y destacar en internet.
            </p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Button>
                Solicitar Cotización
              </Button>

              <Button variant="outline">
                Ver Portafolio
              </Button>
            </motion.div>
            <div className=" flex flex-wrap gap-6 mt-10 text-slate-300 font-medium">

              <span className="flex items-center gap-2">
                ✔ SEO
              </span>

              <span className="flex items-center gap-2">
                ✔ Responsive
              </span>

              <span className="flex items-center gap-2">
                ✔ Alto rendimiento
              </span>

            </div>
           <div className="mt-12 border-t border-slate-800"></div>
            <motion.div
              variants={fadeUp}
              className="flex gap-10 mt-12"
            >
              <Stats />
            </motion.div>

          </motion.div>

          {/* Columna derecha */}
          <motion.div variants={fadeRight}>
            <DashboardPreview />
          </motion.div>

        </motion.div>
      </Container>
    </section >
  );
}