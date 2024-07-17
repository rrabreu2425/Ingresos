import React from "react";
import '../css/signIn.css'
import Label from "../components/label";
import Input from "../components/input";
import Button from "../components/button";
function signUp() {
    return (
        <div className='container'>
            <form method="post" action=''>
                <div class="mb-3">
                    <Label title='Email' />
                    <Input id='email'
                        name='email'
                        placeholder='Email'
                        type='Email' />
                    <Label title='Password' />
                    <Input
                        id='password'
                        name='password'
                        placeholder='Password'
                        type='password' />
                    <Label title='Confirm Password' />
                    <Input
                        id='password2'
                        name='password2'
                        placeholder='Confirm Password'
                        type='password' />
                </div>
                <Button
                    type='submit'
                    name='SignUp' />
            </form>
        </div>
    )
}
export default signUp