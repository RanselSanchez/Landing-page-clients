import { Users, TrendingUp, Star, Calendar } from "lucide-react";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function DashboardPreview() {
    const stats = [
        {
            label: "Clientes",
            value: "150",
            icon: <Users className="h-5 w-5 text-cyan-400" />,
        },
        {
            label: "Ventas",
            value: "+35%",
            icon: <TrendingUp className="h-5 w-5 text-green-400" />,
        },
        {
            label: "Calificación",
            value: "4.9",
            icon: <Star className="h-5 w-5 text-yellow-400" />,
        },
        {
            label: "Reservas",
            value: "24",
            icon: <Calendar className="h-5 w-5 text-purple-400" />,
        },
    ];

    const cards = [
        {
            title: "Clientes",
            value: "150+",
            color: "text-cyan-400",
        },
        {
            title: "Ventas",
            value: "+35%",
            color: "text-green-400",
        },
        {
            title: "Proyectos",
            value: "30",
            color: "text-blue-400",
        },
        {
            title: "Reviews",
            value: "5★",
            color: "text-yellow-400",
        },
    ];

    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;

        if (!card) return;

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = ((y / rect.height) - 0.5) * -12;

        card.style.transform = `
    perspective(1000px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
  `;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;

        cardRef.current.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            transition={{ duration: 0.2 }}
            className="rounded-3xl border border-slate-700/50 bg-slate-900/70 backdrop-blur-2xl p-8 shadow-2xl transition-transform duration-200"
        >

            <div className="flex items-center justify-between mb-6">
                <div>
                    <p className="text-sm text-slate-400">
                        Dashboard
                    </p>

                    <h3 className="text-2xl font-bold">
                        RS Web Studio
                    </h3>
                </div>

                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

                    <span className="text-sm text-slate-400">
                        Online
                    </span>
                </div>
            </div>

            <div className="space-y-4">

                {stats.map((item) => (

                    <div
                        key={item.label}
                        className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-800/60 p-4 transition-all duration-300 hover:border-cyan-400 hover:translate-x-1"
                    >

                        <div className="flex items-center gap-3">
                            {item.icon}
                            <span>{item.label}</span>
                        </div>

                        <span className="text-xl font-bold text-cyan-400">
                            {item.value}
                        </span>

                    </div>

                ))}

            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">

                {cards.map((card) => (

                    <div
                        key={card.title}
                        className="rounded-2xl border border-slate-700 bg-slate-800/50 p-4"
                    >

                        <p className="text-sm text-slate-400">
                            {card.title}
                        </p>

                        <h3 className={`text-2xl font-bold mt-2 ${card.color}`}>
                            {card.value}
                        </h3>

                    </div>

                ))}

            </div>

        </motion.div>
    );
}