import { styled } from "styled-components";
import { BsFire } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { participatingPokemonAtom } from "../Recoil/Atom";

export const BattleModalContent = () => {
  const participatingPokemon = useRecoilValue(participatingPokemonAtom);
  console.log(participatingPokemon);

  return (
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
            <button>바꿀래요</button>
          </div>
        ) : (
          <div>포켓몬을 선택하세요</div>
        )}

        <div className="vs">vs</div>
        {participatingPokemon[1] ? (
          <div>
            <div>{participatingPokemon[1]?.koreanName}</div>
            <img
              src={participatingPokemon[1]?.images.officialAtworkFront}
              alt="포켓몬"
            />
            <button>바꿀래요</button>
          </div>
        ) : (
          <div>포켓몬을 선택하세요</div>
        )}
      </Battlepokemons>
    </ModalContent>
  );
};

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #d8535a;
    font-size: 24px;
    padding: 16px 0;
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
