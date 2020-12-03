import React, { useState } from "react"
import PageHeader from "../components/PageHeader/PageHeader"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Formik } from "formik"
import axios from "axios"
import { AnimatePresence, motion } from "framer-motion"

const ContactReasonsWrapper = styled(motion.div)`
  display: flex;

  > input {
    visibility: hidden;
    width: 0;
    height: 0;
    position: absolute;
    left: -9999px;
    :checked + label {
      color: #000;
      font-weight: bold;
    }
  }

  > label {
    font-size: 15px;
    text-transform: lowercase;
    position: relative;
    color: #444;

    :hover {
      cursor: pointer;
      color: #000;
    }

    &:not(:last-child) {
      margin-right: 17px;
      :after {
        content: "";
        position: absolute;
        right: -10px;
        top: 10%;
        height: 80%;
        width: 3px;
        background-color: #000;
      }
    }
  }
`

const InputFieldsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 12px;

  label {
    font-size: 13px;
    font-weight: bold;
    letter-spacing: -0.03em;
    margin: 12px 0 10px 0;
    line-height: 1.6em;
  }

  input,
  textarea {
    font-size: 13px;
    line-height: 1.6em;
    padding: 4px 8px;
    border: 1px solid #666;
    outline: none;
    transition: border 0.2s cubic-bezier(0.77, 0, 0.175, 1);
    :active,
    :focus,
    :hover {
      outline: none;
      border: 1px solid #000;
    }
  }
`
const ButtonWrapper = styled(motion.div)`
  margin-top: 30px;
  display: flex;
  align-items: center;
`

const StyledButton = styled.button`
  font-size: 13px;
  line-height: 1em;
  font-weight: bold;
  padding: 11px;
  width: 144px;
  color: #fff;
  background-color: #000;
  border: 1px solid #000;
  transition: background-color 0.2s cubic-bezier(0.77, 0, 0.175, 1),
    color 0.2s cubic-bezier(0.77, 0, 0.175, 1);
  :hover {
    background-color: #fff;
    color: #000;
  }
`

const StyledErrorMessage = styled(motion.p)`
  font-size: 12px;
  line-height: 12px;
  margin: 6px 0 0;
  padding: 0;
  letter-spacing: -0.03em;
  color: #ef6565;
`

const SuccessMessage = styled(StyledErrorMessage)`
  color: #000;
`

const Loader = styled(motion.span)`
  width: 24px;
  height: 24px;
  border-top: 2px solid #000;
  border-radius: 24px;
  margin-left: 24px;
`

const ContactPage = ({ data }) => {
  const [successMessage, setSuccessMessage] = useState(false)

  return (
    <React.Fragment margin="0 0 60px">
      <PageHeader>{data.datoCmsContactpage.title}</PageHeader>

      {data.datoCmsContactpage.paragraphUnderTitle}

      <Formik
        initialValues={{
          reason: "project",
          name: "",
          email: "",
          message: "",
        }}
        validate={values => {
          const errors = {}
          if (!values.reason) {
            errors.reason = "What can we do together?"
          }
          if (!values.name) {
            errors.name = "What's your name?"
          }
          if (!values.message) {
            errors.message = "Say something to me."
          }
          if (!values.email) {
            errors.email = "What's your email?"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address"
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          setTimeout(() => {
            setSuccessMessage(true)
            setSubmitting(false)
          }, 2000)
          // axios
          //   .post(
          //     "http://localhost:5001/jamstacktests/us-central1/sendEmail",
          //     values
          //   )
          //   .then(res => {
          //     setSubmitting(false)
          //   })
          //   .catch(err => {
          //     setSubmitting(false)
          //   })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form method="post" onSubmit={handleSubmit}>
            <ContactReasonsWrapper>
              <input
                id="project"
                type="radio"
                value="project"
                name="reason"
                onChange={handleChange}
                defaultChecked={values.reason === "project"}
              />
              <motion.label whileTap={{ scale: 1.05 }} htmlFor="project">
                Project
              </motion.label>
              <input
                id="cooperation"
                type="radio"
                value="cooperation"
                name="reason"
                onChange={handleChange}
                defaultChecked={values.reason === "cooperation"}
              />
              <motion.label whileTap={{ scale: 1.05 }} htmlFor="cooperation">
                Cooperation
              </motion.label>
              <input
                id="other"
                type="radio"
                value="other"
                name="reason"
                onChange={handleChange}
                defaultChecked={values.reason === "other"}
              />
              <motion.label whileTap={{ scale: 1.05 }} htmlFor="other">
                Other
              </motion.label>
            </ContactReasonsWrapper>
            <AnimatePresence>
              {errors.reason && touched.reason && (
                <StyledErrorMessage
                  key={errors.reason}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {errors.reason}
                </StyledErrorMessage>
              )}

              <InputFieldsWrapper>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && (
                  <StyledErrorMessage
                    key={errors.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    {errors.name}
                  </StyledErrorMessage>
                )}

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <StyledErrorMessage
                    key={errors.email}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    {errors.email}
                  </StyledErrorMessage>
                )}

                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  rows="6"
                />
                {errors.message && touched.message && (
                  <StyledErrorMessage
                    key={errors.message}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    {errors.message}
                  </StyledErrorMessage>
                )}
              </InputFieldsWrapper>
            </AnimatePresence>
            <ButtonWrapper>
              <StyledButton type="submit" disabled={isSubmitting}>
                {data.datoCmsContactpage.buttonText}
              </StyledButton>
              {isSubmitting && (
                <Loader
                  initial="start"
                  animate="end"
                  variants={{
                    start: {
                      rotate: 0,
                    },
                    end: {
                      rotate: 360,
                    },
                  }}
                  transition={{
                    duration: 1,
                    yoyo: Infinity,
                  }}
                />
              )}
            </ButtonWrapper>
          </form>
        )}
      </Formik>
      <AnimatePresence>
        {successMessage && (
          <SuccessMessage
            key={"success-message"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            Thank you for contacting us. We'll answer soon.
          </SuccessMessage>
        )}
      </AnimatePresence>
    </React.Fragment>
  )
}

export const query = graphql`
  {
    datoCmsContactpage {
      title
      paragraphUnderTitle
      buttonText
      contactReasons {
        ... on DatoCmsOption {
          option
        }
      }
      contactFormFields {
        ... on DatoCmsLabel {
          singleLineField
        }
        ... on DatoCmsTextarea {
          textarea
        }
      }
    }
  }
`

export default ContactPage
