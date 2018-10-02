import React from 'react'
import Container from './Container'
import Grid from '@material-ui/core/Grid'
import Projects from './Projects';
import { ProjectListsWrapper, Title } from './ProjectPageStyledComponents';
import projectData from '../fixtures/projectData';



class ProjectList extends React.Component {
    render() {
        return (
            <ProjectListsWrapper>
                <Container>
                <Title>Projects</Title>
                    <Grid
                        container
                        spacing={40}
                    >
                        <Projects projectData = {projectData}/>
                    </Grid>
                </Container>
            </ProjectListsWrapper>
        );
    }
}

export default ProjectList;
