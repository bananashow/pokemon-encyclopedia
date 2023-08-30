import { selector } from "recoil";
import axios from "axios";
import { offsetAtom } from "./Atom";

export const getPokemonsSelector = selector({
  key: "getPokemonsSelector",
  get: async ({ get }) => {
    const offset = get(offsetAtom);
    try {
      const getData = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=19`
      );
      return getData.data;
    } catch (error) {
      console.log(error);
    }
  },
});
