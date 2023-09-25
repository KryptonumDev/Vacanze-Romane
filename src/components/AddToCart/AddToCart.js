import React, { useState } from "react";
import { v4 } from 'uuid';
import { Link } from "gatsby";

import ADD_TO_CART from "../../mutations/ADD_TO_CART";
import { useMutation } from "../../hooks/useMutation";
import { styled } from "styled-components";

export default function AddToCart({ children, quantity, product }) {

  const productQryInput = {
    clientMutationId: v4(),
    productId: product.productId,
    quantity: quantity || 1,
  };

  const [cart, setCart] = useState(null);
  const [showViewCart, setShowViewCart] = useState(false);
  const [requestError, setRequestError] = useState(null);

  const { request, data, loading } = useMutation(ADD_TO_CART, {
    variables: {
      input: productQryInput,
    },
    onCompleted: (res) => {
      setCart(res?.data?.addToCart || null);
      setShowViewCart(true)
    },
    onError: (error) => {
      if (error) {
        setRequestError(error?.message ?? '');
      }
      console.log(error.message)
    }
  });

  const handleAddToCartClick = () => {
    setRequestError(null);
    request();
  };

  return (
    <div >
      {showViewCart ? (
        <Button style={{ position: "relative", zIndex: 3 }} className="add-to-cart" href='/zamowienie'>
          Przejdż do zamówienia
        </Button>
      ) : (
        <Button
          as='button'
          className="add-to-cart"
          disabled={loading}
          onClick={handleAddToCartClick}
          style={{ position: "relative", zIndex: 3 }}
        >
          {loading ? 'Dodaje do koszyka...' : children ? children : 'Dodaj do koszyka'}
        </Button>
      )}
    </div>
  );
};


const Button = styled(Link)`
  color: #fff !important;
  background: var(--brown, #32251D);
  text-decoration: unset;
  border: none;
  padding: 16px 32px;
  text-align: center;
  width: 100%;
  display: block;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 1px;
  cursor: pointer;
`