import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion';
import styles from './header.module.css';

function Header() {
  return (
    <header>
      <motion.div
        className={ styles.Header }
        initial={ { y: -200, opacity: 0 } }
        animate={ { y: 0, opacity: 1 } }
        transition={ { duration: 1 } }
      >
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
      </motion.div>
      <motion.div
        className={ styles.pageNavigation }
        initial={ { opacity: 0 } }
        animate={ { opacity: 1 } }
        transition={ { duration: 1.5, delay: 1 } }
      >
        <a href="#about">Sobre mim</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </motion.div>
    </header>
  );
}

export default Header;
