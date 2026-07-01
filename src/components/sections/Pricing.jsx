import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import PricingCard from "../ui/PricingCard";
import pricing from "../../config/pricing";

export default function Pricing() {
  return (
    <section
      id="precios"
      className="py-28 bg-slate-900"
    >
      <Container>

        <SectionTitle
          subtitle="Nuestros Planes"
          title="Escoge el plan ideal para tu negocio"
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {pricing.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}