import React from "react";
import '../css/style.css'
import Label from "../components/label";
import Button from "../components/button";
import {useForm} from 'react-hook-form'
import {signInRequest} from '../api/userAunt'
function SignIn() {
  const {register, handleSubmit}= useForm()
  
  const onSubmit= handleSubmit(async(value)=>{
    const resp= await signInRequest(value)
    console.log(resp)
 })
  return (
    <div className="container">

      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <Label
            title='Email' />
          <input type='Email'
            className="form-control"
            placeholder='Email'
            {...register('username', { required: true })}
          />
          <Label
            title='Password' />
          <input type='Password'
            className="form-control"
            placeholder='Password'
            {...register('password', { required: true })}
          />
        </div>
        <Button
          type='submit'
          name='SignIn' />
      </form>

    </div>
  )
}
export default SignIn