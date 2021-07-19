import React from "react"
import image from '../img/superhero.svg'
import { AppConsumer } from "../App"
 
class ImageObject extends React.Component{
    render(){
        return(
            <>
                <AppConsumer>
                    {
                        ({x,y})=><img style={{ position:"absolute",top:`${x}px`,left:`${y}px` }} src={image} width="200px" alt="abc" />
                    }
                </AppConsumer>
            </>
        )
    }
}

export default ImageObject