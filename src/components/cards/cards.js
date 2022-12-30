import styled from "styled-components"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../context/theme-context"

export const Card = (props) => {
    const { theme } = useContext(ThemeContext)

    return(
        <>
            <Ul>
                {props.pokemon.map((pokemon, index) => {
                    return(
                        <Li key={index} theme={theme}>
                            <LinkPokemon to={`/pokemon/${pokemon.name}`} theme={theme}>
                                <DivForm>
                                    <img src={pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']} alt={pokemon.name}/>
                                    <p>{pokemon.name}</p>

                                    <PokemonTypes>
                                        <Type theme={theme}>{pokemon.types[0].type.name}</Type>
                                        {pokemon.types[1] ? <Type theme={theme}>{pokemon.types[1].type.name}</Type> : null}
                                    </PokemonTypes>
                                </DivForm>

                                <DivInformation theme={theme}>
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
    font-family: sans-serif;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
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
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};

    @media(max-width: 400px) {
        padding: 20px 10px;
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
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
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
`

const Type = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 18px;
    background-color: ${props => props.theme.color};
    color: ${props => props.theme.background};
`