import Container from "../ui/Container";
import Button from "../ui/Button";
import site from "../../config/site";
import useScroll from "../../hooks/useScroll";

export default function Navbar() {
  const scrolled = useScroll();

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "border-b border-slate-800/80 bg-slate-950/85 shadow-lg shadow-slate-950/30 backdrop-blur-xl"
          : "bg-slate-950/35 backdrop-blur-sm"
        }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between gap-4">
          <a href="#inicio" className="shrink-0 text-xl font-black tracking-tight sm:text-2xl">
            <span className="text-white">RS</span>
            <span className="text-cyan-400">Web</span>
            <span className="text-white">Studio</span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {site.navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/1829418280?text=Hola,%20quiero%20una%20cotización"
            target="_blank"
            rel="noreferrer"
          >
            <Button>
              Cotizar
            </Button>
          </a>
        </nav>
      </Container>
    </header>
  );
}
