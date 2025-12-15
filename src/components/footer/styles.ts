// src/components/footer/styles.ts
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => theme.colors.primaryDark} 100%
  );
  color: ${({ theme }) => theme.colors.text.inverse};
  padding: ${({ theme }) => `${theme.spacing['3xl']} 0 ${theme.spacing.xl} 0`};
  margin-top: auto;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  padding-bottom: ${({ theme }) => theme.spacing['2xl']};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.sm};
    line-height: 1.6;
    opacity: 0.9;
    margin: 0;
  }
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.sm};

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.text.inverse};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

export const SocialLink = styled.a`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.text.inverse};
  transition: all ${({ theme }) => theme.transitions.normal};
  backdrop-filter: blur(10px);

  &:hover {
    background-color: ${({ theme }) => theme.colors.text.inverse};
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-4px);
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
`;

export const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
  svg, img {
    color: inherit;
    filter: ${({ theme }) =>
      theme.mode === "light" ? "brightness(0) invert(1)" : "none"};
  }
`;

export const ContactText = styled.a`
  color: ${({ theme }) => theme.colors.text.inverse};
  opacity: 0.9;
  transition: opacity ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: inherit;
    cursor: pointer;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  opacity: 0.8;
  margin: 0;
`;