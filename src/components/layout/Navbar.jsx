import Container from "../ui/Container";
import Button from "../ui/Button";
import site from "../../config/site";
import useScroll from "../../hooks/useScroll";

export default function Navbar() {

  const scrolled = useScroll();

  return (
    <header
      className={`
    fixed
    top-0
    left-0
    w-full
    z-50
    transition-all
    duration-300
    ${scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 shadow-lg"
          : "bg-transparent"
        }
  `}
    >
      <Container>
        <nav className="flex items-center justify-between py-6">

          <h1 className="text-2xl font-black tracking-tight">
            <span className="text-white">
              RS
            </span>

            <span className="text-cyan-400">
              Web
            </span>

            <span className="text-white">
              Studio
            </span>
          </h1>

          <ul className="hidden md:flex items-center gap-8">

            {site.navigation.map((item) => (

              <li key={item.label}>

                <a
                  href={item.href}
                  className="text-slate-400 hover:text-white transition-all duration-300 font-medium"
                >
                  {item.label}
                </a>

              </li>

            ))}

          </ul>

          <Button variant="primary">
            Cotizar
          </Button>

        </nav>
      </Container>
    </header>
  );
}