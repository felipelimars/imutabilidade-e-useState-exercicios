import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  
  // Para fazer seus próximos pokemons, crie novos estados ultilizando como referência o objeto abaixo:
 
   const[pokemons, setPokemons] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2.0,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  })
  
  const Pikachu = {
    ...pokemons,
    name: "Pikachu",
    evolved: true,
    weight: 6.0,
    image: 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/190px-0025Pikachu.png',
    id: 1
  }

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        <PokemonCard setPokemons={setPokemons} pokemons={pokemons}  Pikachu={Pikachu}/>
      </FlexContainer>
    </>
  );
}
export default App