import React from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from './theme';

const Style = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
    @import url('https://fonts.googleapis.com/css?family=PT+Serif:400,400i');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        height: 100%;
        position: relative;
        font-family: ${props => props.theme.normalFont};
        background: ${props => props.theme.globalBackgroundColor};
        font-size: 16px;
        color: ${props => props.theme.lowWeightFontColor};
    }

    a {
        color: ${props => props.theme.linkColor};
        &:hover {
            text-decoration: none;
            color: ${props => props.theme.linkColor};
            cursor: pointer;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${props => props.theme.titleFont};
    }

    ul, ol {
        list-style: none;
    }
`;

export const GlobalStyle = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Style />
                {props.children}
            </div>
        </ThemeProvider>
    );
};