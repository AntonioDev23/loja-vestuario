// src/data/colecoes.js
import { produtosMasculinos } from '../pages/produtosMasculinos';
import { produtosFemininos } from '../pages/produtosFemininos';

import masculina from "../assets/imagens3/masculina.png";
import feminina from "../assets/imagens3/feminina.png";
import esportiva from "../assets/imagens3/esportiva.png";
import inverno from "../assets/imagens3/inverno.png";

export const colecoes = [
  {
    id: 'masculina',
    nome: 'Coleção Masculina',
    banner: masculina,
    descricao: 'Estilo moderno, urbano e elegante para eles.',
    produtos: [
      produtosMasculinos[0],
      produtosMasculinos[1],
      produtosMasculinos[2],
      produtosMasculinos[3],
      produtosMasculinos[4],
    ]
  },
  {
    id: 'feminina',
    nome: 'Coleção Feminina',
    banner: feminina,
    descricao: 'Moda atual, leve e estilosa para elas.',
    produtos: [
      produtosFemininos[0],
      produtosFemininos[1],
      produtosFemininos[2],
      produtosFemininos[3],
      produtosFemininos[4],
    ]
  },
  {
    id: 'esportiva',
    nome: 'Esporte & Performance',
    banner: esportiva,
    descricao: 'Roupas leves, resistentes e de alta performance.',
    produtos: [
      produtosMasculinos[10],
      produtosMasculinos[11],
      produtosMasculinos[12],
      produtosFemininos[10],
      produtosFemininos[11],
    ]
  },
  {
    id: 'inverno',
    nome: 'Coleção Inverno',
    banner: inverno,
    descricao: 'Casacos e peças quentes para os dias frios.',
    produtos: [
      produtosMasculinos[6],
      produtosMasculinos[7],
      produtosMasculinos[8],
      produtosFemininos[6],
      produtosFemininos[7],
    ]
  }
];
