import Routers from './routers/index'
import Header from "./components/Header";
import './App.css'
import Footer from "./components/Footer";
import ThemeContext, {themes} from "./context/themeContext";
import Theme from "./components/Theme";
import {SWITCH_DARK, SWITCH_LIGHT} from "./const";
import React, {useState} from 'react'

function App() {
    const [theme, setTheme] = useState(themes.light)
    const toggleTheme = () => {
        theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark)
    }
    return (
        <div>
            <ThemeContext.Provider value={theme}>
                <Header/>
                <Theme themeText={theme === themes.dark ? SWITCH_LIGHT : SWITCH_DARK} onClick={() => {
                    toggleTheme()
                }}/>
                <div className="appContainer" style={theme}>
                    <Routers/>
                </div>
                <Footer/>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
