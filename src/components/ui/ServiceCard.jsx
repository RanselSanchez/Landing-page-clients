import { LayoutPanelTop, Monitor, ShoppingCart } from "lucide-react";
import Card from "./Card";

const icons = {
  monitor: Monitor,
  website: LayoutPanelTop,
  ecommerce: ShoppingCart,
};

export default function ServiceCard({ service }) {
  const Icon = icons[service.icon];

  return (
    <Card className="group h-full">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20">
        {Icon && <Icon size={28} />}
      </div>

      <h3 className="text-2xl font-black text-white">{service.title}</h3>

      <p className="mt-4 leading-7 text-slate-400">{service.description}</p>

      <button className="mt-7 font-bold text-cyan-300 transition-colors group-hover:text-cyan-200">
        Más información →
      </button>
    </Card>
  );
}
