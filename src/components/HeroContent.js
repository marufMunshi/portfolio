import styled from 'styled-components';
import { media } from '../styles/mediaQuery';

const HeroContent = styled.div`
    position: absolute;
    width: 300px;
    height: 450px;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -35%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    ${media.tablet`
        width: 500px;
        height: 70vh;
    `}

    h1 {
        font-size: 210%;
        font-weight: lighter;
        ${media.phablet`
            font-size: 215%;
        `}
        ${media.tablet`
            font-size: 240%;
        `}
        ${media.smallLaptop`
            font-size: 250%;
        `}
        ${media.laptop`
            font-size: 255%;
        `}
        ${media.desktop`
            font-size: 260%;
        `}
    }

    p {
        font-size: 120%;
        word-spacing: 3px;
        line-height: 1.8;  
        ${media.phablet`
            font-size: 125%;
        `}
        ${media.tablet`
            font-size: 130%;
        `}
        ${media.smallLaptop`
            font-size: 140%;
        `}
        ${media.laptop`
            font-size: 145%;
        `}
        ${media.desktop`
            font-size: 155%;
        `}
    }

    img {
        height: 120px;
        width: auto;
        border-radius: 50%;
        ${media.tablet`
            height: 135px;
        `}
        ${media.laptop`
            height: 145px;
        `}
        ${media.desktop`
            height: 155px;
        `}
    }

    .mailLink {
        a {
            color: #E6E0CB;
            text-decoration: none;
            border-bottom: 1px solid #E6E0CB;    
        }
    }

    .icons {
        a {
            margin-right: 20px;
            color: inherit;

            &:last-child {
                margin: 0;
            }
            i {
                font-size: 180%;
                ${media.phablet`
                    font-size: 185%;
                `}
                ${media.tablet`
                    font-size: 190%;
                `}
                ${media.smallLaptop`
                    font-size: 200%;
                `}
                ${media.laptop`
                    font-size: 205%;
                `}
                ${media.desktop`
                    font-size: 210%;
                `}
            }
        }
    }
`;


export default HeroContent;