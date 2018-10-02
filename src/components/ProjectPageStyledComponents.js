import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { media } from '../styles/mediaQuery';


export const Header = styled.header`
    height: 80px;
    background-color: #405554;
`;


export const ProjectPageWrapper = styled.div`
    background-color: rgba(64, 85, 84, 0.8);
`;


export const ProjectListsWrapper = styled.section`
    padding: 40px 0;
`;

export const Title = styled.h1`
    margin-bottom: 30px;
    font-size: 210%;
    color: #fffae8;
    ${media.phablet`
        font-size: 215%;
    `}
    ${media.tablet`
        font-size: 220%;
        margin-bottom: 40px;
    `}
    ${media.smallLaptop`
        font-size: 225%;
    `}
    ${media.desktop`
        font-size: 235%;
        margin-bottom: 50px;
    `}

    &::after {
        display: block;
        content: '';
        border-bottom: 5px solid #f8e49b;
        width: 50px;
        margin-left: 3px;
        padding-top: 10px;
    }
`;


export const SingleProject = styled.div`
    height: 100%;
    margin-bottom: 20px;
    color: #555;
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 15px 1px #5c6354;
    ${media.tablet`
        margin-bottom: 0;
    `}
`;

export const ProjectDescription = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;

export const ProjectTitle = styled.h1`
    font-size: 180%;
    font-weight: lighter;
    padding: 15px;
    ${media.phablet`
        font-size: 185%;
    `}
    ${media.tablet`
        font-size: 190%;
    `}
    ${media.smallLaptop`
        font-size: 195%;
    `}
    ${media.laptop`
        font-size: 200%;
    `}
    ${media.desktop`
        font-size: 210%;
    `}
`;


export const BuiltWith = styled.div`
    word-spacing: 2px;
    line-height: 3 !important;
    padding: 15px;
`;

export const BuiltWithInfo = styled(Chip)`
    margin-right: 12px;

    span {
        color: #333;
        font-size: 110%;
        font-family: ${props => props.theme.normalFont} !important;
        ${media.phablet`
            font-size: 115%;
        `}
        ${media.tablet`
            font-size: 120%;
        `}
        ${media.smallLaptop`
            font-size: 125%;
        `}
        ${media.laptop`
            font-size: 130%;
        `}
        ${media.desktop`
            font-size: 135%;
        `}
    }

    &:last-child {
        margin-right: 0;
        margin-bottom: 0;
    }
`;


export const ProjectInfo = styled.p`
    font-size: 120%;
    word-spacing: 3px;
    line-height: 1.8;
    padding: 15px;
    ${media.phablet`
        font-size: 125%;
    `}
    ${media.tablet`
        font-size: 130%;
    `}
    ${media.smallLaptop`
        font-size: 135%;
    `}
    ${media.laptop`
        font-size: 140%;
    `}
    ${media.desktop`
        font-size: 145%;
    `}
`;


export const ProjectFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-top: 1px solid #95A5A6;
    padding: 15px;
`;

export const ProjectLink = styled(Button)`
    font-size: 105% !important;
    margin-right: 10px !important;
    font-family: ${props => props.theme.normalFont} !important;
    color: ${props => props.primary ? '#fff' : '#555'} !important;
    background-color: ${props => props.primary ? '#fca745' : '#fff'} !important;
    font-weight: bold !important;
    text-transform: none !important;
    word-spacing: 3px;
    ${media.phablet`
        font-size: 110%;
    `}
    ${media.tablet`
        font-size: 115%;
    `}
    ${media.smallLaptop`
        font-size: 120%;
    `}
    ${media.desktop`
        font-size: 125%;
    `}

    &:last-child {
        margin-right: 0 !important;
    }

    &:hover {
        background-color: ${props => props.primary ? '#fb8f13' : '#d5d5d5'} !important;
    }
`;

export const Footer = styled.footer`
    height: 80px;
    background-color: #405554;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-size: 105%;
        word-spacing: 3px;

        ${media.tablet`
            font-size: 110%;
        `}

        ${media.laptop`
            font-size: 115%;
        `}

        a {
            color: #E6E0CB;
            text-decoration: none;
            border-bottom: 1px solid #E6E0CB;
        }
    }
`;