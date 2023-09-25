import React from "react"
import styled from "styled-components"

export default function Video({ data: { title, video, file, linkTitle } }) {
  return (
    <Wrapper>
      <h3 className="title" dangerouslySetInnerHTML={{ __html: title }} />
      <iframe className="frame" src={video} />
      {(linkTitle && file) && (
        <Button target="__blank" rel="noopener noreferer" href={file.mediaItemUrl} download>
          {linkTitle}
        </Button>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .title{
    margin-top: 24px;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  .frame{
    aspect-ratio: 16/9;
    width: 100%;
    background-color: #fefefe;
    margin: 24px 0;
  }
  
`

const Button = styled.a`
  display: block;
  margin-top: 24px;
  background: var(--beige-2, #F1E2CC);
  padding: 16px 32px;
  color: var(--dead-green, #143325);
  font-size: 18px;
  font-weight: 400;
  line-height: 144.444%;
  letter-spacing: 1px;
  text-decoration: unset;
  text-align: center;
  cursor: pointer;
  width: fit-content;

  transition: background-color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1),
    color 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);

  &:hover,
  &:focus,
  &:active {
    outline: none;
    color: var(--beige-2);
    background-color: var(--dead-green);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`