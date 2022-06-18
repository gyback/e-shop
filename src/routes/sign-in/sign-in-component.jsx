import { getDocFromCache } from 'firebase/firestore';
import {createUserDocumentFromAuth, signInWithGooglePopup} from '../../utils/firebase/firebase.utils.js';


const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(response.user);
    }
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    );
};

export default SignIn;