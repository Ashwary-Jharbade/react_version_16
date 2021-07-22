import React from "react";
import { withRouter } from "react-router-dom";
import '../css/blog-content.css'
import { Data } from "../Server/DataCenter"

class BlogContent extends React.Component{
    constructor(props){
        super(props)

        let blog = {}
        for(let i=0;i<Data.data.length;i++){
            if(parseInt(this.props.match.params.id) === Data.data[i].id){
                blog = Data.data[i]
            }
        }

        this.state ={
            obj:blog
        }
    }
    goBack = () =>{
        this.props.history.push("/");
    }

    render(){
        return(
            <>
                <section>
                    <div className="back-button" onClick={this.goBack}>
                        &#8592;
                    </div>
                </section>
                <section>
                    <div className="blog-content-container" align="center">
                        <div className="container" align="left">
                            <h1>{this.state.obj.topic}</h1>
                            <p>{ this.state.obj.content }</p>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default withRouter(BlogContent)