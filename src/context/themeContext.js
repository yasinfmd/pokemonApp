import React from 'react'

export  const themes={
    dark:{
        color:"#d9d9d9",
        background:"#141414"
    },
    light:{
        color:"#141414",
        background:"#d9d9d9"
    }
}

const  ThemeContext=React.createContext(themes.dark)

export  default  ThemeContext;