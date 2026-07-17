"use client";

import { useState } from "react";

const email = "contact@palmercodeworks.com";

export function ContactLink() {
  const [label, setLabel] = useState(email);

  async function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    try {
      await navigator.clipboard.writeText(email);
      setLabel("Email copied");
      window.setTimeout(() => setLabel(email), 2200);
    } catch {
      setLabel(email);
    }

    window.location.href = `mailto:${email}`;
  }

  return (
    <div className="contact-panel">
      <p className="availability-status">Accepting select projects · 2026</p>
      <a
        className="contact-link"
        href={`mailto:${email}`}
        onClick={handleClick}
        aria-label={`Email ${email}`}
      >
        {label}
      </a>
      <div className="contact-card" aria-hidden="true">
        <p>Custom web apps, workflow tools, and integrations.</p>
        <span>Click to copy, then send a note when you are ready.</span>
      </div>
    </div>
  );
}
