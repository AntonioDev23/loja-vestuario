// Importando imagens femininas
import blusa1 from '../assets/imagens2/blusa1.jpg';
import blusa2 from '../assets/imagens2/blusa2.jpg';
import blusa3 from '../assets/imagens2/blusa3.jpg';
import blusa4 from '../assets/imagens2/blusa4.jpg';
import blusa5 from '../assets/imagens2/blusa5.jpg';
import calca1 from '../assets/imagens2/calca1.jpg';
import calca2 from '../assets/imagens2/calca2.jpg';
import calca3 from '../assets/imagens2/calca3.jpg';
import calca4 from '../assets/imagens2/calca4.jpg';
import calca5 from '../assets/imagens2/calca5.jpg';
import casaco1 from '../assets/imagens2/casaco1.jpg';
import casaco2 from '../assets/imagens2/casaco2.jpg';
import casaco3 from '../assets/imagens2/casaco3.jpg';
import casaco4 from '../assets/imagens2/casaco4.jpg';
import casaco5 from '../assets/imagens2/casaco5.jpg';
import acessorio1 from '../assets/imagens2/acessorio1.jpg';
import acessorio2 from '../assets/imagens2/acessorio2.jpg';
import acessorio3 from '../assets/imagens2/acessorio3.jpg';
import acessorio4 from '../assets/imagens2/acessorio4.jpg';
import acessorio5 from '../assets/imagens2/acessorio5.jpg';
import acessorio6 from '../assets/imagens2/acessorio6.jpg';
import acessorio7 from '../assets/imagens2/acessorio7.jpg';
import acessorio8 from '../assets/imagens2/acessorio8.jpg';
import acessorio9 from '../assets/imagens2/acessorio9.jpg';
import acessorio10 from '../assets/imagens2/acessorio10.jpg';
import calcado1 from '../assets/imagens2/calcado1.jpg';
import calcado2 from '../assets/imagens2/calcado2.jpg';
import calcado3 from '../assets/imagens2/calcado3.jpg';
import calcado4 from '../assets/imagens2/calcado4.jpg';
import calcado5 from '../assets/imagens2/calcado5.jpg';
import calcado6 from '../assets/imagens2/calcado6.jpg';
import calcado7 from '../assets/imagens2/calcado7.jpg';
import calcado8 from '../assets/imagens2/calcado8.jpg';
import calcado9 from '../assets/imagens2/calcado9.jpg';
import calcado10 from '../assets/imagens2/calcado10.jpg';

export const produtosFemininos = [
  // Camisas/Blusas
  { id: 1, nome: 'Blusa Xadrez Rosa', preco: 49.90, categoria: 'camisas', imagem: blusa1 },
  { id: 2, nome: 'Blusa Manga Longa Branca', preco: 59.90, categoria: 'camisas', imagem: blusa2 },
  { id: 3, nome: 'Blusa Manga Longa Preta', preco: 69.90, categoria: 'camisas', imagem: blusa3 },
  { id: 4, nome: 'Blusa Polo Azul', preco: 79.90, categoria: 'camisas', imagem: blusa4 },
  { id: 5, nome: 'Blusa Regata Vermelha', preco: 89.90, categoria: 'camisas', imagem: blusa5 },

  // Calças (5 itens)
  { id: 6, nome: 'Calça Jeans Clara', preco: 149.90, categoria: 'calcas', imagem: calca1 },
  { id: 7, nome: 'Calça Jeans Escura', preco: 159.90, categoria: 'calcas', imagem: calca2 },
  { id: 8, nome: 'Calça Legging Preta', preco: 169.90, categoria: 'calcas', imagem: calca3 },
  { id: 9, nome: 'Calça Jogger Cinza', preco: 179.90, categoria: 'calcas', imagem: calca4 },
  { id: 10, nome: 'Calça Social Azul', preco: 189.90, categoria: 'calcas', imagem: calca5 },

  // Casacos (5 itens)
  { id: 11, nome: 'Casaco Trench Bege', preco: 199.90, categoria: 'casacos', imagem: casaco1 },
  { id: 12, nome: 'Casaco Capa Preto', preco: 209.90, categoria: 'casacos', imagem: casaco2 },
  { id: 13, nome: 'Jaqueta de Couro Rosa', preco: 219.90, categoria: 'casacos', imagem: casaco3 },
  { id: 14, nome: 'Blazer Cinza Feminino', preco: 229.90, categoria: 'casacos', imagem: casaco4 },
  { id: 15, nome: 'Sobretudo Preto', preco: 239.90, categoria: 'casacos', imagem: casaco5 },

  // Acessórios (10 itens)
  { id: 16, nome: 'Bolsa Pequena Marrom', preco: 249.90, categoria: 'acessorios', imagem: acessorio1 },
  { id: 17, nome: 'Bolsa Grande Preta', preco: 259.90, categoria: 'acessorios', imagem: acessorio2 },
  { id: 18, nome: 'Cinto Rosa', preco: 269.90, categoria: 'acessorios', imagem: acessorio3 },
  { id: 19, nome: 'Cinto Preto', preco: 279.90, categoria: 'acessorios', imagem: acessorio4 },
  { id: 20, nome: 'Chapéu Marrom', preco: 289.90, categoria: 'acessorios', imagem: acessorio5 },
  { id: 21, nome: 'Chapéu Preto', preco: 299.90, categoria: 'acessorios', imagem: acessorio6 },
  { id: 22, nome: 'Lenço Colorido', preco: 309.90, categoria: 'acessorios', imagem: acessorio7 },
  { id: 23, nome: 'Óculos de Sol', preco: 319.90, categoria: 'acessorios', imagem: acessorio8 },
  { id: 24, nome: 'Relógio Feminino Prata', preco: 329.90, categoria: 'acessorios', imagem: acessorio9 },
  { id: 25, nome: 'Relógio Feminino Preto', preco: 339.90, categoria: 'acessorios', imagem: acessorio10 },

  // Calçados (10 itens)
  { id: 26, nome: 'Sandália Preta', preco: 349.90, categoria: 'calcados', imagem: calcado1 },
  { id: 27, nome: 'Sandália Marrom', preco: 359.90, categoria: 'calcados', imagem: calcado2 },
  { id: 28, nome: 'Tênis Rosa', preco: 369.90, categoria: 'calcados', imagem: calcado3 },
  { id: 29, nome: 'Tênis Branco', preco: 379.90, categoria: 'calcados', imagem: calcado4 },
  { id: 30, nome: 'Tênis Preto', preco: 389.90, categoria: 'calcados', imagem: calcado5 },
  { id: 31, nome: 'Bota Marrom', preco: 399.90, categoria: 'calcados', imagem: calcado6 },
  { id: 32, nome: 'Bota Preta', preco: 409.90, categoria: 'calcados', imagem: calcado7 },
  { id: 33, nome: 'Chinelo Branco', preco: 419.90, categoria: 'calcados', imagem: calcado8 },
  { id: 34, nome: 'Chinelo Preto', preco: 429.90, categoria: 'calcados', imagem: calcado9 },
  { id: 35, nome: 'Sapato Social Branco', preco: 439.90, categoria: 'calcados', imagem: calcado10 },

  // Você pode completar até 50 produtos adicionando mais camisas, acessórios e calçados
];

