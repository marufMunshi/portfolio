import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import ProjectsPage from '../components/ProjectsPage';
import NotFoundPage from '../components/NotFoundPage';


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/projects' component={ProjectsPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    )
};

export default AppRouter;