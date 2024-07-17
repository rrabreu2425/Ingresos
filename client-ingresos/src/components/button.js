import React from "react";


function Button(props){
return (
    <button type={props.type} class="btn btn-primary">{props.name}</button>
)
}
export default Button