import React from "react"
import { Wrapper } from "../Wrapper/Wrapper"
import {
  CiaoWrapper,
  TextWrapper,
  ContentWrapper,
  CourseWrapper,
  CtaWrapper,
} from "../../assets/styles/HomeStyles"
import { motion } from "framer-motion"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"

const StyledWrapper = styled(Wrapper)`
  @media only screen and (max-width: 798px) {
    padding: 0;
  }
`

const query = graphql`
  {
    datoCmsHomePage {
      ciaoTitle
      courseName
      ciaoQuestion
      ciaoRowText1
      ciaoRowText2
      ciaoRowText3
      ciaoRowText4
      ciaoButtonTextDecorative
      ciaoButtonTextNormal
    }
  }
`

const CiaoSection = () => {
  const data = useStaticQuery(query)
  return (
    <StyledWrapper bg="light">
      <ContentWrapper className="ciao-wrapper">
        <CiaoWrapper>
          <p className="ciao">{data.datoCmsHomePage.ciaoTitle}</p>
        </CiaoWrapper>
        <TextWrapper>
          <CourseWrapper>
            <h2>{data.datoCmsHomePage.courseName}</h2>
            <span className="line"></span>
            <p className="question">{data.datoCmsHomePage.ciaoQuestion}</p>
          </CourseWrapper>
          <CtaWrapper>
            <p>{data.datoCmsHomePage.ciaoRowText1}</p>
            <p className="corso">{data.datoCmsHomePage.ciaoRowText2}</p>
            <p className="capital">{data.datoCmsHomePage.ciaoRowText3}</p>
            <p className="narrow">{data.datoCmsHomePage.ciaoRowText4}</p>
            <Link to="/wloski-od-zera">
              <motion.button whileTap={{ scale: 0.9 }}>
                <span>{data.datoCmsHomePage.ciaoButtonTextDecorative}</span>, {data.datoCmsHomePage.ciaoButtonTextNormal}
              </motion.button>
            </Link>
          </CtaWrapper>
        </TextWrapper>
      </ContentWrapper>
    </StyledWrapper>
  )
}

export default CiaoSection
