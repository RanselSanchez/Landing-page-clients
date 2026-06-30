import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Container from "../ui/Container";
import DashboardPreview from "../ui/DashboardPreview";
import Stat from "../ui/Stat";
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
          <div>

            <Badge>
              🚀 Desarrollo Web Profesional
            </Badge>

            <h1 className="max-w-2xl text-5xl lg:text-7xl font-black leading-tight mt-8">
              Creamos páginas web que convierten visitantes en clientes.
            </h1>

            <p className="mt-6 text-slate-400 text-lg max-w-xl">
              Diseñamos sitios web modernos, rápidos y optimizados para ayudar a empresas a crecer y destacar en internet.
            </p>

            <motion.div
              variants={fadeUp}
              className="flex gap-4 mt-8"
            >
              <Button>
                Solicitar Cotización
              </Button>

              <Button variant="outline">
                Ver Portafolio
              </Button>
          </motion.div>
          <div className="flex flex-wrap gap-6 mt-10 text-slate-300">

            <span>✔ SEO</span>

            <span>✔ Responsive</span>

            <span>✔ Alto rendimiento</span>

          </div>

            <motion.div
              variants={fadeUp}
              className="flex gap-10 mt-12"
            >
            <Stat value="+150" label="Clientes" />
            <Stat value="+30" label="Proyectos" />
            <Stat value="5★" label="Calificación" />
          </motion.div>

        </div>

        {/* Columna derecha */}
        <motion.div variants={fadeRight}>
          <DashboardPreview />
        </motion.div>

      </motion.div>
    </Container>
    </section >
  );
}