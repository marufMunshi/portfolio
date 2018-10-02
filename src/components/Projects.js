import React from 'react';
import Grid from '@material-ui/core/Grid';
import 
    { 
        SingleProject, ProjectDescription, ProjectTitle, BuiltWith, 
        BuiltWithInfo, ProjectInfo, ProjectFooter, ProjectLink 
    } 
from './ProjectPageStyledComponents';


const Projects = ({ projectData }) => {
    return (
        projectData.map((item, i) => {
            return (
                <Grid item xs={12} sm={6} md={4} key={i}>
                    <SingleProject>
                        <ProjectDescription>
                            <header>
                                <ProjectTitle>{item.title}</ProjectTitle>
                            </header>
                            <main>
                                <BuiltWith>
                                    {
                                        item.builtWith.map((singleTech, j) => {
                                            return <BuiltWithInfo
                                                label={singleTech}
                                                key={j}
                                            />
                                        })
                                    }
                                </BuiltWith>

                                <ProjectInfo>
                                    {item.info}
                                </ProjectInfo>
                            </main>
                        </ProjectDescription>

                        <ProjectFooter>
                            {
                                item.codeLink 
                                    &&  
                                <ProjectLink
                                    href={item.codeLink}
                                    target="_blank"
                                >
                                    View Code
                                </ProjectLink>
                            }
                            <ProjectLink
                                primary="true"
                                variant="contained"
                                href={item.liveLink}
                                target="_blank"
                            >
                                Live Preview
                            </ProjectLink>
                        </ProjectFooter>
                    </SingleProject>
                </Grid>
            );
        })
    );
};

export default Projects;