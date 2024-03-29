import { Link } from "gatsby"
import React, { useContext, useEffect, useState } from "react"
import { styled } from "styled-components"
import { useQuery } from "../../hooks/useQuery"
import { AppContext } from "../../context/app-context"
import GET_CART from "../../queries/GET_CART"
import UPDATE_CART from '../../mutations/UPDATE_CART'
import CartItem from "./CartItem"
import { useMutation } from "../../hooks/useMutation"
import { v4 } from "uuid";
import { getUpdatedItems } from './../../utils/getUpdatedItems'
import OverlayC from "../Overlay/Overlay"

export const Cart = ({ bg }) => {

  const [isOpened, setIsOpened] = useState(false)
  const [cart, setCart] = useContext(AppContext)
  const [loading, setLoading] = useState(false)

  const { revalidate, data } = useQuery(GET_CART, {
    variables: {},
    onCompleted: ({ body, status }) => {
      localStorage.setItem('woo-next-cart', JSON.stringify(body.data.cart))
      setCart(body.data.cart)
    },
    onError: (error) => {
      console.log(error.message)
    }
  })

  const { request: updateCart } = useMutation(UPDATE_CART, {
    onCompleted: ({ body }) => {
      // Update cart in the localStorage.
      localStorage.setItem('woo-next-cart', JSON.stringify(body.data.updateItemQuantities.cart));
      // Update cart data in React Context.

      setCart(body.data.updateItemQuantities.cart);
      setLoading(false)
    },
    onError: (error) => {
      setLoading(false)
      console.log(error.message);
    }
  });

  const handleRemoveProductClick = (event, key, products) => {
    event.stopPropagation();
    if (products.length) {
      setLoading(true)

      // By passing the newQty to 0 in updateCart Mutation, it will remove the item.
      const newQty = 0;
      const updatedItems = getUpdatedItems(products, newQty, key);
      // setInnerLoading(true)
      updateCart({
        variables: {
          input: {
            clientMutationId: v4(),
            items: updatedItems
          }
        },
      });
    }
  };



  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, []);

  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      setIsOpened(false);
    }
  }

  return (
    <>
      <OverlayC state={loading} />
      <LocButton bg={bg} onClick={() => { setIsOpened(true) }}>
        {
          cart?.contents?.nodes?.length > 0 && (
            <span>{cart.contents.itemCount}</span>
          )
        }
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 11.0002V7.00024C16 4.79111 14.2091 3.00024 12 3.00024C9.79086 3.00024 8 4.79111 8 7.00024V11.0002M5 9.00024H19L20 21.0002H4L5 9.00024Z" stroke="#32251D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </LocButton>
      <Popup className={isOpened ? 'active' : ''}>
        <Flex>
          <h3>Koszyk</h3>
          <button onClick={() => { setIsOpened(false) }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6L18 18" stroke="#32251D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </Flex>

        {cart?.contents?.nodes?.length > 0 ? (
          <>
            <div className="cart">
              {cart?.contents?.nodes.map(el => (
                <CartItem products={cart?.contents?.nodes} remove={handleRemoveProductClick} data={el} />
              ))}
            </div>
            <div>
              <hr />
              <div className="info">
                <Flex>
                  <p>Podsumowanie</p>
                  <p dangerouslySetInnerHTML={{ __html: cart.subtotal }}></p>
                </Flex>
                <p><small>Koszt wysyłki jest podliczany podczas płatności</small></p>
              </div>
              <Link onClick={() => { setIsOpened(false) }} to="/zamowienie">
                Przejdź do zamówienia
              </Link>
            </div>
          </>
        ) : (
          <div className="placeholder">
            <p>Twój koszyk jest pusty</p>
            <Link onClick={() => { setIsOpened(false) }} to="/sklep">
              Przejdź do sklepu
            </Link>
          </div>
        )}
      </Popup>
      <Overlay onClick={() => { setIsOpened(false) }} className={isOpened ? 'active' : ''} />
    </>
  )
}

const LocButton = styled.button`
  width: 42px;
  height: 42px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  margin-left: 8px;
  position: relative;
  transition: all .2s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  transform-origin: 50% 50%;

  &:hover{
    transform: scale(1.08);
  }

  @media (max-width: 1105px) {
    position: absolute;
    right: 80px;
    top: 8px;
  }

  span{
    position: absolute;
    right: 4px;
    top: 4px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fefefe;
  }

  svg{
    path{
      stroke: ${({ bg }) => bg === "light"
    ? "var(--brown)"
    : "var(--beige-2)"}
    }
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3{
    font-size: 24px;
    font-family: "Cormorant Garamond";
  }

  p{
    font-size: 18px;

    small{
      color: #808080;
      font-size: 15px;
    }
  }

  button{
    padding: 8px;
    border: none;
    background-color: transparent;
  }
`

const Popup = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  max-width: 480px;
  width: 100%;
  background: var(--white, #FEFEFE);
  z-index: 12;
  padding: 24px;
  transform: translateX(100%);
  transition: transform .3s cubic-bezier(0.645, 0.045, 0.355, 1);

  display: grid;
  grid-template-rows: auto 1fr auto;

  &.active{
    transform: unset;
  }

  .info{
    margin: 24px 0;
  }

  a{
    color: #fff !important;
    background: var(--brown, #32251D);
    padding: 16px 32px;
    text-align: center;
    width: 100%;
    display: block;
  }

  .cart{
    max-height: 100%;
    overflow: auto;
    margin: 48px 0 24px;
  }

  .cart-item{
    padding-bottom: 24px;
    border-bottom: 1px solid var(--grey, #E0E0E0);
    display: grid;
    grid-template-columns: 106px auto;
    gap: 20px;
  }

  .placeholder{
    p{
      margin-top: 48px;
      margin-bottom: 24px;;
    }
  }
`

const Overlay = styled.div`
  position: fixed;
  z-index: 11;
  inset: 0;
  background-color: rgba(0,0,0,0.5);
  opacity: 0;
  pointer-events: none;
  transition: opacity .3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &.active{
    opacity: 1;
    pointer-events: all;
  }
`