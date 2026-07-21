interface Props {
  stats: {
    experience: string;
    projects: string;
    countries: string;
  };
}

export default function HeroStats({ stats }: Props) {
  const items = [
    { value: stats.experience, label: "Experience" },
    { value: stats.projects, label: "Projects" },
    { value: stats.countries, label: "Countries" },
  ];

  return (
    <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
      {items.map((item) => (
        <div key={item.label}>
          <h3 className="text-2xl font-bold">{item.value}</h3>
          <p className="mt-1 text-sm text-slate-400">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
