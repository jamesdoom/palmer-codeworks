"use client";

import { useEffect, useState } from "react";

const seasons = ["morning", "dusk", "night"] as const;

type Season = (typeof seasons)[number];

function getInitialSeason(): Season {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 18 || hour < 5) return "night";

  return "dusk";
}

export function SeasonToggle() {
  const [season, setSeason] = useState<Season>("dusk");

  useEffect(() => {
    const initialSeason = getInitialSeason();
    document.documentElement.dataset.season = initialSeason;

    const frame = window.requestAnimationFrame(() => {
      setSeason(initialSeason);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  function cycleSeason() {
    const nextSeason = seasons[(seasons.indexOf(season) + 1) % seasons.length];
    setSeason(nextSeason);
    document.documentElement.dataset.season = nextSeason;
  }

  return (
    <button
      className="season-toggle"
      type="button"
      onClick={cycleSeason}
      aria-label={`Current theme is ${season}. Switch seasonal theme.`}
    >
      {season}
    </button>
  );
}
