import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";
import services from "../../config/services";

export default function Services() {
  return (
    <section id="servicios" className="border-t border-slate-900 bg-slate-950 py-24 sm:py-28">
      <Container>
        <SectionTitle
          subtitle="Nuestros Servicios"
          title="Soluciones digitales para hacer crecer tu negocio"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
