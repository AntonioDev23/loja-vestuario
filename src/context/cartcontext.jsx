import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  // adicionar produto
  const adicionarAoCarrinho = (produto) => {
    const existe = carrinho.find((item) => item.id === produto.id);

    if (existe) {
      // aumenta quantidade
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        )
      );
    } else {
      // adiciona novo
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  };

  // remover produto
  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter((item) => item.id !== id));
  };

  // diminuir quantidade
  const diminuirQuantidade = (id) => {
    setCarrinho(
      carrinho
        .map((item) =>
          item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
        )
        .filter((item) => item.quantidade > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho, diminuirQuantidade }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
