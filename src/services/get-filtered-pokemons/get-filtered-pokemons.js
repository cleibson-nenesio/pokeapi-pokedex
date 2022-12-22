export const getFilteredPokemons = async (type) => {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
    const responseJson = await response.json()

    const pokemonsUrl = await responseJson.pokemon.map(form => form.pokemon.url)
    const pokemonsDetails = []

    for(let x = 0; x <= pokemonsUrl.length - 2; x++) {
        const response = await fetch(pokemonsUrl[x])
        const responseJson = await response.json()
        pokemonsDetails.push(responseJson)
    }

    return pokemonsDetails
}