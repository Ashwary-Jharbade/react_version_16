import React from "react"
import "../css/blog-card.css"
import img  from "../img/react.png"

class BlogCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            topic:props.topic
        }
    }
    render(props){
        return(
            <>
                <div className="box">
                    <div className="box-content">
                        <div className="img-container">
                            <img src={img} alt="img"/>
                        </div>
                        <div className="text-content" align="left">
                            <p> {this.state.topic } </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default BlogCard