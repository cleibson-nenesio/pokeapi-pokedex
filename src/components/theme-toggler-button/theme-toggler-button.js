import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext, themes } from '../../context/theme-context'

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light)
    }

    return(
        <Button onClick={() => toggleTheme()}>{theme === themes.light ? '🌙' : '🌞'}</Button>
    )
}

const Button = styled.button`
    border: none;
    padding: 5px 10px;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;
    margin-left: 20px;
`