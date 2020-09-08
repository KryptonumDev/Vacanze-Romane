import React from "react"
import Wrapper from "../components/Wrapper/Wrapper"
import PageHeader from "../components/PageHeader/PageHeader"
import Paragraph from "../components/Paragraph/Paragraph"
import Line from "../components/Line/line"
import Image from "gatsby-image"
import styled from "styled-components"
import { graphql } from "gatsby"

const ContactReasonsWrapper = styled.div`
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

const InputFieldsWrapper = styled.div`
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
const ButtonWrapper = styled.div`
  margin-top: 30px;
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

const ContactPage = ({ data }) => (
  <Wrapper margin="0 0 60px">
    {console.log(data)}
    <PageHeader>{data.datoCmsContactpage.title}</PageHeader>
    <Paragraph width="311px">
      {data.datoCmsContactpage.paragraphUnderTitle}
    </Paragraph>
    <Paragraph fontSize="13px" fontWeight="700">
      Contact reason
    </Paragraph>
    <form>
      <ContactReasonsWrapper>
        <input id="349" type="radio" name="question1" />
        <label htmlFor="349">Project</label>
        <input id="350" type="radio" name="question1" />
        <label htmlFor="350">Cooperation</label>
        <input id="351" type="radio" name="question1" />
        <label htmlFor="351">Other</label>
      </ContactReasonsWrapper>
      <InputFieldsWrapper>
        <label htmlFor="352">Name</label>
        <input id="352" type="text" name="name" />
        <label htmlFor="353">E-mail</label>
        <input id="353" type="email" name="email" />
        <label htmlFor="354">Message</label>
        <textarea id="354" rows="6" name="email" />
      </InputFieldsWrapper>
    </form>
    <ButtonWrapper>
      <StyledButton>{data.datoCmsContactpage.buttonText}</StyledButton>
    </ButtonWrapper>
  </Wrapper>
)

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
