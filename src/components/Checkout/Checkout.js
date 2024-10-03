import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import Form from "./Form"
import Summary from "./Summary"
import { AppContext } from "../../context/app-context"
import { useForm } from "react-hook-form"
import Img from "./../../assets/images/p24.png"
import { useMutation } from "../../hooks/useMutation"
import SET_SHIPPING_METHOD from "../../mutations/SET_SHIPPING_METHOD"
import CartItem from "../Cart/CartItem"
import UPDATE_CART from "../../mutations/UPDATE_CART"
import { getUpdatedItems } from "../../utils/getUpdatedItems"
import { v4 } from "uuid"
import GET_CART from "../../queries/GET_CART"
import CHECKOUT from "../../mutations/CHECKOUT"
import { useQuery } from "../../hooks/useQuery"
import { createCheckoutData } from "../../utils/generateCheckoutData"
import axios from "axios"
import Overlay from "../Overlay/Overlay"
import { InpostGeowidget } from "react-inpost-geowidget"
import { AnimatePresence, motion } from "framer-motion"

const paymentMethods = [
  {
    name: "Proszę o płatność przelewem tradycyjnym i podanie w tytule numeru zamówienia. Dane do przelewu:",
    description: `
      57 1140 2004 0000 3502 8521 3430<br/>
      mBank<br/>
      Monika Kruzel
    `,
    methodId: "bacs",
  },
  {
    name: "Płatności elektroniczne",
    description: `
      <img src='${Img}' alt='przelewy24'/>
    `,
    methodId: "przelewy24",
  },
]

export default function Checkout() {
  let [cart, setCart] = useContext(AppContext)
  const [loading, setLoading] = useState(false)

  const {} = useQuery(GET_CART, {
    onCompleted: ({ body }) => {
      localStorage.setItem("woo-next-cart", JSON.stringify(body.data.cart))
      setCart(body.data.cart)

      if (body.data.cart.contents?.nodes?.length === 0) {
        window.location.href = "/sklep"
      }
    },
    onError: error => {
      console.log(error.message)
    },
  })

  const { request: updateCart } = useMutation(UPDATE_CART, {
    onCompleted: ({ body }) => {
      // Update cart in the localStorage.
      localStorage.setItem(
        "woo-next-cart",
        JSON.stringify(body.data.updateItemQuantities.cart),
      )
      // Update cart data in React Context.

      setCart(body.data.updateItemQuantities.cart)

      if (body.data.updateItemQuantities.cart.contents?.nodes?.length === 0) {
        window.location.href = "/sklep"
      }
      setLoading(false)
    },
    onError: error => {
      setLoading(false)
      if (error) {
        console.log(error.message)
      }
    },
  })

  const handleRemoveProductClick = (event, key, products) => {
    event.stopPropagation()
    if (products.length) {
      // By passing the newQty to 0 in updateCart Mutation, it will remove the item.
      const newQty = 0
      const updatedItems = getUpdatedItems(products, newQty, key)
      setLoading(true)
      updateCart({
        variables: {
          input: {
            clientMutationId: v4(),
            items: updatedItems,
          },
        },
      })
    }
  }

  if (cart.contents.nodes.length === 0) return null

  return (
    <ChildComponent
      loading={loading}
      setLoading={setLoading}
      remove={handleRemoveProductClick}
      cart={cart}
      setCart={setCart}
    />
  )
}

