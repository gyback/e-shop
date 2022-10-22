import SignInForm from '../../components/forms/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/forms/sign-up-form/sign-up-form.component';
import { AuthenticationContainer } from './authentication.styles';


const Authentication = () => {

    return (
        <AuthenticationContainer className='authentication-container'>
            <SignInForm/>
            <SignUpForm/>
        </AuthenticationContainer>
    );
};

export default Authentication;