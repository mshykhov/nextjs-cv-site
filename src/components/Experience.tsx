import config from "@/data/resume";

export default function Experience() {
  return (
    <section className="mb-10">
      <h2 className="section-title">Experience</h2>
      <div className="space-y-8">
        {config.experience.map((job, i) => (
          <div key={i}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
              <h3 className="text-base font-semibold">{job.title}</h3>
              <span className="text-xs font-mono text-muted shrink-0">
                {job.period}
              </span>
            </div>
            <p className="text-sm text-muted mb-3">
              {job.company} · {job.domain}
            </p>
            <ul className="space-y-1.5 mb-3">
              {job.highlights.map((item, j) => (
                <li
                  key={j}
                  className="text-sm leading-relaxed pl-4 relative opacity-85 before:content-['–'] before:absolute before:left-0 before:text-muted before:opacity-100"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {job.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-muted bg-surface border border-border rounded px-1.5 py-0.5"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
