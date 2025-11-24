// src/data/colecoes.js
import { produtosMasculinos } from '../pages/produtosMasculinos';
import { produtosFemininos } from '../pages/produtosFemininos';

import masculina from "../assets/imagens3/masculina.jpg";
import feminina from "../assets/imagens3/feminina.jpg";
import esportiva from "../assets/imagens3/esportiva.jpg";
import inverno from "../assets/imagens3/inverno.jpg";

export const colecoes = [
  {
    id: 'streetwear',
    nome: 'Streetwear',
    banner: masculina,  
    descricao: 'Estilo urbano, ousado e atual.',
    produtos: [
      produtosMasculinos[0],
      produtosMasculinos[1],
      produtosMasculinos[2],
      produtosFemininos[0],
      produtosFemininos[1],
      produtosFemininos[2],
    ]
  },
  {
    id: 'inverno-2025',
    nome: 'Inverno 2025',
    banner: inverno,  
    descricao: 'Casacos, botas e looks quentes para o frio.',
    produtos: [
      produtosMasculinos[5],
      produtosMasculinos[6],
      produtosMasculinos[7],
      produtosFemininos[10],
      produtosFemininos[11],
      produtosFemininos[12],
    ]
  },
  {
    id: 'verao-2025',
    nome: 'Verão 2025',
    banner: feminina,  
    descricao: 'Cores fortes e roupas leves para o calor.',
    produtos: [
      produtosMasculinos[15],
      produtosMasculinos[16],
      produtosFemininos[15],
      produtosFemininos[16],
      produtosFemininos[17],
    ]
  },
  {
    id: 'esporte-performance',
    nome: 'Esporte & Performance',
    banner: esportiva,  
    descricao: 'Roupas leves e resistentes para alta performance.',
    produtos: [
      produtosMasculinos[20],
      produtosMasculinos[21],
      produtosMasculinos[22],
      produtosFemininos[20],
      produtosFemininos[21],
      produtosFemininos[22],
    ]
  }
];
