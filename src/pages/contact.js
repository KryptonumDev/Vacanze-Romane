import React from "react"
import Wrapper from "../components/Wrapper/Wrapper"
import PageHeader from "../components/PageHeader/PageHeader"
import Paragraph from "../components/Paragraph/Paragraph"
import Line from "../components/Line/line"
import Image from "gatsby-image"
import styled from "styled-components"
import { graphql } from "gatsby"

const ContactPage = ({ data }) => (
  <Wrapper margin="0 0 60px">
    {console.log(data)}
    <PageHeader>{data.datoCmsContactpage.title}</PageHeader>
    <Paragraph width="311px">
      {data.datoCmsContactpage.paragraphUnderTitle}
    </Paragraph>
    <form>
      <input id="349" type="radio" value="1" name="question1" />
      <label htmlFor="349">Abe</label>
      <input id="350" type="radio" value="2" name="question1" />
      <label htmlFor="350">Andrew</label>
      <input id="350" type="radio" value="2" name="question1" />
      <label htmlFor="350">Andrew</label>
    </form>
    <button>{data.datoCmsContactpage.buttonText}</button>
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
