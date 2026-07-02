export default function Stat({ value, label }) {
  return (
    <div>
      <h3 className="text-2xl font-black text-white sm:text-3xl">{value}</h3>
      <p className="mt-1 text-sm text-slate-400 sm:text-base">{label}</p>
    </div>
  );
}
