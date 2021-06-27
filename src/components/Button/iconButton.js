import React from "react";
import GoogleSvg from '../../assets/google.svg'
import { SecondButton } from "./styles";


function IconButton({ title }) {
    return (
        <SecondButton>
            <img src={GoogleSvg} className="App-logo" alt="logo" />
            {title}
        </SecondButton>
    );
};
export default IconButton;