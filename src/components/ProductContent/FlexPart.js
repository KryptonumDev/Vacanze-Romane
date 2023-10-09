import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function Flex({ data: { title, image, content, link } }) {
  return (
    <Wrapper>
      <h3 className="title" dangerouslySetInnerHTML={{ __html: title }} />
      <div className="flex">
        {link.url ? (
          <Link to={link.url}>
            <img src={image.mediaItemUrl} alt={image.altText} />
          </Link>
        ) : (
          <img src={image.mediaItemUrl} alt={image.altText} />
        )}
        <div className="text" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .title{
    margin-top: 24px;
    margin-bottom: 24px;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  .text *{
    font-size: 15px;
    line-height: 160%;
    letter-spacing: 1px;
  }

  .flex{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 24px;

    img{
      margin-bottom: 0;
    }

    @media (max-width: 540px) {
      grid-template-columns: 1fr;
    }
  }
`