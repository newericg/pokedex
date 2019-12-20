import React, {useState, useEffect} from 'react'
import axios from 'axios'

const titleColor = {
  backgroundColor: 'grey',
  color:'white'
}

export default function Pages({ match }) {

  const [pokemonPages, setPokemonsPages] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
    .then(res => {
      setPokemonsPages(res.data)
      setLoading(false)
      console.log('muda')
    })
    .catch(function (error) {
      console.log(error);
    })
  },[match.params.id])

  let removeEmptyPokemons = pokemonPages.filter((pokemon) => {
    return Object.keys(pokemon).length >= 1
  })

  let currentPokemon = match.params.id
  
  let actualPageArray = (removeEmptyPokemons.filter((pokemon) => {   
    return pokemon.Name.toLowerCase().includes(currentPokemon.toLowerCase())
  }))

  let actualPage = actualPageArray[0]
  

  if(!loading) {
    var expr = actualPage.Types[0];
    switch (expr) {
      case 'Fire':
        titleColor.backgroundColor = '#fcbe7c'
        break;
      case 'Water':
        titleColor.backgroundColor = '#34cfeb'
        break;
      case 'Grass':
        titleColor.backgroundColor = '#b6f5a2'
        break;
      case 'Electric':
        titleColor.backgroundColor = '#fae79d'
        break;
      case 'Poison':
        titleColor.backgroundColor = '#dfc9f5'
        break;
      case 'Bug':
        titleColor.backgroundColor = '#bab754'
        break;
      case 'Flying':
        titleColor.backgroundColor = '#d1d1d1'
        break;
      case 'Rock':
        titleColor.backgroundColor = '#b08a00'
        break;
      case 'Fight':
        titleColor.backgroundColor = '#8c7257'
        break;
      default:
        console.log('no color')
    }
  }

  if (loading) return '...LOADING'

  return (
    <>
      <div>
        <a href="/">
          <button className="back_btn" style={{margin: '0px 50px', marginTop:'60px'}}>
            <i class="material-icons">arrow_back</i>
          </button>
        </a>
      </div>
      <div className="row_class align_center">
        <div className="page_title_pokemon">
          <h1>{actualPage.Name}</h1> 
        </div>

        <div>

          <div className="section_table">
            <div className="section_title" style={titleColor}>
              <h2>Generation</h2>
            </div>
            <h2 className="section_info"> {actualPage.Generation} </h2>
          </div>

          <div className="section_table">
            <div className="section_title" style={titleColor}>
              <h2>About</h2>
            </div>
            <p className="section_info"> {actualPage.About} </p>
          </div>

          <div className="section_table">
            <div className="section_title" style={titleColor}>
              <h2>Types</h2>
            </div>
              <h2 className="section_info">{actualPage.Types.map((t) => {
                return `${t} | `
              })}</h2>
          </div>

          <div className="section_table">
            <div className="section_title" style={titleColor}>
              <h2>Resistances</h2>
            </div>
              <h2 className="section_info">{actualPage.Resistant.map((r) => {
                return `${r} | `
              })}</h2>
          </div>

          <div className="section_table">
            <div className="section_title" style={titleColor}>
              <h2>Weaknesses</h2>
            </div>
              <h2 className="section_info">{actualPage.Weaknesses.map((w) => {
                return `${w}  ` 
              })}</h2>
          </div>

          <div className="section_table">
            <div className="section_title" style={titleColor}>
              <h2>Fast Attack(s)</h2>
            </div>
              <h2 className="section_info">{actualPage['Fast Attack(s)'].map((t) => {
                return <div> 
                  {Object.entries(t).map((obj) => {
                  return <p> {obj[0]} : {obj[1]} </p> 
                  })} <br/>
                 </div>
              })}</h2>
          </div>

          <div className="section_table">
            <div className="section_title" style={titleColor}>
              <h2>Special Attack(s)</h2>
            </div>
              <h2 className="section_info">{actualPage['Special Attack(s)'].map((t) => {
                return <div> 
                  {Object.entries(t).map((obj) => {
                  return <p> {obj[0]} : {obj[1]} </p>
                  })} <br/>
                </div>
              })}</h2>
          </div>

        </div>
        
      </div>
    
    </>
    
  )
}
