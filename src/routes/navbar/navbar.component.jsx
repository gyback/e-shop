import {Fragment} from 'react';
import {Outlet, Link, useLocation} from 'react-router-dom';

import categories from '../../assets/cactegories.json'
import './navbar.styles.scss';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'


const CategoryLinks = () => {
    const location = useLocation();
    console.log(location.pathname);
    if(location.pathname !== '/') return (
        <div className='nav-links-container'>
            {categories.map((category) =>(
                <Link key={category.id} className='nav-link' to={`/${category.title}`}>
                    {category.title.toLocaleUpperCase()}
                </Link>
            ))}    
        </div>
    )
    else return;
}

const Navbar = () => {
    
    return (
        <Fragment>
            <div className='navbar'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo />
                </Link>
                {CategoryLinks()}
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    <Link className='nav-link' to='/sign-in'>SIGN IN</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navbar;