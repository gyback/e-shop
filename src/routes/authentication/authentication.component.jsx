import SignInForm from '../../components/forms/sign-in-form/sign-in-form.component.jsx';
import SignUpForm from '../../components/forms/sign-up-form/sign-up-form.component.jsx';
import { AuthenticationContainer } from './authentication.styles.jsx';


const Authentication = () => {

    return (
        <AuthenticationContainer className='authentication-container'>
            <SignInForm/>
            <SignUpForm/>
        </AuthenticationContainer>
    );
};

export default Authentication;