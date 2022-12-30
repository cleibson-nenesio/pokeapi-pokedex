import styled from "styled-components"

export const PokemonData = (props) => {
    const emotes = ['❤', '⚔', '🛡', '🗡', '🛡', '⚡']

    return(
        <>
            <Div>
                <img src={props.pokemon.sprites?.['versions']['generation-v']['black-white']['animated']['front_default']} alt={props.pokemon.name}/> 
                <Type>
                    {props.pokemon.types?.map((types, index) => {
                        return <p key={index}>{types.type.name}</p>
                    })}
                </Type>
            </Div>

            <Div>
                <h3>Stats</h3>
                {props.pokemon.stats?.map((stats, index) => {
                    return <p key={index}>{emotes[index]}{stats.stat.name}: {stats.base_stat}</p>
                })}
            </Div>

            <Div>
                <h3>Abilities</h3>
                {props.pokemon.abilities?.map((abilities, index) => {
                    return <p key={index}>✨ {abilities.ability.name}</p>
                })}
            </Div>

            <DivMoves>
                <div>
                    <h3>Moves {`(${props.pokemon.moves?.length - 1})`}</h3>
                </div>
                <Moves>
                    {props.pokemon.moves?.map((moves, index) => {
                        return <p key={index}>⭐ {moves.move.name}</p>
                    })}
                </Moves>
            </DivMoves>
        </>
    )
}

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
    width: 250px;
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
    text-transform: capitalize;

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
    width: 200px;

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