import config from "@/data/resume";

export default function Footer() {
  const domain = new URL(config.meta.url).hostname;

  return (
    <footer className="pt-6 border-t border-border text-center no-print">
      <p className="text-xs text-muted">
        {domain}
      </p>
    </footer>
  );
}
