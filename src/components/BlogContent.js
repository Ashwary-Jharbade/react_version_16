import React from "react";
import { withRouter } from "react-router-dom";
import '../css/blog-content.css'
import { Data } from "../Server/DataCenter"

class BlogContent extends React.Component{

    goBack = () => {
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
                            {
                                Data.data.filter(obj => obj.id === parseInt(this.props.match.params.id)).map(obj =>{
                                    return(
                                        <>
                                            <h1>{obj.topic}</h1>
                                            <p>{obj.content }</p>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default withRouter(BlogContent)