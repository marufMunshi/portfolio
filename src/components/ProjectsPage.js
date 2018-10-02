import React from 'react';
import { ProjectPageWrapper } from './ProjectPageStyledComponents';
import ProjectPageHeader from './ProjectPageHeader';
import ProjectList from './ProjectList';
import ProjectsPageFooter from './ProjectPageFooter';

const ProjectsPage = () => {
    return (
        <ProjectPageWrapper>
            <ProjectPageHeader />
            <ProjectList />
            <ProjectsPageFooter />
        </ProjectPageWrapper>
    );
};

export default ProjectsPage;