import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getPokemon } from "../../services/get-pokemon/get-pokemon"
import styled from "styled-components"

export const PokemonDetails = () => {
    const emotes = ['❤', '⚔', '🛡', '🗡', '🛡', '⚡']

    const [pokemon, setPokemon] = useState({
        data: [],
    })

    const { name } = useParams()

    useEffect(() => {
        const getPokemonDetails = async () => {
            const pokemonData = await getPokemon(name)
            setPokemon({
                data: pokemonData,
            })
        }
        
        getPokemonDetails()
    }, [name])

    return(
        <>
        <Main>
            <BackButton to='/'>Back</BackButton>

            <Section>
                <PokemonName>
                    <h2>{pokemon.data.name}</h2>
                </PokemonName>

                <PokemonGeneralDetails>
                    <PokemonCharacteristics>
                        <Div>
                            {pokemon.data.sprites?.['versions']['generation-v']['black-white']['animated']['front_default'] ? <img src={pokemon.data.sprites?.['versions']['generation-v']['black-white']['animated']['front_default']} alt={pokemon.data.name}/> : <img src={pokemon.data.sprites?.front_default} alt={pokemon.data.name}/>}
                            <Type>
                                {pokemon.data.types?.map((types, index) => {
                                    return <p key={index}>{types.type.name}</p>
                                })}
                            </Type>
                        </Div>

                        <Div>
                            <h3>Stats</h3>
                            {pokemon.data.stats?.map((stats, index) => {
                                return <p key={index}>{emotes[index]}{stats.stat.name}: {stats.base_stat}</p>
                            })}
                        </Div>


                        <Div>
                            <h3>Abilities</h3>
                            {pokemon.data.abilities?.map((abilities, index) => {
                                return <p key={index}>✨ {abilities.ability.name}</p>
                            })}
                        </Div>


                        <DivMoves>
                            <div>
                                <h3>Moves {`(${pokemon.data.moves?.length - 1})`}</h3>
                            </div>

                            <Moves>
                                {pokemon.data.moves?.map((moves, index) => {
                                    return <p key={index}>⭐ {moves.move.name}</p>
                                })}
                            </Moves>
                        </DivMoves>
                    </PokemonCharacteristics>
                </PokemonGeneralDetails>
            </Section>
        </Main>
        </>
    )
}

const Main = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('https://rare-gallery.com/uploads/posts/4584932-8-bit-sky-clouds-pixels-landscape-artwork-pixel-art.png') center center no-repeat;
    background-attachment: fixed;

    @media(max-width: 768px) {
        height: 100%;
    }
`

const Section = styled.section`
    max-height: 800px;
    max-width: 1200px;
    background-color: #3c3c3c;
    border-radius: 15px;
    box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.5);

    @media(max-width: 768px) {
        max-height: 100%;
        max-width: 100%;
        margin-top: 120px;
    }
`

const PokemonName = styled.div`
    height: 100px;
    background-color: #333;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    font-family: Arial, sans-serif;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
`

const PokemonGeneralDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    padding: 40px 80px;

    @media(max-width: 768px) {
        padding: 40px 0;
    }
`

const PokemonCharacteristics = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 15px;
    border-radius: 15px;
    color: white;
    width: 80%;
    padding: 15px 30px;

    @media(max-width: 768px) {
        flex-direction: column;
        font-size: 14px;
        height: 100%;

        > div {
            border-bottom: 1px solid #c3c3c3;
            padding-bottom: 15px;
        }
    }
`

const BackButton = styled(Link)`
    position: absolute;
    top: 50px;
    left: 50px;
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding: 8px 30px;
    background-color: #333;
    font-family: Arial, sans-serif;
    border-radius: 15px;
`

const Type = styled.div`
    display: flex;
    gap: 10px;

    > p {
        padding: 5px 15px;
        background-color: white;
        color: black;
        border-radius: 15px;
        text-transform: capitalize;
    }
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;
    margin-bottom: 20px;
    text-transform: capitalize;

    &:first-child {
        min-width: 200px;
    }

    > p {
        text-transform: capitalize;
    }

    img {
        height: 96px;
        margin-bottom: 30px;
    }
`

const DivMoves = styled.div`
    max-height: 310px;
    padding: 10px;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    jusitfy-content: flex-start;
    align-items: center;
    gap: 10px;
    font-size: 18px;

    @media(max-width: 768px) {
        width: 300px;
    }
`

const Moves = styled.div`
    display: flex;
    flex-direction: column;
    jusitfy-content: center;
    gap: 10px;
    padding: 5px;
    border-radius: 5px;
    font-size: 18px;
    overflow: scroll;
    overflow-x: hidden;
    box-shadow: inset 0px 0px 18px -8px rgba(0,0,0,0.75);

    ::-webkit-scrollbar {
        width: 10px;
    }
      
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
        border-radius: 5px;
    }
       

    ::-webkit-scrollbar-thumb {
        background: orange; 
        border-radius: 5px;
    }
      

    ::-webkit-scrollbar-thumb:hover {
        background: darkorange; 
        border-radius: 5px;
    }
`