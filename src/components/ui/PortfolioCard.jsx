import { ArrowUpRight } from "lucide-react";
import Card from "./Card";
import Button from "./Button";

export default function PortfolioCard({ project }) {
  return (
    <Card className="group overflow-hidden p-0">

      {/* Imagen */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-64
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* Contenido */}
      <div className="p-8">

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 text-slate-400 leading-7">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-3 mt-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-3
                py-1
                rounded-full
                bg-cyan-500/10
                text-cyan-400
                text-sm
                font-medium
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botón */}
        <div className="mt-8">
          <Button>
            Ver Proyecto
            <ArrowUpRight size={18} />
          </Button>
        </div>

      </div>

    </Card>
  );
}