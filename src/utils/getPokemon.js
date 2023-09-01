import axios from "axios";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";

export const getSearchPokemon = async (koName) => {
  const db = getFirestore();
  const q = query(collection(db, "pokemons"), where("koName", "==", koName));

  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const doc = querySnapshot.docs[0];
    return doc.data().enName;
  } else {
    console.log("No document found with koName:", koName);
    alert("검색 결과가 없어요!");
    return null;
  }
};

export const getPokemonsInfo = async (enName) => {
  if (!enName) return;
  try {
    const info = await axios.get(`https://pokeapi.co/api/v2/pokemon/${enName}`);
    const infoData = info.data;

    const species = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${enName}`
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
};
