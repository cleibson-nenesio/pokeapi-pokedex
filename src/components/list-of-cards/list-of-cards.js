import { useState, useEffect, useRef } from "react"
import { Card } from "../cards/cards"
import styled from "styled-components"
import { getPokemonsDetails } from '../../services/get-pokemon-details/get-pokemon-details'
import { getFilteredPokemons } from "../../services/get-filtered-pokemons/get-filtered-pokemons"
import { Loading } from "../loading/loading"

export const ListOfCards = (props) => {
    const [pokemon, setPokemon] = useState({
        data: []
    })

    const limitOfPokemons = useRef(20)

    useEffect(() => {
        const getPokemonsData = async () => {
            if(props.filter !== 'types') {
                const pokemonData = await getFilteredPokemons(props.filter)

                setPokemon({
                    data: pokemonData
                })
                return
            }

            const pokemonData = await getPokemonsDetails(limitOfPokemons.current)

            setPokemon({
                data: pokemonData
            })
        }

        const options = {
            treshold: 0.1,
        }

        const loadNewCards = new IntersectionObserver(entry => {
            if(entry[0].time < 1000) return

            if(entry[0].isIntersecting) {
                limitOfPokemons.current += 20
                getPokemonsData()
            }
        }, options)

        loadNewCards.observe(document.querySelector('#new-cards'))

        getPokemonsData()
    }, [props.filter, limitOfPokemons])

    return(
        <>
            <Section>
                <Card pokemon={pokemon.data}/>
                <Loading />
            </Section>
        </>
    )
}

const Section = styled.section`
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 50px;
    background: url('https://rare-gallery.com/uploads/posts/4584932-8-bit-sky-clouds-pixels-landscape-artwork-pixel-art.png') center center no-repeat;
    background-attachment: fixed;

    @media(max-width: 400px) {
        padding: 20px;
    }
`
