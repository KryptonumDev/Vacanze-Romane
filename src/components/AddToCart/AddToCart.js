import React, { useContext, useState } from "react";
import { v4 } from 'uuid';
import { Link } from "gatsby";

import ADD_TO_CART from "../../mutations/ADD_TO_CART";
import { useMutation } from "../../hooks/useMutation";
import { styled } from "styled-components";
import { AppContext } from "../../context/app-context";
import Overlay from "../Overlay/Overlay";

export default function AddToCart({ children, quantity, product }) {

  const productQryInput = {
    clientMutationId: v4(),
    productId: product.productId,
    quantity: Number(quantity) || 1,
  };

  const [cart, setCart] = useContext(AppContext);
  const [showViewCart, setShowViewCart] = useState(false);
  const [loading, setLoading] = useState(false);

  const { request, data } = useMutation(ADD_TO_CART, {
    variables: {
      input: productQryInput,
    },
    onCompleted: ({ body }) => {
      localStorage.setItem('woo-next-cart', JSON.stringify(body?.data?.addToCart?.cart))
      setCart(body?.data?.addToCart?.cart)
      setShowViewCart(true)
      setLoading(false)
    },
    onError: (error) => {
      setLoading(false)
      console.log(error.message)
    }
  });

  const handleAddToCartClick = () => {
    setLoading(true)
    request();
  };

  return (
    <div >
      <Overlay state={loading} />
      {showViewCart ? (
        <Button style={{ position: "relative", zIndex: 3 }} className="add-to-cart" href='/zamowienie'>
          Przejdż do zamówienia
        </Button>
      ) : (
        <Button
          type="button"
          as='button'
          className="add-to-cart"
          disabled={loading}
          onClick={handleAddToCartClick}
          style={{ position: "relative", zIndex: 3 }}
        >
          {loading ? 'Dodaję do koszyka...' : children ? children : 'Dodaj do koszyka'}
        </Button>
      )}
    </div>
  );
};


const Button = styled(Link)`
  display: block;
  margin-top: 24px;
  background: var(--brown);
  padding: 16px 32px;
  color: var(--beige-2);
  font-size: 18px;
  font-weight: 400;
  line-height: 144.444%;
  letter-spacing: 1px;
  text-decoration: unset;
  text-align: center;
  border: none;
  width: 100%;

  transition: background-color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1),
    color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover,
  &:focus,
  &:active {
    outline: none;
    color: var(--beige-2);
    background-color: var(--dead-green);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`