"use client";

import { useState } from "react";

export default function CopyEmail({
  email,
  icon,
}: {
  email: string;
  icon: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent transition-colors cursor-pointer"
    >
      {icon}
      {copied ? "Copied!" : email}
    </button>
  );
}
