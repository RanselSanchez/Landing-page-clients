export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
      {children}
    </span>
  );
}
