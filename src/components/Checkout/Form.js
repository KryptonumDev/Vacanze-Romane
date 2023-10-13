import React, { useEffect } from "react"
import { styled } from "styled-components"

export default function Form({ setOpenedParcelMachine, parcelMachine, paymentValue, paymentMethods, shipping, register, shippingValue, errors }) {

  return (
    <Wrapper>
      <fieldset>
        <legend>Dane Kontaktowe</legend>
        <div className="flex">
          <label>
            <input className={errors['name'] ? 'errored' : ''} {...register('name', { required: true, minLength: 3 })} placeholder="Imię" />
            {errors['name'] && <span className="error">To pole jest wymagane</span>}
          </label>
          <label>
            <input className={errors['surname'] ? 'errored' : ''} {...register('surname', { required: true, minLength: 3 })} placeholder="Nazwisko" />
            {errors['surname'] && <span className="error">To pole jest wymagane</span>}
          </label>
        </div>
        <label>
          <input className={errors['e-mail'] ? 'errored' : ''} {...register('e-mail', { required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} placeholder="Adres-email" />
          {errors['e-mail'] && <span className="error">To pole jest wymagane</span>}
        </label>
      </fieldset>
      <fieldset>
        <legend>Płatność</legend>
        {paymentMethods.map((el, index) => (
          <label className={`radio ${paymentValue == index ? 'active' : ''}`}>
            <input {...register('payment')} value={index} type="radio" />
            <span className="circle">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.3335 8.6665L6.00016 11.3332L12.6668 4.6665" stroke="#F1E2CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="description">
              <p className="title">{el.name}</p>
              <p className="text" dangerouslySetInnerHTML={{ __html: el.description }}></p>
            </div>
          </label>
        ))}
      </fieldset>
      <fieldset>
        <legend>Dane do faktury</legend>
        <label>
          <input className={errors['country'] ? 'errored' : ''} {...register('country', { required: true, minLength: 3 })} placeholder="Kraj" />
          {errors['country'] && <span className="error">To pole jest wymagane</span>}
        </label>
        <label>
          <input className={errors['address'] ? 'errored' : ''} {...register('address', { required: true, minLength: 3 })} placeholder="Ulica i numer" />
          {errors['address'] && <span className="error">To pole jest wymagane</span>}
        </label>
        <div className="flex">
          <label>
            <input className={errors['post-code'] ? 'errored' : ''} {...register('post-code', { required: true, minLength: 3, pattern: /^[0-9]{2}-[0-9]{3}$/i })} placeholder="Kod pocztowy" />
            {errors['post-code'] && <span className="error">To pole jest wymagane</span>}
          </label>
          <label>
            <input className={errors['city'] ? 'errored' : ''} {...register('city', { required: true, minLength: 3 })} placeholder="Miejscowość" />
            {errors['city'] && <span className="error">To pole jest wymagane</span>}
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Metody dostawy</legend>
        {shipping.map(el => (
          <label className={`radio ${shippingValue === `${el.methodId}:${el.instanceId}` ? 'active' : ''}  ${errors['shipping'] ? 'errored' : ''}`}>
            <input {...register('shipping', { required: true })} value={`${el.methodId}:${el.instanceId}`} type="radio" />
            <span className="circle">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.3335 8.6665L6.00016 11.3332L12.6668 4.6665" stroke="#F1E2CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="description">
              <p className="title">{el.label}</p>
              {el.label.includes('paczkomat') && (
                <>
                  <p className="text">Wybrany paczkomat : {parcelMachine ? `${parcelMachine.address.line1}, ${parcelMachine.address.line2}` : 'Najbliższy do adresu wskazanego w danych do faktury'}</p>
                  <button type="button" onClick={() => { setOpenedParcelMachine(true) }}>{parcelMachine ? 'Zmienić paczkomat' : 'Wybrać paczkomat'}</button>
                </>
              )}
            </div>
            <p className="price">{el.cost}&nbsp;zł</p>
          </label>
        ))}
        {errors['shipping'] && <span className="error">Proszę wybrać sposób dostawy</span>}
      </fieldset >
    </Wrapper >
  )
}

const Wrapper = styled.div`
  height: fit-content;

  fieldset{
    position: relative;
  }

  .error{
    position: absolute;
    left: 32px;
    bottom: -4px;
    transform: translateY(100%);

    color: #E20;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Lato;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  label{
    position: relative;
    display: block;

    input.errored{
      border: 1px solid #E20;
    }
  }

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
    cursor: pointer;

    &.errored{
      border: 1px solid #E20;
    }

    .description{
      p+p{
        margin-top: 8px;
      }

      button{
        margin-top: 8px;
        border: none;
        background-color: transparent;
        text-decoration: underline;
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
        word-break: break-word;
      }
    }

    &.active{
      border: 1px solid var(--light-blue, #262478);
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

  .flex{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 420px) {
      display: block;
    }
  }
`