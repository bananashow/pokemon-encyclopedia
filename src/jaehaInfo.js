import jaehaPhoto from "./assets/jaeha.png";

export const jaehaInfo = {
  id: "0000",
  name: "Jaeha",
  koreanName: "송재하",
  color: "blue",
  height: 130,
  weight: 29,
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
