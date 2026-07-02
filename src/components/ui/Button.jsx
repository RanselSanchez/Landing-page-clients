export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-cyan-400 text-slate-950 shadow-cyan-500/20 hover:bg-cyan-300",
    secondary: "bg-slate-800 text-white hover:bg-slate-700",
    outline:
      "border border-slate-700 bg-slate-950/30 text-white hover:border-cyan-400 hover:bg-cyan-400/10",
  };

  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-7 text-base sm:text-lg",
  };

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
