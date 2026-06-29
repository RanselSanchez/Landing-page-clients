import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Container from "../ui/Container";
import DashboardPreview from "../ui/DashboardPreview";
import Stat from "../ui/Stat";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-24"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Columna izquierda */}
          <div>

            <Badge>
              🚀 Desarrollo Web Profesional
            </Badge>

            <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight mt-8">
              Creamos páginas web que convierten visitantes en clientes.
            </h1>

            <p className="mt-6 text-slate-400 text-lg max-w-xl">
              Diseñamos sitios web modernos, rápidos y optimizados para ayudar a empresas a crecer y destacar en internet.
            </p>

            <div className="flex gap-4 mt-8">
              <Button>
                Solicitar Cotización
              </Button>

              <Button variant="outline">
                Ver Portafolio
              </Button>
            </div>

            <div className="flex gap-10 mt-12">
              <Stat value="+150" label="Clientes" />
              <Stat value="+30" label="Proyectos" />
              <Stat value="5★" label="Calificación" />
            </div>

          </div>

          {/* Columna derecha */}
          <DashboardPreview />

        </div>
      </Container>
    </section>
  );
}