import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = (props) => {

  const {setPokemons, pokemons, Pikachu} = props

  const { name, type, evolved, weight, color, image, id } = pokemons;

    const evoluirPokemon = () => {
      setPokemons(Pikachu)
    }
    
  return (
    <Card color={color}>
        <img src={image} alt={`Pokemon`}/>
        <PokemonName>{name}</PokemonName>
        <PokemonType>{type}</PokemonType>
        <p>{weight}kg</p>
        <div>Evolved: {evolved ? 'yes' : 'not'}</div>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard