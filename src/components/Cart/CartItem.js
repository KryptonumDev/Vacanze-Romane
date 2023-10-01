import React from "react"
import styled from "styled-components"

export default function CartItem({ products, remove, data }) {
  return (
    <Wrapper>
      <div className="image-wrap">
        <img src={data.product.node.image.mediaItemUrl} />
      </div>
      <div className="inform-part">
        <div>
          <div className="elipsis-flex">
            <p title={data.product.node.name}>{data.product.node.name}</p>
            <p className={data.product.node.regularPrice !== data.product.node.price ? 'red' : ''} dangerouslySetInnerHTML={{ __html: data.product.node.price }} />
          </div>
          <div className="elipsis-flex">
            <small>Poziom 1</small>
            {data.product.node.regularPrice !== data.product.node.price && (
              <p className="old-price" dangerouslySetInnerHTML={{ __html: data.product.node.regularPrice }} />
            )}
          </div>
        </div>
        <div className="flex">
          <p>Ilość: {data.quantity}</p>
          {remove && (
            <button type="button" className="remove" onClick={(e) => { remove(e, data.key, products) }}>Usuń</button>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 106px 1fr;
  gap: 20px;
  margin-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--grey, #E0E0E0);
  max-width: 500px;

  .inform-part{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    small{
      color: var(--grey-1, #808080);
      letter-spacing: 1px;
      font-size: 15px;
      line-height: 160%;
    }
  }

  .remove{
    color: var(--light-red, #7B2938);
    font-size: 15px;
    line-height: 160%;
    letter-spacing: 1px;
    border: none;
    background-color: transparent;
  }

  &:last-child{
    border-bottom: unset;
  }

  &:first-child{
    margin-top: unset;
  }

  .image-wrap{
    width: 106px;
    height: 106px;
    position: relative;
    >img{
      inset: 0;
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      max-width: none;
      position: absolute;
      object-fit: cover;
      object-position: right;
    }
  }

  .elipsis-flex{
    align-items: center;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 24px;
    margin-bottom: 8px;

    p{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      font-size: 18px;

      &.red{
        color: var(--light-red, #7B2938);
      }

      &.old-price{
        color: var(--grey-1, #808080);
        font-size: 15px;
        line-height:  160%;
        letter-spacing: 1px;
        text-decoration-line: line-through;
        text-decoration: line-through;
      }
    }
  }

  .flex{
    align-items: center;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 24px;
  }
`