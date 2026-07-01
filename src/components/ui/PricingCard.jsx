import Card from "./Card";
import Button from "./Button";
import { Check } from "lucide-react";

export default function PricingCard({ plan }) {
  return (
    <Card
      className={`
        relative
        h-full
        transition-all
        duration-300
        hover:-translate-y-2

        ${
          plan.featured
            ? "border-cyan-400 shadow-cyan-500/20 shadow-2xl"
            : ""
        }
      `}
    >
      {plan.featured && (
        <span
          className="
            absolute
            -top-4
            left-1/2
            -translate-x-1/2
            rounded-full
            bg-cyan-500
            px-5
            py-2
            text-sm
            font-semibold
            text-white
          "
        >
          Más Popular
        </span>
      )}

      <h3 className="text-3xl font-bold text-white">
        {plan.name}
      </h3>

      <p className="mt-3 text-slate-400">
        {plan.description}
      </p>

      <div className="mt-8">
        <span className="text-5xl font-black text-cyan-400">
          {plan.price}
        </span>
      </div>

      <ul className="space-y-4 mt-10">
        {plan.features.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 text-slate-300"
          >
            <Check
              size={18}
              className="text-cyan-400"
            />

            {item}
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Button className="w-full">
          Elegir Plan
        </Button>
      </div>
    </Card>
  );
}