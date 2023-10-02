import React from "react"
import { graphql } from "gatsby"
import PageHeader from "../components/PageHeader/PageHeader"
import { styled } from "styled-components"
import { Newsletter } from "../components/Newsletter/Newsletter"
// import SEO from "../components/SEO/SEO"

const ProductLayout = ({ data }) => {
  return (
    <>
      {/* <SEO meta={data.datoCmsArticle.seoMetaTags} /> */}
      <PageHeader
        subheader={'Dziękujemy za zakup w sklepie „Włoski od Zera“'}
        withNav
        bg={'brown'}
      />
      <Summary>
        <h2>Cieszę się, że zdecydowałeś/aś się skorzystać z naszego produktu.</h2>
        <p>
        Twój zakup został pomyślnie zrealizowany. Na podany przez Ciebie adres e-mail otrzymasz wkróte informacje o płatności oraz informację o przetwarzaniu twojego zamówienia</p>
        <p>
          Jeśli masz jakiekolwiek pytania lub potrzebujesz wsparcia, nie wahaj się skontaktować. Jesteśm tutaj, aby Ci pomóc na każdym kroku Twojej nauki i podróży!
        </p>
      </Summary>
      <Newsletter />
    </>
  )
}

export const query = graphql`
  query ProductQuery($id: ID!) {
    wp{
      product(id: $id, idType: ID) {
        title
        content
      }
    }
  }
`

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
`