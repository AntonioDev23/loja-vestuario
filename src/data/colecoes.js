// Importando banners (4 imagens do Pexels)
import streetwearBanner from '../assets/banners/streetwear.jpg';
import invernoBanner from '../assets/banners/inverno.jpg';
import veraoBanner from '../assets/banners/verao.jpg';
import esporteBanner from '../assets/banners/esporte.jpg';

// Aqui você coloca os IDs dos produtos que já existem
// Exemplo: 1,2,3,4 etc (produtos masculinos/femininos)

export const colecoes = [
  {
    id: 1,
    nome: "Streetwear",
    banner: streetwearBanner,
    produtos: [1, 5, 8, 12, 20, 23] // IDs reais seus
  },
  {
    id: 2,
    nome: "Inverno 2025",
    banner: invernoBanner,
    produtos: [2, 6, 9, 11, 15, 30]
  },
  {
    id: 3,
    nome: "Verão 2025",
    banner: veraoBanner,
    produtos: [3, 7, 10, 13, 18, 25]
  },
  {
    id: 4,
    nome: "Esporte & Performance",
    banner: esporteBanner,
    produtos: [4, 14, 17, 19, 22, 28]
  }
];
