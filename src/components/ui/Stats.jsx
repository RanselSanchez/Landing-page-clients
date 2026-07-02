import Stat from "./Stat";
import stats from "../../config/stats";

export default function Stats() {
  return (
    <div className="grid grid-cols-3 gap-4 sm:gap-8">
      {stats.map((stat) => (
        <Stat key={stat.id} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}
