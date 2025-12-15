// src/pages/home/sections/projects/index.tsx
import { Button, Container, Flex, Grid } from '@components/common';
import { ExternalLink, Github } from 'lucide-react';
import {
  ProjectsSection,
  SectionTitle,
  ProjectCard,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  TechTags,
  TechTag,
} from './styles';
import { ProjectsData } from './types';

interface ProjectsProps {
  data: ProjectsData;
}

const Projects = ({ data }: ProjectsProps) => {
  const handleGithubClick = (githubUrl: string) => {
    window.open(githubUrl, '_blank');
  };

  const handleExternalLinkClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <ProjectsSection id="projects">
      <Container $maxWidth="xl">
        <SectionTitle>{data.title}</SectionTitle>

        <Grid $columns={3} $gap="2rem">
          {data.projects.map((project, index) => (
            <ProjectCard key={project.id} $variant="elevated" $index={index}>
              <ProjectImage $image={project.image} />

              <ProjectTitle>{project.title}</ProjectTitle>

              <ProjectDescription>{project.description}</ProjectDescription>

              <TechTags>
                {project.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechTags>

              <Flex $gap="0.5rem">
                {project.liveUrl && (
                  <Button
                    $variant="primary"
                    $size="md"
                    onClick={() => handleExternalLinkClick(project.liveUrl || '')}
                  >
                    <ExternalLink size={16} />
                    Ver Projeto
                  </Button>
                )}

                {project.githubUrl && (
                  <Button
                    $variant="outline"
                    $size="md"
                    onClick={() => handleGithubClick(project.githubUrl)}
                  >
                    <Github size={16} />
                    Código
                  </Button>
                )}
              </Flex>
            </ProjectCard>
          ))}
        </Grid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;