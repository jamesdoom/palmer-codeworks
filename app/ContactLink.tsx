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
    <a
      className="contact-link"
      href={`mailto:${email}`}
      onClick={handleClick}
      aria-label={`Email ${email}`}
    >
      {label}
    </a>
  );
}
