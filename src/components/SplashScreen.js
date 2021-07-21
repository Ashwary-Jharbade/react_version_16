import React from "react"
import '../css/splash-screen.css'

class SplashScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text:this.props.text
        }
    }
    render(){
        return(
            <>
            <section id="splash-screen">
                <div className="splash-screen">
                    <div className="splash-screen-brand" align="center">
                        <div>
                            <span> {this.state.text} </span>
                        </div>
                        <div className="bar-container">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}


export default SplashScreen;
