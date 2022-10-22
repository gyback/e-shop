import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom'
import {
    signInAuthWithEmailAndPassword,
    signInWithGooglePopup
} from '../../../utils/firebase/firebase.utils';


import Button, {BUTTON_TYPE_CLASSES} from "../../button/button.component"
import FormInput from '../../form-input/form-input.component';
import { AuthenticationButtonContainer, FormContainer } from '../form.styles';


const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const navigate = useNavigate();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;


    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            signInAuthWithEmailAndPassword(email, password)
            .then((userCredential)=> {
                resetFormFields();
            })
        } catch (error) {
            switch((error as AuthError).code){
                case AuthErrorCodes.INVALID_PASSWORD:
                    alert ('Incorrect password or email')
                    break;
                case AuthErrorCodes.INVALID_EMAIL:
                    alert ('Incorrect password or email')
                    break;
                default:
                    console.error(error);
            }
        }
    }

    const signInGoogleUserWithPopup = async () => {
        await signInWithGooglePopup()
        .then(() => {
            navigate('/')
        })
        .catch((error) => {
            console.error(error)
        });
    }

    return(
        <FormContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
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

                <AuthenticationButtonContainer className='authentication-button-container'>
                    <Button type="submit">Sign In</Button>
                    <Button
                        type='button'
                        buttonType={BUTTON_TYPE_CLASSES.GOOGLE}
                        onClick={signInGoogleUserWithPopup}
                        >Google Sign in</Button>
                </AuthenticationButtonContainer>
            </form>     
        </FormContainer>
    )
}

export default SignInForm;