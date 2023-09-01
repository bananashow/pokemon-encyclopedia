import { styled } from "styled-components";
import { BsFire } from "react-icons/bs";
import { participatingPokemonAtom } from "../Recoil/Atom";
import { useRecoilState } from "recoil";
import { battle } from "../utils/battle";
import { useEffect, useState } from "react";
import battleGif from "../assets/battle.gif";
import { BattleResultModal } from "./BattleResultModal";

export const BattleModalContent = () => {
  const [participatingPokemon, setParticipatingPokemon] = useRecoilState(
    participatingPokemonAtom
  );
  const [battleResult, setBattleResult] = useState();
  const [battleResultModalIsOpened, setBattleResultModalIsOpened] =
    useState(false);
  const [imageView, setImageView] = useState(false);

  useEffect(() => {
    if (imageView) {
      const delayToShowResult = 1600;
      const timer = setTimeout(() => {
        setImageView(false);
      }, delayToShowResult);
      return () => clearTimeout(timer);
    }
  }, [imageView]);

  const battleStart = () => {
    if (!participatingPokemon[0] || !participatingPokemon[1]) {
      alert("포켓몬을 선택하세요!");
      return;
    }

    const result = battle(participatingPokemon[0], participatingPokemon[1]);
    setBattleResult(result);
    setBattleResultModalIsOpened(true);
    setImageView(true);
  };

  const handleDelete = (index) => {
    const updatedPokemons = [...participatingPokemon];
    updatedPokemons[index] = null;
    setParticipatingPokemon(updatedPokemons);
  };

  if (imageView) {
    return (
      <ModalContent>
        <img src={battleGif} alt="jiwoo-image" className="jiwoo-image" />
      </ModalContent>
    );
  }

  return (
    <>
      <ModalContent>
        <h3>
          <BsFire />
          Battle
          <BsFire />
        </h3>
        <Battlepokemons>
          {participatingPokemon[0] ? (
            <div>
              <div>{participatingPokemon[0]?.koreanName}</div>
              <img
                src={participatingPokemon[0]?.images.officialAtworkFront}
                alt="포켓몬"
              />
              <button onClick={() => handleDelete(0)}>삭제</button>
            </div>
          ) : (
            <>
              <div>포켓몬을 선택하세요</div>
            </>
          )}

          <div className="vs">vs</div>
          {participatingPokemon[1] ? (
            <div>
              <div>{participatingPokemon[1]?.koreanName}</div>
              <img
                src={participatingPokemon[1]?.images.officialAtworkFront}
                alt="포켓몬"
              />
              <button onClick={() => handleDelete(1)}>삭제</button>
            </div>
          ) : (
            <div>포켓몬을 선택하세요</div>
          )}
        </Battlepokemons>
        <button className="fight" onClick={battleStart}>
          FIGHT
        </button>
      </ModalContent>
      {battleResultModalIsOpened && (
        <BattleResultModal
          battleResult={battleResult}
          setBattleResultModalIsOpened={setBattleResultModalIsOpened}
        />
      )}
    </>
  );
};

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;

  .jiwoo-image {
    width: 100%;
  }

  h3 {
    color: #d8535a;
    font-size: 24px;
    padding: 12px 0;
  }

  .fight {
    width: 100%;
    padding: 8px;
    margin: 12px 0;
    border: none;
    background-color: #f36067;
    color: #fff;
    cursor: pointer;
    transition: all 0.4s;
    border-radius: 4px;

    &:hover {
      background-color: #d8535a;
    }
  }
`;

const Battlepokemons = styled.div`
  width: 100%;
  display: flex;
  gap: 6px;

  & > div {
    width: 100%;
    height: 100%;
    border: 1px solid #c0c0c0;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      padding: 6px;
      width: 100%;
      border-top: 1px solid #c0c0c0;
    }

    button {
      width: 100%;
      border: none;
      padding: 4px 6px;
      color: #3b3838;
      background-color: #e9f360;
      cursor: pointer;
      transition: all 0.4s;

      &:hover {
        background-color: #c0f360;
      }
    }
  }

  .vs {
    border: none;
    width: 16px;
  }
`;
