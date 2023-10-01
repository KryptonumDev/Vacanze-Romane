import React from "react"
import { styled } from "styled-components"
import CartItem from "../Cart/CartItem"

export default function Summary({ register, remove, cart }) {
  return (
    <Wrapper>
      <Box>
        <div className="summary-desctop">
          <h2>Podsumowanie</h2>
          <div>
            {cart.contents.nodes.map((item, index) => (
              <CartItem remove={remove} key={index} data={item} products={cart.contents.nodes} />
            ))}
          </div>
        </div>
        <div className="price-box">
          <div className="flex">
            <p>Wartość produktów</p>
            <p dangerouslySetInnerHTML={{ __html: cart.subtotal }} />
          </div>
          <div className="flex">
            <p>Dostawa</p>
            <p dangerouslySetInnerHTML={{ __html: cart.shippingTotal }} />
          </div>
        </div>

        <div className="price-summary">
          <div className="flex">
            <p>Razem</p>
            <p>{cart.total}&nbsp;zł</p>
          </div>
        </div>
        <Button type="submit">
          Złóź  zamówienie
        </Button>
      </Box>
      <fieldset>
        <legend>Masz dodatkowe życzenie?</legend>
        <label>
          <textarea {...register('comment')} rows={5} placeholder="Prześlij wiadomość tutaj:" />
        </label>
      </fieldset>
    </Wrapper>
  )
}

const Box = styled.div`
  height: fit-content;
  padding: 24px;
  border: 1px solid var(--grey, #E0E0E0);
  background: var(--white, #FEFEFE);

  @media (max-width: 876px){
    margin-bottom: 0;
    margin-top: 48px;
  }

  p{
    font-size: 18px;
    font-weight: 400;
    line-height: 144.444%;
    letter-spacing: 1px;
  }

  .flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price-box{
    padding: 24px 0;
    border-top: 1px solid var(--grey, #E0E0E0);
    border-bottom: 1px solid var(--grey, #E0E0E0);
    display: grid;
    gap: 16px;

    @media (max-width: 876px){
      border-top: 0;
    }
  }

  .price-summary{
    padding: 24px 0;
  }
`

const Wrapper = styled.aside`
  height: fit-content;
  position: sticky;
  top: 48px;

  @media (max-width: 1024px) {
    position: static;
  }

  @media (max-width: 876px) {
    display: flex;
    flex-direction: column-reverse;

    .summary-desctop{
      display: none;
    }
  }
`

const Button = styled.button`
  display: block;
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