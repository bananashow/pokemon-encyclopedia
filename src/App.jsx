import { NavBar } from "./components/NavBar";
import { PokemonList } from "./components/PokemonList";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback={<div>로딩중</div>}>
        <GlobalStyle />
        <NavBar />
        <PokemonList />
      </Suspense>
    </>
  );
}

export default App;
