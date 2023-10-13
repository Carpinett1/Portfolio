import { TbSourceCode, TbExternalLink } from 'react-icons/tb';
import { motion } from 'framer-motion';
import styles from './projects.module.css';
import Data from '../../database/ProjectsData';

function Projects() {
  return (
    <div id="projects" className={ styles.ProjectsContainer }>
      {Data && Data.Projects.map((project) => (
        <motion.div
          initial={ { opacity: 0 } }
          whileInView={ { opacity: 1 } }
          exit={ { opacity: 0 } }
          transition={ { duration: 1.5, delay: 0.5 } }
          className={ styles.ProjectCard }
          key={ project.id }
        >
          <div className={ styles.imgContainer }>
            <img className={ styles.img1 } src={ project.img[0] } alt={ project.name } />
            <img className={ styles.img2 } src={ project.img[1] } alt={ project.name } />
          </div>
          <div className={ styles.InfoContainer }>
            <h1>{project.name}</h1>
            <h2>{project.description}</h2>
            <nav>
              <a
                href={ project.github }
                target="_blank"
                rel="noreferrer"
              >
                <TbSourceCode className={ styles.code } />
              </a>
              <a
                href={ project.link }
                target="_blank"
                rel="noreferrer"
              >
                <TbExternalLink className={ styles.code } />
              </a>
            </nav>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Projects;
