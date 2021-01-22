import  './styles.scss'

import React,{useContext} from 'react'
import PropTypes from 'prop-types';
import ThemeContext from "../../context/themeContext";

const Theme=({themeText,onClick})=>{
    const theme=useContext(ThemeContext)
    return(
        <div className="themeContainer" style={theme}>
            <p  onClick={onClick}>
                {themeText}
            </p>
        </div>
    )
}
Theme.propTypes = {
    themeText:PropTypes.string,
    onClick:PropTypes.func
}
export  default  React.memo(Theme)