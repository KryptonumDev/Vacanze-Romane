import React from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import { styled } from "styled-components"
import { Newsletter } from "../components/Newsletter/Newsletter"
import { Helmet } from "react-helmet"

const ProductLayout = () => {
  return (
    <>
      <Helmet>
        <title>Wloski od zera. Błąd</title>
        <meta name="description" content='' />
        <meta name='robots' content="noindex" />
        {/* TODO: description */}
      </Helmet>
      <PageHeader
        subheader={'Problem z przetwarzaniem zamówienia.'}
        withNav
        bg={'brown'}
      />
      <Summary>
        <h2>Przepraszamy, wygląda na to, że wystąpił problem z przetwarzaniem zamówienia.</h2>
        <p>Ups! Wygląda na to, że coś poszło nie tak podczas zapisywania zamówienia do bazy dannych. Nie martw się, jestem tutaj, aby Ci pomóc! </p>
        <p>
          Napisz do nas na adres <a href="mail:jezyk.wloski.od.zera@gmail.com">jezyk.wloski.od.zera@gmail.com</a> i opisz dokładnie, jaki problem napotkałeś. Postaramy się znaleźć rozwiązanie razem.
        </p>
      </Summary>
      <Newsletter />
    </>
  )
}

export default ProductLayout


const Summary = styled.div`
  max-width: 750px;
  margin: 0 auto;
  text-align: center;
  padding: clamp(32px, calc(64vw/7.68), 78px) clamp(16px, calc(16vw/4.8), 32px);

  h2{
    color: #000;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Cormorant Garamond;
    font-size: clamp(24px, calc(30vw/7.68), 36px);
    font-style: normal;
    font-weight: 400;
    line-height: 111.111%;
    letter-spacing: 1px;
    margin-bottom: 24px;
  }

  p{
    margin-top: 16px;
    color: #000;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Lato;
    font-size: clamp(15px, calc(16vw/7.68), 18px);
    font-style: normal;
    font-weight: 400;
    line-height: 144.444%;
    letter-spacing: 1px;
  }

  a{
    color: #000;
  }

  ul{
    max-width: 450px;
    margin: 0 auto;
    li{
      list-style: none;
      margin-top: 24px;
      color: #000;
      text-align: center;
      font-size: 15px;
      font-weight: 400;
      line-height: 160%;
      letter-spacing: 1px;
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
  margin: 32px 0 0 0;
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
`