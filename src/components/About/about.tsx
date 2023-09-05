import { BsCodeSlash } from 'react-icons/bs';
import styles from './about.module.css';
import photo from '../../assets/Profile.png';

function About() {
  return (
    <div>
      <section className={ styles.container }>
        <div className={ styles.title }>
          <h1>
            Olá,
            <br />
            Eu sou
            {' '}
            <span className={ styles.styledText }>Thiago</span>
            ,
            <br />
            Desenvolvedor Front End.
            <span className={ styles.styledTyping }>|</span>
          </h1>
        </div>
        <div>
          <img src={ photo } alt="profile" className={ styles.profile } />
        </div>
      </section>
      <div>
        <div className={ styles.paragraphContainer }>
          <BsCodeSlash className={ styles.codesvg } />
          <p id="about" className={ styles.paragraph }>
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
        </div>
      </div>
    </div>
  );
}

export default About;
