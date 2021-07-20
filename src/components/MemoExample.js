import React from 'react'
import { isEqual } from 'lodash'

export default React.memo((props) => {
    return(
        <>
            <h1>{props.rest}</h1>
        </>
    )
},equalityCheck)

function equalityCheck(prevProp,nextProp){
    console.log(isEqual(prevProp,nextProp));
    return isEqual(prevProp,nextProp)
}