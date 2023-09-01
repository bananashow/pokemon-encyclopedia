import { styled } from "styled-components";
import { PokemonCard } from "./PokemonCard";
import { useRecoilState, useRecoilValue } from "recoil";
import { getPokemonsSelector } from "../Recoil/Selector";
import { jaehaInfo } from "../jaehaInfo.js";
import { PokemonType } from "./PokemonType";
import { useEffect, useState } from "react";
import { PokemonModal } from "./PokemonModal";
import { limitAtom, offsetAtom, searchedPokemonAtom } from "../Recoil/Atom";
import InfiniteScroll from "react-infinite-scroll-component";

export const PokemonList = () => {
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  const { results } = useRecoilValue(getPokemonsSelector);
  const [offset, setOffset] = useRecoilState(offsetAtom);
  const [pokemonList, setPokemonList] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const searchedPokemon = useRecoilValue(searchedPokemonAtom);
  const [searchedPokemonList, setSearchedPokemonList] = useState([]);
  const [limit, setLimit] = useRecoilState(limitAtom);

  useEffect(() => {
    setSearchedPokemonList([...searchedPokemon]);
  }, [searchedPokemon]);

  useEffect(() => {
    setSearchedPokemonList((prevList) => [...prevList, ...searchedPokemon]);
  }, [limit]);

  const loadMoresearchedData = () => {
    if (hasMore) {
      setLimit((prev) => ({
        ...prev,
        offset: prev.offset + 20,
      }));
    } else {
      setHasMore(false);
    }
  };

  //---------------

  useEffect(() => {
    console.log(results);
    setPokemonList([...pokemonList, ...results]);
  }, [offset]);

  const loadMoreData = () => {
    if (hasMore) {
      setOffset((prev) => prev + 19);
    } else {
      setHasMore(false);
    }
  };

  if (searchedPokemonList.length !== 0) {
    return (
      <>
        <InfiniteScroll
          dataLength={searchedPokemonList.length}
          next={loadMoresearchedData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>You have seen it all</b>
            </p>
          }
        >
          <ListContainer>
            {searchedPokemonList.map((pokemon, idx) => {
              if (!pokemon) {
                return null;
              }
              return (
                <PokemonCard
                  key={`${pokemon.name}_${idx}`}
                  name={pokemon.name}
                />
              );
            })}
            {isOpenedModal && (
              <PokemonModal
                pokemonInfo={searchedPokemon}
                setIsOpenedModal={setIsOpenedModal}
              />
            )}
          </ListContainer>
        </InfiniteScroll>
      </>
    );
  }

  return (
    <>
      <InfiniteScroll
        dataLength={pokemonList.length}
        next={loadMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>You have seen it all</b>
          </p>
        }
      >
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
        </ListContainer>
      </InfiniteScroll>
    </>
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
