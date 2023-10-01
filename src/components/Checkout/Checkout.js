import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import Form from "./Form"
import Summary from "./Summary"
import { AppContext } from "../../context/app-context"
import { useForm } from "react-hook-form"
import Img from './../../assets/images/p24.png'
import { useMutation } from "../../hooks/useMutation"
import SET_SHIPPING_METHOD from "../../mutations/SET_SHIPPING_METHOD"
import CartItem from "../Cart/CartItem"
import UPDATE_CART from "../../mutations/UPDATE_CART"
import { getUpdatedItems } from "../../utils/getUpdatedItems"
import { v4 } from "uuid"
import GET_CART from "../../queries/GET_CART"
import CHECKOUT from '../../mutations/CHECKOUT'
import { useQuery } from "../../hooks/useQuery"
import { createCheckoutData, generateParams } from '../../utils/generateCheckoutData'
import axios from "axios"

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
  let [cart, setCart] = useContext(AppContext)

  const { } = useQuery(GET_CART, {
    onCompleted: ({ body, status }) => {
      localStorage.setItem('woo-next-cart', JSON.stringify(body.data.cart))
      setCart(body.data.cart)

      if (body.data.cart.contents?.nodes?.length === 0) {
        window.location.href = '/sklep'
      }
    },
    onError: (error) => {
      console.log(error.message)
    }
  })

  const { request: updateCart } = useMutation(UPDATE_CART, {
    onCompleted: ({ body }) => {
      // Update cart in the localStorage.
      localStorage.setItem('woo-next-cart', JSON.stringify(body.data.updateItemQuantities.cart));
      // Update cart data in React Context.

      setCart(body.data.updateItemQuantities.cart);

      if (body.data.updateItemQuantities.cart.contents?.nodes?.length === 0) {
        window.location.href = '/sklep'
      }
      // setInnerLoading(false)
    },
    onError: (error) => {
      // setInnerLoading(false)
      if (error) {
        console.log(error.message);
      }
    }
  });

  const handleRemoveProductClick = (event, key, products) => {
    event.stopPropagation();
    if (products.length) {

      // By passing the newQty to 0 in updateCart Mutation, it will remove the item.
      const newQty = 0;
      const updatedItems = getUpdatedItems(products, newQty, key);
      // setInnerLoading(true)
      updateCart({
        variables: {
          input: {
            clientMutationId: v4(),
            items: updatedItems
          }
        },
      });
    }
  };

  if (cart.contents.nodes.length === 0) return null

  return <ChildComponent remove={handleRemoveProductClick} cart={cart} setCart={setCart} />
}

const ChildComponent = ({ remove, cart, setCart }) => {
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
      'name': 'Bogdan',
      'surname': 'Kruzel',
      'e-mail': 'sheva@gmail.com',
      'country': 'Polska',
      'address': 'ul. Kraszewskiego 10/2',
      'post-code': '30-110',
      'city': 'Kraków'

    }
  })


  const { request: checkout } = useMutation(CHECKOUT, {
    onCompleted: ({ body: { data } }) => {
      debugger
      // if (data.checkout.order.total == 0) {
      //   window.location.href = `https://www.psychodietmed.pl/api/complete-free-order/?id=${data.checkout.order.orderNumber}`
      //   return;
      // }
      axios.post('/api/create-transaction', {
        "description": 'Zamówienie w sklepie Włoski od zera nr. ' + data.checkout.order.orderNumber,
        "id": data.checkout.order.orderNumber,
        "key": data.checkout.order.orderKey,
        "amount": data.checkout.order.total * 100,
        "sessionId": data.checkout.order.orderKey,
        "email": data.checkout.customer.email || data.checkout.order.billing.email || data.checkout.order.shipping.email,
        "urlReturn": `${window?.location?.origin}/api/verify-transaction?session=${data.checkout.order.orderKey}&id=${data.checkout.order.orderNumber}&origin=${window?.location?.origin}`,
        "urlStatus": `${window?.location?.origin}/api/complete-transaction?session=${data.checkout.order.orderKey}&id=${data.checkout.order.orderNumber}`,
      })
        .then(function (value) {
          if (value.data.link) {
            localStorage.setItem('woo-next-cart', null);
            localStorage.setItem('payLink', value.data.link)
            window.location.href = value.data.link
          }
          // setInnerLoading(false)
        })
        .catch(error => {
          debugger
          // setInnerLoading(false)
          alert(error)
        });
    },
    onError: (error) => {
      alert(error)
    }
  });

  const onSubmit = (data) => {
    // setLoading(true)
    const orderBody = createCheckoutData(data, paymentMethods)
    checkout({
      variables: {
        input: orderBody
      }
    })
  }

  const shippingValue = watch('shipping')
  const paymentValue = watch('payment')

  const { request, loading } = useMutation(SET_SHIPPING_METHOD, {
    variables: {
      input: {
        shippingMethods: shippingValue,
      },
    },
    onCompleted: ({ body }) => {
      localStorage.setItem('woo-next-cart', JSON.stringify(body?.data?.updateShippingMethod?.cart))
      setCart(body?.data?.updateShippingMethod?.cart)
    },
    onError: (error) => {
      console.log(error.message)
    }
  })

  useEffect(() => {
    if (shippingValue !== cart?.chosenShippingMethods?.[0])
      request()
  }, [shippingValue])

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <div className="summary-mobile">
          <h2>Podsumowanie</h2>
          <div>
            {cart.contents.nodes.map((item, index) => (
              <CartItem remove={remove} key={index} data={item} products={cart.contents.nodes} />
            ))}
          </div>
        </div>
        <Form paymentValue={paymentValue} errors={errors} paymentMethods={paymentMethods} register={register} shippingValue={shippingValue} shipping={cart.availableShippingMethods[0].rates} />
        <Summary register={register} remove={remove} cart={cart} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.form`
  background-color: #F8F5F1;

  h2{
    color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Cormorant Garamond';
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 111.111%;
    letter-spacing: 1px;
    margin-bottom: 48px;
  }

  .summary-mobile{
    display: none;
  }

  .container{
    display: grid;
    grid-template-columns: 564fr 458fr;
    gap: clamp(24px, calc(106vw/14.4), 106px);
    max-width: 1440px;
    padding: 72px 100px;
    margin: 0 auto;

    @media (max-width: 1051px) {
      padding: 54px 65px;
      gap: 24px;
    }

    @media (max-width: 876px) {
      grid-template-columns: 1fr;

      .summary-mobile{
        display: block;
      }
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
  
  fieldset{
    border: none;
    margin-top: 48px;

    &:first-child{
      margin-top: 0;
    }
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

  input, textarea{
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

    transition: all .2s cubic-bezier(0.785, 0.135, 0.15, 0.86);

    &::placeholder{
      color: var(--grey-1, #808080);
    }

    &:focus, &:focus-visible{
      outline: none;
      border: 1px solid var(--brown, #32251D) !important;
    }
  }
`