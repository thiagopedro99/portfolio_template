// src/pages/home/sections/hero/index.tsx
import { Button, Container } from '@components/common';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import {
    HeroSection,
    HeroContent,
    Greeting,
    Name,
    Title,
    Description,
    ButtonGroup,
    SocialLinks,
    SocialLink,
} from './styles';
import { JSX } from 'react';
import { HeroProps } from './types';

const Hero = ({ data }: HeroProps) => {
    const socialIcons: Record<string, JSX.Element> = {
        github: <Github size={24} />,
        linkedin: <Linkedin size={24} />,
        email: <Mail size={24} />,
    };

    const handleNavigateToContact = () => {
        // Validação dos dados
        if (!data.phone) {
            console.error('Número de telefone não encontrado!');
            return;
        }

        // Remove caracteres não numéricos do telefone
        const cleanPhone = data.phone.replace(/\D/g, '');
        
        // Mensagem padrão se não houver texto
        const message = data.text || 'Olá! Vim através do seu portfólio.';
        
        // Monta URL do WhatsApp
        const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
        
        console.log('Abrindo WhatsApp:', whatsappUrl); // Debug
        
        window.open(whatsappUrl, '_blank');
    };

    return (
        <HeroSection id='hero'>
            <Container $maxWidth="sm">
                <HeroContent>
                    <Greeting>Olá! Meu nome é</Greeting>

                    <Name>{data.name}</Name>

                    <Title>{data.title}</Title>

                    <Description>{data.description}</Description>

                    <ButtonGroup>
                        <Button
                            $variant="primary"
                            $size="lg"
                            onClick={handleNavigateToContact}
                        >
                            Entre em Contato
                        </Button>

                        {data.cvUrl && (
                            <Button
                                $variant="outline"
                                $size="lg"
                                href={data.cvUrl}
                            >
                                <Download size={20} />
                                Download CV
                            </Button>
                        )}
                    </ButtonGroup>

                    <SocialLinks>
                        {data.socialLinks.map((link) => (
                            <SocialLink
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                            >
                                {socialIcons[link.icon]}
                            </SocialLink>
                        ))}
                    </SocialLinks>
                </HeroContent>
            </Container>
        </HeroSection>
    );
};

export default Hero;