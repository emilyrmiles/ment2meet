
import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom'
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
    background: #30323D;
    height: 40px;
    display: flex;
    align-items: 'center';
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 5);
    z-index: 10;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: normal;
    padding: 0 2.5rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`;
export const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    align-items: 'center';
    @media screen and (max-width: 60px) {
        display: block;
        position: absolute;
        top: 0;
        right:0;
        transform: translate(-100%, 75%)
        font-size: 0.5rem;
        cursor: pointer;
    }
`;
export const NavMenu = styled.div`
    display: fixed;
    align-items: center;
    margin-right: -24px;
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: normal;
    
    @media screen and (max-width: 40px) {
        display: none;
    }
`;
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 60px) {
        display: none;
    }
`;
export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #A981FF;
    padding: 10px 22px;
    color: #FFFFFF;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    align-items: 'center'
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: normal;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

`;
