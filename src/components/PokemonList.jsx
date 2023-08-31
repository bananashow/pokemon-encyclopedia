import { styled } from "styled-components";
import { PokemonCard } from "./PokemonCard";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getPokemonsSelector } from "../Recoil/Selector";
import { jaehaInfo } from "../jaehaInfo.js";
import { PokemonType } from "./PokemonType";
import { useEffect, useState } from "react";
import { PokemonModal } from "./PokemonModal";
import { offsetAtom, searchedPokemonAtom } from "../Recoil/Atom";

export const PokemonList = () => {
  const { results } = useRecoilValue(getPokemonsSelector);
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const setOffsetAtom = useSetRecoilState(offsetAtom);
  const [pokemonList, setPokemonList] = useState([]);
  const searchedPokemon = useRecoilValue(searchedPokemonAtom);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setOffsetAtom((prev) => prev + 19);
        }
      },
      { rootMargin: "0px", threshold: 1.0 }
    );
    const target = document.querySelector(".loading");
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);

  useEffect(() => {
    setPokemonList([...pokemonList, ...results]);
  }, [results]);

  if (searchedPokemon) {
    return (
      <>
        <ListContainer>
          <OneCard onClick={() => setIsOpenedModal(true)}>
            <img
              src={searchedPokemon.images.officialAtworkFront}
              alt="포켓몬"
            />
            <div className="id">No.{searchedPokemon.id}</div>
            <div className="name">{searchedPokemon.koreanName}</div>
            <div className="type">
              {searchedPokemon.types.map((type) => {
                return <PokemonType type={type} key={type} />;
              })}
            </div>
          </OneCard>
          {isOpenedModal && (
            <PokemonModal
              pokemonInfo={searchedPokemon}
              setIsOpenedModal={setIsOpenedModal}
            />
          )}
        </ListContainer>
      </>
    );
  }

  return (
    <ListContainer>
      <OneCard onClick={() => setIsOpenedModal(true)}>
        <img src={jaehaInfo.images.officialAtworkFront} alt="포켓몬" />
        <div className="id">No.{jaehaInfo.id}</div>
        <div className="name">{jaehaInfo.koreanName}</div>
        <div className="type">
          {jaehaInfo.types.map((type) => {
            return <PokemonType type={type} key={type} />;
          })}
        </div>
      </OneCard>
      {pokemonList.map((pokemon, idx) => {
        return (
          <PokemonCard key={`${pokemon.name}_${idx}`} name={pokemon.name} />
        );
      })}
      {isOpenedModal && (
        <PokemonModal
          pokemonInfo={jaehaInfo}
          setIsOpenedModal={setIsOpenedModal}
        />
      )}
      <div className="loading">로딩중</div>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: 80%;
  margin: 80px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;

const OneCard = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 6px;
  color: #000;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  img {
    height: 160px;
  }

  .type {
    width: 90%;
    display: flex;
    gap: 4px;
  }

  .id {
    color: #3b3838;
  }

  .name {
    color: #111111;
    font-size: 24px;
    margin-bottom: 12px;
  }
`;
