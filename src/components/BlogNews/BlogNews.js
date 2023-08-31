import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import slugify from "slugify"
import { styled } from "styled-components"

const blogCategories = ['Grammatica', 'Vocabolario', 'Frasi e citazioni']

export const BlogNews = () => {

  const { allDatoCmsArticle } = useStaticQuery(
    graphql`
      query SiteMetaData {
        allDatoCmsArticle(limit: 3) {
          nodes {
            title
            slug
            category
            featuredimage {
              gatsbyImageData
              alt
            }
          }
        }
      }
    `
  )

  return (
    <Wrapper>
      <div className='container'>
        <h2>Ostatnio na blogu</h2>
        <Link className="link">Zobacz wszystkie wpisy</Link>
        <div className="grid">
          {allDatoCmsArticle.nodes.map((article, index) => (
            <Link to={`/${blogCategories.includes(article.category) ? 'in-italiano' : 'blog'}/${slugify(article.slug, { lower: true })}`} className="card">
              <GatsbyImage
                image={article.featuredimage.gatsbyImageData}
                alt={article.featuredimage.alt}
                className="image"
              />
              <small>{article.category}</small>
              <h3>{article.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: #F1E2CC;
  padding: clamp(48px, calc(64vw/7.68), 72px) 0;

  .grid{
    grid-area: grid;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: clamp(30px, calc(30vw/7.68), 40px);

    @media (max-width: 720px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 540px) {
      grid-template-columns: 1fr;
    }

    .card{
      display: grid;
      gap: clamp(14px, calc(23vw/7.68), 32px);
      height: fit-content;
      text-decoration: unset;

      .image{
        aspect-ratio: 385/218;
      }

      small{
        color: #000;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Cormorant Garamond;
        font-size: clamp(14px, calc(16vw/7.68), 18px);
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      h3{
        color: #000;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Lato;
        font-size: clamp(16px, calc(20vw/7.68), 24px);
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 1px;
      }
    }
  }

  .link{
    grid-area: link;
    color: #fff !important;
    background: var(--brown, #32251D);
    text-decoration: unset;
    border: none;
    padding: 16px 32px;
    text-align: center;
    display: block;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 1px;
    cursor: pointer;
    width: fit-content;

    @media (max-width: 640px){
      width: 100%;
    }
  }

  h2{
    grid-area: title;
    color: var(--brown, #32251D);
    font-family: Cormorant Garamond;
    font-size: clamp(18px, calc(36vw/7.68), 36px);
    font-weight: 300;
    line-height: 111.111%;
    letter-spacing: 1px;
  } 

  .container{
    max-width: 1440px;
    width: 100%;
    padding: 0 100px;
    margin: 0 auto;
    display: grid;
    gap: 48px;
    grid-template-areas: 
    'title link'
    'grid grid';
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;
    

    @media (max-width: 1051px) {
      padding: 0 65px;
    }

    @media (max-width: 798px) {
      padding: 0 30px;
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
      grid-template-areas: 
      'title'
      'grid'
      'link';
    }

    @media (max-width: 480px) {
      padding: 0 16px;
    }

    @media (max-width: 967px) {
      flex-direction: column;
    }
  }
`