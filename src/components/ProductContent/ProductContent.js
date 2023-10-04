import React, { useState } from "react"
import styled from "styled-components"
import TwoColumnList from "./TwoColumnListPart"
import OneColumnList from "./OneColumnListPart"
import Video from "./VideoPart"
import TwoColumnCards from "./TwoColumnCardsList"
import AddToCart from './../AddToCart/AddToCart'
import { useForm } from "react-hook-form"
import { email } from './../../constants/regex'
import { Input } from './../Input/Input'
import Select, { components } from 'react-select';
import Text from "./TextPart"
import Flex from "./FlexPart"
import Overlay from "../Overlay/Overlay"
import axios from "axios"
import Arrow from '../../assets/images/arrow-right.svg'

const options = [
  { value: '1', label: '1 produkt' },
  { value: '2', label: '2 produkty' },
  { value: '3', label: '3 produkty' },
  { value: '4', label: '4 produkty' },
  { value: '5', label: '5 produktów' },
];

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="58" height="58" fill="#32251D" />
        <path d="M36 26L29 33L22 26" stroke="#F1E2CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </components.DropdownIndicator>
  )
}

const NoOptionsMessage = props => {
  return (
    <components.NoOptionsMessage {...props}>
      <span>Brak wyników</span>
    </components.NoOptionsMessage>
  );
};


export default function Content({ data, data: { slug, productId, productTags, product, title, content, featuredImage, price, regularPrice } }) {
  debugger
  const { register, handleSubmit, formState: { errors } } = useForm()

  const [selectedOption, setSelectedOption] = useState(options[0])
  const [loading, setLoading] = useState(false)

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption)
  }

  const onSubmit = data => {
    setLoading(true)

    axios.post('/api/free-product', {
      item: [
        {
          product_id: productId,
          quantity: 1
        }
      ],
      email: data.mail,
      price: price
    })
      .then(function (res) {

        let body = new FormData()
        body.append('mail', data.mail)
        body.append('id', res.data.number)
        body.append('amount', res.data.total + ' ' + res.data.currency_symbol)

        axios.post('https://wloskiodzera.headlesshub.com/wp-json/contact-form-7/v1/contact-forms/14/feedback', body)
          .then(function (response) {
            console.log(response);
            setLoading(false)
            window.location.href = `/sklep/${slug}/podziekowanie`
          })
          .catch(function (error) {
            console.log(error);
            setLoading(false)
          });
      })
      .catch(function (error) {
        setLoading(false)
        console.log(error);
      });

  };

  return (
    <Wrapper>
      <Overlay state={loading} />
      <img src={featuredImage.node.mediaItemUrl} alt={featuredImage.node.altText} />
      <div className="left">
        {product.sections.length > 0 && (
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
                case 'Product_Product_Sections_FlexSection':
                  return <Flex data={section} />
                case 'Product_Product_Sections_TextSection':
                  return <Text data={section} />
                default:
                  return null
              }
            })}
          </div>
        )}
      </div>
      <div className="aside">
        <h2>{title}</h2>
        {price
          ? <p className="price" dangerouslySetInnerHTML={{ __html: price }} />
          : <p className="price" dangerouslySetInnerHTML={{ __html: '0&nbsp;zł' }} />}
        {regularPrice && <p className="omnibus">Najniźsza cena 30 dni przed zmianą: <span dangerouslySetInnerHTML={{ __html: regularPrice }} /> brutto</p>}
        <div className="text" dangerouslySetInnerHTML={{ __html: content }} />
        {productTags.nodes.some(tag => tag.slug === 'free')
          ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                <span>Adres-email</span>
                <Input placeholder="Adres-email" type="email" {...register('mail', { required: true, pattern: email })} />
              </label>
              <Button>{price ? 'Chcę ten kurs!' : 'Pobieram bezpłatnie!'}</Button>
            </form>
          ) : (
            <>
              <Select
                className="counter"
                classNamePrefix="counter"
                components={{ DropdownIndicator, NoOptionsMessage }}
                value={selectedOption}
                onChange={handleChange}
                options={options}
                isSearchable={false}
              />
              <AddToCart quantity={selectedOption.value} product={data} />
            </>
          )}
        {product.courseContent?.length > 0 && (
          <>
            <h3>Ten kurs obejmuje</h3>
            <ul className="course-content">
              {product.courseContent?.map((el, i) => (
                <li key={el.text + i}>
                  <img src={el.icon.mediaItemUrl} alt={el.icon.altText} />
                  <p>{el.text}</p>
                </li>
              ))}
            </ul>
          </>
        )}
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

  .add-to-cart{
    margin-top: 16px;
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
      margin-bottom: 36px;

      ul{
        margin: 16px 0;
        display: grid;
        gap: 16px;
        
        li{
          list-style: none;
          padding-left: 40px;
          position: relative;
          font-size: 15px;
          line-height: 160%;
          letter-spacing: 1px;

          *{
            font-size: 15px;
            line-height: 160%;
            letter-spacing: 1px;
          }

          &::before{
            content: url(${Arrow});
            position: absolute;
            left: 0;
            top: 2px;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: var(--light-green, #2A4536);
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 4px;
          }
        }
      }
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

    .course-content{
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

  .counter{

    .counter__control {
      border: 1px solid var(--brown, #32251D);
      border-radius: 0px;
      padding: 0 0 0 16px;
      box-shadow: unset !important;
    }

    .counter__indicator {
      padding: 0;
    }

    .counter__single-value{
      color: var(--brown, #32251D);
      font-feature-settings: 'clig' off, 'liga' off;
      font-family: Lato;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 1px;
      margin: 0;
    }

    .counter__menu {
      z-index: 5;
      margin: 0;
      border-radius: 0px;
    }

    .counter__menu-list{
      padding: 0;
    }

    .counter__option {
      border: 1px solid var(--brown, #32251D);
      border-top: unset;
      height: 58px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      transition: all .24s cubic-bezier(0.785, 0.135, 0.15, 0.86);
      cursor: pointer;

      color: var(--brown, #32251D);
      font-feature-settings: 'clig' off, 'liga' off;
      font-family: Lato;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px; /* 144.444% */
      letter-spacing: 1px;
    }

    .counter__option--is-focused{
      background-color: var(--dead-green);
      color: #F1E2CC;
    }

    .counter__option--is-selected{
      background-color: #32251D;
      color: #F1E2CC;
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