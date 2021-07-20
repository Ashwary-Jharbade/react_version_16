import React from "react"
import image from '../img/superhero.svg'
import { AppConsumer } from "./PlayGround"
 
class ImageObject extends React.Component{
    render(){
        return(
            <>
                <AppConsumer>
                    {
                        ({x,y})=><img className="super-hero" style={{ position:"absolute",top:`${x}px`,left:`${y}px`,zIndex:200 }} src={image} width="200px" alt="abc" />
                    }
                </AppConsumer>
            </>
        )
    }
}

export default ImageObject