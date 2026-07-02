import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import PricingCard from "../ui/PricingCard";
import pricing from "../../config/pricing";

export default function Pricing() {
  return (
    <section id="precios" className="bg-slate-900 py-24 sm:py-28">
      <Container>
        <SectionTitle
          subtitle="Nuestros Planes"
          title="Escoge el plan ideal para tu negocio"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Container>
    </section>
  );
}
