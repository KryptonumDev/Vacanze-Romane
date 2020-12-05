import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import PageHeader from "../components/PageHeader/PageHeader"
import {
  CapitalizeText,
  ContentWrapper,
  Paragraph,
} from "../assets/styles/HomeStyles"
import { Wrapper } from "../components/Wrapper/Wrapper"
import styled from "styled-components"
import Line from "../components/Line/Line"
import slugify from "slugify"
import { useLocation } from "@reach/router"

const PostStyles = styled.article`
  div {
    padding: 0 125px;
  }
  .gatsby-image-wrapper {
    margin: 64px 0 80px;
  }
`

const PostParagraph = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "18px")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "1.44em")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  color: ${({ color }) => (color ? color : "var(--black)")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "1px"};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Lato")};
  margin: ${({ margin }) => (margin ? margin : "0 0 24px")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "normal"};

  ul {
    padding: 0;
    margin: 8px 0;
    list-style-position: inside;

    li {
      padding: 0;
      margin: 0;
      font-size: 18px;
      font-family: "Lato";
    }
  }

  p,
  li {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "18px")};
    line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "1.44em")};
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
    color: ${({ color }) => (color ? color : "var(--black)")};
    letter-spacing: ${({ letterSpacing }) =>
      letterSpacing ? letterSpacing : "1px"};
    font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Lato")};
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "")};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
    text-transform: ${({ textTransform }) =>
      textTransform ? textTransform : "normal"};
  }
`

const PostHeading = styled.h2`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "36px")};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "1.11em")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  color: ${({ color }) => (color ? color : "var(--black)")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "1px"};
  font-family: ${({ fontFamily }) =>
    fontFamily ? fontFamily : "Cormorant Garamond"};
  margin: ${({ margin }) => (margin ? margin : "40px 0 24px")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "normal"};
`

const ArticlesGrid = styled.div`
  display: grid;
  margin-top: 43px;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 41px;

  .gatsby-image-wrapper {
    overflow: hidden !important;
    height: 218px;
    img,
    picture {
      object-fit: cover !important;
      transition: transform 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) !important;
    }
  }
  a {
    text-decoration: none;
    color: var(--black);
  }

  article:hover {
    img,
    picture {
      transform: scale(1.05);
    }
  }
