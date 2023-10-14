import Store1 from '../assets/Projects/Store1.png';
import Store2 from '../assets/Projects/Store2.png';

import Wallet1 from '../assets/Projects/Wallet1.png';
import Wallet2 from '../assets/Projects/Wallet2.png';

import Itunefy1 from '../assets/Projects/Itunefy1.png';
import Itunefy2 from '../assets/Projects/Itunefy2.png';

import Password1 from '../assets/Projects/Password1.png';
import Password2 from '../assets/Projects/Password2.png';

type DataType = {
  Projects: {
    name: string,
    link: string,
    github: string,
    img: string[],
    description: string,
    id: number,
  }[]
};

const Data: DataType = {
  Projects: [
    {
      name: 'Front End Store',
      link: 'https://frontendstoreweb.vercel.app/',
      github: 'https://github.com/Carpinett1/FrontEnd-Store',
      img: [Store1, Store2],
      description:
      'Um projeto desenvolvido com React e Redux onde utilizo uma'
      + ' API do Mercado Livre para simular um website de uma loja online.',
      id: 1,
    },
    {
      name: 'Trybe Wallet',
      link: 'https://trybewalletweb.vercel.app/',
      github: 'https://github.com/Carpinett1/TrybeWallet',
      img: [Wallet2, Wallet1],
      description:
      'Um projeto desafio feito pela Trybe, Que consiste em criar uma'
      + ' carteira de despesas que utiliza cotação de moedas reais.',
      id: 2,
    },
    {
      name: 'Itunefy',
      link: 'https://itunefy.vercel.app/',
      github: 'https://github.com/Carpinett1/Itunefy-songApp',
      img: [Itunefy1, Itunefy2],
      description:
      'Um projeto com inspiração no spotify e utilizando uma API do Itunes'
      + ' para Pesquisar, Ouvir e Favoritar sua músicas.',
      id: 3,
    },
    {
      name: 'Password Manager',
      link: 'https://passwordmanagerweb.vercel.app/',
      github: 'https://github.com/Carpinett1/PasswordManager',
      img: [Password1, Password2],
      description:
      'Uma aplicação simples para salvar suas senhas com segurança, Salvas apenas'
      + ' localmente.',
      id: 4,
    },
  ],
};

export default Data;
