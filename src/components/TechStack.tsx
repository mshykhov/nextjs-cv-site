import config from "@/data/resume";

export default function TechStack() {
  return (
    <section className="mb-10">
      <h2 className="section-title">Skills</h2>
      <div className="space-y-2">
        {config.skills.map((category) => (
          <div key={category.name} className="flex text-sm">
            <span className="font-medium w-40 shrink-0">{category.name}</span>
            <span className="opacity-85">
              {category.items.join(", ")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
