import React from "react"
import styled from "styled-components"
import AddToCart from "../AddToCart/AddToCart"
import Price from "../Price/Price"

export default function ShopGrid({ products }) {
  return (
    <Wrapper>
      <Info>
        <h2>Nauka języka włoskiego od podstaw – samouczkowe kursy i lekcje włoskiego dla początkujących</h2>
        <p>Włoski od zera – sklep z kursami i lekcjami do nauki języka włoskiego od podstaw! To jak szkoła języka włoskiego z szerokim wyborem kursów, lekcji idealnych dla początkujących, którzy chcą rozpocząć przygodę z włoskim. Materiały tworzę, bo sama jestem pasjonatką Italii i wszyskiego, co włoskie. Umożliwią Ci one efektywną naukę i zapewnią solidne zrozumienie podstaw języka włoskiego. Rozpocznij swoją przygodę z Italią dzięki samouczkowym kursom, produktom i lekcjom.</p>
      </Info>
      <ProductsGrid>
        {products?.map(product => (
          <ProductCard>
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
            <AddToCart product={product}>Chcę ten kurs!</AddToCart>
          </ProductCard>
        ))}
      </ProductsGrid>
    </Wrapper>
  )
}

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
  gap: 48px clamp(24px, calc(24vw/7.68), 70px);
  
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

  .add-to-cart{
    grid-area: add-to-cart;
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