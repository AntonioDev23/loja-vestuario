// src/data/colecoes.js
import { produtosMasculinos } from '../pages/produtosMasculinos';
import { produtosFemininos } from '../pages/produtosFemininos';

export const colecoes = [
  {
    id: 'streetwear',
    nome: 'Streetwear',
    banner: '/assets/banners/streetwear.jpg', 
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
    banner: '/assets/banners/inverno.jpg',
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
    banner: '/assets/banners/verao.jpg',
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
    banner: '/assets/banners/esporte.jpg',
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
