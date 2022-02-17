import React from "react";

function Footer()
{
    const currentYear=new Date().getFullYear;
    return(
        <footer>
   <p>©All Copyrights Reserved {currentYear}</p>
   </footer>
    )
}

export default Footer;