import { Nav, NavLink, Bars, NavMenu, NavLogo, BarIcon } from './navbarElements';
import {SiGnuicecat} from 'react-icons/si';
import React from 'react'
function Navbar ( {toggle, isopen}, props ) {
    return (
        <>
            <Nav>    
                <NavLogo to='/'><SiGnuicecat className="Icon"/></NavLogo>
                <BarIcon onClick={toggle}>
                <Bars isopen={isopen}/>
                </BarIcon>
                <NavMenu>
                 <NavLink to='/cats'>SEE ALL CATS</NavLink>
                 <NavLink to='/breeds'>SEE ALL BREEDS</NavLink>
                 <NavLink to='/cats/form'>ADD YOUR CAT</NavLink>
                 <NavLink to='/breeds/form'>ADD A BREED</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}
export default Navbar;