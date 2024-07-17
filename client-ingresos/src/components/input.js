import React from "react";


function Input(props){
    return(
<input type={props.type} className="form-control" id={props.id} name={props.name} placeholder={props.placeholder}/>
    )
}
export default Input