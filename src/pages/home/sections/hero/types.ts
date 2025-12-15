// src/pages/home/sections/hero/types.ts
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  cvUrl?: string;
  socialLinks: SocialLink[];
  phone?: string;
  text?: string;
}

export interface HeroProps {
    data: HeroData;
    onContactClick: () => void;
}