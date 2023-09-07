import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"
import { StructuredText } from "react-datocms"
import { CapitalizeText, Paragraph } from "../../assets/styles/HomeStyles"
import Line from "../Line/Line"

const Section = styled.section`
  background-color: var(--brown);
  color: var(--beige-2);
`

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: clamp(80px, 7.27vw, 103px) auto clamp(300px, 23.88vw, 344px) auto;
  padding: clamp(90px, 8.47vw, 122px) 82px clamp(272px, 20.69vw, 298px)
    clamp(82px, 7.29vw, 105px);
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 798px) {
    margin-top: 0;
    margin-bottom: 0;
    padding: 72px 30px;
  }
`

const SectionTitle = styled(CapitalizeText)`
  color: var(--beige-2);
  @media only screen and (max-width: 798px) {
    font-size: 10px;
    margin-left: 10px;
    letter-spacing: 4px;
    line-height: 1.5;
  }
`

const SectionQuestion = styled(Paragraph)`
  color: var(--beige-2);
  @media (max-width: 1181px) {
    font-size: 28px;
  }
  @media (max-width: 798px) {
    font-size: 18px;
  }
`

const SectionQuestionItalian = styled.p`
  font-family: "Homemade Apple";
  font-size: 36px;
  color: var(--beige-2);
  margin-top: 32px;
  @media only screen and (max-width: 1181px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 798px) {
    font-size: 18px;
    margin-top: 24px;
  }
  line-height: 1.11;
  letter-spacing: 1px;
`

const SectionParagraph = styled.p`
  > p {
    font-size: 36px;
    line-height: 1.4em;
    font-weight: 400;
    color: var(--beige-2);
    letter-spacing: 1px;
    font-family: "Cormorant Garamond";
    margin-top: 24px;
    max-width: 928px;
    @media (max-width: 1181px) {
      font-size: 28px;
      max-width: 820px;
    }
    @media only screen and (max-width: 798px) {
      font-size: 18px;
    }
  }
`

const LinkToArticle = styled(Link)`
  font-size: 24px;
  line-height: 1.175;
  letter-spacing: 1px;
  text-decoration: none;
  color: var(--black);
  font-weight: 400;
  margin-top: 52px;
  background-color: var(--beige-2);
  padding: 19px 58px;
  border: none;
  width: fit-content;
  cursor: pointer;

  @media (max-width: 798px) {
    font-size: 18px;
    padding: 16px 23px;
    margin-top: 44px;
  }

  transition: background-color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1),
    color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover,
  &:focus,
  &:active {
    outline: none;
    color: var(--beige-2);
    background-color: var(--dead-green);
  }
`

const ImagesWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: -205px;
  display: flex;
  justify-content: flex-end;

  picture,
  img {
    display: block;
    aspect-ratio: 390/457;
  }

  .gatsby-image-wrapper {
    width: 27vw;
    max-width: 390px;
    @media (max-width: 1181px) {
      max-width: 340px;
      width: 33vw;
    }
    @media (max-width: 960px) {
      width: calc(50% - 12px);
    }
    &:nth-of-type(2) {
      margin-left: clamp(52px, 5vw, 71px);

      @media (max-width: 960px) {
        margin-left: 24px;
      }
    }
  }
  @media (max-width: 798px) {
    position: relative;
    right: unset;
    bottom: unset;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 50px;

    .gatsby-image-wrapper {
      width: 100%;
      max-width: 100%;
      margin: 0;

    &:nth-of-type(2) {
      margin: 27px 0 0 0;
    }

    picture,
  img {
    aspect-ratio: 321/375;
  }
  }
}
`

const GrammarProblemsSection = ({
  sectionTitle,
  sectionQuestionTitle,
  sectionQuestionTitleItalian,
  buttonText,
  paragraphText,
  fluidImg1,
  fluidImg2,
}) => {
  return (
    <Section>
      <ContentWrapper>
        <SectionTitle>{sectionTitle}</SectionTitle>
        <Line bg="var(--beige-2)" width="calc(100% - 22px)" />
        <SectionQuestion>{sectionQuestionTitle}</SectionQuestion>
        <SectionQuestionItalian>
          {sectionQuestionTitleItalian}
        </SectionQuestionItalian>
        <SectionParagraph>
          <StructuredText data={paragraphText.value} />
        </SectionParagraph>
        <LinkToArticle to="/in-italiano/gramatyka-wloska">
          {buttonText}
        </LinkToArticle>
        <ImagesWrapper>
          <GatsbyImage image={fluidImg1} />
          <GatsbyImage image={fluidImg2} />
        </ImagesWrapper>
      </ContentWrapper>
    </Section>
  )
}

export default GrammarProblemsSection
