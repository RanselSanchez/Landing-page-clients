import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import process from "../../config/process";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Process() {
  return (
    <section
      id="proceso"
      className="py-28 bg-slate-50"
    >
      <Container>

        <SectionTitle
          subtitle="Cómo Trabajamos"
          title="Un proceso simple, claro y enfocado en resultados"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {process.map((step, index) => (
            <div
              key={step.id}
              className="relative group"
            >

              <div
                className="
                  bg-white
                  rounded-3xl
                  p-8
                  border
                  border-slate-200
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                  h-full
                "
              >

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-cyan-500/10
                    text-cyan-500
                    flex
                    items-center
                    justify-center
                    text-2xl
                    font-black
                    mb-6
                  "
                >
                  {step.number}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {step.title}
                </h3>

                <p className="text-slate-500 leading-7">
                  {step.description}
                </p>

              </div>

              {index < process.length - 1 && (
                <>
                  <div className="hidden lg:flex absolute top-1/2 -right-7 text-cyan-400">
                    <ArrowRight size={28} />
                  </div>

                  <div className="flex lg:hidden justify-center my-6 text-cyan-400">
                    <ArrowDown size={28} />
                  </div>
                </>
              )}

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}