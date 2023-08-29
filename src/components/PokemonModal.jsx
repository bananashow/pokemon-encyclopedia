import { styled } from "styled-components";
import { GiCancel } from "react-icons/gi";
import modalBackgd from "../assets/modal-bg.jpg";
import { PokemonType } from "./PokemonType";

export const PokemonModal = ({ pokemonInfo, setIsOpenedModal }) => {
  console.log(pokemonInfo);
  return (
    <>
      <Overlay onClick={() => setIsOpenedModal(false)} />
      <Modal $modalBackgd={modalBackgd}>
        <LeftSection>
          <div className="id">No.{pokemonInfo.id}</div>
          <div className="en-name">{pokemonInfo.name}</div>
          <h2>{pokemonInfo.koreanName}</h2>
          <img src={pokemonInfo.images.officialAtworkFront} alt="포켓몬" />
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
              <div>{pokemonInfo.height}</div>
            </div>
            <div>
              <div>몸무게</div>
              <div>{pokemonInfo.weight}</div>
            </div>
          </div>
          <div className="pokemon-stats">
            <div>
              <div className="stats-title">hp</div>
              <div>{pokemonInfo.baseStats[0].value}</div>
              <div className="stats-title">attack</div>
              <div>{pokemonInfo.baseStats[1].value}</div>
              <div className="stats-title">defense</div>
              <div>{pokemonInfo.baseStats[2].value}</div>
            </div>
            <div>
              <div className="stats-title">special-attack</div>
              <div>{pokemonInfo.baseStats[3].value}</div>
              <div className="stats-title">special-defense</div>
              <div>{pokemonInfo.baseStats[4].value}</div>
              <div className="stats-title">speed</div>
              <div>{pokemonInfo.baseStats[5].value}</div>
            </div>
          </div>
        </RightSection>
        <button onClick={() => setIsOpenedModal(false)}>
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
  background-color: #3b3838;
  width: 65%;
  height: 70vh;
  padding: 32px 48px;
  border-radius: 50px;
  opacity: 0.93;
  transform: translate(-50%, -50%);
  z-index: 1000;

  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 50%;
  left: 50%;

  button {
    position: absolute;
    right: 30px;
    top: 30px;
    font-size: 40px;
    color: #e9f360;
    border: none;
    background-color: inherit;
    cursor: pointer;
    transition: all 0.4s;

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