const ChildComponent = ({ loading, setLoading, remove, cart, setCart }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "oBlur",
    defaultValues: {
      shipping: cart?.chosenShippingMethods?.[0],
      payment: "0",
    },
  })

  const [orderBody, setOrderBody] = useState(null)
  const [parcelMachine, setParcelMachine] = useState(null)
  const [openedParcelMachine, setOpenedParcelMachine] = useState(false)

  const { request: checkout } = useMutation(CHECKOUT, {
    onCompleted: ({ body: { data } }) => {
      if (data.checkout.order.paymentMethod !== "przelewy24") {
        localStorage.setItem(
          "woo-next-cart",
          JSON.stringify({ contents: { nodes: [] }, total: 0 }),
        )
        window.location.href = `${window?.location?.origin}/platnosc-przelewem?id=${data.checkout.order.orderNumber}&amount=${data.checkout.order.total}`
        return
      }

      console.log(data)

      axios
        .post("/api/create-transaction", {
          description:
            "Zamówienie w sklepie Włoski od zera nr. " +
            data.checkout.order.orderNumber,
          id: data.checkout.order.orderNumber,
          key: data.checkout.order.orderKey,
          amount: data.checkout.order.total * 100,
          sessionId: data.checkout.order.orderKey,
          email:
            data.checkout.customer.email ||
            data.checkout.order.billing.email ||
            data.checkout.order.shipping.email,
          urlReturn: `${window?.location?.origin}/api/verify-transaction?session=${data.checkout.order.orderKey}&id=${data.checkout.order.orderNumber}&origin=${window?.location?.origin}`,
          urlStatus: `${window?.location?.origin}/api/complete-transaction?session=${data.checkout.order.orderKey}&id=${data.checkout.order.orderNumber}`,
          logsData: data,
        })
        .then(function (value) {
          localStorage.setItem("woo-next-cart", null)
          localStorage.setItem("payLink", value.data.link)
          window.location.href = value.data.link
          setLoading(false)
        })
        .catch(error => {
          setLoading(false)
          alert(error.message)
        })
    },
    onError: error => {
      if (error.message === "Proszę wybrać paczkomat") {
        checkout({
          variables: {
            input: orderBody,
          },
        })
        return
      }

      setLoading(false)
      alert(error.message)
    },
  })

  const onSubmit = data => {
    setLoading(true)
    const needInpost = cart.needsShippingAddress
      ? !!cart.availableShippingMethods[0].rates.find(el =>
          el.label.includes("paczkomat"),
        )
      : false
    const order = createCheckoutData(
      data,
      paymentMethods,
      needInpost,
      parcelMachine,
    )
    setOrderBody(order)
  }

  useEffect(() => {
    if (orderBody) {
      checkout({
        variables: {
          input: orderBody,
        },
      })
    }
  }, [orderBody])

  const shippingValue = watch("shipping")
  const paymentValue = watch("payment")

  const { request } = useMutation(SET_SHIPPING_METHOD, {
    variables: {
      input: {
        shippingMethods: shippingValue,
      },
    },
    onCompleted: ({ body }) => {
      localStorage.setItem(
        "woo-next-cart",
        JSON.stringify(body?.data?.updateShippingMethod?.cart),
      )
      setCart(body?.data?.updateShippingMethod?.cart)
      setLoading(false)
    },
    onError: error => {
      setLoading(false)
      console.log(error.message)
    },
  })

  useEffect(() => {
    if (shippingValue !== cart?.chosenShippingMethods?.[0]) {
      setLoading(true)
      request()
    }
  }, [shippingValue])

  const onPointCallback = e => {
    setParcelMachine(e)
    setOpenedParcelMachine(false)
  }

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Overlay state={loading} />
      <div className="container">
        <div className="summary-mobile">
          <h2>Podsumowanie</h2>
          <div>
            {cart.contents.nodes.map((item, index) => (
              <CartItem
                remove={remove}
                key={index}
                data={item}
                products={cart.contents.nodes}
              />
            ))}
          </div>
        </div>
        <Form
          setOpenedParcelMachine={setOpenedParcelMachine}
          parcelMachine={parcelMachine}
          paymentValue={paymentValue}
          errors={errors}
          paymentMethods={paymentMethods}
          register={register}
          shippingValue={shippingValue}
          shipping={cart.needsShippingAddress ? cart.availableShippingMethods[0].rates : false}
        />
        <Summary register={register} remove={remove} cart={cart} />
        <Button>Złóż zamówienie</Button>
      </div>
      <AnimatePresence>
        {openedParcelMachine && (
          <Map
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="content">
              <div className="flex">
                <h2>Punkty odbioru (płatne z góry)</h2>
                <button type="button">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 26L26 14M14 14L26 26"
                      stroke="#32251D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <InpostGeowidget
                token={`eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzQlpXVzFNZzVlQnpDYU1XU3JvTlBjRWFveFpXcW9Ua2FuZVB3X291LWxvIn0.eyJleHAiOjIwMTE2OTY5ODAsImlhdCI6MTY5NjMzNjk4MCwianRpIjoiYWM1NTM3NmMtNDkxYi00YjYxLTk0MzMtOTYyNDEzZmU0ODJmIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5pbnBvc3QucGwvYXV0aC9yZWFsbXMvZXh0ZXJuYWwiLCJzdWIiOiJmOjEyNDc1MDUxLTFjMDMtNGU1OS1iYTBjLTJiNDU2OTVlZjUzNTotZnNGcklJckhpWHFTWUJkRVp5YXpMejlvSWdmSk9tOE9VYS1RRXVWYl9BIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoic2hpcHgiLCJzZXNzaW9uX3N0YXRlIjoiMTYyZjg3YmMtYWRhNi00ODk3LTkwMzktMTYwMDM2NjE1YTAzIiwic2NvcGUiOiJvcGVuaWQgYXBpOmFwaXBvaW50cyIsInNpZCI6IjE2MmY4N2JjLWFkYTYtNDg5Ny05MDM5LTE2MDAzNjYxNWEwMyIsImFsbG93ZWRfcmVmZXJyZXJzIjoiIiwidXVpZCI6IjBkNzk0YzIwLTNmMjAtNGJhOS04MGY4LWIyMDdiMTA2MGE4OCJ9.TBgQGHZim2OIRaH7Ajt5PIJEsylQsKDPVgfIAs64ymsEVRBKJBIIbwkaXCc7lmvloVGcjkfBiiduursWoNupm8CeSjjhgODjw5pIyFzYu9g3FpeCHpbbekO8BYe3cmfrJJwm1r-4QjR3pK3RhFxciSjHV1IbXc0uBLsD4U-gk4eLB8ZSR4WHIr491vuvVhDggRVkM7A8o0Yn2dREGU0W7jSlV2f8Q3kh9tO-lL7C8YheGNFzRoxi1dmteLoe9ytXFceUMgOTkLN65J_AHoWO38ZiD0ZezyZnRpaH1SxuyPWpUzZmZ7c7mRzlqZEKLm0mYTDw36Gx0r9E7ujSgR_kiw`}
                onPoint={onPointCallback}
              />
            </div>
          </Map>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

const Map = styled(motion.div)`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 40;

  .content {
    max-width: 800px;
    max-height: 600px;
    width: 100%;
    height: 100%;
    border: 1px solid var(--grey, #e0e0e0);
    background: var(--white, #fefefe);
    padding: 24px;
    display: grid;
    grid-template-rows: auto 1fr;

    .flex {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;

      h2 {
        font-size: 24px;
        margin-bottom: 0;
      }

      button {
        height: fit-content;
        border: none;
        background-color: transparent;
      }
    }
  }
`

const Wrapper = styled.form`
  background-color: #f8f5f1;

  h2 {
    color: #000;
    font-feature-settings:
      "clig" off,
      "liga" off;
    font-family: "Cormorant Garamond";
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 111.111%;
    letter-spacing: 1px;
    margin-bottom: 48px;
  }

  .summary-mobile {
    display: none;
  }

  .container {
    display: grid;
    grid-template-columns: 564fr 458fr;
    gap: 0 clamp(24px, calc(106vw / 14.4), 106px);
    max-width: 1440px;
    padding: 72px 100px;
    margin: 0 auto;

    @media (max-width: 1051px) {
      padding: 54px 30px;
      gap: 24px;
    }

    @media (max-width: 876px) {
      grid-template-columns: 1fr;

      .summary-mobile {
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

  fieldset {
    border: none;
    margin-top: clamp(24px, calc(48vw / 14.4), 48px);

    &:first-child {
      margin-top: 0;
    }
  }

  legend {
    color: #000;
    font-feature-settings:
      "clig" off,
      "liga" off;
    font-family: Cormorant Garamond;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: 111.111%;
    letter-spacing: 1px;
  }

  input,
  textarea {
    border: 1px solid var(--grey, #e0e0e0);
    background: var(--white, #fefefe);
    padding: 16px 32px;
    width: 100%;
    margin-top: 24px;

    color: #000000;
    font-feature-settings:
      "clig" off,
      "liga" off;
    font-family: Lato;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 144.444%;
    letter-spacing: 1px;

    transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86);

    &::placeholder {
      color: var(--grey-1, #808080);
    }

    &:focus,
    &:focus-visible {
      outline: none;
      border: 1px solid var(--brown, #32251d) !important;
    }
  }
`

const Button = styled.button`
  display: block;
  background: var(--brown);
  padding: 16px 32px;
  color: var(--beige-2);
  font-size: 18px;
  font-weight: 400;
  line-height: 144.444%;
  letter-spacing: 1px;
  text-decoration: unset;
  text-align: center;
  border: none;
  margin: 32px auto 0 auto;

  transition:
    background-color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1),
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
