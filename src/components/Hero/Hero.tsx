import styles from './Hero.module.css';

export function Hero() {

  const title = `Olá, eu sou o Murillo. Front-end Engineer.`;

  const paragraph = `
    Ao longo da minha trajetória, desenvolvi projetos que envolvem desde interfaces modernas em React até integrações com APIs e bancos de dados MySQL, sempre com foco em boas práticas de código e desempenho.
    Tenho experiência prática com TypeScript, JavaScript, React, Node.js e conceitos de Inteligência Artificial, aplicando essas tecnologias em soluções que unem funcionalidade e usabilidade.
    Durante minha formação em Engenharia de Software pela DNC, participei de projetos colaborativos que reforçaram minhas habilidades em desenvolvimento front-end e trabalho em equipe, além de aprofundar meus conhecimentos sobre arquitetura de software e versionamento com Git.
    Atualmente, sigo aprimorando minhas competências e explorando novas possibilidades dentro do ecossistema JavaScript e IA.
  `;

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          {title}
        </h1>
        
        <p>
          {paragraph} 
        </p>
        <a href="#about" className={styles.button}>
          Saber mais
        </a>
      </div>
    </section>
  );
}