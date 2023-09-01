import { useState } from "react";
import { styled } from "styled-components";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { BattleModalContent } from "./BattleModalContent";

export const BattleModal = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <ModalContainer $isOpened={isOpened}>
        <Toggle onClick={() => setIsOpened((prev) => !prev)}>
          {isOpened ? (
            <div className="icon">
              <AiOutlineArrowDown />
            </div>
          ) : (
            <div className="icon">
              <AiOutlineArrowUp />
            </div>
          )}
        </Toggle>
        {isOpened && (
          <Modal>
            <BattleModalContent />
          </Modal>
        )}
      </ModalContainer>
    </>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  width: 400px;
  height: 420px;
  bottom: ${({ $isOpened }) => ($isOpened ? "0" : "-372px")};
  right: 6px;
`;

const Toggle = styled.div`
  width: 400px;
  height: 40px;
  background-color: #3b3838;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .icon {
    color: #fff;
    font-size: 26px;
  }
`;

const Modal = styled.div`
  width: 400px;
  height: 372px;
  border: 3px solid #3b3838;
  background-color: #fff;
`;
