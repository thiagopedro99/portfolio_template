// src/components/navbar/index.tsx
import { useState } from "react";
import { Container, Flex } from "@components/common";
import { useActiveSection } from "@hooks/useActiveSection";
import {
  Nav,
  Logo,
  LogoImage,
  LogoContainer,
  LogoText,
  DesktopMenu,
  MenuButton,
  MobileMenuButton,
  MobileMenu,
  MobileMenuScrollButton,
  Overlay,
  CloseButton,
} from "./styles";
import { Menu, X } from "lucide-react";
import { NavbarProps } from "./types";


const Navbar = ({ data }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // 🎯 Extrai os IDs das seções para detecção ativa
  const sectionIds = data.menuItems.map(item => item.id);
  const activeSection = useActiveSection(sectionIds);

  // 📱 Handlers
  const handleToggle = () => setMobileOpen(!mobileOpen);

  const handleCloseMobile = () => setMobileOpen(false);

  const handleScrollToSection = (sectionId: string) => {
    handleCloseMobile();

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleScrollToSection('hero');
  };

  return (
    <>
      <Nav>
        <Container $maxWidth="xl">
          <Flex $justify="between" $align="center" style={{ height: '64px' }}>
            {/* Logo */}
            <Logo
              to="/"
              onClick={handleLogoClick}
              aria-label="Voltar ao topo"
            >
              <LogoContainer>
                {data.logoImage && (
                  <LogoImage
                    src={data.logoImage}
                    alt={`${data.logoName} logo`}
                    loading="eager"
                  />
                )}
                <LogoText>{data.logoName}</LogoText>
              </LogoContainer>
            </Logo>

            <Flex $align="center" $gap="1rem">
              {/* Desktop Menu */}
              <DesktopMenu>
                {data.menuItems.map((item) => (
                  <MenuButton
                    key={item.id}
                    onClick={() => handleScrollToSection(item.id)}
                    className={activeSection === item.id ? 'active' : ''}
                    aria-label={`Navegar para ${item.label}`}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    {item.label}
                  </MenuButton>
                ))}
              </DesktopMenu>

              {/* Mobile Menu Button */}
              <MobileMenuButton
                onClick={handleToggle}
                aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={mobileOpen}
              >
                <Menu size={24} />
              </MobileMenuButton>
            </Flex>
          </Flex>
        </Container>
      </Nav>

      {/* Mobile Overlay */}
      <Overlay
        $isOpen={mobileOpen}
        onClick={handleCloseMobile}
        aria-hidden={!mobileOpen}
      />

      {/* Mobile Menu */}
      <MobileMenu
        $isOpen={mobileOpen}
        role="navigation"
        aria-label="Menu mobile"
      >
        <Flex $justify="between" $align="center" style={{ marginBottom: '1rem' }}>
          <CloseButton
            onClick={handleCloseMobile}
            aria-label="Fechar menu"
          >
            <X size={24} />
          </CloseButton>
        </Flex>

        {data.menuItems.map((item) => (
          <MobileMenuScrollButton
            key={item.id}
            onClick={() => handleScrollToSection(item.id)}
            className={activeSection === item.id ? 'active' : ''}
            aria-label={`Navegar para ${item.label}`}
            aria-current={activeSection === item.id ? 'page' : undefined}
          >
            {item.label}
          </MobileMenuScrollButton>
        ))}
      </MobileMenu>
    </>
  );
};

export default Navbar;