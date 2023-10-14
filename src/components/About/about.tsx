import { BsCodeSlash } from 'react-icons/bs';
import { motion } from 'framer-motion';
import styles from './about.module.css';
import photo from '../../assets/Profile.png';

function About() {
  return (
    <>
      <section className={ styles.container }>
        <span className="anchor" id="about" />
        <motion.div
          className={ styles.title }
          initial={ { y: 100, opacity: 0 } }
          whileInView={ { y: 0, opacity: 1 } }
          exit={ { y: 100, opacity: 0 } }
          transition={ { duration: 1.5 } }
        >
          <h1>
            Olá,
            <br />
            Eu sou
            {' '}
            <span className={ styles.styledTitle }>Thiago</span>
            ,
            <br />
            Desenvolvedor Front End.
            <span className={ styles.styledTyping }>|</span>
          </h1>
        </motion.div>
        <motion.div
          initial={ { x: 100, opacity: 0 } }
          whileInView={ { x: 0, opacity: 1 } }
          exit={ { x: 100, opacity: 0 } }
          transition={ { duration: 1.5 } }
        >
          <img src={ photo } alt="profile" className={ styles.profile } />
        </motion.div>
      </section>
      <section className={ styles.paragraphContainer }>
        <motion.div
          initial={ { x: -100, opacity: 0 } }
          whileInView={ { x: 0, opacity: 1 } }
          exit={ { x: -100, opacity: 0 } }
          transition={ { duration: 1.5 } }
        >
          <BsCodeSlash className={ styles.codesvg } />
        </motion.div>
        <motion.div
          initial={ { opacity: 0 } }
          whileInView={ { opacity: 1 } }
          exit={ { opacity: 0 } }
          transition={ { duration: 1.5, delay: 1 } }
        >
          <p className={ styles.paragraph }>
            Durante cinco anos da minha vida, tive a incrível oportunidade de viver no
            <span className={ styles.styledText }> exterior</span>
            , o que enriqueceu minha perspectiva e me permitiu aprender
            e crescer em diferentes culturas. Foi nos
            <span className={ styles.styledText }> Estados Unidos</span>
            , onde concluí meu ensino médio, que tive meu primeiro contato com
            <span className={ styles.styledText }> programação</span>
            , uma paixão que me acompanha desde então. Atualmente, estou focado em iniciar
            minha carreira no mundo da tecnologia, buscando desafios empolgantes e
            aprendizado constante. Além disso, já tive a experiência de ser proprietário
            de uma empresa, então carrego comigo valiosos insights sobre
            <span className={ styles.styledText }> empreendedorismo e gestão</span>
            . Claro, Estou ansioso para continuar minha jornada, construindo um futuro
            sólido na área de tecnologia e aplicando minhas experiências para encontrar
            <span className={ styles.styledText }> soluções </span>
            inovadoras. Sinta-se à vontade para me acompanhar nesta empolgante
            jornada enquanto busco criar um impacto significativo.
          </p>
        </motion.div>
      </section>
    </>
  );
}

export default About;
