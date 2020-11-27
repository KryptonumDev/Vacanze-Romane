import React from "react"
import { Wrapper } from "../Wrapper/Wrapper"
import {
  CiaoWrapper,
  TextWrapper,
  ContentWrapper,
  CourseWrapper,
  CtaWrapper,
} from "../../assets/styles/HomeStyles"

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
            <button>
              <span>Si</span>, chętnie
            </button>
          </CtaWrapper>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default CiaoSection
