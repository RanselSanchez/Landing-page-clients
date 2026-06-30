export default function IconBox({ children }) {
  return (
    <div
      className="
        w-16
        h-16
        rounded-2xl
        bg-cyan-500/10
        text-cyan-400
        flex
        items-center
        justify-center
        transition-all
        duration-300
        group-hover:scale-110
        group-hover:rotate-3
      "
    >
      {children}
    </div>
  );
}