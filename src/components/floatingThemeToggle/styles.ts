import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.primary}40;
  }
  70% {
    box-shadow: 0 0 0 10px ${({ theme }) => theme.colors.primary}00;
  }
  100% {
    box-shadow: 0 0 0 0 ${({ theme }) => theme.colors.primary}00;
  }
`;

export const FloatingButton = styled.button`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.xl};
  right: ${({ theme }) => theme.spacing.xl};
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.inverse};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  z-index: ${({ theme }) => theme.zIndex.fixed};
  
  &:hover {
    transform: scale(1.1);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    animation: ${pulse} 1.5s infinite;
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 4px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    bottom: ${({ theme }) => theme.spacing.lg};
    right: ${({ theme }) => theme.spacing.lg};
    width: 48px;
    height: 48px;
  }
`;

export const IconWrapper = styled.span<{ $isLight: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform ${({ theme }) => theme.transitions.normal};

  svg {
    transition: transform ${({ theme }) => theme.transitions.normal};
  }

  ${FloatingButton}:hover & svg {
    transform: ${({ $isLight }) => $isLight ? 'rotate(-30deg)' : 'rotate(30deg)'};
  }
`;