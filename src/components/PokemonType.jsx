import { styled } from "styled-components";
import { typeTransform } from "../pokemonType";

export const PokemonType = ({ type }) => {
  const { color, koType } = typeTransform(type);
  return (
    <>
      <Type $typeColor={color}>
        <div>{koType}</div>
      </Type>
    </>
  );
};

const Type = styled.div`
  width: 100%;

  & > div {
    color: #fff;
    background-color: ${(props) => props.$typeColor};
    border-radius: 12px;
    padding: 6px;
    font-size: 18px;
    text-align: center;
  }
`;
