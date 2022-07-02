import { useState } from 'react';
import {
    signInAuthWithEmailAndPassword,
    signInWithGooglePopup
} from '../../utils/firebase/firebase.utils.js';


import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"
import FormInput from '../form-input/form-input.component.jsx';


const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;


    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            signInAuthWithEmailAndPassword(email, password)
            .then((userCredential)=> {
                resetFormFields();
            })
        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert ('Incorrect password or email')
                    break;
                case 'auth/user-not-found':
                    alert ('Incorrect password or email')
                    break;
                default:
                    console.error(error);
            }
        }
    }

    const signInGoogleUserWithPopup = async () => {
        await signInWithGooglePopup();
    }

    return(
        <div className='form-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form>
                <FormInput
                        label='Email'
                        required
                        type='email'
                        onChange={handleChange}
                        name="email"
                        value={email}/>

                <FormInput
                    label='Password'
                    required
                    type='password'
                    onChange={handleChange}
                    name="password"
                    value={password}/>

                <div className='authentication-button-container'>
                    <Button
                        type="submit"
                        onClick={handleSubmit}
                        >Sign In</Button>
                    <Button
                        type='button'
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        onClick={signInGoogleUserWithPopup}
                        >Google Sign in</Button>
                </div>
            </form>     
        </div>
    )
}

export default SignInForm;