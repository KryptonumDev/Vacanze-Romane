import React from "react"
import { styled } from "styled-components"

export default function Form() {
  return (
    <Wrapper>
      <fieldset>
        <legend>Dane Kontaktowe</legend>
        <div className="flex">
          <input placeholder="Imię"/>
          <input placeholder="Nazwisko"/>
        </div>
        <input placeholder="Adres-email"/>
      </fieldset>
      <fieldset>
        <legend>Płatność</legend>
      </fieldset>
      <fieldset>
        <legend>Wysyłka</legend>
        <input placeholder="Kraj" defaultValue='Polska'/>
        <input placeholder="Ulica i numer" />
        <div className="flex">
          <input placeholder="Kod pocztowy"/>
          <input placeholder="Miejscowość"/>
        </div>
      </fieldset>
      <fieldset>
        <legend>Metody dostawy</legend>
      </fieldset>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  height: fit-content;
  
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
    margin-bottom: 48px;
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