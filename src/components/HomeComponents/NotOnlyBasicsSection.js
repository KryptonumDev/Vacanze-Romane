import React from "react"
import Image from "gatsby-image"
import { Wrapper } from "../Wrapper/Wrapper"
import Line from "../Line/Line"
import Crossed from "../Crossed/Crossed"
import {
  ContentWrapper,
  CapitalizeText,
  Paragraph,
  ColumnText,
  TextEmphasized,
  Overlay,
  ImageWrapper,
  Flex,
} from "../../assets/styles/HomeStyles"

const NotOnlyBasicsSection = ({ imgFluid }) => {
  return (
    <Wrapper padding="0 0 103px" direction="row" gap="143px" bg="light">
      <Overlay right bg="var(--dead-green)" />
      <ContentWrapper
        flex="3"
        direction="row"
        padding="110px 90px 90px 100px"
        padding1780="110px 90px 90px 100px"
      >
        <Flex className="image" margin="40px 0 0">
          <Image fluid={imgFluid} />
        </Flex>
        <Flex className="texts" margin="0 0 0 76px">
          <CapitalizeText color="var(--beige-2)" margin="0 0 0 10px">
            nie tylko podstawy
          </CapitalizeText>
          <Line bg="var(--beige-2)" width="85%" />
          <Paragraph
            lineHeight="1.28em"
            color="var(--beige-2)"
            margin="40px 0 0"
            maxWidth="648px"
          >
            Na kanale Szkoła języka włoskiego VACANZE ROMANE na YouTube
            dostępnych jest wiele pomocnych filmowych lekcji nt. rozmaitych
            zagadnień gramatycznych i leksykalnych z zakresu{" "}
            <Crossed
              italianText="la lingua italiana"
              top="50%"
              textBottom="-66px"
              textLeft="90px"
              bg="var(--beige-2)"
            >
              języka włoskiego
            </Crossed>
          </Paragraph>
        </Flex>
      </ContentWrapper>
    </Wrapper>
  )
}

export default NotOnlyBasicsSection
