export function StatsSection() {
  const stats = [
    {
      value: "10+",
      label: "Clienti",
      sublabel: "Soddisfatti",
    },
    {
      value: "400k+",
      label: "Euro",
      sublabel: "Raccolti",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 p-8 text-center hover:border-nextfund-blue/30 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="text-4xl md:text-5xl font-bold text-nextfund-blue mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-900">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
