import { selector, selectorFamily } from "recoil";
import axios from "axios";

export const getPokemonsSelector = selector({
  key: "getPokemonsSelector",
  get: async () => {
    try {
      const getData = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=19."
      );
      return getData.data;
    } catch (error) {
      console.log(error);
    }
  },
});

export const getPokemonsInfoSelector = selectorFamily({
  key: "getPokemonsInfoSelector",
  get: (name) => async () => {
    try {
      const info = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const infoData = info.data;

      const species = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${name}`
      );
      const speciesData = species.data;

      return {
        id: String(infoData.id).padStart(4, 0),
        name: infoData.name,
        koreanName:
          speciesData.names.find((item) => item.language.name === "ko")?.name ??
          infoData.name,
        color: speciesData.color.name,
        height: infoData.height / 10,
        weight: infoData.weight / 10,
        types: infoData.types.map((item) => item.type.name),
        images: {
          frontDefault: infoData.sprites.front_default,
          dreamWorldFront: infoData.sprites.other.dream_world.front_default,
          officialAtworkFront:
            infoData.sprites.other["official-artwork"].front_default,
        },
        baseStats: infoData.stats.map((item) => {
          return {
            name: item.stat.name,
            value: item.base_stat,
          };
        }),
      };
    } catch (error) {
      console.log(error);
    }
  },
});
