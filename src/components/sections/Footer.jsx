import Container from "../ui/Container";
import { Mail, Phone } from "lucide-react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import business from "../../config/busimess";
import services from "../../config/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-black text-white">{business.name}</h3>
            <p className="mt-5 leading-7 text-slate-400">{business.slogan}</p>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-black text-white">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id} className="text-slate-400 transition-colors hover:text-cyan-300">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-black text-white">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400">
                <Phone size={18} />
                <span>{business.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={18} />
                <span>{business.email}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-black text-white">Contáctanos</h4>
            <div className="flex gap-3">
              <a href={business.linkedin} target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white transition-colors hover:bg-cyan-500" aria-label="LinkedIn">
                <FaLinkedinIn size={18} />
              </a>
              <a href={`mailto:${business.email}`} className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white transition-colors hover:bg-cyan-500" aria-label="Correo">
                <Mail size={18} />
              </a>
              <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white transition-colors hover:bg-emerald-500" aria-label="WhatsApp">
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-7 text-center">
          <p className="text-slate-500">© {year} {business.name}. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
