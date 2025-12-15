// src/pages/home/sections/hero/styles.ts

import { keyframes, styled } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing['2xl']} 0`};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.surface} 100%
  );
  position: relative;
  overflow: hidden;
 
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 800px;
  animation: ${fadeIn} 1s ease-out;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const Greeting = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes["3xl"]};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  margin: 0;
  animation: ${fadeIn} 1s ease-out 0.2s both;
`;

export const Name = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  line-height: 1.2;
  animation: ${fadeIn} 1s ease-out 0.4s both;
`;

export const Title = styled.h2`
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
  animation: ${fadeIn} 1s ease-out 0.6s both;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.8;
  max-width: 600px;
  margin: 0;
  animation: ${fadeIn} 1s ease-out 0.8s both;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  animation: ${fadeIn} 1s ease-out 1s both;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
  animation: ${fadeIn} 1s ease-out 1.2s both;
`;

export const SocialLink = styled.a`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 2px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-4px);
  }
`;