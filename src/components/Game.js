import React, { Component } from "react";
import Header from "./Header";
import Image from "./Image";
import Footer from "./Footer";
import Images from "../images.json";

const styles={
    container:{                    
    maxWidth: "960px",
    margin:"auto",
    height:"800px",
    marginTop:"100px"
}
};

    class Game extends Component {
        
        state = {
        score: 0,
        topScore: 0,
        guessed: "Click an image to begin",
        copyImages: Images
        };

        handleClickImage= id => {

        // find index of the object with the id of the image the user clicked
            var index=getIndex(id,this.state.copyImages)

            function getIndex(value, arr) {
                for(var i = 0; i < arr.length; i++) {
                    if(arr[i].id === value) {
                        return i;
                    }
                }
                    return -1; //to handle the case where the value doesn't exist
            }

            // if the image hasnot beeb clicked twice, so the clicked value is false,
            // so increse the score and if score is greated than topscore, increase the topscore by one as well

            if(this.state.copyImages[index].clicked === "false") {

                this.setState({score:this.state.score+1})
                this.setState({guessed:"You guessed Correctly!"})
               
                if((this.state.score) >= (this.state.topScore)){
                this.setState({topScore:this.state.topScore+1}) 
                }
        // update the clicked value to true, update the copyImages using setSatate
              
                var updateImages  = this.state.copyImages.map(updateimage =>{
                if (updateimage.id===id){
                    updateimage.clicked="true"
                }
                return updateimage;
                })
            
                this.setState ({
                copyImages : updateImages
                });
            }
        // if the image has been clicked once before the clicked value id true, so the user
        // loses and the score gets zero
            else if(this.state.copyImages[index].clicked === "true"){
                this.setState({score:0});
                this.setState({guessed:"You guessed InCorrectly!"});

        // update the clicked value to false, update the copyImages using setSatate- restart the game
                updateImages  = this.state.copyImages.map(updateimage =>{
                    
                    updateimage.clicked="false"
                    return updateimage;
                    })
        
                    this.setState ({
                    copyImages : updateImages
                    })
            }
    // each time an images is clicked, change the score and shuffle the images
            this.setState({copyImages: shuffle(this.state.copyImages)})
            function shuffle(array) {
                array.sort(() => Math.random() - 0.5);
                return array;
              }
        };

    render() {

        return (
            <>
                <Header guessed={this.state.guessed} score={this.state.score} topScore={this.state.topScore} />
                <div style={styles.container}>
                    {Images.map(img => (
                        <Image
                            handleClickImage={this.handleClickImage}
                            id={img.id}
                            key={img.id}
                            src={img.src}

                        />
                    ))}
                </div>
                <Footer/>
            </>
            );
    }


    }

export default Game;