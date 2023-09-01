import { styled } from "styled-components";
import pokeball from "../assets/pokeball.png";
import { useNavigate } from "react-router-dom";
import { Search } from "./Search";
import { TypeFilter } from "./TypeFilter";
import { useSetRecoilState } from "recoil";
import { searchedPokemonAtom } from "../Recoil/Atom";

export const NavBar = () => {
  const navigation = useNavigate();
  const setSearchedPokemon = useSetRecoilState(searchedPokemonAtom);

  const handleLogo = () => {
    setSearchedPokemon([]);
  };
  return (
    <>
      <NavContainer>
        <NavWrap>
          <div className="title-section" onClick={handleLogo}>
            <Title onClick={() => navigation("/")}>
              <div className="name">재하의</div>
              <div className="title">
                <img src={pokeball} />
                포켓몬 도감
              </div>
            </Title>
          </div>
          <div className="search-section">
            <Search />
            <TypeFilter />
          </div>
        </NavWrap>
      </NavContainer>
    </>
  );
};

const NavContainer = styled.nav`
  width: 100%;
  height: 240px;
  min-width: 1148px;
  background-color: #3b3838;
  color: #fff;
  display: flex;
  align-items: center;
`;

const NavWrap = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  .search-section {
    flex: 1;
  }

  input {
    padding: 8px 12px;
    border: none;
    background-color: #111111;
    border-radius: 12px;
    color: #fff;
    font-size: 16px;
    flex: 1;

    &::placeholder {
      font-family: "gmarket-light";
    }
  }

  button {
    font-size: 24px;
    padding: 4px 16px;
    height: 45px;
    border: none;
    border-radius: 10px;
    background-color: #d13d3d;
    color: #fff;
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
      background-color: #b83636;
    }
  }
`;

const Title = styled.div`
  font-size: 42px;
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "gmarket-medium";
  cursor: pointer;

  .name {
    font-size: 32px;
    padding: 2px 6px;
    margin-bottom: 12px;
    background-color: #d13d3d;
    border-radius: 12px;
    border-bottom-left-radius: 0;
    position: relative;
    font-family: "Nanum Pen Script";

    &::after {
      content: "";
      bottom: -6px;
      left: 0px;
      border-bottom: 10px solid transparent;
      border-left: 20px solid #d13d3d;
      position: absolute;
    }
  }
  .title {
    display: flex;
    align-items: center;
  }
`;
