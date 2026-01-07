const stats = [
  {
    value: "82%",
    label: "of problems resolved on the phone",
  },
  {
    value: "$29",
    label: "for a 15-minute video diagnosis",
  },
  {
    value: "3 min",
    label: "average wait time",
  },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-20 bg-slate-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-semibold text-soft-teal mb-2">
                {stat.value}
              </div>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
