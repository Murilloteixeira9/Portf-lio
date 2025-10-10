import styles from './Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logoTexto from '../../assets/logo.png';

const linkedinUrl = "https://www.linkedin.com/in/murillo-teixeira-403692229/";
const githubUrl = "https://github.com/Murilloteixeira9"

export function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.mainContent}>
        <div className={styles.contactInfo}>
          <div className={styles.contactBlock}>
            <p>Meu contato:</p>
            <strong>+55 84 98797-2974</strong>
          </div>
          <div className={styles.contactBlock}>
            <p>Email:</p>
            <strong>contato.murilloteixeira@gmail.com</strong>
          </div>
        </div>
        <div className={styles.socialGroup}>
          <img src={logoTexto} alt="Logo JMDEV" className={styles.footerLogo} />
          <div className={styles.socialIcons}>
            <a href={linkedinUrl} target="_blank" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={githubUrl} target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>
      
      <div className={styles.copyright}>
        <p>© 2025 José Murillo Teixeira Marques. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}