import React from "react"
import BlogContainer from "./BlogContainer"
import dataChunk from '../Server/DataCenter'

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
                            {
                                dataChunk.map((result,i)=>{
                                    return <BlogContainer key={`${i}a`} data={result}></BlogContainer>
                                })
                            }
                        </div>
                    </div>
                </section>
            </>
        )
    }
}



