import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import styles from './header.module.css';

function Header() {
  return (
    <header>
      <div className={ styles.Header }>
        <div><h1>Portfólio</h1></div>
        <nav>
          <a
            href="https://github.com/Carpinett1"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className={ styles.img } />
          </a>
          <a
            href="https://www.linkedin.com/in/thiagocarpinetti/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className={ styles.img } />
          </a>
        </nav>
      </div>
      <div className={ styles.pageNavigation }>
        <a href="#about">Sobre mim</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </div>
    </header>
  );
}

export default Header;
