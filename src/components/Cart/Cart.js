import { Link } from "gatsby"
import React, { useState } from "react"
import { styled } from "styled-components"
import { useQuery } from "../../hooks/useQuery"

export const Cart = ({ bg }) => {

  const [isOpened, setIsOpened] = useState(false)
  const [cart, setCart] = useState({ items: [], total: 0 })
  // const { revalidate, data, loading } = useQuery(`
  //   query Cart {
  //     cart {
  //       total
  //     }
  //   }
  // `, {
  //   variables: {},
  //   onComplited: (data, status) => {
  //     console.log(data, status)
  //   },
  //   onError: (error) => {
  //     console.log(error)
  //   }
  // })

  return (
    <>
      <LocButton bg={bg} onClick={() => { setIsOpened(true) }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 11.0002V7.00024C16 4.79111 14.2091 3.00024 12 3.00024C9.79086 3.00024 8 4.79111 8 7.00024V11.0002M5 9.00024H19L20 21.0002H4L5 9.00024Z" stroke="#32251D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </LocButton>
      <Popup className={isOpened ? 'active' : ''}>
        <Flex>
          <h3>Koszyk</h3>
          <button onClick={() => { setIsOpened(false) }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6L18 18" stroke="#32251D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </Flex>

        {cart.items.length > 0 ? (
          <>
            <div className="cart">
            </div>
            <div>
              <hr />
              <div className="info">
                <Flex>
                  <p>Podsumowanie</p>
                  <p>50.00 zł</p>
                </Flex>
                <p><small>Koszt wysyłki jest podliczany podczas płatności</small></p>
              </div>
              <Link to="/zamowienie">
                Przejdź do zamówienia
              </Link>
            </div>
          </>
        ) : (
          <div className="placeholder">
            <p>Twój koszyk jest pusty</p>
            <Link to="/sklep">
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