import { ChangeEvent, FormEvent, useState } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";
import Button from "../../button/button.component";
import FormInput from "../../form-input/form-input.component";
import { FormContainer } from "../form.styles";


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        };
        try {
            createAuthUserWithEmailAndPassword(email, password)
            .then((response)=>{
                response && createUserDocumentFromAuth(response.user, {displayName})
            })
            .then(()=>{
                resetFormFields()
            });
            
        } catch (error) {
            if((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS){
                alert('Cannot create user. Email already in use.')
            }
            console.error(error);
        }
    }

    return(
        <FormContainer >
        <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={(e) => handleSubmit}>
                <FormInput
                    label = "Display Name"
                    required
                    type='text'
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}/>
                    

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

                <FormInput
                    label='Password'
                    required
                    type='password'
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}/>

                <Button type="submit">Sign Up</Button>
            </form>
        </FormContainer>
    )
}
export default SignUpForm;