import { ArrowUpRight } from "lucide-react";
import Card from "./Card";
import Button from "./Button";

export default function PortfolioCard({ project }) {
  return (
    <Card className="group overflow-hidden p-0">
      <div className="overflow-hidden bg-slate-800">
        <img
          src={project.image}
          alt={project.title}
          className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-7">
        <h3 className="text-2xl font-black text-white">{project.title}</h3>
        <p className="mt-4 leading-7 text-slate-400">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-bold text-cyan-300 ring-1 ring-cyan-400/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7">
          <Button>
            Ver Proyecto
            <ArrowUpRight size={18} />
          </Button>
        </div>
      </div>
    </Card>
  );
}
