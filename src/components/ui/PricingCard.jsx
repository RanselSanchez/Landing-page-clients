import Card from "./Card";
import Button from "./Button";
import { Check } from "lucide-react";

export default function PricingCard({ plan }) {
  return (
    <Card
      className={`relative h-full ${
        plan.featured ? "border-cyan-400 shadow-2xl shadow-cyan-500/15" : ""
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-5 py-2 text-sm font-black text-slate-950">
          Más Popular
        </span>
      )}

      <h3 className="text-3xl font-black text-white">{plan.name}</h3>
      <p className="mt-3 text-slate-400">{plan.description}</p>

      <div className="mt-8">
        <span className="text-5xl font-black text-cyan-300">{plan.price}</span>
      </div>

      <ul className="mt-9 space-y-4">
        {plan.features.map((item) => (
          <li key={item} className="flex items-start gap-3 text-slate-300">
            <Check size={18} className="mt-1 shrink-0 text-cyan-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-9">
        <Button className="w-full">Elegir Plan</Button>
      </div>
    </Card>
  );
}
