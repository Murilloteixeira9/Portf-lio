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
      'A proposta de busca otimiza o atendimento ao cliente, oferecendo uma navegação intuitiva por categorias de produtos, permitindo a seleção de itens e a finalização da compra via WhatsApp com um atendente. A plataforma também conta com um painel administrativo completo para gerenciamento de produtos, categorias e promoções.',
    image: 'src/assets/livraria.jpg', 
    liveUrl: 'https://github.com/patriciasanttos/projeto-livraria',
  },
  {
    id: 2,
    title: 'Agendador de Tarefas',
    description:
      'Um sistema simples de lista de tarefas desenvolvida com React + TypeScript, hospedada no Vercel.',
    image: 'src/assets/agendador-de-tarefas.jpg',
    repoUrl: 'https://github.com/Murilloteixeira9/Agendador-de-Tarefas',
    liveUrl: 'https://agendador-de-tarefas.vercel.app/',
  },
  {
    id: 3,
    title: 'Portfolio Arquitetônico',
    description:
      'Portfólio online de arquitetura mostrando projetos, serviços e informações de contato de forma moderna e responsiva.',
    image: 'src/assets/portfolio-arquitetonico.jpg',
    liveUrl: 'https://dnc-arq-murillo.vercel.app/',
  },
  {
    id: 4,
    title: 'Tech News',
    description:
      'Um blog totalmente responsivo usando HTML e CSS puro, aplicando media queries para garantir que o layout se adapte de forma fluida a diferentes tamanhos de tela (desktop, tablet, mobile).',
    image: 'src/assets/tech-news.jpg',
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
