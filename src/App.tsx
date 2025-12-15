// src/App.tsx
import { ThemeProvider } from "styled-components";
import { themes } from "@styles/themes";
import GlobalStyles from "@styles/globalStyles";
import Router from "@routes/index";
import { useAppStore } from "@stores/App/appStore";
import FloatingThemeToggle from "@components/floatingThemeToggle";

const App = () => {
  const theme = useAppStore((state) => state.theme);
  const currentTheme = themes[theme];

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
        <Router />
        <FloatingThemeToggle />
    </ThemeProvider>
  );
};

export default App;