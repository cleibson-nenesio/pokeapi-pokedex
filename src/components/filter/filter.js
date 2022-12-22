import styled from "styled-components"

export const Filter = () => {
    const typesOfPokemons = ['types' ,'normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy']

    return (
        <>
            <FilterType id='filter'>
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
    background-color: white;
    text-transform: capitalize;
`