import React from "react";
import '../css/style.css'
import Input from '../components/input';
import Label from "../components/label";
import Button from "../components/button";
function signIn(){
    return(
<div className="container">
    <form method="post" action=''>
      <div class="mb-3">
        <Label
        title='Email'/>
        <Input
        id='username'
        name='username'
        placeholder='Username'
        type='email'/>
        <Label
        title='Password'/>
        <Input
        id='password'
        name='password'
        placeholder='Password'
        type='password'/>
        </div>
      <Button
      type='submit'
      name='Login'/>
    </form>
    
  </div> 
    )
}
export default signIn