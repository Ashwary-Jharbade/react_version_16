import React, { createContext } from "react"
import MemoExample from "./MemoExample"

const contextObject = createContext("I am Jhon")

class ContextTypeExample extends React.Component{
    render(){
        return(
            <>
                <h1>Hello</h1>
                <MemoExample rest={ this.context }></MemoExample>
            </>
        )
    }
}

ContextTypeExample.contextType = contextObject

export {ContextTypeExample as default}