import { hero1, hero2, hero3, hero4 } from "@/components/assets/images";
import { HeroCardProps } from "./types";

export const heroCards: HeroCardProps[] = [
  {
    image: hero1,
    alt: "Hero 1",
    bgColor: "bg-fuchsia-900/50",
  },
  {
    image: hero3,
    alt: "Hero 3",
    bgColor: "bg-cyan-950/50",
  },
  {
    image: hero2,
    alt: "Hero 2",
    bgColor: "bg-amber-900/50",
  },
  {
    image: hero4,
    alt: "Hero 4",
    bgColor: "bg-green-900/50",
  },
];
