import React from "react"
import { styled } from "styled-components"

export default function Form({ paymentMethods, shipping, register, shippingValue }) {

 

  return (
    <Wrapper>
      <fieldset>
        <legend>Dane Kontaktowe</legend>
        <div className="flex">
          <input placeholder="Imię" />
          <input placeholder="Nazwisko" />
        </div>
        <input placeholder="Adres-email" />
      </fieldset>
      <fieldset>
        <legend>Płatność</legend>
        {paymentMethods.map((el, index) => (
          <label className="radio">
            <input {...register('payment')} value={index} type="radio" />
            <span className="circle">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.3335 8.6665L6.00016 11.3332L12.6668 4.6665" stroke="#F1E2CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="description">
              <p className="title">{el.name}</p>
              <p className="text" dangerouslySetInnerHTML={{__html: el.description}}></p>
            </div>
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>Dane do faktury</legend>
        <input placeholder="Kraj" defaultValue='Polska' />
        <input placeholder="Ulica i numer" />
        <div className="flex">
          <input placeholder="Kod pocztowy" />
          <input placeholder="Miejscowość" />
        </div>
      </fieldset>
      <fieldset>
        <legend>Metody dostawy</legend>
        {shipping.map(el => (
          <label className={`radio ${shippingValue === `${el.methodId}:${el.instanceId}` ? 'active' : ''}`}>
            <input {...register('shipping')} value={`${el.methodId}:${el.instanceId}`} type="radio" />
            <span className="circle">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.3335 8.6665L6.00016 11.3332L12.6668 4.6665" stroke="#F1E2CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="description">
              <p className="title">{el.label}</p>
            </div>
            <p className="price">{el.cost}&nbsp;zł</p>
          </label>
        ))}
      </fieldset>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: fit-content;

  .radio{
    margin-top: 24px;
    background: var(--white, #FEFEFE);
    padding: 16px;
    display: block;
    display: grid;
    grid-template-columns: 24px 1fr auto;
    gap: 24px;
    position: relative;
    border: 1px solid var(--grey, #E0E0E0);
    box-sizing: border-box;

    .description{
      p+p{
        margin-top: 8px;
      }

      .title{
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 144.444%;
        letter-spacing: 1px;
      }

      .text{
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 180%;
        letter-spacing: 1px;
      }
    }

    &.active{
      border: 2px solid var(--light-blue, #262478);
      padding: 15px;
    }

    input{
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      visibility: hidden
    }

    input ~ span{
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border: 1px solid var(--grey, #E0E0E0);

      svg{
        opacity: 0;
      }
    }

    input:checked ~ span{
      background: var(--light-blue, #262478);
      border: 1px solid #262478;

      svg{
        opacity: 1;
      }
    }
  }
  
  fieldset{
    border: none;
    margin-top: 48px;

    &:first-child{
      margin-top: 0;
    }
  }

  .flex{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  legend{
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Cormorant Garamond;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 111.111%;
    letter-spacing: 1px;
  }

  input{
    border: 1px solid var(--grey, #E0E0E0);
    background: var(--white, #FEFEFE);
    padding: 16px 32px;
    width: 100%;
    margin-top: 24px;

    color: #000000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Lato;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 144.444%;
    letter-spacing: 1px;

    &::placeholder{
      color: var(--grey-1, #808080);
    }
  }
`