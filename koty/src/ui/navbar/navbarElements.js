import styled from 'styled-components';
import { NavLink as StyleLink} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'


export const Nav = styled.nav`
    background: hsl(0 0% 0% / 0.5);
    width: 100%;
    height: 80px;
    display: flex;
    padding: 0 1.5rem 0 2rem;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    font-size: 1rem;
    top: 0;
    z-index: 100;
    margin-bottom: 20px;
    @media screen and (max-width: 768px){
          transition: 0.8s all ease;
          background: none;
          justify-content: center; 
        }
    @supports (backdrop-filter: blur(1rem)){
        background: hsl(0 0% 100% / 0.1);;
        backdrop-filter: blur(1rem);
      }
`
export const NavLink = styled(StyleLink)`
    color: #fff;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    &.active {
        color: #15cdfc
    }
`

export const Bars = styled(FaBars)`
    color: ${({ isopen }) => ((isopen)? 'transparent': '#fff')};
`
export const BarIcon = styled.button`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        background: transparent;
        top: 1.2rem;
        right: 1.5rem;
        font-size: 2rem;
        outline: none;
        cursor: pointer;
        border: none;
        transition: 0.3s ease-in-out;

`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: -24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavLogo = styled(StyleLink)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    height: 60px;
    width: 60px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
`