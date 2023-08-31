import React from "react"
import { graphql } from "gatsby"
import PageHeader from "../components/PageHeader/PageHeader"
import { styled } from "styled-components"
import { BlogNews } from "../components/BlogNews/BlogNews"
// import SEO from "../components/SEO/SEO"

const ProductLayout = ({ data }) => {
  return (
    <>
      {/* <SEO meta={data.datoCmsArticle.seoMetaTags} /> */}
      <PageHeader
        subheader={data.wp.product.title}
        withNav
        article
        bg={'brown'}
      />
      <Summary>
        <h2>Sprawdź swój e-mail! </h2>
        <p>
          Dziękuję za wykupienie kursu!Na podany przez Ciebie adres e-mail otrzymasz wkróte informacje o płatności oraz dostęp do materiałów kursowych. </p>
        <p>
          Jeszcze raz dziękuję za zaufanie i dołączenie do naszej społeczności uczących się włoskiego z Vacanze Romane. Jeśli masz jakiekolwiek pytania - skontaktuj się ze mną! Jestem tu, aby Ci pomóc na każdym etapie Twojej nauki. Cieszę się, że będziemy razem odkrywać i rozwijać nowe umiejętności!
        </p>
      </Summary>
      <BlogNews/>
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