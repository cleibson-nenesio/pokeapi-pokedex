import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../../context/theme-context"

export const Filter = (props) => {
    const typesOfPokemons = ['all', 'normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy']

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <FilterType onChange={props.handleFilter} theme={theme}>
                <option disabled hidden selected value=''>Filter by Types</option>
                {typesOfPokemons.map((type, index) => {
                    return(
                        <option value={type} key={index}>{type}</option>
                    )
                })}
            </FilterType>
        </>
    )
}

const FilterType = styled.select`
    padding: 5px 10px;
    outline: none;
    border: none;
    margin-right: 10px;
    border-radius: 10px;
    background-color: ${props => props.theme.color};
    color: ${props => props.theme.background};
    text-transform: capitalize;
`
