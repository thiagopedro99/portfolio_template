
/**
 * DADOS DO PORTFÓLIO
 * 
 * Personalize este arquivo com suas informações.
 * Este é o único arquivo que você precisa modificar para customizar o portfólio!
 */




export const portfolioData = {
    // ========================================
    // SEÇÃO NAVBAR (Apresentação de Navegação)
    // ========================================
    navbar: {
        logoName: 'Portfolio',
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
        phone: '+5511999999999', // Formato: +55 + DDD + número
        text: 'Olá! Vi seu portfólio e gostaria de conversar.', // Mensagem padrão

        description:
            'Escreva aqui uma breve descrição sobre você, sua experiência e o que você faz. ' +
            'Este texto aparecerá logo abaixo do seu título na página inicial. ' +
            'Mantenha entre 2-3 linhas para melhor leitura.',

        // CV (opcional - remova se não tiver)
        cvUrl: '/cv.pdf', // Coloque seu CV na pasta public/

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
    // RODAPÉ
    // ========================================
    footer: {
        name: 'Seu Nome',
        email: 'seu@email.com',
        phone: '+5511999999999', // Opcional
        location: 'Cidade, Estado - País',
        text: 'Olá! Vi seu portfólio e gostaria de conversar.', // Mensagem padrão WhatsApp

        socialLinks: [
            { name: 'GitHub', url: 'https://github.com/seu-usuario', icon: 'github' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/seu-usuario', icon: 'linkedin' },
            { name: 'Email', url: 'mailto:seu@email.com', icon: 'email' },
        ],

        year: new Date().getFullYear(),
    },

    // ========================================
    // HABILIDADES E TECNOLOGIAS
    // ========================================
    skills: {
        title: 'Habilidades',
        subtitle: 'Tecnologias e ferramentas que domino no dia a dia',

        technologies: [
            // FRONTEND
            {
                name: 'React',
                icon: 'icons/react.svg',
                category: 'frontend',
                description: 'Biblioteca JavaScript para construção de interfaces de usuário com componentes reutilizáveis.'
            },
 
            {
                name: 'JavaScript',
                icon: 'icons/javascript-original.svg',
                category: 'frontend',
                description: 'Linguagem de programação essencial para desenvolvimento web moderno.'
            },
            {
                name: 'HTML',
                icon: 'icons/html5-original.svg',
                category: 'frontend',
                description: 'Linguagem de marcação para estruturação de conteúdo web.'
            },
            {
                name: 'CSS',
                icon: 'icons/css3-original.svg',
                category: 'frontend',
                description: 'Linguagem de estilo para design e layout de páginas web.'
            },

            // BACKEND
            {
                name: 'Node.js',
                icon: 'icons/nodejs-original.svg',
                category: 'backend',
                description: 'Ambiente de execução JavaScript server-side para aplicações escaláveis.'
            },

            // FERRAMENTAS
            {
                name: 'Git',
                icon: 'icons/git-original.svg',
                category: 'tools',
                description: 'Sistema de controle de versão distribuído para rastreamento de mudanças no código.'
            },

            // Adicione mais tecnologias conforme necessário
            // Categorias disponíveis: 'frontend', 'backend', 'tools', 'design'
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
                title: 'Nome do Projeto 1',
                description: 'Descrição breve e objetiva do projeto. Explique o problema que resolve e as principais funcionalidades.',
                image: 'https://via.placeholder.com/400x300', // URL da imagem ou caminho local
                technologies: ['React', 'TypeScript', 'Node.js'],
                liveUrl: 'https://projeto1.com.br', // Opcional
                githubUrl: 'https://github.com/usuario/projeto1',
                featured: true, // Projeto destacado (opcional)
            },
            {
                id: '2',
                title: 'Nome do Projeto 2',
                description: 'Outra descrição interessante sobre o projeto, destacando seus diferenciais e tecnologias utilizadas.',
                image: 'https://via.placeholder.com/400x300',
                technologies: ['React', 'Styled Components', 'API'],
                liveUrl: 'https://projeto2.com.br',
                githubUrl: 'https://github.com/usuario/projeto2',
            },
            {
                id: '3',
                title: 'Nome do Projeto 3',
                description: 'Descrição do terceiro projeto, mostrando sua experiência e habilidades.',
                image: 'https://via.placeholder.com/400x300',
                technologies: ['TypeScript', 'Express', 'PostgreSQL'],
                githubUrl: 'https://github.com/usuario/projeto3',
            },

            // Adicione mais projetos seguindo o padrão acima
            // Campos obrigatórios: id, title, description, technologies, githubUrl
            // Campos opcionais: image, liveUrl, featured
        ],
    },
};

/**
 * DICAS DE PERSONALIZAÇÃO:
 * 
 * 1. ÍCONES DE TECNOLOGIAS:
 *    - Baixe ícones SVG em: https://devicon.dev/
 *    - Salve na pasta public/icons/
 *    - Referencie como: 'icons/nome-do-icone.svg'
 * 
 * 2. IMAGENS DE PROJETOS:
 *    - Use screenshots reais dos projetos
 *    - Tamanho recomendado: 1200x800px
 *    - Formatos: .jpg, .png, .webp
 *    - Salve em public/images/ ou use URLs externas
 * 
 * 3. CATEGORIAS DE TECNOLOGIAS:
 *    - frontend: React, Vue, Angular, HTML, CSS, etc.
 *    - backend: Node.js, Python, Java, PHP, etc.
 *    - tools: Git, Docker, VS Code, etc.
 *    - design: Figma, Photoshop, Illustrator, etc.
 * 
 * 4. REDES SOCIAIS:
 *    - Ícones disponíveis: 'github', 'linkedin', 'email'
 *    - Para adicionar outros, edite o componente Footer
 * 
 * 5. WHATSAPP:
 *    - Formato do phone: +55 (país) + DDD + número
 *    - Exemplo: '+5511999999999'
 *    - A mensagem 'text' será pré-preenchida ao clicar
 */