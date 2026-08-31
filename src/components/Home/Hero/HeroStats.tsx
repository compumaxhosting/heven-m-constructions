export const stats = [
  { value: '30', label: 'Years building' },
  { value: '180+', label: 'Homes & spaces' },
  { value: '42', label: 'Craftspeople' },
  { value: '9.8', label: 'Avg. client rating' },
];

export default function HeroStats() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="glass rounded-2xl px-5 py-4">
          <div className="font-display text-3xl text-forest">{stat.value}</div>
          <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-olive">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
