export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-slate-800/80 bg-slate-900/70 p-7 shadow-xl shadow-slate-950/30 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/70 ${className}`}
    >
      {children}
    </div>
  );
}
