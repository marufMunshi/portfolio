import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { Header } from './ProjectPageStyledComponents';


const ProjectPageHeader = () => {
    return (
        <Header>
            <Nav other>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/projects"}>Projects</Link></li>
                </ul>
            </Nav>
        </Header>
    );
}

export default ProjectPageHeader;