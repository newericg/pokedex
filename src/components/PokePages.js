import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function Pages({ match }) {

  const [pokemonPages, setPokemonsPages] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
    .then(res => {
      setPokemonsPages(res.data)
      setLoading(false)  
    })
    .catch(function (error) {
      console.log(error);
    })
  },[])

  let n = match.params.id;
  let currentPokemon = pokemonPages[n]

  if (loading) return '...LOADING'

  return (
    <div className="row_class align_center">
      <div className="page_title_pokemon">
        <h1>{currentPokemon.Name.toUpperCase()}</h1> 
      </div>
      <div className="page_table">
        <div >
          <h2 style={{fontSize: '2rem'}}> {currentPokemon.Generation} </h2>
        </div>
        <p> {currentPokemon.About} </p>
        <div>
          <h2>Types: {currentPokemon.Types[0]}{ currentPokemon.Types[1] === undefined ? '' : `, ${currentPokemon.Types[1]}`}</h2>
        </div>
      </div>
      
    </div>
    
  )
}
