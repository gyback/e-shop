import { useState } from "react";
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

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        };
        try {
            createAuthUserWithEmailAndPassword(email, password)
            .then((response)=>{
                createUserDocumentFromAuth(response.user, {displayName})
            })
            .then(()=>{
                resetFormFields()
            });
            
        } catch (error) {
            if(error.code === "auth/email-already-in-use"){
                alert('Cannot create user. Email already in use.')
            }
            console.error(error);
        }
    }

    return(
        <FormContainer >
        <h2>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form>
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

                <Button type="submit" onClick={handleSubmit}>Sign Up</Button>
            </form>
        </FormContainer>
    )
}
export default SignUpForm;