import React from "react";
function Label(props){
return(
    <label htmlFor="formGroupExampleInput" className="form-label">{props.title}</label>
)
}
export default Label