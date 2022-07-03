import {Fragment, useContext} from 'react';
import {Outlet, useLocation} from 'react-router-dom';

import categories from '../../assets/cactegories.json'
import {LogoContainer, NavigationContainer, NavLinksContainer, NavLink} from './navbar.styles';

import CartIcon from '../../components/cart-icon/cart-icon.component';  

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';



const CategoryLinks = () => {
    const location = useLocation();
    if(location.pathname !== '/') return (
        <NavLinksContainer >
            {categories.map((category) =>(
                <NavLink key={category.id} to={`/shop/${category.title}`}>
                    {category.title.toLocaleUpperCase()}
                </NavLink>
            ))}    
        </NavLinksContainer>
    )
    else return;
}

const Navbar = () => {
    const {currentUser} = useContext(UserContext);

    
    
    return (
        <Fragment>
            <NavigationContainer >
                <LogoContainer to='/'>
                    <CrwnLogo />
                </LogoContainer>
                {CategoryLinks()}
                <NavLinksContainer>
                    <NavLink className='nav-link' to='/shop'>SHOP</NavLink>
                    {currentUser ?
                           <NavLink as='span' onClick={signOutUser}>sign out</NavLink>
                        :
                           <NavLink  to='/auth'>SIGN IN</NavLink>
                    }
                    <CartIcon />
                </NavLinksContainer>
                {/* {cartVisibility && <CartDropdown /> } */}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navbar;