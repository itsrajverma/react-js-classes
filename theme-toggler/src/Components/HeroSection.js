import React,{useContext} from "react";
import ThemeContext from "../Context/ThemeContext";

import AppTheme from "../Colors";

const HeroSection = () => {
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    return(
        <div style={{ padding:"1rem",backgroundColor:`${currentTheme.backgroundColor}`,color : `${currentTheme.textColor}`,textAlign:"center" }}>
            <h1>Context API Theme Toggler</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <button style={{
                backgroundColor:"#26ae60",
                padding :"10px 150px",
                fontSize : "20px",
                color : "#fff",
                border : `${currentTheme.border}`
            }}>
                Click Me
            </button>

        </div>
    )
}

export default HeroSection;
