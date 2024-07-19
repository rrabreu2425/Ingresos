import React from "react";
import {useForm} from 'react-hook-form'

function Input(props){
    const {register}= useForm()
    return(
<input type={props.type} 
       className="form-control" 
       name={props.name} 
       placeholder={props.placeholder}
       {...register(props.name, {required: true})}/>
    )
}
export default Input