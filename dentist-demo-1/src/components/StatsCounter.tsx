const StatsCounter = () => {
  const stats = [
    {
      id: 1,
      value: "17+",
      label: "Years of Experience",
      description: "Providing quality dental care"
    },
    {
      id: 2,
      value: "10000+",
      label: "Surgeries Completed",
      description: "Successful dental procedures"
    },
    {
      id: 3,
      value: "20+",
      label: "Awards Winning",
      description: "Recognized for excellence"
    },
    {
      id: 4,
      value: "100%",
      label: "Patients Satisfaction",
      description: "Our top priority"
    }
  ];

  return (
    <div className="bg-primary pt-16 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
          {stats.map((stat, index) => (
            <div key={stat.id} className={`text-center text-white ${index === 0 ? '' : 'pl-8'}`}>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.value}</div>
              <div className="text-lg font-bold mb-1">{stat.label}</div>
              <div className="text-white/80 text-sm hidden md:block">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;
