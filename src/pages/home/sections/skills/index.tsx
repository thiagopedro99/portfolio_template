// src/pages/home/sections/skills/index.tsx
import { useState } from 'react';
import { Container, Modal, Card, Flex, Grid, Button } from '@components/common';
import { ExternalLink, FolderGit2, Github, Package } from 'lucide-react';
import {
  SkillsSection,
  SectionTitle,
  SectionSubtitle,
  Underline,
  TechGrid,
  TechItem,
  TechIcon,
  TechName,
  ModalTechIcon,
  CategoryBadge,
  ProjectCount,
  ModalDescription,
  ProjectsTitle,
  EmptyState,
  ProjectCard,
  ProjectTitle,
  ProjectDescription,
  TechTag,
  TechTags,
} from './styles';
import { SkillsProps, Technology } from './types';
import { portfolioData } from '@shared/constants';

const Skills = ({ data }: SkillsProps) => {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleTechClick = (tech: Technology) => {
    setSelectedTech(tech);
    setModalOpen(true);
  };

  const handleExternalLinkClick = (url: string) => {
    window.open(url, '_blank');
  }

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedTech(null), 300); // Delay para animação do modal
  };

  // Filtrar projetos que usam a tecnologia selecionada
  const filteredProjects = selectedTech
    ? portfolioData.projects.projects.filter((project) =>
      project.technologies.includes(selectedTech.name)
    )
    : [];

  const categoryLabels: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Ferramentas',
    design: 'Design',
  };

  return (
    <SkillsSection id="skills">
      <Container $maxWidth="xl">
        <SectionTitle>{data.title}</SectionTitle>
        <Underline />
        {data.subtitle && <SectionSubtitle>{data.subtitle}</SectionSubtitle>}

        <TechGrid>
          {data.technologies.map((tech) => (
            <TechItem key={tech.name} onClick={() => handleTechClick(tech)}>
              <TechIcon>
                <img src={tech.icon} alt={tech.name} loading="lazy" />
              </TechIcon>
              <TechName>{tech.name}</TechName>
            </TechItem>
          ))}
        </TechGrid>
      </Container>

      {/* Modal de Tecnologia */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        title=""
        size="lg"
      >
        {selectedTech && (
          <Flex $direction="column" $gap="1.5rem">
            {/* Header com ícone e informações */}
            <Flex $direction="column" $align="center" $gap="1rem">
              <ModalTechIcon>
                <img src={selectedTech.icon} alt={selectedTech.name} />
              </ModalTechIcon>

              <Flex $direction="column" $align="center" $gap="0.5rem">
                <SectionTitle style={{ marginBottom: 0 }}>
                  {selectedTech.name}
                </SectionTitle>

                <Flex $align="center" $gap="0.75rem" $wrap>
                  <CategoryBadge>
                    <Package size={16} />
                    {categoryLabels[selectedTech.category] || selectedTech.category}
                  </CategoryBadge>

                  <ProjectCount>
                    Usado em {filteredProjects.length}{' '}
                    {filteredProjects.length === 1 ? 'projeto' : 'projetos'}
                  </ProjectCount>
                </Flex>
              </Flex>
            </Flex>

            {/* Descrição */}
            <ModalDescription>{selectedTech.description}</ModalDescription>



            {/* Projetos usando esta tecnologia */}
            <div>
              <ProjectsTitle>
                <FolderGit2 size={24} />  Projetos usando {selectedTech.name}
              </ProjectsTitle>

              {filteredProjects.length > 0 ? (
                <Grid $columns={2} $gap="1rem">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id}>
                      <Card $variant="outlined" $padding="1rem">
                        <Flex $direction="column" $gap="0.75rem">
                          <ProjectTitle>{project.title}</ProjectTitle>
                          <ProjectDescription>
                            {project.description}
                          </ProjectDescription>

                          <TechTags>
                            {project.technologies.slice(0, 3).map((tech) => (
                              <TechTag key={tech}>{tech}</TechTag>
                            ))}
                            {project.technologies.length > 3 && (
                              <TechTag>+{project.technologies.length - 3}</TechTag>
                            )}
                          </TechTags>

                          <Flex $gap="0.5rem" $wrap>
                            {project.liveUrl && (
                              <Button
                                $variant="primary"
                                $size="sm"
                                onClick={() => handleExternalLinkClick(project.liveUrl)}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink size={14} />
                                Ver Projeto
                              </Button>
                            )}

                            {project.githubUrl && (
                              <Button
                                $variant="outline"
                                $size="sm"
                                onClick={() => handleExternalLinkClick(project.githubUrl)}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github size={14} />
                                Código
                              </Button>
                            )}
                          </Flex>
                        </Flex>
                      </Card>
                    </ProjectCard>
                  ))}
                </Grid>
              ) : (
                <EmptyState>
                  <p>Nenhum projeto usando {selectedTech.name} ainda.</p>
                  <p style={{ fontSize: '0.875rem', opacity: 0.7 }}>
                    Mas em breve teremos projetos incríveis! 🚀
                  </p>
                </EmptyState>
              )}
            </div>
          </Flex>
        )}
      </Modal>
    </SkillsSection>
  );
};

export default Skills;