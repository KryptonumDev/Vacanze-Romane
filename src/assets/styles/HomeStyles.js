import styled from "styled-components"
import motion from "framer-motion"

export const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  z-index: 1;
  flex: ${({ flex }) => flex};
  padding: ${({ padding }) => (padding ? padding : "90px 190px 125px 80px")};
  @media only screen and (max-width: 1780px) {
    padding: ${({ padding1780 }) => padding1780};
  }
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  .texts {
    display: flex;
    flex-direction: column;
    flex: 3;
  }

  .image {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
  }
`

export const CiaoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  h2 {
    font-size: 14px;
    line-height: 1.04em;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: var(--brown);
    font-weight: 400;
    margin-left: 10px;
  }
`
export const TextWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
export const CourseWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 184px 0 60px;
  h2 {
    font-size: 14px;
    line-height: 1.04em;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: var(--brown);
    font-weight: 400;
    margin-left: 10px;
  }
  .line {
    height: 1px;
    background-color: var(--brown);
    width: 100%;
    margin: 25px 0 50px;
  }
  p {
    font-size: 36px;
    line-height: 1.11em;
    letter-spacing: 1px;
    font-weight: 400;
    font-family: "Cormorant Garamond";
  }
`
export const CtaWrapper = styled.div`
  margin: 50px 0 0 auto;
  p {
    font-size: 16px;
    font-style: normal;
    line-height: 1.88;
    letter-spacing: 1px;
    color: var(--brown);
  }
  .narrow {
    max-width: 330px;
  }
  .corso {
    margin: 31px 0 26px;
    font-family: "Homemade Apple";
    font-size: 24px;
    line-height: 0.6;
  }
  .capital {
    margin: 26px 0 10px;
    font-family: "Cormorant Garamond";
    font-size: 24px;
    line-height: 0.6;
    text-transform: uppercase;
  }

  button {
    font-size: 18px;
    line-height: 0.81em;
    letter-spacing: 1px;
    color: var(--black);
    font-weight: 400;
    margin-top: 30px;
    background-color: var(--beige-2);
    padding: 18px 46px 14px;
    border: none;

    span {
      font-size: 24px;
      font-family: "Homemade Apple";
    }
  }
`

export const Overlay = styled.div`
  position: absolute;
  right: ${({ right }) => right && "0"};
  left: ${({ right }) => !right && "0"};
  top: 0;
  height: 100%;
  width: 77%;
  z-index: 0;
  margin: ${({ margin }) => margin};
  background-color: ${({ bg }) => bg};
`

export const CapitalizeText = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "14px")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "1.04em")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "5px"};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  color: ${({ color }) => (color ? color : "var(--black)")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Lato")};
  text-transform: uppercase;
  margin: ${({ margin }) => (margin ? margin : "0")};
  max-width: ${({ maxWidth }) => maxWidth};
`
export const Paragraph = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "36px")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "1.11em")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  color: ${({ color }) => (color ? color : "var(--black)")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "1px"};
  font-family: ${({ fontFamily }) =>
    fontFamily ? fontFamily : "Cormorant Garamond"};
  margin: ${({ margin }) => (margin ? margin : "0")};
  max-width: ${({ maxWidth }) => maxWidth};
`
export const ColumnText = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "1.88em")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  color: ${({ color }) => (color ? color : "var(--black)")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "1px"};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Lato")};
  margin: ${({ margin }) => (margin ? margin : "0")};
  max-width: ${({ maxWidth }) => maxWidth};
  align-self: ${({ alignSelf }) => alignSelf};
`
export const TextEmphasized = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "36px")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "1.11em")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  color: ${({ color }) => (color ? color : "var(--black)")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "1px"};
  font-family: ${({ fontFamily }) =>
    fontFamily ? fontFamily : "Cormorant Garamond"};
  margin: ${({ margin }) => (margin ? margin : "0")};
  max-width: ${({ maxWidth }) => maxWidth};
  .word {
    font-family: "Homemade Apple";
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  width: 30%;
  max-width: 530px;
  .gatsby-image-wrapper {
    width: 100%;
  }
`

export const Flex = styled.div`
  display: flex;
  margin: ${({ margin }) => (margin ? margin : "0")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  flex: ${({ flex }) => flex};
`
