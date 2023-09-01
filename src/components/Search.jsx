import { styled } from "styled-components";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { FiRefreshCcw } from "react-icons/fi";
import { useRef, useState } from "react";
import { getPokemonsInfo, getSearchPokemon } from "../utils/getPokemon";
import { useSetRecoilState } from "recoil";
import { searchedPokemonAtom } from "../Recoil/Atom";

export const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const setSearchedPokemon = useSetRecoilState(searchedPokemonAtom);
  const inputRef = useRef();

  const getPokemonInfo = async (enName) => {
    const result = await getPokemonsInfo(enName);
    setSearchedPokemon([result]);
  };

  const handleSearch = async () => {
    let enName = await getSearchPokemon(searchKeyword);
    if (inputRef.current.value === "") {
      alert("검색어를 입력하세요!");
      inputRef.current.focus();
      return;
    } else {
      enName = enName?.toLowerCase();
      getPokemonInfo(enName);
      inputRef.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleRefresh = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
    setSearchedPokemon([]);
  };

  return (
    <SearchContainer>
      <input
        type="text"
        placeholder="포켓몬 이름을 입력하세요"
        onChange={(e) => setSearchKeyword(e.target.value)}
        onKeyUp={handleKeyDown}
        ref={inputRef}
      />
      <button className="search" onClick={handleSearch}>
        <BsFillSearchHeartFill />
      </button>
      <button className="refresh" onClick={handleRefresh}>
        <FiRefreshCcw />
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

  .search {
    margin-right: 6px;
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

  .refresh {
    font-size: 24px;
    padding: 4px 16px;
    height: 45px;
    border: none;
    border-radius: 10px;
    background-color: #7b7b7c;
    color: #fff;
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
      background-color: #715d81;
    }
  }
`;
