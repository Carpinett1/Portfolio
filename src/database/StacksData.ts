import react from '../assets/Stacks/react.svg';
import typescript from '../assets/Stacks/typescript.svg';
import javascript from '../assets/Stacks/javascript.svg';
import redux from '../assets/Stacks/redux.svg';
import html from '../assets/Stacks/html.svg';
import css from '../assets/Stacks/css.svg';
import docker from '../assets/Stacks/docker.svg';
import node from '../assets/Stacks/node.svg';
import express from '../assets/Stacks/express.svg';
import jest from '../assets/Stacks/jest.svg';
import mysql from '../assets/Stacks/mysql.svg';
import vite from '../assets/Stacks/vite.svg';
import vue from '../assets/Stacks/vue.svg';

type DataType = {
  Stacks: {
    name: string,
    image: string,
    description: string,
    id: number,
  }[]
};

const Data: DataType = {
  Stacks: [
    {
      name: 'React',
      image: react,
      description: 'O React é uma biblioteca front-end JavaScript de código aberto '
      + 'com foco em criar interfaces de usuário em páginas web.',
      id: 1,
    },
    {
      name: 'Redux',
      image: redux,
      description: 'Redux é uma biblioteca JavaScript de código aberto '
      + 'para gerenciar o estado do aplicativo.',
      id: 2,
    },
    {
      name: 'Typescript',
      image: typescript,
      description: 'TypeScript é uma linguagem de programação de código aberto '
      + 'desenvolvida pela Microsoft.',
      id: 3,
    },
    {
      name: 'Javascript',
      image: javascript,
      description: 'JavaScript é uma linguagem de programação interpretada '
      + 'estruturada, de script em alto nível com tipagem dinâmica fraca e '
      + 'multiparadigma.',
      id: 4,
    },
    {
      name: 'HTML',
      image: html,
      description:
      'HTML é uma linguagem de marcação utilizada na construção de páginas na Web.',
      id: 5,
    },
    {
      name: 'CSS',
      image: css,
      description:
      'Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web.',
      id: 6,
    },
    {
      name: 'Vue',
      image: vue,
      description: 'Vue.js é um framework JavaScript de código-aberto, '
      + 'focado no desenvolvimento de interfaces de usuário e aplicativos '
      + 'de página única.',
      id: 7,
    },
    {
      name: 'Jest',
      image: jest,
      description: 'Jest é um framework de teste em JavaScript projetado '
      + 'para garantir a correção de qualquer código JavaScript.',
      id: 8,
    },
    {
      name: 'Docker',
      image: docker,
      description: 'Docker é um conjunto de produtos de plataforma como serviço '
      + 'que usam virtualização de nível de sistema operacional para entregar '
      + 'software em pacotes chamados contêineres.',
      id: 9,
    },
    {
      name: 'Vite',
      image: vite,
      description: 'Vite é um servidor de desenvolvimento local usado por padrão'
      + ' pelo Vue e para modelos de projeto React.',
      id: 10,
    },
    {
      name: 'MySQL',
      image: mysql,
      description: 'O MySQL é um sistema de gerenciamento de banco de dados, '
      + 'que utiliza a linguagem SQL como interface.',
      id: 11,
    },
    {
      name: 'Node',
      image: node,
      description: 'Node.js é um software de código aberto, multiplataforma, '
      + 'baseado no interpretador V8 do Google e que permite a execução de '
      + 'códigos JavaScript fora de um navegador web.',
      id: 12,
    },
    {
      name: 'Express',
      image: express,
      description: 'Express.js é um framework para Node.js que fornece '
      + 'recursos mínimos para construção de servidores web.',
      id: 13,
    },
  ],
};

export default Data;
