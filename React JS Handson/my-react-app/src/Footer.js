import React from "react";

const Footer = () => {

    const year = new Date();
    return(

        <div className= "App">Copywrite  &copy; {year.getFullYear()}</div>
    );
}

export default Footer;