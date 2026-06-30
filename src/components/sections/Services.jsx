import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";
import services from "../../config/services";

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 bg-white"
    >
      <Container>

        <SectionTitle
          subtitle="Nuestros Servicios"
          title="Soluciones digitales para hacer crecer tu negocio"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}