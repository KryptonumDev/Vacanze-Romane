import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import PageHeader from "../components/PageHeader/PageHeader"
import { ContentWrapper, Paragraph } from "../assets/styles/HomeStyles"
import { Wrapper } from "../components/Wrapper/Wrapper"
import styled from "styled-components"
import Line from "../components/Line/Line"
import slugify from "slugify"
import { SeeMore } from "../components/Lesson/Lesson"
import SEO from "../components/SEO/SEO"

const PostStyles = styled.article`
  div {
    max-width: 766px;
    margin: 0 auto;
    @media only screen and (max-width: 1170px) {
      max-width: 600px;
    }
    @media only screen and (max-width: 798px) {
      max-width: 100%;
    }
  }
  .gatsby-image-wrapper {
    margin: 64px 0 80px;

    @media only screen and (max-width: 565px) {
      margin: 40px 40px 60px;
    }
  }
`

const ImageTitle = styled.p`
  font-size: 14px;
  line-height: 1.3em;
  font-family: "Lato";
  font-weight: 400;
  color: var(--black);
  margin: -50px 0 30px;
  text-align: center;
  padding: 0;
  @media only screen and (min-width: 566px) {
    font-size: 14px;
    margin: -60px 0 40px;
  }
  @media only screen and (min-width: 767px) {
    font-size: 16px;
    margin: -66px 0 60px;
  }
`

const PostParagraph = styled.div`
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
  @media only screen and (max-width: 565px) {
    font-size: 15px;
    line-height: 24px;
  }

  ul {
    padding: 0;
    margin: 8px 0;
    list-style-position: inside;

    li {
      padding: 0;
      margin: 0;
      font-size: 18px;
      font-family: "Lato";
      @media only screen and (max-width: 565px) {
        font-size: 15px;
        line-height: 24px;
      }
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
    @media only screen and (max-width: 565px) {
      font-size: 15px;
      line-height: 24px;
    }
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
  @media only screen and (max-width: 565px) {
    font-size: 24px;
    line-height: 28px;
    margin: 40px 0 16px;
  }
`

const ArticlesGrid = styled.div`
  display: grid;
  margin-top: 43px;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-gap: 41px;
  @media only screen and (max-width: 1214px) {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
  }
  @media only screen and (max-width: 798px) {
    grid-template-columns: 1fr;
    margin-top: 57px;
  }

  .gatsby-image-wrapper {
    overflow: hidden !important;
    height: 218px;
    @media only screen and (max-width: 1214px) {
      height: 140px;
    }
    @media only screen and (max-width: 798px) {
      height: 220px;
    }
    @media only screen and (max-width: 565px) {
      height: 180px;
    }
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

const StyledContentWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1400px) {
    padding: 100px 102px;
    @media only screen and (max-width: 798px) {
      padding: 41px 30px;
    }
  }
`
const StyledArticlesWrapper = styled(ContentWrapper)`
  @media only screen and (max-width: 1014px) {
    padding: 50px 60px 80px;
  }
  @media only screen and (max-width: 798px) {
    padding: 50px 30px 120px;
  }
`

const StyledCategory = styled(Paragraph)`
  @media only screen and (max-width: 565px) {
    font-size: 14px;
    line-height: 18px;
    margin: 22px 0 10px;
  }
`

const StyledDate = styled(Paragraph)`
  @media only screen and (max-width: 565px) {
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 4px;
  }
`

const StyledArticleCategory = styled(Paragraph)`
  @media only screen and (max-width: 1400px) {
    font-size: 18px;
    line-height: 30px;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 16px;
    line-height: 27px;
  }
  @media only screen and (max-width: 565px) {
    font-size: 14px;
    line-height: 18px;
    margin: 15px 0;
  }
`

const StyledArticleTitle = styled(Paragraph)`
  @media only screen and (max-width: 1400px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 18px;
    line-height: 27px;
  }
  @media only screen and (max-width: 565px) {
    font-size: 15px;
    line-height: 24px;
  }
`

