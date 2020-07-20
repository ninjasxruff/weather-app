import React from "react"

const Loc = (props) =>
{
    return(
        <div className="container">
               {props.city ? <h3>{props.city},{props.country}</h3> : null}  
        </div>
    )
}
export default Loc