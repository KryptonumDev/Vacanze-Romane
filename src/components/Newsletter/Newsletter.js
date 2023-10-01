import { AnimatePresence, motion } from "framer-motion";
import { Link } from "gatsby";
import React from "react"
import { useForm } from "react-hook-form";
import { styled } from "styled-components"

export const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const Newsletter = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  
  return (
    <Wrapper>
      <div className='container'>
        <div className="left">
          <h2>Powiadom mnie o nowościach!</h2>
          <p>Zapisz się na nasz newsletter, aby na bieżąco otrzymywać informacje o aktualizacjach, promocjach i ekskluzywnych ofertach!</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="input">
            <input className={errors.email ? 'errored' : ''} placeholder="Adres-email" {...register("email", { required: true, pattern: emailPattern })} />
            <AnimatePresence mode="wait">
              {errors.email && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="error">To pole jest wymagane</motion.span>}
            </AnimatePresence>
          </label>
          <Button>Zapisuję się!</Button>
          <label className='checkbox'>
            <input type="checkbox" {...register("privacy", { required: true })} />
            <span className="checkbox" />
            <p className="text">Zgadzam się z <Link to='/polityka-prywatnosci/'>polityką prywatności</Link></p>
            <AnimatePresence mode="wait">
              {errors.privacy && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="error">Ta zgoda jest wymagana</motion.span>}
            </AnimatePresence>
          </label>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #F1E2CC;
  padding: clamp(48px, calc(64vw/7.68), 72px) 0;

  .left{
    h2{
      color: var(--brown, #32251D);
      font-family: Cormorant Garamond;
      font-size: clamp(18px, calc(36vw/7.68), 36px);
      font-weight: 300;
      line-height: 111.111%;
      letter-spacing: 1px;
      margin-bottom: 24px;
    } 

    p{
      color: var(--brown, #32251D);
      font-size: clamp(15px, calc(18vw/7.68), 18px);
      font-weight: 400;
      line-height: 144.444%;
      letter-spacing: 1px;
    }
  }

  .container{
    max-width: 1440px;
    padding: 0 100px;
    margin: 0 auto;
    display: flex;
    gap: 32px;
    justify-content: space-between;

    @media (max-width: 1051px) {
      padding: 0 65px;
    }

    @media (max-width: 798px) {
      padding: 0 30px;
    }

    @media (max-width: 480px) {
      padding: 0 16px;
    }

    @media (max-width: 967px) {
      flex-direction: column;
    }
    >div{
      max-width: 506px;
    }
  }

  form{
    width: 100%;
    max-width: 558px;
    display: grid;
    gap: 24px;

    .input{
      position: relative;

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

        transition: all .2s cubic-bezier(0.785, 0.135, 0.15, 0.86);

        &::placeholder{
          color: var(--grey-1, #808080);
        }

        &.errored{
          border: 1px solid #E20;
        }

        &:focus, &:focus-visible{
          outline: none;
          border: 1px solid var(--brown, #32251D) !important;
        }
      }

      .error {
        position: absolute;
        left: 32px;
        bottom: -2px;
        transform: translateY(100%);
        color: #E20;
        font-size: 10px;
      }
    }

    label.checkbox{
      position: relative;
      display: flex;
      gap: 12px;
      cursor: pointer;

      &.errored {
        border-color: #EE6470;
      }

      .error {
        position: absolute;
        left: 0;
        bottom: -2px;
        transform: translateY(100%);
        color: #E20;
        font-size: 10px;
      }

      input {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
      }

      input:focus-visible~.checkbox {
        outline: 2px solid var(--secondary-500);
        outline-offset: 5px;
      }

      input:checked~.checkbox {
        &::after {
          opacity: 1;
        }
      }

      .text {
        font-size: 15px;
        color: var(--brown, #32251D);
        line-height: 24px;
        letter-spacing: 1px;

        @media (max-width: 370px) {
          font-size: clamp(0rem, calc(16vw/3.7), 16rem);
        }

        a {
          text-decoration: underline;
          font-weight: 700;
          color: var(--brown, #32251D);
        }
      }

      .checkbox {
        border: 2px solid #32251D;
        width: 24px;
        height: 24px;
        border-radius: 2px;
        position: relative;
        display: block !important;

        &::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 16px;
          height: 16px;
          background-color: #32251D;
          border-radius: 2px;
          opacity: 0;
          transition: opacity 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        }
      }
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
  width: 100%;

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