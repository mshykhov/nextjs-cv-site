import { ImageResponse } from "next/og";
import config from "@/data/resume";

export const dynamic = "force-static";
export const alt = config.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111827",
          fontFamily: "system-ui, sans-serif",
          padding: 60,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}
        >
          {config.personal.name}
        </div>

        <div
          style={{
            fontSize: 28,
            color: "#9ca3af",
            marginBottom: 48,
          }}
        >
          {config.ogImage.tagline}
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            marginBottom: 20,
          }}
        >
          {config.ogImage.technologies.map((tech) => (
            <div
              key={tech}
              style={{
                fontSize: 22,
                color: "#e5e7eb",
                backgroundColor: "#1f2937",
                border: "1px solid #374151",
                borderRadius: 8,
                padding: "8px 20px",
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
          }}
        >
          {config.ogImage.domains.map((domain) => (
            <div
              key={domain}
              style={{
                fontSize: 18,
                color: "#9ca3af",
                backgroundColor: "transparent",
                border: "1px solid #374151",
                borderRadius: 8,
                padding: "6px 16px",
              }}
            >
              {domain}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
