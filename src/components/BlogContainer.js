import React from "react"
import BlogCard from "./BlogCard"

class BlogContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            arr : props.data
        }
    }

    render(){
        return(
            <>
                <div className="box-container">
                    { this.state.arr.map( (obj,i)=>{
                        return <BlogCard key={i} id={obj.id} topic={obj.topic}></BlogCard>
                    } ) }
                </div>
            </>
        )
    }
}

export default BlogContainer