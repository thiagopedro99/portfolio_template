# Template de Portfólio - React + TypeScript

Um template de portfólio moderno e profissional construído com React, TypeScript e styled-components. Apresenta design responsivo, alternância de tema e arquitetura modular para fácil customização.

[![Demo ao Vivo](https://img.shields.io/badge/demo-online-green.svg)](https://portifolio-omega-topaz-82.vercel.app/)
[![Licença: MIT](https://img.shields.io/badge/Licença-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Visão Geral

Este template de portfólio foi desenvolvido com foco em performance, manutenibilidade e experiência do usuário. A aplicação apresenta uma arquitetura modular com componentes reutilizáveis, sistema de temas dinâmico e navegação intuitiva.

### Características Principais

- **Design Responsivo**: Interface adaptável para dispositivos móveis, tablets e desktops
- **Sistema de Temas**: Alternância entre modo claro e escuro com persistência de preferência
- **Performance Otimizada**: Build otimizado com Vite e SWC para carregamento rápido
- **Navegação Inteligente**: Detecção automática de seção ativa durante scroll
- **Baseado em Componentes**: Arquitetura de componentes reutilizáveis e isolados
- **Acessibilidade**: Implementação de ARIA labels e navegação por teclado
- **Animações**: Transições suaves e performáticas com styled-components
- **Tipagem Forte**: TypeScript para segurança e manutenibilidade do código

## Stack Tecnológica

### Tecnologias Principais

- **React 19** - Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Ferramenta de build e desenvolvimento de alta performance
- **Styled-Components 6** - Biblioteca CSS-in-JS para estilização de componentes

### Bibliotecas e Ferramentas

- **React Router DOM 7** - Gerenciamento de rotas e navegação
- **Zustand 5** - Gerenciamento de estado global com arquitetura simples
- **Lucide React** - Biblioteca de ícones SVG otimizados
- **Axios 1.9** - Cliente HTTP para requisições API
- **ESLint** - Análise estática de código
- **TypeScript ESLint** - Regras de linting específicas para TypeScript

## Instalação e Configuração

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instruções de Instalação

```bash
# Clone o repositório
git clone https://github.com/thiagopedro99/portfolio_template

# Acesse o diretório do projeto
cd portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Scripts Disponíveis

```bash
npm run dev        # Inicia servidor de desenvolvimento com hot reload
npm run build      # Gera build de produção otimizado
npm run preview    # Visualiza build de produção localmente
npm run lint       # Executa análise de código com ESLint
npm run type-check # Verifica tipagem TypeScript sem emitir arquivos
```

## Início Rápido - Personalize em 5 Minutos

Para começar a personalizar rapidamente:

1. **Edite o arquivo principal de dados:**
   ```bash
   # Abra o arquivo de configuração
   src/shared/constants.ts
   ```

2. **Atualize suas informações básicas:**
   - Nome, título e descrição na seção `hero`
   - Links das redes sociais
   - Número do WhatsApp (opcional)

3. **Adicione seus projetos:**
   - Liste seus projetos na seção `projects`
   - Adicione imagens e links

4. **Configure suas habilidades:**
   - Baixe ícones em [Devicon](https://devicon.dev/)
   - Salve em `public/icons/`
   - Liste na seção `skills`

5. **Troque o logo:**
   - Substitua `public/logo.svg`
   - Ou ajuste o caminho em `navbar.logoImage`

Veja o arquivo `constants.example.ts` para um exemplo completo e documentado.

## Guia de Personalização

### Configuração da Barra de Navegação

A configuração da navbar está no arquivo `src/shared/constants.ts`:

```typescript
navbar: {
  logoName: 'Seu Nome ou Marca',
  logoImage: '/logo.svg', // Caminho do logo em public/
  menuItems: [
    { label: 'Home', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Habilidades', id: 'skills' },
    { label: 'Projetos', id: 'projects' },
    { label: 'Contato', id: 'contact' },
  ],
}
```

**Personalizando o Logo:**
1. Substitua o arquivo `public/logo.svg` pelo seu logo
2. Ou altere o caminho em `logoImage` para apontar para outro arquivo
3. O `logoName` aparece ao lado do logo

**Adicionando/Removendo Links:**
- Cada item do menu deve ter um `label` (texto exibido) e `id` (id da seção correspondente)
- O `id` deve corresponder ao `id` da seção no HTML
- A navbar detecta automaticamente qual seção está visível e destaca o link

### Configuração de Dados do Portfólio

Os dados do portfólio são centralizados no arquivo `src/shared/constants.ts`. Para personalizar:

```typescript
export const portfolioData = {
  hero: {
    name: 'Seu Nome',
    title: 'Seu Cargo',
    description: 'Sua descrição profissional...',
    phone: '+5500000000000',
    text: 'Mensagem personalizada para WhatsApp',
    cvUrl: '/caminho-para-seu-cv.pdf',
    socialLinks: [
      { 
        name: 'GitHub', 
        url: 'https://github.com/seu-usuario', 
        icon: 'github' 
      },
      // Adicione mais links conforme necessário
    ]
  },
  
  skills: {
    title: 'Habilidades Técnicas',
    subtitle: 'Descrição opcional',
    technologies: [
      {
        name: 'React',
        icon: 'icons/react.svg',
        category: 'frontend',
        description: 'Descrição da tecnologia...'
      },
      // Adicione suas tecnologias
    ]
  },
  
  projects: {
    title: 'Projetos',
    projects: [
      {
        id: '1',
        title: 'Nome do Projeto',
        description: 'Descrição detalhada do projeto...',
        technologies: ['React', 'TypeScript', 'Node.js'],
        liveUrl: 'https://projeto.com',
        githubUrl: 'https://github.com/usuario/projeto',
        image: 'url-da-imagem-do-projeto'
      },
      // Adicione seus projetos
    ]
  },
  
  footer: {
    name: 'Seu Nome',
    email: 'seu@email.com',
    phone: '+55 (00) 00000-0000',
    location: 'Cidade, Estado - País',
    text: 'Texto da mensagem do WhatsApp',
    socialLinks: [/* ... */],
    year: new Date().getFullYear()
  }
};
```

### Personalização de Temas

Para alterar as cores e estilos dos temas, edite os arquivos em `src/styles/themes/`:

```typescript
// src/styles/themes/light.ts ou dark.ts
export const lightTheme = {
  colors: {
    primary: '#1976d2',
    primaryDark: '#1565c0',
    primaryLight: '#42a5f5',
    // Personalize outras cores conforme necessário
  },
  fonts: {
    primary: '"Roboto", "Helvetica", "Arial", sans-serif',
    // Personalize fontes e tamanhos
  },
  // Outros tokens de design...
};
```

### Adição de Ícones de Tecnologias

1. Adicione o arquivo SVG do ícone em `public/icons/`
2. Referencie no arquivo de constantes:

```typescript
{
  name: 'Nova Tecnologia',
  icon: 'icons/nova-tecnologia.svg',
  category: 'frontend', // ou 'backend', 'tools', 'design'
  description: 'Descrição da tecnologia...'
}
```

### Personalização do Logo

Substitua o arquivo `public/logo.svg` pelo seu próprio logo. O componente usará automaticamente o novo arquivo.

Para ajustar o nome exibido ao lado do logo, edite em `src/shared/constants.ts`:

```typescript
navbar: {
  logoName: 'Seu Nome ou Marca',
  logoImage: '/logo.svg',
}
```

### Personalizando o Menu de Navegação

Os itens do menu são configurados em `src/shared/constants.ts`:

```typescript
navbar: {
  menuItems: [
    { label: 'Home', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Habilidades', id: 'skills' },
    { label: 'Projetos', id: 'projects' },
  ],
}
```

**Importante:**
- O `id` deve corresponder ao `id` HTML da seção na página
- A navbar detecta automaticamente qual seção está visível
- Para adicionar uma nova seção:
  1. Adicione o item no array `menuItems`
  2. Crie a seção correspondente com o mesmo `id`
  3. A detecção de scroll funcionará automaticamente

### Integração com WhatsApp

O template inclui integração com WhatsApp na seção Hero. Configure em `src/shared/constants.ts`:

```typescript
hero: {
  phone: '+5500000000000', // Seu número do WhatsApp com código do país
  text: 'Mensagem personalizada para o chat do WhatsApp',
  // ... outros dados do hero
}
```

O botão "Entrar em Contato" abrirá automaticamente o WhatsApp com sua mensagem configurada.

## Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── common/          # Componentes reutilizáveis (Button, Card, etc)
│   ├── layout/          # Componentes de layout
│   ├── navbar/          # Componente de navegação
│   ├── footer/          # Componente de rodapé
│   └── [feature]/       # Componentes específicos por funcionalidade
├── pages/               # Páginas da aplicação
│   └── [page]/
│       └── sections/    # Seções específicas da página
├── routes/              # Configuração de rotas
├── stores/              # Estado global (Zustand)
├── styles/              # Temas e estilos globais
├── hooks/               # Custom hooks
├── shared/              # Constantes e utilitários compartilhados
└── types/               # Definições de tipos globais
```

## Sistema de Componentes

O projeto utiliza um sistema de componentes reutilizável e altamente customizável:

**Button**
```typescript
<Button $variant="primary" $size="md" $fullWidth>
  Texto do Botão
</Button>
```

**Card**
```typescript
<Card $variant="elevated" $padding="2rem">
  Conteúdo do card
</Card>
```

**Layout Flex**
```typescript
<Flex $direction="row" $justify="between" $align="center" $gap="1rem">
  {children}
</Flex>
```

**Sistema Grid**
```typescript
<Grid $columns={3} $gap="2rem">
  {items.map(item => <div key={item.id}>{item.content}</div>)}
</Grid>
```

**Modal**
```typescript
<Modal 
  isOpen={isOpen} 
  onClose={handleClose}
  title="Título do Modal"
  size="lg"
>
  Conteúdo do modal
</Modal>
```

## Funcionalidades Principais

### Barra de Navegação (Navbar)
Sistema de navegação responsivo e inteligente:
- Logo personalizável com imagem e texto
- Menu desktop com links de navegação
- Detecção automática da seção ativa durante scroll
- Menu mobile com drawer lateral animado
- Transições suaves ao clicar nos links
- Barra fixa no topo com shadow ao fazer scroll

### Seção Hero
Apresentação inicial do profissional contendo:
- Nome e título profissional
- Descrição breve de atuação
- Links para redes sociais profissionais (GitHub, LinkedIn, Email)
- Opção de download de currículo
- Call-to-action para contato com integração WhatsApp

### Seção de Habilidades
Sistema interativo de apresentação de competências técnicas:
- Grid responsivo de tecnologias com ícones personalizados
- Modal informativo ao clicar em cada tecnologia
- Exibição de projetos relacionados a cada habilidade
- Categorização por tipo (frontend, backend, ferramentas, design)

### Showcase de Projetos
Portfólio de trabalhos realizados com:
- Cards visuais com imagens e descrições
- Tags de tecnologias utilizadas em cada projeto
- Links diretos para demonstração live e repositório
- Layout responsivo em grid

### Navegação e UX
- Barra de navegação fixa com indicador de seção ativa
- Scroll suave entre seções
- Detecção automática de posição do usuário
- Menu mobile responsivo

## Estratégias de Deploy

### Deploy via Vercel (Recomendado)

```bash
# Instale a CLI da Vercel
npm install -g vercel

# Execute o deploy
vercel
```

### Deploy via Netlify

```bash
# Gere a build de produção
npm run build

# O diretório dist/ está pronto para deploy no Netlify
```

### Deploy via GitHub Pages

```bash
# Instale a dependência
npm install --save-dev gh-pages

# Adicione ao package.json
{
  "homepage": "https://seu-usuario.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

# Execute o deploy
npm run deploy
```

## Padrões e Boas Práticas

### Arquitetura
- Componentização com responsabilidade única
- Separação clara entre lógica de apresentação e negócio
- Uso de custom hooks para lógica reutilizável
- Gerenciamento de estado centralizado com Zustand

### TypeScript
- Tipagem forte em todos os componentes e funções
- Interfaces e tipos exportados em arquivos dedicados
- Uso de generics para componentes reutilizáveis
- Evitar uso de `any` em favor de tipagem apropriada

### Styled Components
- Props de estilo prefixadas com `$` (transient props)
- Uso consistente de tokens do tema (cores, espaçamentos, fontes)
- Variantes de componentes implementadas com CSS helper functions
- Estilos responsivos baseados em breakpoints do tema

### Acessibilidade
- Implementação de ARIA labels em elementos interativos
- Navegação completa por teclado
- Indicadores visuais de foco (focus-visible)
- Contraste adequado de cores em ambos os temas

### Performance
- Code splitting com lazy loading de rotas
- Otimização de imagens e assets
- Memoization de componentes pesados quando necessário
- Build otimizado com Vite

## Contribuindo

Contribuições são bem-vindas. Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nome-da-feature`)
3. Commit suas alterações seguindo o padrão [Conventional Commits](https://www.conventionalcommits.org/)
4. Push para a branch (`git push origin feature/nome-da-feature`)
5. Abra um Pull Request detalhando as mudanças propostas

### Padrão de Commits

Este projeto segue a convenção de [Conventional Commits](https://www.conventionalcommits.org/). Use os seguintes prefixos:

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação, ponto e vírgula, etc (sem mudança de código)
- `refactor:` Refatoração de código
- `perf:` Melhorias de performance
- `test:` Adição ou correção de testes
- `chore:` Atualizações de dependências, configurações, etc
- `ci:` Mudanças em CI/CD

**Exemplos:**
```bash
git commit -m "feat: adiciona componente de toast notifications"
git commit -m "fix: corrige navegação mobile em telas pequenas"
git commit -m "docs: atualiza guia de instalação no README"
git commit -m "refactor: reorganiza estrutura de componentes"
git commit -m "style: ajusta espaçamento do header"
```

## Perguntas Frequentes (FAQ)

### Como adicionar uma nova seção ao portfólio?

1. Crie o componente da seção em `src/pages/home/sections/nome-secao/`
2. Adicione o item no menu em `src/shared/constants.ts`:
   ```typescript
   navbar: {
     menuItems: [
       // ...outros itens
       { label: 'Nova Seção', id: 'nova-secao' },
     ]
   }
   ```
3. Importe e adicione a seção em `src/pages/home/index.tsx`
4. Certifique-se de que o elemento tenha `id="nova-secao"`

### Como mudar as cores do tema?

Edite os arquivos em `src/styles/themes/`:
- `light.ts` para o tema claro
- `dark.ts` para o tema escuro

Altere principalmente as cores em `colors.primary`, `colors.primaryDark` e `colors.primaryLight`.

### Como remover a integração com WhatsApp?

Em `src/shared/constants.ts`, remova ou comente as propriedades:
```typescript
hero: {
  // phone: '+5511999999999',  // Comente esta linha
  // text: 'Mensagem...',       // E esta linha
}
```

### Os ícones de tecnologia não aparecem

Certifique-se de que:
1. Os arquivos SVG estão em `public/icons/`
2. O caminho está correto: `'icons/nome-do-arquivo.svg'`
3. O nome do arquivo não tem espaços ou caracteres especiais

### Como adicionar mais redes sociais?

1. Adicione o link em `socialLinks`:
   ```typescript
   socialLinks: [
     { name: 'Twitter', url: 'https://twitter.com/seu-usuario', icon: 'twitter' }
   ]
   ```
2. Adicione o ícone correspondente no componente Footer ou Hero (se necessário)

### Como otimizar as imagens dos projetos?

1. Use ferramentas como [TinyPNG](https://tinypng.com/) ou [Squoosh](https://squoosh.app/)
2. Tamanho recomendado: 800x600px ou 1200x800px
3. Formatos recomendados: .webp (melhor), .jpg, .png
4. Salve em `public/images/` ou use serviços como Cloudinary

### O menu mobile não está funcionando

Verifique se:
1. O JavaScript está habilitado no navegador
2. Não há erros no console do navegador (F12)
3. O componente Navbar está sendo renderizado corretamente

### Como fazer deploy do portfólio?

Veja a seção "Estratégias de Deploy" acima. Recomendamos:
- **Vercel** (mais fácil e rápido)
- **Netlify** (ótima alternativa)
- **GitHub Pages** (gratuito, requer configuração)

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

## Contato e Redes Profissionais

**Thiago Silva** - Desenvolvedor Full Stack

[![Portfólio](https://img.shields.io/badge/Portfólio-seu--portfolio.vercel.app-blue?style=for-the-badge&logo=vercel&logoColor=white)](https://portifolio-omega-topaz-82.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Thiago_Silva-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/thiago-pedro-da-silva)
[![GitHub](https://img.shields.io/badge/GitHub-thiagopedro99-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/thiagopedro99)
[![Email](https://img.shields.io/badge/Email-thiago.gefa@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:thiago.gefa@gmail.com)

---

Desenvolvido por Thiago Silva | 2025