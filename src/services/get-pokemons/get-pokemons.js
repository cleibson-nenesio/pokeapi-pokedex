export const getPokemons = async (limit) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`)
    const responseJson = await response.json()
    return responseJson.results
}