`

const PostLayout = ({ data }) => {
  const pathname = useLocation().pathname
  const {
    datoCmsArticle: {
      category,
      title,
      featuredimage,
      id,
      slug,
      creationDate,
      articleContent,
    },
    similarArticles,
    newArticles,
  } = data

  const getMonth = function (idx) {
    const monthMap = {
      styczeń: "stycznia",
      luty: "lutego",
      marzec: "marca",
      kwiecień: "kwietnia",
      maj: "maja",
      czerwiec: "czerwca",
      lipiec: "lipca",
      sierpień: "sierpnia",
      wrzesień: "września",
      październik: "października",
      listopad: "listopada",
      grudzień: "grudnia",
    }
    var objDate = new Date()
    objDate.setDate(1)
    objDate.setMonth(idx - 1)

    var locale = "pl-PL",
      month = objDate.toLocaleString(locale, { month: "long" })

    return monthMap[month]
  }

  const fromYYYYMMDDToFriendlyDate = date => {
    const d = new Date(date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
    const day = d.getDate()
    const month = getMonth(d.getMonth() + 1)
    const year = d.getUTCFullYear()
    return `${day} ${month} ${year}`
  }

  const baseURLFromCategory = category => {
    console.log(category)
    const lowerCategory = category.toLowerCase()
    return lowerCategory === "kultura" ||
      lowerCategory === "sztuka" ||
      lowerCategory === "podróże" ||
      lowerCategory === "kuchnia"
      ? "blog"
      : lowerCategory === "kultura" ||
        lowerCategory === "sztuka" ||
        lowerCategory === "podróże" ||
        lowerCategory === "kuchnia"
      ? "in-italiano"
      : ""
  }

  return (
    <>
      <PageHeader
        subheader={title}
        withNav
        bg={
          category === "Kultura" ||
          category === "Sztuka" ||
          category === "Podróże" ||
          category === "Kuchnia"
            ? "red"
            : category === "Grammatica" ||
              category === "Vocabolario" ||
              category === "Frasi e citazioni"
            ? "blue"
            : "green"
        }
      />
      <Wrapper padding="0" bg="white">
        <ContentWrapper direction="column" padding="100px 223px">
          <Image fluid={featuredimage.fluid} />
          <PostStyles>
            <Paragraph
              fontFamily="Cormorant Garamond"
              fontSize="18px"
              fontWeight="normal"
              lineHeight="1em"
              letterSpacing="1px"
              textTransform="uppercase"
              margin="22px 0"
            >
              {category}
            </Paragraph>
            <Paragraph
              fontFamily="Lato"
              fontSize="14px"
              fontWeight="normal"
              lineHeight="1.04em"
              letterSpacing="5px"
              textTransform="uppercase"
              margin="0 0 50px"
            >
              {fromYYYYMMDDToFriendlyDate(creationDate)}
            </Paragraph>
            <div>
              {articleContent.map(block => (
                <>
                  {block.model.apiKey === "heading_content" && (
                    <PostHeading>{block.headingContent}</PostHeading>
                  )}
                  {block.model.apiKey === "article_image" && (
                    <Image fluid={block.image.fluid} />
                  )}
                  {block.model.apiKey === "paragraph" && (
                    <PostParagraph
                      dangerouslySetInnerHTML={{
                        __html: block.paragraphContent,
                      }}
                    ></PostParagraph>
                  )}
                </>
              ))}
            </div>
          </PostStyles>
        </ContentWrapper>
        <ContentWrapper direction="column" padding="70px 102px 100px">
          <Paragraph
            fontFamily="Lato"
            fontSize="14px"
            fontWeight="normal"
            lineHeight="1.04em"
            letterSpacing="5px"
            textTransform="uppercase"
            margin="0 0 25px 10px"
            color="var(--brown)"
          >
            Podobne artykuły
          </Paragraph>
          <Line width="50%" margin="0" bg="var(--brown)" />
          <ArticlesGrid>
            {similarArticles.nodes.length > 0
              ? similarArticles.nodes.map(article => (
                  <article key={article.id}>
                    <Link
                      to={`/${baseURLFromCategory(article.category)}/${slugify(
                        article.slug
                      )}`}
                    >
                      <Image fluid={article.featuredimage.fluid} />
                      <Paragraph
                        fontFamily="Cormorant Garamond"
                        fontSize="18px"
                        fontWeight="normal"
                        lineHeight="1em"
                        letterSpacing="1px"
                        textTransform="uppercase"
                        margin="31px 0"
                      >
                        {article.category}
                      </Paragraph>
                      <Paragraph
                        fontFamily="Lato"
                        fontSize="24px"
                        fontWeight="500"
                        lineHeight="0.75em"
                        letterSpacing="1px"
                        margin="0"
                      >
                        {article.title}
                      </Paragraph>
                    </Link>
                  </article>
                ))
              : newArticles.nodes.map(article => (
                  <article key={article.id}>
                    <Link
                      to={`/${baseURLFromCategory(article.category)}/${slugify(
                        article.slug
                      )}`}
                    >
                      <Image fluid={article.featuredimage.fluid} />
                      <Paragraph
                        fontFamily="Cormorant Garamond"
                        fontSize="18px"
                        fontWeight="normal"
                        lineHeight="1em"
                        letterSpacing="1px"
                        textTransform="uppercase"
                        margin="31px 0"
                      >
                        {article.category}
                      </Paragraph>
                      <Paragraph
                        fontFamily="Lato"
                        fontSize="24px"
                        fontWeight="500"
                        lineHeight="0.75em"
                        letterSpacing="1px"
                        margin="0"
                      >
                        {article.title}
                      </Paragraph>
                    </Link>
                  </article>
                ))}
          </ArticlesGrid>
        </ContentWrapper>
      </Wrapper>
    </>
  )
}

export const query = graphql`
  query PostQuery($id: String!, $category: String!) {
    datoCmsArticle(id: { eq: $id }) {
      featuredimage {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      id
      title
      category
      slug
      creationDate
      articleContent {
        ... on DatoCmsParagraph {
          id
          model {
            apiKey
          }
          paragraphContent
        }
        ... on DatoCmsHeadingContent {
          id
          model {
            apiKey
          }
          headingContent
        }
        ... on DatoCmsArticleImage {
          id
          model {
            apiKey
          }
          image {
            fluid {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
    similarArticles: allDatoCmsArticle(
      filter: { category: { eq: $category }, id: { ne: $id } }
      limit: 3
    ) {
      nodes {
        title
        category
        id
        slug
        featuredimage {
          fluid {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
    newArticles: allDatoCmsArticle(
      filter: { id: { ne: $id } }
      limit: 3
      sort: { fields: creationDate, order: DESC }
    ) {
      nodes {
        title
        category
        id
        slug
        featuredimage {
          fluid {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default PostLayout
