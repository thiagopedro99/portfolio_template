/**
 * ARQUIVO DE EXEMPLO - DADOS DO PORTFÓLIO
 * 
 * Este é um arquivo de exemplo mostrando como configurar seu portfólio.
 * 
 * COMO USAR:
 * 1. Copie o conteúdo deste arquivo
 * 2. Cole em src/shared/constants.ts
 * 3. Personalize com suas informações
 * 4. Salve e veja as mudanças em tempo real
 * 
 * IMPORTANTE: Este arquivo é apenas um exemplo. O arquivo real que você deve
 * editar é src/shared/constants.ts
 */

export const portfolioData = {
  // ========================================
  // BARRA DE NAVEGAÇÃO
  // ========================================
  navbar: {
    logoName: 'Seu Nome',
    logoImage: '/logo.svg',
    menuItems: [
      { label: 'Home', id: 'hero' },
      { label: 'Habilidades', id: 'skills' },
      { label: 'Projetos', id: 'projects' },
    ],
  },

  // ========================================
  // SEÇÃO HERO (Apresentação Principal)
  // ========================================
  hero: {
    name: 'Seu Nome Completo',
    title: 'Seu Cargo ou Especialização',
    subtitle: 'Slogan ou frase de impacto',

    // WhatsApp (opcional - remova se não quiser usar)
    phone: '+5511999999999',
    text: 'Olá! Vi seu portfólio e gostaria de conversar.',

    description:
      'Escreva aqui uma breve descrição sobre você, sua experiência e o que você faz. ' +
      'Este texto aparecerá logo abaixo do seu título na página inicial. ' +
      'Mantenha entre 2-3 linhas para melhor leitura.',

    // CV (opcional - remova se não tiver)
    cvUrl: '/cv.pdf',

    // Redes Sociais
    socialLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com/seu-usuario',
        icon: 'github'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/seu-usuario',
        icon: 'linkedin'
      },
      {
        name: 'Email',
        url: 'mailto:seu@email.com',
        icon: 'email'
      },
    ],
  },

  // ========================================
  // HABILIDADES E TECNOLOGIAS
  // ========================================
  skills: {
    title: 'Habilidades',
    subtitle: 'Tecnologias e ferramentas que domino',

    technologies: [
      {
        name: 'React',
        icon: 'icons/react.svg',
        category: 'frontend',
        description: 'Biblioteca JavaScript para construção de interfaces de usuário.'
      },
      {
        name: 'TypeScript',
        icon: 'icons/typescript.svg',
        category: 'frontend',
        description: 'Superset JavaScript com tipagem estática.'
      },
      {
        name: 'Node.js',
        icon: 'icons/nodejs-original.svg',
        category: 'backend',
        description: 'Ambiente de execução JavaScript server-side.'
      },
      {
        name: 'Git',
        icon: 'icons/git-original.svg',
        category: 'tools',
        description: 'Sistema de controle de versão distribuído.'
      },
    ],
  },

  // ========================================
  // PROJETOS
  // ========================================
  projects: {
    title: 'Meus Projetos',

    projects: [
      {
        id: '1',
        title: 'Nome do Projeto',
        description: 'Descrição breve do projeto e suas funcionalidades principais.',
        image: 'https://via.placeholder.com/400x300',
        technologies: ['React', 'TypeScript', 'Node.js'],
        liveUrl: 'https://projeto.com',
        githubUrl: 'https://github.com/usuario/projeto',
        featured: true,
      },
    ],
  },

  // ========================================
  // RODAPÉ
  // ========================================
  footer: {
    name: 'Seu Nome',
    email: 'seu@email.com',
    phone: '+5511999999999',
    location: 'Cidade, Estado - País',
    text: 'Olá! Vi seu portfólio.',

    socialLinks: [
      { name: 'GitHub', url: 'https://github.com/seu-usuario', icon: 'github' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/seu-usuario', icon: 'linkedin' },
      { name: 'Email', url: 'mailto:seu@email.com', icon: 'email' },
    ],

    year: new Date().getFullYear(),
  },
};

/**
 * GUIA RÁPIDO DE PERSONALIZAÇÃO
 * 
 * NAVBAR:
 * - logoName: Nome ou marca que aparece ao lado do logo
 * - logoImage: Caminho do arquivo de logo (em public/)
 * - menuItems: Array de links do menu
 *   - label: Texto exibido
 *   - id: ID da seção HTML correspondente
 * 
 * HERO:
 * - name: Seu nome completo
 * - title: Cargo ou especialização
 * - phone: Número WhatsApp com código do país (+5511999999999)
 * - text: Mensagem pré-preenchida do WhatsApp
 * - description: Texto de apresentação (2-3 linhas)
 * - cvUrl: Caminho do seu CV (em public/)
 * - socialLinks: Array de redes sociais
 * 
 * SKILLS:
 * - technologies: Array de tecnologias
 *   - name: Nome da tecnologia
 *   - icon: Caminho do ícone SVG (em public/icons/)
 *   - category: 'frontend' | 'backend' | 'tools' | 'design'
 *   - description: Breve descrição
 * 
 * PROJECTS:
 * - projects: Array de projetos
 *   - id: Identificador único
 *   - title: Nome do projeto
 *   - description: Descrição breve
 *   - image: URL da imagem ou caminho local
 *   - technologies: Array de strings com tecnologias usadas
 *   - liveUrl: URL do projeto ao vivo (opcional)
 *   - githubUrl: URL do repositório
 *   - featured: true/false - Destaque (opcional)
 * 
 * FOOTER:
 * - Mesmas configurações de contato do Hero
 * 
 * ONDE CONSEGUIR ÍCONES:
 * - Devicon: https://devicon.dev/
 * - Simple Icons: https://simpleicons.org/
 * - Salve os SVGs em public/icons/
 * 
 * DICAS DE IMAGENS DE PROJETOS:
 * - Tamanho recomendado: 1200x800px ou 800x600px
 * - Formatos: .jpg, .png, .webp
 * - Otimize as imagens antes de usar
 * - Use screenshots reais dos projetos
 */