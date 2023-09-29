import React from "react"
import { styled } from "styled-components"
import CartItem from "../Cart/CartItem"

export default function Summary({cart}) {
  return (
    <Wrapper>
      <h2>Podsumowanie</h2>
      {cart.contents.nodes.map((item, index) => (
        <CartItem key={index} data={item} products={cart.contents.nodes} />
      ))}

      <div>
        <div className="flex">
          <p>Wartość produktów</p>
          <p dangerouslySetInnerHTML={{__html: cart.subtotal}}/>
        </div>
        <div className="flex">
          <p>Dostawa</p>
          <p dangerouslySetInnerHTML={{__html: cart.shippingTotal}}/>
        </div>
      </div>

      <div>
        <div className="flex">
          <p>Razem</p>
          <p dangerouslySetInnerHTML={{__html: cart.total}}/>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: fit-content;
  padding: 24px;
  border: 1px solid var(--grey, #E0E0E0);
  background: var(--white, #FEFEFE);

  h2{
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Cormorant Garamond';
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 111.111%;
    letter-spacing: 1px;
    margin-bottom: 48px;
  }
`