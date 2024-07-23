import React from "react";
import '../css/style.css'
import Label from "../components/label";
import Button from "../components/button";
import { useForm } from 'react-hook-form'
import { signUpRequest } from '../api/userAunt'
import {useAuth} from '../context/userContext'

function SignUp() {

    const { register, handleSubmit } = useForm()
    const {signUp}= useAuth()
    const onSubmit = handleSubmit(async (values) => {
      signUp(values)
    })
    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <Label title='Email' />
                    <input type='Email'
                        className="form-control"
                        placeholder='Email'
                        {...register('username', { required: true })}
                    />


                    <Label title='Password' />
                    <input type='Password'
                        className="form-control"
                        placeholder='Password'
                        {...register('password', { required: true })}
                    />
                    <Label title='Confirm Password' />
                    <input type='Password'
                        className="form-control"
                        placeholder='Confirm your Password'
                        {...register('password2', { required: true })}
                    />
                </div>
                <Button
                    type='submit'
                    name='SignUp' />
            </form>
        </div>
    )
}
export default SignUp