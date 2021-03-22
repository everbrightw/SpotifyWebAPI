import React, { Component } from 'react';
import logo from "../assets/spotify_logo.svg"
import { NavLink } from 'react-router-dom';
import sty from 'styled-components'


class Header extends Component {
    render() {
        return (
            <HeaderComponent className="header-container">
                <div className="header-top">
                    <Logo src={logo} />
                    <NavLink className="signIn-btn" to="/">Sign In</NavLink>
                </div>  
                <div className="header-content">
                    <Title>Your Personal Music Gallery</Title>
                </div>
            </HeaderComponent>
        );
    }
}

export default Header;

//Header
const HeaderComponent = sty.div`
    .signIn-btn {
        right:0;
        margin: 1.125rem 3% 0;
        padding: 0.4375rem 1.0625rem;
        font-weight: 400;
        line-height: normal;
        border-radius: 0.1875rem;
        font-size: 1rem;
        background: var(--main-green);
        position: absolute;
        translate: transform(-50%, -50%);
        cursor: pointer;
        transition: background 0.2s ease-in;    
        &:hover {
            background:var(--main-green-hover);
        }
    }

    .header-top {
        position: relative;
        height: 10rem;
        z-index: 1;
    }
    .header-content{
        width: 65%;
        position: relative;
        margin: 4.5rem auto 0;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        flex-direction: column;
        z-index: 1;
    }
`;

//Logo

const Logo = sty.img`

    width: 10rem;
    height: 3.5rem;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);

`;
   
const Title = sty.h1`
    margin: 0 0 1.2rem;
    font-size: 3rem; 
    font-weight: 700;
    line-height: 1.1em;

`;

