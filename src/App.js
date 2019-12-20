import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios'
import Searchbox from './components/Searchbox';
import PokeList from './components/PokeList';


function App() {
  
  const [searchPoke, setSearchPoke] = useState('')
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true)

useEffect(() => {
  setLoading(true)
  axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
  .then(res => {
    setPokemons(res.data)
    setLoading(false)  
  })
  .catch(function (error) {
    console.log(error);
  })
},[])

  let removeEmptyPokemons = pokemons.filter((pokemon) => {
    return Object.keys(pokemon).length >= 1
  })

  let filteredPokes = (removeEmptyPokemons.filter((pokemon) => {     
    return pokemon.Name.toLowerCase().includes(searchPoke.toLowerCase())
  }))

  let handleInput = (e) => {
    setSearchPoke(e.target.value)
  }


  if (loading) return '...LOADING'

  return (
    <>
      <div className="title_page">
        POKEDEX
      </div>
      <Searchbox handleInput={handleInput}/>
      <PokeList filteredPokes={filteredPokes}/>
    </>
  );
}

export default App;
