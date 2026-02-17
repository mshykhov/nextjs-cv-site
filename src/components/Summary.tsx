import config from "@/data/resume";

export default function Summary() {
  return (
    <section className="mb-10">
      <h2 className="section-title">Summary</h2>
      <div className="space-y-3">
        {config.summary.map((text, i) => (
          <p key={i} className="text-sm leading-relaxed opacity-85">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
