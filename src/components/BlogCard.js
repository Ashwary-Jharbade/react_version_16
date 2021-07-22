import React from "react"
import { Link } from "react-router-dom"
import "../css/blog-card.css"
class BlogCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            topic:props.topic,
            id:props.id
        }
    }
    render(){
        return(
            <>
                <Link className="link-react" to={`/blog/${this.state.id}`}>
                    <div className="box">
                        <div className="box-content">
                            <div className="img-container">
                                <img src="react.png" alt="img"/>
                            </div>
                            <div className="text-content" align="left">
                                <p> {this.state.topic } </p>
                            </div>
                        </div>
                    </div>
                </Link>
            </>
        )
    }
}

export default BlogCard