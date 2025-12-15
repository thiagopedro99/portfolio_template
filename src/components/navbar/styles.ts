// src/components/navbar/styles.ts
import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  z-index: ${({ theme }) => theme.zIndex.sticky};
`;

export const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.fonts.sizes['2xl']};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// Logo components
export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  transition: all ${({ theme }) => theme.transitions.normal};

  /* Inverte cores no tema escuro */
  filter: ${({ theme }) => {
    if (theme.mode === 'dark') {
      return 'invert(1) hue-rotate(180deg) brightness(1.2) saturate(1.1)';
    }
    return 'brightness(0.95) saturate(1.05)';
  }};


  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 40px;
    height: 40px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const LogoText = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all ${({ theme }) => theme.transitions.normal};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }
`;

export const DesktopMenu = styled.nav`
  display: none;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

// Estilo compartilhado usando css helper
const menuItemBaseStyles = css`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  position: relative;
  padding: ${({ theme }) => `${theme.spacing.sm} 0`};
  transition: color ${({ theme }) => theme.transitions.fast};
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const MenuLink = styled(NavLink)`
  ${menuItemBaseStyles}
`;

export const MenuButton = styled.button`
  ${menuItemBaseStyles}
`;

export const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity ${({ theme }) => theme.transitions.normal},
              visibility ${({ theme }) => theme.transitions.normal};
  z-index: ${({ theme }) => theme.zIndex.backdrop};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform ${({ theme }) => theme.transitions.normal};
  z-index: ${({ theme }) => theme.zIndex.modal};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

// Estilo compartilhado para mobile menu items usando css helper
const mobileMenuItemBaseStyles = css`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  padding: ${({ theme }) => `${theme.spacing.md} 0`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: color ${({ theme }) => theme.transitions.fast};
  background: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  text-align: left;
  width: 100%;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MobileMenuLink = styled(NavLink)`
  ${mobileMenuItemBaseStyles}
`;

// RENOMEADO para evitar conflito de nome
export const MobileMenuScrollButton = styled.button`
  ${mobileMenuItemBaseStyles}
`;