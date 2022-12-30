import styled from "styled-components"
import { ThemeContext } from "../../context/theme-context"
import { useContext } from "react"

export const Header = (props) => {
    const { theme } = useContext(ThemeContext)

    return(
        <Head theme={theme}>
            <Logo>
                <Image src={require('./images/logo.png')} alt='logo'/>
                <h1>Pokedéx Search</h1>
            </Logo>

            <nav>
                {props.children}
            </nav>
        </Head>
    )
}

const Head = styled.header`
    height: 100px;
    max-width: 100%;
    padding: 15px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: sans-serif;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};   

    @media(max-width: 425px) {
        h1 {
            font-size: 0;
            padding: 15px 5px;
        }

        nav {
            display: flex;
        }
    }

    @media(max-width: 320px) {
        nav {
            justify-content: space-between;
        }

        img {
            display: none;
        }
    }
`

const Image = styled.img`
    height: 60px;
    margin-right: 20px;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
`