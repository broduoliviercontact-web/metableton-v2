export const sections = [
  {
    slug: "blog-news",
    title: "Blog / News",
    description:
      "Articles, veille, découvertes et notes de terrain autour d'Ableton Live, de la production musicale et du live.",
  },
  {
    slug: "guides-ableton-live",
    title: "Guides Ableton Live",
    description:
      "Des guides concrets pour comprendre Ableton Live, améliorer son workflow et produire avec moins de friction.",
  },
  {
    slug: "max-for-live",
    title: "Max for Live",
    description:
      "Devices, idées de patchs, méthodes et ressources pour explorer Max for Live dans un contexte musical réel.",
  },
  {
    slug: "freebies",
    title: "Freebies",
    description:
      "Racks, templates, presets, outils et ressources gratuites pour Ableton Live.",
  },
  {
    slug: "ableton-timeline",
    title: "ABLETON TIMELINE",
    description:
      "Une lecture chronologique de l'ecosysteme Ableton : Live, Push, Move, Max for Live et grandes versions.",
  },
  {
    slug: "ableton-extensions",
    title: "Ableton Extensions",
    description:
      "Scripts et outils construits avec le nouvel Extensions SDK d'Ableton : workflow, MIDI, arrangement et idees etranges.",
  },
] as const;

export type SectionSlug = (typeof sections)[number]["slug"];
