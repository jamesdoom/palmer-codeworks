"use client";

import { useEffect } from "react";

export function AmbientLight() {
  useEffect(() => {
    function updateLight(event: PointerEvent) {
      document.documentElement.style.setProperty(
        "--cursor-x",
        `${event.clientX}px`,
      );
      document.documentElement.style.setProperty(
        "--cursor-y",
        `${event.clientY}px`,
      );
    }

    window.addEventListener("pointermove", updateLight, { passive: true });

    return () => {
      window.removeEventListener("pointermove", updateLight);
    };
  }, []);

  return null;
}
