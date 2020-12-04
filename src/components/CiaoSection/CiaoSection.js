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
import { Link } from "gatsby"

const CiaoSection = () => {
  return (
    <Wrapper bg="light">
      <ContentWrapper>
        <CiaoWrapper>
          <p className="ciao">Ciao!</p>
        </CiaoWrapper>
        <TextWrapper>
          <CourseWrapper>
            <h2>Kurs włoskiego od zera</h2>
            <span className="line"></span>
            <p>
              Chcesz rozpocząć naukę
              <br /> języka włoskiego?
            </p>
          </CourseWrapper>
          <CtaWrapper>
            <p>Skorzystaj z naszego</p>
            <p className="corso">corso di italiano da zero</p>
            <p className="capital">Kursu włoskiego od zera</p>
            <p className="narrow">
              Dostępnego bezpłatnie w formie filmów na YouTube, e-booków do
              pobrania oraz ćwiczeń.
            </p>
            <Link to="/wloski-od-zera">
              <motion.button whileTap={{ scale: 0.9 }}>
                <span>Si</span>, chętnie
              </motion.button>
            </Link>
          </CtaWrapper>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default CiaoSection
