// src/components/floatingThemeToggle/index.tsx
import { useAppStore } from '@stores/App/appStore';
import { Moon, Sun } from 'lucide-react';
import { FloatingButton, IconWrapper } from './styles';

const FloatingThemeToggle = () => {
  const { theme, toggleTheme } = useAppStore();

  return (
    <FloatingButton 
      onClick={toggleTheme}
      aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      <IconWrapper $isLight={theme === 'light'}>
        {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
      </IconWrapper>
    </FloatingButton>
  );
};

export default FloatingThemeToggle;