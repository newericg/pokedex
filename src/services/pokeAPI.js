import axios from "axios";

export default async function() {
  try {
    let res = await axios('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
    let response  =  res.data
    return response
  } catch (err) {
    console.log(err)
  }
}