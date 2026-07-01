import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import PortfolioCard from "../ui/PortfolioCard";
import portfolio from "../../config/portfolio";

export default function Portfolio() {
  return (
    <section
      id="portafolio"
      className="py-28 bg-slate-950"
    >
      <Container>

        <SectionTitle
          subtitle="Nuestro Portafolio"
          title="Proyectos que impulsan negocios"
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {portfolio.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}