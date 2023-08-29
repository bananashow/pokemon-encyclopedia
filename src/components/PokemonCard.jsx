import { styled } from "styled-components";
import { useRecoilValue } from "recoil";
import { getPokemonsInfoSelector } from "../Recoil/Selector";
import { PokemonType } from "../components/PokemonType";
import { useState } from "react";
import { PokemonModal } from "./PokemonModal";

export const PokemonCard = ({ name }) => {
  const pokemonInfo = useRecoilValue(getPokemonsInfoSelector(name));
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  const handleCard = () => {
    setIsOpenedModal(true);
  };

  return (
    <>
      <Card onClick={handleCard}>
        <img src={pokemonInfo.images.officialAtworkFront} alt="포켓몬" />
        <div className="id">No.{pokemonInfo.id}</div>
        <div className="name">{pokemonInfo.koreanName}</div>
        <div className="type">
          {pokemonInfo.types.map((type, idx) => {
            return <PokemonType key={`${type}_${idx}`} type={type} />;
          })}
        </div>
      </Card>
      {isOpenedModal && (
        <PokemonModal
          pokemonInfo={pokemonInfo}
          setIsOpenedModal={setIsOpenedModal}
        />
      )}
    </>
  );
};

const Card = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
