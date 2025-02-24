# Site Institucional da Abre

Site institucional da Associação Brasileira de Familiares, Amigos e Portadores de Esquizofrenia (ABRE).

## 🛠️ Tecnologias

- [Next.js 14](https://nextjs.org/) - Framework React com Server-Side Rendering
- [React](https://reactjs.org/) - Biblioteca JavaScript para interfaces
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript com tipagem estática
- [CSS Modules](https://github.com/css-modules/css-modules) - Estilização com escopo local
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animações
- [Contentful](https://www.contentful.com/) - Headless CMS para gerenciamento de conteúdo

### Gerenciador de pacotes

- NPM

## 🏗️ Arquitetura

O projeto utiliza a App Router do Next.js 14 com a seguinte estrutura:

src/
├── app/ # Rotas e páginas da aplicação
├── components/ # Componentes React reutilizáveis
├── lib/ # Configurações e integrações (ex: Contentful)
├── types/ # Tipagens TypeScript
└── utils/ # Funções utilitárias

### Principais diretórios:

- `app/`: Contém as páginas e layouts da aplicação usando o App Router do Next.js
- `components/`: Componentes React reutilizáveis organizados por funcionalidade
- `lib/`: Configurações de integrações externas como Contentful
- `types/`: Definições de tipos TypeScript compartilhados
- `utils/`: Funções utilitárias compartilhadas

### 🖥️ [Protótipo](https://www.figma.com/design/2t8YKdvwuivrvJpetgHMad/%5BProt%C3%B3tipos%5D-Site-Abre?node-id=38-1903&node-type=frame&t=PahCEYeAQQLNRKgK-0)

## 🚀 Como rodar localmente

1. Clone o repositório:

```bash
git clone https://github.com/tech-pro-bem/abre.git
cd abre
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
CONTENTFUL_ENVIRONMENT=
CONTENTFUL_ACCESS_TOKEN=
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Acesse http://localhost:3000

## 📝 Padrões de Código

- **Componentes**: Utilizam TypeScript e CSS Modules para estilização
- **Nomenclatura**:
  - Componentes: PascalCase
  - Arquivos: kebab-case
  - Funções e variáveis: camelCase
- **Organização**: Componentes maiores são divididos em subcomponentes em pastas próprias
- **Tipagem**: Uso extensivo de TypeScript para melhor manutenibilidade

## 🔄 Integração com Contentful

O projeto utiliza o Contentful como CMS headless para gerenciar conteúdos dinâmicos. A integração é feita através do cliente Contentful configurado em `src/lib/contentful.ts`.

### Content Types principais:

- Albums
- Books
- Gallery
- Projects
- Reports
- Testimonials
- FAQ
- About

## 🎨 Estilização

- Utiliza CSS Modules para estilização com escopo local
- Sistema de design tokens em `src/app/styles/theme.css`
- Layout responsivo com mobile-first
- Animações com Framer Motion

## 🌐 Links Úteis

- [Protótipo Figma](https://www.figma.com/design/2t8YKdvwuivrvJpetgHMad/%5BProt%C3%B3tipos%5D-Site-Abre?node-id=38-1903&node-type=frame&t=PahCEYeAQQLNRKgK-0)
- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação Contentful](https://www.contentful.com/developers/docs/)

## 👥 Contribuição

1. Crie uma branch para sua feature: `git checkout -b feature/nome-da-feature`
2. Commit suas mudanças: `git commit -m 'feat: Adiciona nova feature'`
3. Push para a branch: `git push origin feature/nome-da-feature`
4. Abra um Pull Request

---
