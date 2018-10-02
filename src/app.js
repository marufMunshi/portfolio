import React from 'react';
import ReactDom from 'react-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import AppRouter from './routers/AppRouter';
import 'normalize.css';


const jsx = (
    <div>
        <GlobalStyle>
            <AppRouter />
        </GlobalStyle>
    </div>
);

ReactDom.render(jsx, document.getElementById('root'));