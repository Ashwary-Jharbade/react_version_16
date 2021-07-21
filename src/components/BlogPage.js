import React from "react"
import BlogContainer from "./BlogContainer"
import result from '../Server/DataCenter'

export default class BlogPage extends React.Component{

    mouseHandler = (event) =>{
        window.scrollTo(parseInt(event.clientX),parseInt(event.clientY));
    }

    render(){
        return( 
            <>
                <section id="nonSplash">
                    <div className="splash-screen" id="parallax" onMouseMove={this.mouseHandler}>
                        <div className="container-fluid" id="container">
                            <BlogContainer data={result.data}></BlogContainer>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
