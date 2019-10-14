import React from "react";

const styles={
   footer:{
    bottom: 0,
    left: 0,
    right: 0,
    background: "#5138a1",
    padding: "10px",
    "font-weight": 600,
    height:"40px",
    color: "white",
    fontFamily:"sans-serif",
    fontWeight: "bold"
   }
};
function Footer() {

    return (
            <>
                <div style={styles.footer}>
                clicky Game / React
                </div>
            </>          
    );

};

export default Footer;                        