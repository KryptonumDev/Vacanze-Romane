import React from "react"
import styled from "styled-components"
import TwoColumnList from "./TwoColumnListPart"
import OneColumnList from "./OneColumnListPart"
import Video from "./VideoPart"
import TwoColumnCards from "./TwoColumnCardsList"
import AddToCart from './../AddToCart/AddToCart'
import { useForm } from "react-hook-form"
import { email } from './../../constants/regex'
import { Input } from './../Input/Input'

export default function Content({ data: { slug, productTags, product, title, content, featuredImage, price } }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    // submit CF7 and redirect to - /sklep/${slug}/podziekowanie
  };

  return (
    <Wrapper>
      <img src={featuredImage.node.mediaItemUrl} alt={featuredImage.node.altText} />
      <div className="left">
        <div className="content">
          {product.sections.map(section => {
            switch (section.fieldGroupName) {
              case 'Product_Product_Sections_TwoColumnList':
                return <TwoColumnList data={section} />
              case 'Product_Product_Sections_OneColumnList':
                return <OneColumnList data={section} />
              case 'Product_Product_Sections_Video':
                return <Video data={section} />
              case 'Product_Product_Sections_TwoColumnCards':
                return <TwoColumnCards data={section} />
              default:
                return null
            }
          })}
        </div>
      </div>
      <div className="aside">
        <h2>{title}</h2>
        <p className="price" dangerouslySetInnerHTML={{ __html: price }} />
        <p className="omnibus">Najniźsza cena 30 dni przed zmianą: <span dangerouslySetInnerHTML={{ __html: price }} /> brutto</p>
        <div className="text" dangerouslySetInnerHTML={{ __html: content }} />
        {productTags.nodes.some(tag => tag.slug === 'free') ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <span>Adres-email</span>
              <Input placeholder="Adres-email" type="email" {...register('mail', { required: true, pattern: email })} />
            </label>
            <Button>Chcę ten kurs!</Button>
          </form>
        ) : (
          <AddToCart />
        )}
        <h3>Ten kurs obejmuje</h3>
        <ul>
          {product.courseContent?.map((el, i) => (
            <li key={el.text + i}>
              <img src={el.icon.mediaItemUrl} alt={el.icon.altText} />
              <p>{el.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 730fr 390fr;
  grid-template-areas: 
  'image aside'
  'left aside';
  gap: 0 clamp(24px, calc(52vw/14.4), 52px);
  max-width: 1440px;
  width: 100%;
  padding: 0 100px;
  margin: 100px auto 40px auto;
  
  @media (max-width: 1051px) {
    padding: 0 65px;
  }

  @media (max-width: 964px) {
    grid-template-columns: 1fr;
    grid-template-areas: 
    'image'
    'aside'
    'left';

    .aside{
      margin-bottom: 24px;
    }
  } 

  @media (max-width: 798px) {
    padding: 0 30px;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
  }

  img{
    width: 100%;
    height: auto;
    margin-bottom: 24px;
  }

  .content{
    padding: clamp(24px, calc(36vw/7.68), 48px) clamp(18px, calc(32vw/7.68), 48px);
    background: var(--Bg-top, #F8F5F1);

    @media (max-width: 480px) {
      margin: 0 -16px;
    }

    display: grid;
    gap: 36px;

    >div{
      border-top:  1px solid  rgba(50, 37, 29, 0.50);
      
      &:first-child{
        border-top: none;
        .title{
          margin-top: 0;
        }
      }
    }
  }

  >img{
    grid-area: image;
  }

  .left{
    grid-area: left;
  }

  .aside{
    grid-area: aside;

    label{
      span{
        display: none;
      }
    }

    h2{
      font-family: 'Cormorant Garamond';
      font-size: clamp(24px, calc(30vw/7.68), 36px);
      font-weight: 400;
      line-height: 111.111%;
      letter-spacing: 1px;
      margin-bottom: 24px;
    }

    .price{
      font-size: 20px;
      letter-spacing: 5px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .omnibus{
      color: var(--grey-1, #808080);
      font-size: 15px;
      line-height: 160%;
      letter-spacing: 1px;
      margin-bottom: 24px;
    }

    .text{
      font-size: 15px;
      font-weight: 400;
      line-height: 160%;
      letter-spacing: 1px;
    }

    h3{
      font-size: 14px;
      line-height: 150%;
      letter-spacing: 5px;
      text-transform: uppercase;
      margin-bottom: 24px;
      margin-top: 36px;
      font-weight: 400;
    }

    ul{
      display: grid;
      gap: 16px;
      li{
        display: grid;
        grid-template-columns: 24px auto;
        gap: 8px;

        img{
          margin-bottom: 0;
        }
      }
    }
  }
`

const Button = styled.button`
  display: block;
  margin-top: 24px;
  background: var(--brown, #32251D);
  padding: 16px 32px;
  color: var(--beige-2, #F1E2CC);
  font-size: 18px;
  font-weight: 400;
  line-height: 144.444%;
  letter-spacing: 1px;
  text-decoration: unset;
  text-align: center;
  cursor: pointer;
  width: 100%;
  border: none;

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