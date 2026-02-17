import config from "@/data/resume";

export default function Education() {
  return (
    <section className="mb-10">
      <h2 className="section-title">Education</h2>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <p className="text-sm font-medium">{config.education.degree}</p>
          <p className="text-sm text-muted">{config.education.university}</p>
        </div>
        <span className="text-xs font-mono text-muted">{config.education.period}</span>
      </div>
    </section>
  );
}
