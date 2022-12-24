import styled from "styled-components"
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { getPokemonsDetails } from "../../services/get-pokemon-details/get-pokemon-details"
import { getFilteredPokemons } from "../../services/get-filtered-pokemons/get-filtered-pokemons"
import { ThemeContext } from "../../context/theme-context"

export const Card = (props) => {
    const { theme } = useContext(ThemeContext)

    const [card, setCard] = useState({
        pokemonDetails: [],
    })

    useEffect(() => {
        const createPokemonCard = async () => {
            const pokemonArray = await getPokemonsDetails(props.limit)
            setCard({
                pokemonDetails: pokemonArray
            })
        }

        if(props.filter !== 'types') {
            const createFilteredPokemon = async () => {
                const pokemonFiltered = await getFilteredPokemons(props.filter)
                const button = document.getElementById('filter-button')
                setCard({
                    pokemonDetails: pokemonFiltered
                })

                button.innerText = 'Filter'
                button.removeAttribute('disabled', '')
            }

            createFilteredPokemon()
        }

        createPokemonCard()
    }, [props.limit, props.filter])

    return(
        <>
            <Ul>
                {card.pokemonDetails.map((pokemon, index) => {
                    return(
                        <Li key={index} style={{backgroundColor: theme.background, color: theme.color}}>
                            <LinkPokemon to={`/pokemon/${pokemon.name}`} style={{backgroundColor: theme.background, color: theme.color}}>
                                <DivForm>
                                     {pokemon.sprites.versions['generation-v']['black-white']['animated']['front_default'] ? <img src={pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']} alt={pokemon.name}/> : <img src={pokemon.sprites.front_default} alt={pokemon.name}/>}
                                    <p>{pokemon.name}</p>

                                    <PokemonTypes>
                                        <p style={{backgroundColor: theme.color, color: theme.background}}>{pokemon.types[0].type.name}</p>
                                        {pokemon.types[1] ? <p style={{backgroundColor: theme.color, color: theme.background}}>{pokemon.types[1].type.name}</p> : null}
                                    </PokemonTypes>
                                </DivForm>

                                <DivInformation style={{backgroundColor: theme.background, color: theme.color}}>
                                    <p>❤ {pokemon.stats[0].stat.name}: {pokemon.stats[0].base_stat}</p>
                                    <p>⚔ {pokemon.stats[1].stat.name}: {pokemon.stats[1].base_stat}</p>
                                    <p>🛡 {pokemon.stats[2].stat.name}: {pokemon.stats[2].base_stat}</p>
                                </DivInformation>
                            </LinkPokemon>
                        </Li>
                    )
                })} 
            </Ul>
        </>
    )
}

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
    height: 100%;
`

const Li = styled.li`
    box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.5);
    height: 200px;
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 15px;
`

const LinkPokemon = styled(Link)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    border-radius: 15px;
    color: white;
    padding: 20px 40px;

    @media(max-width: 400px) {
        padding: 20px 10px;
        justify-content: center;
        gap: 5px;

        div {
            margin-bottom: 10px;
        }
    }
`

const DivInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-transform: capitalize;
`

const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > p {
        font-size: 18px;
        text-transform: capitalize;
        margin-bottom: 15px;
    }

    > img {
        border-radius: 15px;
        margin-bottom: 5px;
    }
`

const PokemonTypes = styled.div`
    display: flex;
    gap: 10px;

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        background-color: white;
        color: black;
        border-radius: 15px;
        font-size: 18px;
    }
`