import { Header } from "../header/header"
import { ListOfCards } from "../list-of-cards/list-of-cards"
import { Filter } from "../filter/filter"
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button"
import styled from "styled-components"
import { useState } from "react"

export const ListPokemons = () => {
    const [filter, setFilter] = useState('types')

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    return(
            <Div>
                <Header>
                    <Filter handleFilter={handleFilter}/>
                    <ThemeTogglerButton />
                </Header>
                <ListOfCards filter={filter}/>
            </Div>
    )
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh; 
`