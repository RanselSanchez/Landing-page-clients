import Stat from "./Stat";
import stats from "../../config/stats";

export default function Stats() {
  return (
    <div className="flex gap-10">
      {stats.map((stat) => (
        <Stat
          key={stat.id}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
}