import React from "react";

const styles = {
    clicky:{
        "text-decoration": "none",
        color: "#fff",
        "font-weight": "900",
        fontFamily:"sans-serif",


    },
    ul: {
        listStyleType: "none"
    },
    li: {
        display: "inline-block",
        padding: "0 90px",
        fontFamily:"sans-serif",
        color: "white",
        fontSize:"1.5em"
    },
    stickyheader: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        background: "#7b43ce"
    },
    clickygame: {
        backgroundImage: "url('../../back.jpg')",
        height: "200px",
        paddingTop: "250px",
        textAlign: "center",
        color: "white",
        fontFamily:"sans-serif"

    },
    h1:{
         margin: 0,
        "margin-bottom": "30px",
        fontSize:"4em"
    },
    h2:{
    fontSize:"1.5em"
    }
}; 

function Header(props) {

    return (
        <>
            <div style={styles.stickyheader}>
               <ul style={styles.ul}>
                <li style={styles.li}><a  style={styles.clicky}href="/"><strong>Clicky Game</strong></a></li>
                <li style={styles.li}>{props.guessed}</li>
                <li style={styles.li}>Score :{props.score} | Top Score: {props.topScore}</li>
               </ul>
            </div>
            <div style={styles.clickygame} >
                <h1 style={styles.h1}>Clicky Game!</h1>
                <h2 >click on an image to earn points, but don't click on any more than once!</h2>
            </div>
        </>
             
    );

}

export default Header;                        