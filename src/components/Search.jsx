import { styled } from "styled-components";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { useState } from "react";
import { getPokemonsInfo, getSearchPokemon } from "../utils/getPokemon";
import { useSetRecoilState } from "recoil";
import { searchedPokemonAtom } from "../Recoil/Atom";

export const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const setSearchedPokemon = useSetRecoilState(searchedPokemonAtom);

  const getPokemonInfo = async (enName) => {
    const result = await getPokemonsInfo(enName);
    setSearchedPokemon(result);
  };

  const handleSearch = async () => {
    let enName = await getSearchPokemon(searchKeyword);
    if (!enName) alert("검색 결과가 없습니다.");
    enName = enName?.toLowerCase();
    getPokemonInfo(enName);
  };

  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="포켓몬 이름을 입력하세요"
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <button onClick={handleSearch}>
        <BsFillSearchHeartFill />
      </button>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  flex: 1;

  input {
    padding: 8px 12px;
    margin: 0 20px;
    height: 50px;
    border: none;
    background-color: #111111;
    border-radius: 12px;
    color: #fff;
    font-size: 16px;

    &::placeholder {
      font-family: "gmarket-light";
    }
  }

  button {
    font-size: 24px;
    padding: 4px 16px;
    height: 45px;
    border: none;
    border-radius: 10px;
    background-color: #d13d3d;
    color: #fff;
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
      background-color: #b83636;
    }
  }
`;
