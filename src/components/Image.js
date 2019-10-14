import React from "react";
// import images from "../images.json"

const styles={
        img:{
        width :"200px",
        height: "200px",
        margin: "10px"
        }
};


function Image(props) {

    return (
            <img style={styles.img} alt="zootopia-characters" src={props.src} onClick={() => props.handleClickImage(props.id)}/>       
    );


}

export default Image;