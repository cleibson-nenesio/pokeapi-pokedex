import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getPokemon } from "../../services/get-pokemon/get-pokemon"
import { PokemonData } from "../pokemon-data/pokemon-data"
import styled from "styled-components"

export const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState({
        data: [],
    })

    const { name } = useParams()

    useEffect(() => {
        const getPokemonDetails = async () => {
            const pokemonData = await getPokemon(name)
            setPokemon({
                data: pokemonData
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
                        <PokemonData pokemon={pokemon.data}/>
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
    max-width: 100%;
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
    gap: 10px;
    color: white;
    max-width: 80%;
    padding: 15px 30px;

    @media(max-width: 768px) {
        flex-direction: column;
        height: 100%;

        > div {
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

