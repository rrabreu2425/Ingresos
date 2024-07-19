import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import '../css/style.css'
import Input from '../components/input';
import Label from "../components/label";
import Button from "../components/button";
import { useState } from "react";

function SignIn() {

   return (
    <div className="container">

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <Label
            title='Email' />
          <Input
            id='username'
            name='username'
            placeholder='Username'
            onChange={handleChange}
            type='email' 
            />
          <Label
            title='Password' />
          <Input
            id='password'
            name='password'
            placeholder='Password'
         
            onChange={handleChange}
            type='password' 
            />
        </div>
        <Button
          type='submit'
          name='Login' />
      </form>

    </div>
  )
}
export default SignIn