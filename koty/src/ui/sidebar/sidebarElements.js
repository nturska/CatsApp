import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom';

export const Sidebar = styled.aside`
    display: flex;
    position:fixed;
    z-index: 999;
    gap: 2em;
    inset: 0 0 0 20%;
    flex-direction: column;
    padding: min(30vh, 8rem) 2em;
    background: hsl(0 0% 0% / 0.9);
    transition: 0.3s ease-in-out;
    right: ${({ isopen }) => (isopen? '0': '-150%')};
    opacity: ${({ isopen }) => (isopen? '100%' : '0')};
    z-index: ${({ isopen }) => (isopen? '999' : '-1')};
    @media screen and (min-width: 768px){
        display: none;
        transition: 0.8s all ease;
    }
    @supports (backdrop-filter: blur(1rem)){
          background: hsl(0 0% 100% / 0.1);;
          backdrop-filter: blur(1rem);
        }
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`
export const Icon = styled.button`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    border: none;
`

export const SidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration;
    color: #fff;
    cursor: pointer;
`