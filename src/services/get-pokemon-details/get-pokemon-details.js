import { getPokemons } from "../get-pokemons/get-pokemons";

export const getPokemonsDetails = async (limit) => {
    const pokemonsForm = await getPokemons(limit)
    const pokemonsUrl = await pokemonsForm.map(pokemon => pokemon.url)
    const pokemonsDetails = []

    for(let x = 0; x <= pokemonsUrl.length - 1; x++) {
        const response = await fetch(pokemonsUrl[x])
        const responseJson = await response.json()
        pokemonsDetails.push(responseJson)
    }

    return pokemonsDetails
}