import { useState } from "react"
import { Card } from "../cards/cards"
import styled from "styled-components"

export const ListOfCards = (props) => {
    let [limit, setLimit] = useState(20)

    return(
        <>
            <Section>
                <Card limit={limit} filter={props.filter}/>
                <Button onClick={() => setLimit(limit + 10)} >Mostrar mais</Button>
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

const Button = styled.button`
    max-width: 300px;
    align-self: center;
    padding: 10px 60px;
    border: none;
    background-color: #b2e270;
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;
    margin-top: 30px;
    outline: none;
`