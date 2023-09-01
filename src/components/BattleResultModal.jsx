import { styled } from "styled-components";
import { FaMedal } from "react-icons/fa";

export const BattleResultModal = ({
  battleResult,
  setBattleResultModalIsOpened,
}) => {
  return (
    <>
      <Overlay onClick={() => setBattleResultModalIsOpened(false)} />
      <ResultModal>
        <div className="result">
          <div className="medal">
            <FaMedal />
          </div>
          <div className="name">{battleResult}</div>
          <div>Win!</div>
        </div>
        <button onClick={() => setBattleResultModalIsOpened(false)}>
          닫기
        </button>
      </ResultModal>
    </>
  );
};

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(26, 26, 26, 0.5);
`;

const ResultModal = styled.div`
  background-color: #383838eb;
  color: #fff;
  width: 300px;
  height: 250px;
  position: absolute;
  bottom: 60px;
  left: 50px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .medal {
    color: #e9f360;
  }

  .name {
    background-color: #eff0e6;
    border-radius: 12px;
    color: #000;
    font-weight: 900;
    padding: 4px 6px;
  }

  .result {
    font-size: 32px;
    padding: 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  button {
    width: 100%;
    height: 50px;
    font-size: 18px;
    border: none;
    color: #111111;
    font-weight: 900;
    background-color: #e9f360;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
      background-color: #c0f360;
    }
  }
`;
