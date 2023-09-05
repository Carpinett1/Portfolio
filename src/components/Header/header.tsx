import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import styles from './header.module.css';

function Header() {
  return (
    <header className={ styles.Header }>
      <div><h1>Portfólio</h1></div>
      <nav>
        <a
          href="https://github.com/Carpinett1"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size="2rem" color="#FFFCF7" />
        </a>
        <a
          href="https://www.linkedin.com/in/thiagocarpinetti/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size="2rem" color="#FFFCF7" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
