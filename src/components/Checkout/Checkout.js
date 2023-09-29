import React, { useContext } from "react"
import styled from "styled-components"
import Form from "./Form"
import Summary from "./Summary"
import { AppContext } from "../../context/app-context"
import { useForm } from "react-hook-form"
import Img from './../../assets/images/p24.png'

const paymentMethods = [
  {
    name: 'Proszę o płatność przelewem tradycyjnym i podanie w tytule numeru zamówienia. Dane do przelewu:',
    description: `
      13 1090 1346 0000 0001 0343 4077<br/>
      Santander Bank Polska<br/>
      Monika Kruzel
    `,
    methodId: 'bacs',
  },
  {
    name: 'Możesz zapłacić także zwykłym przekazem Pay Pal dla odbiorcy:',
    description: `
      jezyk.wloski.od.zera@gmail.com
    `,
    methodId: 'bacs',
  },
  {
    name: 'Płatności elektroniczna',
    description: `
      <img src='${Img}' alt='przelewy24'/>
    `,
    methodId: 'p24',
  }

]

export default function Checkout() {
  let [cart] = useContext(AppContext)

  if (cart.contents.nodes.length === 0) return null

  return <ChildComponent cart={cart} />
}

const ChildComponent = ({ cart }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'oBlur',
    defaultValues: {
      'shipping': cart?.chosenShippingMethods?.[0],
      'payment': '0',
    }
  })
  debugger
  const onSubmit = (data) => console.log(data)
  const shippingValue = watch('shipping')

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <Form paymentMethods={paymentMethods} register={register} shippingValue={shippingValue} shipping={cart.availableShippingMethods[0].rates} />
        <Summary />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  background-color: #F8F5F1;
  .container{
    display: grid;
    grid-template-columns: 564fr 458fr;
    gap: 106px;
    max-width: 1440px;
    padding: 72px 100px;
    margin: 0 auto;

    @media (max-width: 1051px) {
      padding: 54px 65px;
    }

    @media (max-width: 798px) {
      padding: 36px 30px;
    }

    @media (max-width: 480px) {
      padding: 24px 16px;
    }

    @media (max-width: 967px) {
      flex-direction: column;
    }
  }
`