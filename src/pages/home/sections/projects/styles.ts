// src/pages/home/sections/projects/styles.ts
import { Card } from "@components/common";
import { keyframes, styled } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const ProjectsSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0`};
  background-color: ${({ theme }) => theme.colors.background};
`;

export const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.sizes['3xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  position: relative;
  animation: ${fadeInUp} 0.6s ease-out;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: ${({ theme }) => theme.spacing.md} auto 0;
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
`;

export const ProjectCard = styled(Card)<{ $index?: number }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform ${({ theme }) => theme.transitions.normal};
  animation: ${fadeInUp} 0.6s ease-out both;
  animation-delay: ${({ $index = 0 }) => $index * 0.1}s;

  &:hover {
    transform: translateY(-8px);
  }
`;

export const ProjectImage = styled.div<{ $image?: string }>`
  width: 100%;
  height: 200px;
  background: ${({ $image, theme }) =>
    $image
      ? `url(${$image})`
      : `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryLight})`};
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  transition: transform ${({ theme }) => theme.transitions.normal};

  ${ProjectCard}:hover & {
    animation: ${float} 2s ease-in-out infinite;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex: 1;
`;

export const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const TechTag = styled.span`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  background-color: ${({ theme }) => theme.colors.primaryLight}30;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
    transform: scale(1.05);
  }
`;


