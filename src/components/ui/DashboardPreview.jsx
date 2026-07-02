import { Calendar, Star, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardPreview() {
  const stats = [
    { label: "Clientes", value: "150", icon: <Users className="h-5 w-5 text-cyan-300" /> },
    { label: "Ventas", value: "+35%", icon: <TrendingUp className="h-5 w-5 text-emerald-300" /> },
    { label: "Calificación", value: "4.9", icon: <Star className="h-5 w-5 text-amber-300" /> },
    { label: "Reservas", value: "24", icon: <Calendar className="h-5 w-5 text-blue-300" /> },
  ];

  const cards = [
    { title: "Clientes", value: "150+", color: "text-cyan-300" },
    { title: "Ventas", value: "+35%", color: "text-emerald-300" },
    { title: "Proyectos", value: "30", color: "text-blue-300" },
    { title: "Reviews", value: "5★", color: "text-amber-300" },
  ];

  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="w-full max-w-xl rounded-2xl border border-slate-700/70 bg-slate-900/85 p-5 shadow-2xl shadow-cyan-950/30 ring-1 ring-white/5 backdrop-blur-xl sm:p-7 lg:p-8"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Dashboard</p>
          <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">RS Web Studio</h3>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          Online
        </div>
      </div>

      <div className="space-y-3">
        {stats.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/45 p-4 transition-colors duration-300 hover:border-cyan-400/50"
          >
            <div className="flex items-center gap-3 text-slate-200">
              {item.icon}
              <span>{item.label}</span>
            </div>
            <span className="text-lg font-black text-white">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
        {cards.map((card) => (
          <div key={card.title} className="rounded-xl border border-slate-800 bg-slate-950/35 p-4">
            <p className="text-sm text-slate-400">{card.title}</p>
            <h3 className={`mt-1 text-2xl font-black ${card.color}`}>{card.value}</h3>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
