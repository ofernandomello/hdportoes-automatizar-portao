import { useEffect } from "react";

export const useCanonical = (canonicalUrl: string = "/") => {
  useEffect(() => {
    // Remover tag canonical existente
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Adicionar nova tag canonical
    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = canonicalUrl;
    document.head.appendChild(canonical);

    // Remover meta robots existente
    const existingRobots = document.querySelector('meta[name="robots"]');
    if (existingRobots) {
      existingRobots.remove();
    }

    // Adicionar novo meta robots
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex, follow";
    document.head.appendChild(robots);

    return () => {
      // Cleanup opcional: remover ao desmontar (se preferir)
      // canonical.remove();
      // robots.remove();
    };
  }, [canonicalUrl]);
};