const StyledLink = styled(Link)`
  &:hover div {
    opacity: 1;
    svg {
      transform: translateX(4px);
    }
  }
`
const PostLayout = ({ data }) => {
  const {
    datoCmsArticle: {
      category,
      title,
      featuredimage,
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
    const lowerCategory = category.toLowerCase()
    return lowerCategory === "kultura" ||
      lowerCategory === "sztuka" ||
      lowerCategory === "podróże" ||
      lowerCategory === "kuchnia"
      ? "blog"
      : lowerCategory === "grammatica" ||
        lowerCategory === "vocabolario" ||
        lowerCategory === "frasi e citazioni"
      ? "in-italiano"
      : ""
  }

  return (
    <>
      <SEO meta={data.datoCmsArticle.seoMetaTags} />
      <PageHeader
        subheader={title}
        withNav
        article
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
      <Wrapper padding="0" bg="light">
        <StyledContentWrapper direction="column" padding="100px 223px">
          <Image fluid={featuredimage.fluid} />
          <PostStyles>
            <StyledCategory
              fontFamily="Cormorant Garamond"
              fontSize="18px"
              fontWeight="normal"
              lineHeight="1em"
              letterSpacing="1px"
              textTransform="uppercase"
              margin="22px 0"
            >
              {category}
            </StyledCategory>
            <StyledDate
              fontFamily="Lato"
              fontSize="14px"
              fontWeight="normal"
              lineHeight="1.04em"
              letterSpacing="5px"
              textTransform="uppercase"
              margin="0 0 50px"
            >
              {fromYYYYMMDDToFriendlyDate(creationDate)}
            </StyledDate>
            <div>
              {articleContent.map(block => (
                <React.Fragment key={block.id}>
                  {block.model.apiKey === "heading_content" && (
                    <PostHeading key={block.id}>
                      {block.headingContent}
                    </PostHeading>
                  )}
                  {block.model.apiKey === "article_image" && (
                    <>
                      <Image key={block.id} fluid={block.image.fluid} />
                      {block?.image?.title && (
                        <ImageTitle>{block?.image?.title}</ImageTitle>
                      )}
                    </>
                  )}
                  {block.model.apiKey === "paragraph" && (
                    <PostParagraph
                      key={block.id}
                      dangerouslySetInnerHTML={{
                        __html: block.paragraphContent,
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </PostStyles>
        </StyledContentWrapper>
        <StyledArticlesWrapper direction="column" padding="70px 102px 100px">
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
                    <StyledLink
                      to={`/${baseURLFromCategory(
                        article.category
                      )}/${slugify(article.slug, { lower: true })}`}
                    >
                      <div style={{ position: "relative" }}>
                        <Image fluid={article.featuredimage.fluid} />
                        <SeeMore text="Przejdź" />
                      </div>
                      <StyledArticleCategory
                        fontFamily="Cormorant Garamond"
                        fontSize="18px"
                        fontWeight="normal"
                        lineHeight="1em"
                        letterSpacing="1px"
                        textTransform="uppercase"
                        margin="31px 0"
                      >
                        {article.category}
                      </StyledArticleCategory>
                      <StyledArticleTitle
                        fontFamily="Lato"
                        fontSize="24px"
                        fontWeight="500"
                        lineHeight="1.25em"
                        letterSpacing="1px"
                        margin="0"
                      >
                        {article.title}
                      </StyledArticleTitle>
                    </StyledLink>
                  </article>
                ))
              : newArticles.nodes.map(article => (
                  <article key={article.id}>
                    <Link
                      to={`/${baseURLFromCategory(
                        article.category
                      )}/${slugify(article.slug, { lower: true })}`}
                    >
                      <Image fluid={article.featuredimage.fluid} />
                      <StyledArticleCategory
                        fontFamily="Cormorant Garamond"
                        fontSize="18px"
                        fontWeight="normal"
                        lineHeight="1em"
                        letterSpacing="1px"
                        textTransform="uppercase"
                        margin="31px 0"
                      >
                        {article.category}
                      </StyledArticleCategory>
                      <StyledArticleTitle
                        fontFamily="Lato"
                        fontSize="24px"
                        fontWeight="500"
                        lineHeight="1.25em"
                        letterSpacing="1px"
                        margin="0"
                      >
                        {article.title}
                      </StyledArticleTitle>
                    </Link>
                  </article>
                ))}
          </ArticlesGrid>
        </StyledArticlesWrapper>
      </Wrapper>
    </>
  )
}

export const query = graphql`
query PostQuery($id: String!, $category: String!) {
  datoCmsArticle(id: {eq: $id}) {
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
    seoMetaTags {
      ...GatsbyDatoCmsSeoMetaTags
    }
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
          title
          fluid {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
  similarArticles: allDatoCmsArticle(
    filter: {category: {eq: $category}, id: {ne: $id}}
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
    filter: {id: {ne: $id}}
    limit: 3
    sort: {creationDate: DESC}
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
