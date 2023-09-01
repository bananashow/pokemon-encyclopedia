import { styled } from "styled-components";
import { GiCancel } from "react-icons/gi";
import modalBackgd from "../assets/modal-bg.jpg";
import { PokemonType } from "./PokemonType";
import { useRecoilState } from "recoil";
import { participatingPokemonAtom } from "../Recoil/Atom";

export const PokemonModal = ({ pokemonInfo, setIsOpenedModal }) => {
  const [participatingPokemon, setParticipatingPokemon] = useRecoilState(
    participatingPokemonAtom
  );

  const participateInBattle = () => {
    if (!participatingPokemon[0]) {
      setParticipatingPokemon((prevPokemons) => {
        const newPokemons = [...prevPokemons];
        newPokemons[0] = pokemonInfo;
        return newPokemons;
      });
    } else if (!participatingPokemon[1]) {
      setParticipatingPokemon((prevPokemons) => {
        const newPokemons = [...prevPokemons];
        newPokemons[1] = pokemonInfo;
        return newPokemons;
      });
    } else {
      alert("자리가 없어요!");
    }
  };

  return (
    <>
      <Overlay onClick={() => setIsOpenedModal(false)} />
      <Modal $modalBackgd={modalBackgd}>
        <LeftSection>
          <div className="id">No.{pokemonInfo.id}</div>
          <h2>
            {pokemonInfo.koreanName}
            <span className="en-name">({pokemonInfo.name})</span>
          </h2>
          <img src={pokemonInfo.images.officialAtworkFront} alt="포켓몬" />
          <button className="fight" onClick={participateInBattle}>
            FIGHT
          </button>
        </LeftSection>
        <RightSection>
          <div className="pokemon-body">
            <div>
              <div>타입</div>
              {pokemonInfo.types.map((type) => {
                return <PokemonType key={type} type={type}></PokemonType>;
              })}
            </div>
            <div>
              <div>키</div>
              <div>{pokemonInfo.height}m</div>
            </div>
            <div>
              <div>몸무게</div>
              <div>{pokemonInfo.weight}kg</div>
            </div>
          </div>
          <div className="pokemon-stats">
            <div>
              <div className="stats-title">체력</div>
              <div>{pokemonInfo.baseStats[0].value}</div>
              <div className="stats-title">공격력</div>
              <div>{pokemonInfo.baseStats[1].value}</div>
              <div className="stats-title">방어력</div>
              <div>{pokemonInfo.baseStats[2].value}</div>
            </div>
            <div>
              <div className="stats-title">특수 공격력</div>
              <div>{pokemonInfo.baseStats[3].value}</div>
              <div className="stats-title">특수 방어력</div>
              <div>{pokemonInfo.baseStats[4].value}</div>
              <div className="stats-title">스피드</div>
              <div>{pokemonInfo.baseStats[5].value}</div>
            </div>
          </div>
        </RightSection>
        <button className="closeModal" onClick={() => setIsOpenedModal(false)}>
          <GiCancel />
        </button>
      </Modal>
    </>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(26, 26, 26, 0.5);
  z-index: 999;
`;

const Modal = styled.div`
  /* background: url(${modalBackgd}) no-repeat;
  background-size: cover; */
  color: #fff;
  background-color: #3b3838;
  min-width: 70%;
  height: 75vh;
  padding: 32px 48px;
  border-radius: 50px;
  opacity: 0.93;
  z-index: 1000;

  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 50%;
  left: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .closeModal {
    position: absolute;
    right: 30px;
    top: 30px;
    font-size: 40px;
    color: #e9f360;
    border: none;
    background-color: inherit;
    cursor: pointer;
    transition: all 0.4s;
    z-index: -1;

    &:hover {
      color: #d13d3d;
    }
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .id {
    font-size: 30px;
    color: #e9f360;
  }

  .en-name {
    font-size: 24px;
  }

  h2 {
    font-size: 50px;
  }

  img {
    width: 450px;
  }

  .fight {
    padding: 12px;
    font-size: 18px;
    border: none;
    border-radius: 12px;
    background-color: #f36067;
    color: #fff;
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
      background-color: #d8535a;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & > div {
    font-size: 24px;
  }

  .pokemon-body {
    display: flex;
    gap: 20px;
    background-color: rgba(255, 254, 243, 0.2);
    padding: 32px;
    border-radius: 50px;

    & > div {
      width: 140px;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 12px;
    }
  }

  .pokemon-stats {
    background-color: inherit;
    color: #fff;

    display: flex;
    justify-content: space-around;
    gap: 20px;

    .stats-title {
      padding: 4px 8px;
      margin-top: 28px;
      border-radius: 12px;
      background-color: #e0e0e0;
      color: #111111;
    }
  }
`;
