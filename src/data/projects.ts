export interface Project {
  title: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Pixly API — Backend da mini rede social de fotos",
    description:
      "API desenvolvida em Node.js + TypeScript, responsável por toda a lógica do Pixly, uma mini rede social de fotos. Ela gerencia autenticação, usuários, uploads de imagens, curtidas, comentários e o feed personalizado.",
    stack: ["TypeScript", "Express", "Sequelize"],
    repoUrl: "https://github.com/DuduNeri/pixly_api",
  },
  {
    title: "en-trade - E-commerce",
    description:
      "O En-Trade é um sistema de e-commerce desenvolvido em NestJS, com Sequelize e PostgreSQL, utilizando Docker para gerenciamento e padronização do ambiente. O projeto conta com uma arquitetura organizada para gerenciamento de usuários, autenticação, produtos e carrinho de compras, com foco em segurança, escalabilidade e manutenção.",
    stack: ["NestJs", "TypeScript", "Sequelize"],
    repoUrl: "https://github.com/DuduNeri/en-trade",
  },

  {
    title: "Licittudo",
    description: "Landingpage que leva ao sistema principal da licittudo",
    stack: ["NestJs", "TypeScript", "Sequelize"],
    repoUrl: "https://github.com/DuduNeri/licittudo-landingpage",
    liveUrl: "https://licittudo.com.br/",
  },
  {
    title: "Pixly-front",
    description:
      "Interface de uma mini rede social desenvolvida com React.js e TypeScript, com foco em uma experiência moderna, responsiva e intuitiva para interação entre usuários.",
    stack: ["ReactJs", "TypeScript", "Vite", "Axios"],
    repoUrl: "https://github.com/DuduNeri/pixly-front",
    liveUrl: "https://pixly-front.vercel.app/login",
  },
];
