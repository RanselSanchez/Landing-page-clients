import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur transition-colors duration-300 hover:border-cyan-400/50">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
      >
        <h3 className="text-base font-bold text-white sm:text-lg">{question}</h3>
        <ChevronDown
          className={`shrink-0 text-cyan-300 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-5 leading-7 text-slate-400 sm:px-6 sm:pb-6">{answer}</p>
      </div>
    </div>
  );
}
