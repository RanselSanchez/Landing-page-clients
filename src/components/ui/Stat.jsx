export default function Stat({ value, label }) {
  return (
    <div>
      <h3 className="text-3xl font-bold text-white">
        {value}
      </h3>

      <p className="text-slate-400">
        {label}
      </p>
    </div>
  );
}