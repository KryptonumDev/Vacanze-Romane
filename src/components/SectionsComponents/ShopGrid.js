import React from "react"
import styled from "styled-components"
import AddToCart from "../AddToCart/AddToCart"
import Price from "../Price/Price"
import { Link } from "gatsby"

export default function ShopGrid({ products }) {
  return (
    <Wrapper>
      <Info>
        <h2>Nauka języka włoskiego od podstaw - samouczkowe kursy i lekcje włoskiego dla&nbsp;początkujących</h2>
        <p>Włoski od zera - sklep z kursami i lekcjami do nauki języka włoskiego od podstaw! <br/>To jak szkoła języka włoskiego z szerokim wyborem kursów i lekcji idealnych dla początkujących, którzy chcą rozpocząć przygodę z włoskim. Materiały tworzę, bo sama jestem pasjonatką Italii i wszyskiego, co włoskie. Umożliwią Ci one efektywną naukę i zapewnią solidne zrozumienie podstaw języka włoskiego. Rozpocznij swoją przygodę z Italią dzięki samouczkowym kursom, produktom i lekcjom.</p>
      </Info>
      <ProductsGrid>
        {products?.map(product => (
          <ProductCard>
            <Link to={`/sklep/${product.slug}`} />
            {/* <StaticImage
              src={product.featuredImage.node.mediaItemUrl}
              alt={product.featuredImage.node.altText}
              placeholder="blurred"
            /> */}
            <div className="image">
              {product.regularPrice !== product.price && (<div className="sales">PROMOCJA</div>)}
              <img src={product.featuredImage.node.mediaItemUrl} />
            </div>
            <p className="title">{product.title}</p>
            <Price price={product.price} regularPrice={product.regularPrice} />
            <Button className="add-to-cart" to={`/sklep/${product.slug}`} >Chcę ten kurs!</Button>
            {/* <AddToCart product={product}></AddToCart> */}
          </ProductCard>
        ))}
      </ProductsGrid>
    </Wrapper>
  )
}

const Button = styled(Link)`
  display: block;
  margin-top: 16px;
  background: var(--brown);
  padding: 16px 32px;
  color: var(--beige-2);
  font-size: 18px;
  font-weight: 400;
  line-height: 144.444%;
  letter-spacing: 1px;
  text-decoration: unset;
  text-align: center;

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

const Info = styled.div`
  margin-bottom: clamp(36px, calc(64vw/7.68), 92px);

  h2{
    color: #000;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: "Cormorant Garamond";
    font-size: clamp(24px, calc(30vw/7.68), 36px);
    font-style: normal;
    font-weight: 400;
    line-height: 111.111%;
    letter-spacing: 1px;

    max-width: 765px;
    margin: 0 auto;
  }

  p{
    color: #000;
    text-align:  center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Lato;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: 1px;

    max-width: 765px;
    margin: 15px auto 0 auto;
  }
`

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 78px 100px 140px 100px;

@media (max-width: 1051px) {
  padding: 64px 65px 110px 65px;
}

@media (max-width: 798px) {
  padding: 36px 30px 86px 30px; 
}

@media (max-width: 480px) {
  padding: 24px 16px 72px 16px;
}
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 64px clamp(24px, calc(24vw/7.68), 70px);
  
  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto auto;
  grid-template-areas: 'image' 'title' 'price' 'add-to-cart';

  >a{
    position: absolute;
    inset: 0;
    width: 100%;
    z-index: 1;
  }

  .add-to-cart{
    grid-area: add-to-cart;
    position: relative;
    z-index: 2;
  }

  .price{
    grid-area: price;
  }

  .image{
    grid-area: image;
  }

  .title{
    grid-area: title;
    margin: 16px 0;
    font-family: 'Cormorant Garamond';
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 1px;
  }

  img{
    width: 100%;
  }

  .sales{
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    padding: 4px;
    background: var(--light-red, #7B2938);
    color: var(--bg-home, #FEFBF5);
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  &:first-child{
    @media (min-width: 461px) {
      grid-column: 1 / 4;
      grid-template-areas: 
      'image title' 
      'image price' 
      'image add-to-cart' ;
      grid-template-rows: 1fr auto auto; 
      grid-template-columns: 800fr 365fr;
      gap: 0 clamp(24px, calc(24vw/7.68), 70px);

      p{
        margin-top: 0;
      }

      .title{
        font-size: clamp(24px, calc(30vw/7.68), 36px);
        line-height: 110%;
      }

      @media (max-width: 720px) {
        grid-column: 1 / 3;
        grid-template-columns: 500fr 365fr;
      }

      @media (max-width: 640px) {
        grid-template-areas: 
        'image title' 
        'add-to-cart price' 
        ;
        grid-template-rows: 1fr auto; 
        gap: 24px clamp(24px, calc(24vw/7.68), 70px);

        p{
          margin-bottom: 0;
        }

        .price{
          margin-top: 0;
          margin-bottom: 0;
          margin-left: auto;
          align-self: flex-end;
        }
      }
    }
  }
`