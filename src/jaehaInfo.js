import jaehaPhoto from "./assets/jaeha.png";

export const jaehaInfo = {
  id: "0000",
  name: "Jaeha",
  koreanName: "송재하",
  color: "blue",
  height: 1.25,
  weight: 21,
  types: ["fighting", "poison"],
  images: {
    dreamWorldFront: jaehaPhoto,
    frontDefault: jaehaPhoto,
    officialAtworkFront: jaehaPhoto,
  },
  baseStats: [
    {
      name: "hp",
      value: 100,
    },
    {
      name: "attack",
      value: 100,
    },
    {
      name: "defense",
      value: 100,
    },
    {
      name: "special-attack",
      value: 100,
    },
    {
      name: "special-defense",
      value: 100,
    },
    {
      name: "speed",
      value: 100,
    },
  ],
};
