import { atom } from "recoil";

export const offsetAtom = atom({
  key: "offsetAtom",
  default: 0,
});

export const searchedPokemonAtom = atom({
  key: "searchedPokemonAtom",
  default: [],
});

export const participatingPokemonAtom = atom({
  key: "participatingPokemonAtom",
  default: [],
});

export const limitAtom = atom({
  key: "limitAtom",
  default: {
    type: "",
    limit: 20,
    offset: 0,
  },
});
