import { useState } from 'react';
import {
    createUserDocumentFromAuth,
    signInAuthWithEmailAndPassword,
    signInWithGooglePopup
} from '../../utils/firebase/firebase.utils.js';
import Button from "../button/button.component"
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
                const user = userCredential.user;
                const userDocRef = createUserDocumentFromAuth(user);

                resetFormFields();
            })
        } catch (error) {
            // if(error.code)
            console.error(error);
        }
    }

    const signInGoogleUserWithPopup = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(response.user);
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

                <div className='sign-in-button-container'>
                    <Button type="submit" onClick={handleSubmit}>Sign In</Button>
                    <Button buttonType={'google'} onClick={signInGoogleUserWithPopup}>Sign in with Google</Button>
                </div>
            </form>     
        </div>
    )
}

export default SignInForm;