# Portfólio

Projeto em React + TypeScript + Tailwind CSS, criado com Vite.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Onde editar

- `src/data/projects.ts` — seus projetos reais (título, descrição, stack, links).
- `src/data/skills.ts` — sua stack, agrupada por categoria.
- `src/components/Hero.tsx` — nome, título e bio de abertura.
- `src/components/Contact.tsx` — e-mail, GitHub e LinkedIn.
- `tailwind.config.js` — cores e fontes, caso queira ajustar a paleta.

## Build para produção

```bash
npm run build
```

Gera a pasta `dist/`, pronta para publicar na Vercel, Netlify ou GitHub Pages.

## Deploy rápido (Vercel)

1. Suba o projeto para um repositório no GitHub.
2. Importe o repositório em vercel.com.
3. Framework preset: Vite. Build command e output directory já vêm corretos por padrão.
