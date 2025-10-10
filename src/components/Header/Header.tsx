import styles from './Header.module.css';
import logoPrincipal from '../../assets/logo.png';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoPrincipal} alt="Logo Principal" className={styles.logo} />
      <nav className={styles.navigation}>
        <a href="#projects" className={styles.navLink}>Projetos</a>
        <a href="#techs" className={styles.navLink}>Tecnologias</a>
        <a href="#about" className={styles.navLink}>Sobre mim</a>
      </nav>

      <div className={styles.social}>
        <a href="https://github.com/Murilloteixeira9" target="_blank" className={styles.socialLink}><FaGithub/></a>
        <a href="https://www.linkedin.com/in/murillo-teixeira-403692229/" target="_blank" className={styles.socialLink}><FaLinkedin/></a>
      </div>
    </header>
  );
}