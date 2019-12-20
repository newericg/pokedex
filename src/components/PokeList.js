import React from 'react'
import { Link } from 'react-router-dom'

export default function PokeList(props) {


  return (
      
      <div className="row_class">
        {props.filteredPokes.map((pokemon, i) => {
          if(pokemon.length === 0){
            return null
          }
          else {
            return <div 
            className="pokemon_tables" key={i + 1}> 
              <ul>
                <li className="pokemon_name">{pokemon.Name}</li>
                <li className="align_center">{pokemon.Generation}</li>
                <li className="align_center"> Type: {pokemon.Types[0]}{ pokemon.Types[1] === undefined ? '' : `, ${pokemon.Types[1]}`} </li>
                <li className="align_center"> Number of Attacks: {pokemon[ 'Fast Attack(s)' ].length + pokemon[ 'Special Attack(s)' ].length} </li>
                <div className="align_center">
                  <Link to={{
                    pathname:`/${pokemon.Name}`,
                    props: i
                  }}>
                    <button className="pokemon_details" >DETAILS</button>
                  </Link>
                </div>
              </ul>
            </div>
            }
          }
        )}
      </div>
    
  )
}
