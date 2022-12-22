import { createContext, useState } from "react";

export const themes = {
    light: {
        color: '#000000',
        background: '#efefef',
    },

    dark: {
        color: '#ffffff',
        background: '#333333',
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.dark)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )

}