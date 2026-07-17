"use client";

import { useEffect } from "react";

type Season = "morning" | "dusk" | "night";

function getSeasonForHour(hour: number): Season {
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 18 || hour < 5) return "night";

  return "dusk";
}

function getNextBoundaryDelay(now: Date) {
  const hour = now.getHours();
  const nextHour = hour < 5 ? 5 : hour < 12 ? 12 : hour < 18 ? 18 : 29;
  const nextBoundary = new Date(now);
  nextBoundary.setHours(nextHour, 0, 0, 0);

  return nextBoundary.getTime() - now.getTime();
}

export function SeasonTheme() {
  useEffect(() => {
    let timer: number | undefined;

    function applySeason() {
      const now = new Date();
      document.documentElement.dataset.season = getSeasonForHour(now.getHours());

      timer = window.setTimeout(applySeason, getNextBoundaryDelay(now));
    }

    applySeason();

    return () => {
      if (timer !== undefined) {
        window.clearTimeout(timer);
      }
    };
  }, []);

  return null;
}
