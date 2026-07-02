import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import PortfolioCard from "../ui/PortfolioCard";
import portfolio from "../../config/portfolio";

export default function Portfolio() {
  return (
    <section id="portafolio" className="bg-slate-950 py-24 sm:py-28">
      <Container>
        <SectionTitle
          subtitle="Nuestro Portafolio"
          title="Proyectos que impulsan negocios"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {portfolio.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
