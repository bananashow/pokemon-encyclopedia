import { atom } from "recoil";

export const offsetAtom = atom({
  key: "offsetAtom",
  default: 0,
});

export const searchedPokemonAtom = atom({
  key: "searchedPokemonAtom",
  default: null,
});

export const participatingPokemonAtom = atom({
  key: "participatingPokemonAtom",
  default: [],
});
