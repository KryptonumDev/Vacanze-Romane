import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 50px 0 0;
  background-color: ${({ bg }) => (bg === "light" ? "var(--bg-home)" : "")};
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  padding: 90px 190px 125px 80px;
  display: flex;

  .ciao {
    font-size: 96px;
    letter-spacing: 1px;
    line-height: 0.73em;
    color: var(--dark-red);
    font-family: "Homemade Apple";
    margin-top: 16px;
  }
`

const CiaoWrapper = styled.div`
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
const TextWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`
const CourseWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 60px;
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
const CtaWrapper = styled.div`
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
