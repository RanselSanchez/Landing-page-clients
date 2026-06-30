import { Check } from "lucide-react";

export default function FeatureList({ items }) {
  return (
    <div className="flex flex-wrap gap-6">

      {items.map((item) => (

        <div
          key={item}
          className="flex items-center gap-2 text-slate-300"
        >
          <Check
            size={18}
            className="text-cyan-400"
          />

          <span>{item}</span>

        </div>

      ))}

    </div>
  );
}