import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../styles/mediaQuery';


const StyledNav = styled.nav`
    position: ${props => props.other ? 'relative' : 'absolute'};
    width: 100%;
    height: ${props => props.other ? '100%' : '70px'};
    text-align: center;
    bottom: ${props => props.other ? 'none' : '0'};
    color: #fff8e1;
    background-color : inherit;
    ul {
        border-top: ${props => props.other ? '0' : '1px solid #E6E0CB'};
        border-bottom: ${props => props.other ? '1px solid #E6E0CB' : '0'};
        height: 100%;
        width: 100%;
        display:flex;
        align-items: center;
        justify-content: space-around;
        ${media.tablet`
            width: 500px;
            margin: 0 auto;
        `}

        li {
            font-size: 110%;
            ${media.phablet`
                font-size: 115%;
            `}
            ${media.tablet`
                font-size: 120%;
            `}
            ${media.smallLaptop`
                font-size: 130%;
            `}
            ${media.laptop`
                font-size: 135%;
            `}
            ${media.desktop`
                font-size: 140%;
            `}

            a {
                color: inherit;
                text-decoration: none;
                padding-left: 10px;
                padding-right: 10px;
                padding-top: ${props => props.other ? '0' : '18px'};
                padding-bottom: ${props => props.other ? '23px' : '0'};
                border-top: ${props => props.other ? '0' : '5px solid transparent'};
                border-bottom: ${props => props.other ? '5px solid transparent' : '0'};
                transition: border-color .4s ease-in;
                
                ${media.smallLaptop`
                    padding-left: 15px;
                    padding-right: 15px;
                `}

                &:hover {
                    border-color: #E6E0CB;
                }
            }
        }
    }
`;


const Nav = (props) => {
    return (

        props.other
            ?
            <StyledNav other>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/projects"}>Projects</Link></li>
                    <li><a href="https://drive.google.com/open?id=1tMpRW1UZ6qOq1xOmk55zfMBkqQpnaYfu" target="_blank">My Resume</a></li>
                </ul>
            </StyledNav>
            :
            <StyledNav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/projects"}>Projects</Link></li>
                    <li><a href="https://drive.google.com/open?id=1tMpRW1UZ6qOq1xOmk55zfMBkqQpnaYfu" target="_blank">My Resume</a></li>
                </ul>
            </StyledNav>

    );
};


export default Nav;