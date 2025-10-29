// src/data.ts


export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  repoUrl?: string;
};


// A interface Project continua a mesma


export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Plataforma Web para Papelaria',
    description:
      'Plataforma de busca que facilita o atendimento ao cliente, com navegação por categorias e finalização de compras.',
    image: '/images/livraria.jpg', 
    repoUrl: 'https://github.com/patriciasanttos/projeto-livraria',
  },
  {
    id:2,
    title:'Gerador de Senhas',
    description:'Projeto para gerar senhas seguras de forma rápida e personalizável, com opções de tamanho, números e símbolos.',
    image: '/images/gerenciador-de-senhas.jpg',
    liveUrl: 'https://gerador-de-senhas-uckc.vercel.app/',
  },
  {
    id: 3,
    title: 'Agendador de Tarefas',
    description:
      'Um sistema simples de lista de tarefas desenvolvida com React + TypeScript, hospedada no Vercel.',
    image: '/images/agendador-de-tarefas.jpg',
    repoUrl: 'https://github.com/Murilloteixeira9/Agendador-de-Tarefas',
    liveUrl: 'https://agendador-de-tarefas.vercel.app/',
  },
  {
    id: 4,
    title: 'Portfolio Arquitetônico',
    description:
      'Portfólio online de arquitetura mostrando projetos, serviços e informações de contato de forma moderna e responsiva.',
    image: '/images/portfolio-arquitetonico.jpg',
    liveUrl: 'https://dnc-arq-murillo.vercel.app/',
  },
  {
    id: 5,
    title: 'Tech News',
    description:
      'Um blog totalmente responsivo com HTML e CSS puro, utiliza-se media queries para adaptar o layout a desktop, tablet e mobile.',
    image: '/images/tech-news.jpg',
    liveUrl: 'https://blog-responsivo777.netlify.app/',
  },
];


export interface TimelineEvent {
  year: string;
  description: string;
}

export const timelineData: TimelineEvent[] = [
  
  {
    "year": "02/2025",
    "description": "Início da jornada na área de tecnologia, com foco em desenvolvimento front-end e aprendizado de lógica de programação, HTML, CSS e JavaScript."
  },
  {
    "year": "03/2025",
    "description": "Aprofundamento em frameworks modernos, como React e Node.js, e primeiros projetos práticos com TypeScript, integração de APIs e banco de dados MySQL."
  },
  {
    "year": "04/2025",
    "description": "Ingresso na graduação em Engenharia de Software pela DNC, atuando em projetos colaborativos com foco em boas práticas, versionamento com Git e arquitetura moderna."
  },
  {
    "year": "05/2025",
    "description": "Desenvolvimento da landing page para a livraria M&C BOOKS como parte da formação em Engenharia de Software, aplicando React, HTML, CSS e boas práticas de UX/UI para criar uma experiência interativa e responsiva."
  },
  {
    "year": "07/2025",
    "description": "Desenvolvimento de um agendador de tarefas em TypeScript, aplicando lógica de programação avançada, integração com APIs e boas práticas de engenharia de software para criar uma aplicação eficiente e escalável."
  },
  {
    "year": "09/2025",
    "description": "Criação de portfólio profissional e desenvolvimento de projetos próprios em React, TypeScript e Node.js, com foco em performance, usabilidade e integração entre front-end e back-end."
  },
  {
    "year": "Hoje",
    "description": "Atuação contínua como Front-end Engineer, aprimorando conhecimentos em interfaces modernas, APIs, automações e práticas de desenvolvimento ágil."
  }
]

