import './button.styles.jsx';
import { BaseButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from './button.styles.jsx';

export enum BUTTON_TYPE_CLASSES  {
    BASE = 'base',
    GOOGLE = 'google-sign-in',
    INVERTED = 'inverted'
}

type ButtonProps = {
    children: JSX.Element;
    buttonType: BUTTON_TYPE_CLASSES;
    isLoading: boolean;
    otherProps?: {
        [x: string]: any;
    }
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.BASE) => (
    {
        [BUTTON_TYPE_CLASSES.BASE]: BaseButton,
        [BUTTON_TYPE_CLASSES.GOOGLE]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.INVERTED]: InvertedButton
    }[buttonType]
)

const Button = ({children, buttonType, isLoading, ...otherProps}: ButtonProps) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading ? <ButtonSpinner/> : children}
        </CustomButton>
    )
}

export default Button;