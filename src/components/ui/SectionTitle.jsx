export default function SectionTitle({ title, subtitle, align = "left" }) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
        {subtitle}
      </p>

      <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}
