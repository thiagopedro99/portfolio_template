// src/components/navbar/types.ts
export interface MenuItem {
  label: string;
  id: string;
  path?: string;
  showOnRoutes?: string[];
}

export interface NavbarData {
  logoName: string;
  logoImage?: string;
  menuItems: MenuItem[];
}

export interface NavbarProps {
  data: NavbarData;
}