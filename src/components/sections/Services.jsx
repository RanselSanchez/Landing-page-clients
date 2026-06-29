import business from "../../config/busimess";
import { Monitor, ShoppingCart, LayoutPanelTop } from "lucide-react";

const icons = [
  <Monitor size={40} />,
  <LayoutPanelTop size={40} />,
  <ShoppingCart size={40} />
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Nuestros Servicios
          </h2>

          <p className="text-gray-500 mt-4">
            Soluciones digitales para hacer crecer tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {business.services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-6">
                {icons[index]}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>

              <button className="mt-6 text-blue-600 font-semibold">
                Más información →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}