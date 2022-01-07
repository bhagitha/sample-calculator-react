import React from 'react'
import './component1.css'

const style={
    border:"1px solid green"
}

function Component1() {
    return (
        <div>
        <div className="class1" style={style} style={{backgroundColor:'blue'}}>
            <h1></h1>
            <p></p>
        </div>
        </div>
    )
}

export default Component1
