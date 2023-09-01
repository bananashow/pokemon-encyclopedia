import { styled } from "styled-components";
import { typeTransform } from "../pokemonType";
import { getPokemonsInfo } from "../utils/getPokemon";
import { limitAtom, searchedPokemonAtom } from "../Recoil/Atom";
import { useRecoilState, useSetRecoilState } from "recoil";
import axios from "axios";

export const TypeFilter = () => {
  const types = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
  ];

  const [limit, setLimit] = useRecoilState(limitAtom);
  const setSearchedPokemon = useSetRecoilState(searchedPokemonAtom);

  const handleTypeSelect = async (_type) => {
    setLimit({
      type: _type,
      limit: 20,
      offset: 0,
    });

    const response = await axios.get(`https://pokeapi.co/api/v2/type/${_type}`);
    const pokemons = response.data.pokemon.slice(limit.offset, limit.limit);
    const pokemonPromise = pokemons.map(async (poke) => {
      return await getPokemonsInfo(poke.pokemon.name);
    });
    const pokemonInfo = await Promise.all(pokemonPromise);
    setSearchedPokemon(pokemonInfo);
  };

  return (
    <Types>
      {types.map((_type) => {
        const type = typeTransform(_type);
        return (
          <Type
            key={type.koType}
            $color={type.color}
            onClick={() => handleTypeSelect(_type)}
          >
            {type.koType}
          </Type>
        );
      })}
    </Types>
  );
};

const Types = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  gap: 12px;
  margin-left: 24px;
  padding: 12px 0;
`;

const Type = styled.div`
  background-color: ${(props) => props.$color};
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
`;
