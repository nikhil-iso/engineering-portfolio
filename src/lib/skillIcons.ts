import { skillCarousels } from "@/data/skills";

type SkillIconEntry = { normalized: string; iconSrc: string };

const normalize = (value: string) => value.trim().toLowerCase();

const baseEntries: SkillIconEntry[] = [];
skillCarousels.forEach((carousel) => {
  carousel.items.forEach((item) => {
    if (item.iconSrc) {
      baseEntries.push({ normalized: normalize(item.label), iconSrc: item.iconSrc });
    }
  });
});

const iconByNormalized = new Map(baseEntries.map((entry) => [entry.normalized, entry.iconSrc]));

const aliasToIcon: Record<string, string | undefined> = {
  [normalize("Arduino")]: iconByNormalized.get(normalize("Arduino variant C/C++")),
  [normalize("C++")]: iconByNormalized.get(normalize("C/C++")),
  [normalize("C/C++")]: iconByNormalized.get(normalize("C/C++")),
  [normalize("HTML")]: iconByNormalized.get(normalize("HTML5")),
  [normalize("Fusion 360 Simulation")]: iconByNormalized.get(normalize("Fusion 360")),
  [normalize("Fusion 360 Assemblies")]: iconByNormalized.get(normalize("Fusion 360"))
};

export const getSkillIcon = (skill: string) => {
  const normalized = normalize(skill);

  if (iconByNormalized.has(normalized)) {
    return iconByNormalized.get(normalized);
  }

  const aliasIcon = aliasToIcon[normalized];
  if (aliasIcon) {
    return aliasIcon;
  }

  const partialMatch = baseEntries.find(
    (entry) => normalized.includes(entry.normalized) || entry.normalized.includes(normalized)
  );

  return partialMatch?.iconSrc;
};
