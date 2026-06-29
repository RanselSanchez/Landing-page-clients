import { Users, TrendingUp, Star, Calendar } from "lucide-react";

export default function DashboardPreview() {
  const stats = [
    {
      icon: <Users size={18} />,
      label: "Clientes",
      value: "150",
    },
    {
      icon: <TrendingUp size={18} />,
      label: "Ventas",
      value: "+35%",
    },
    {
      icon: <Star size={18} />,
      label: "Calificación",
      value: "4.9",
    },
    {
      icon: <Calendar size={18} />,
      label: "Reservas",
      value: "24",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900/80 backdrop-blur-xl p-6 shadow-2xl">
      <h3 className="text-xl font-bold mb-6">
        RS Dashboard
      </h3>

      <div className="space-y-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between rounded-xl bg-slate-800 p-4"
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span>{item.label}</span>
            </div>

            <span className="font-bold text-cyan-400">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}