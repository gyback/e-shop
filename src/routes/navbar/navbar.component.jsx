import {Fragment} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import categories from '../../assets/cactegories.json'
import {LogoContainer, NavigationContainer, NavLinksContainer, NavLink} from './navbar.styles';

import CartIcon from '../../components/cart-icon/cart-icon.component';  
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'

import { signOutUser } from '../../utils/firebase/firebase.utils';
import { selectCurrentUser } from '../../store/user/user.selector';



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

    const currentUser = useSelector(selectCurrentUser)
    
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
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navbar;