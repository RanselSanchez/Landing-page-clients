import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import faq from "../../config/faq";
import Accordion from "../ui/Accordion";

export default function FAQ() {
  return (
    <section id="faq" className="bg-slate-950 py-24 sm:py-28">
      <Container>
        <SectionTitle
          subtitle="Preguntas Frecuentes"
          title="Respondemos las dudas más comunes"
        />

        <div className="mx-auto mt-14 max-w-4xl space-y-4">
          {faq.map((item) => (
            <Accordion key={item.id} question={item.question} answer={item.answer} />
          ))}
        </div>
      </Container>
    </section>
  );
}
