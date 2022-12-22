import { Header } from "../header/header"
import { ListOfCards } from "../list-of-cards/list-of-cards"
import { Filter } from "../filter/filter"
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button"
import styled from "styled-components"
import { useState } from "react"
import { ThemeProvider } from "../../context/theme-context"


export const ListPokemons = () => {
    const [filter, setFilter] = useState('types')

    const filterPokemons = () => {
        const filterPokemon = document.getElementById('filter').value
        const button = document.getElementById('filter-button')
        if(filterPokemon === 'types') return
        button.innerText = 'Filtering...'
        button.setAttribute('disabled', '')
        setFilter(filterPokemon)
    }

    return(
            <Div>
                <ThemeProvider>
                    <Header>
                        <Filter id='filter'/>
                        <Button onClick={filterPokemons} id='filter-button'>Filter</Button>

                        <ThemeTogglerButton />
                    </Header>
                    <ListOfCards filter={filter}/>
                </ThemeProvider>
            </Div>
    )
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh; 
`

const Button = styled.button`
    padding: 6px 20px;
    border: 2px solid white;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    color: white;
    border-radius: 10px;

    :hover {
        background-color: white;
        color: black;
    }
`