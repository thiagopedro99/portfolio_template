// src/components/footer/types.ts
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface FooterData {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  whatsapp?: string;
  socialLinks: SocialLink[];
  year?: number;
  text?: string;
}

export interface FooterProps {
  data?: FooterData;
}