const GET_CART = `
query GET_CART {
  viewer {
    email
    firstName
    lastName
  }
  cart {
    contents {
      itemCount
      productCount
      nodes {
        key
        extraData {
          value
          key
        }
        product {
          node {
            product {
              level
            }
            productCategories {
              nodes {
                slug
              }
            }
            id
            productId: databaseId
            name
            description
            type
            onSale
            slug
            averageRating
            reviewCount
            image {
              altText
              mediaItemUrl
              mediaDetails {
                height
                width
              }
            }
            galleryImages {
              nodes {
                id
                altText
                mediaItemUrl
                mediaDetails {
                  height
                  width
                }
                srcSet
                title
              }
            }
            ... on SimpleProduct {
              price
              regularPrice
              salePrice
            }
          }
        }
        variation {
          node {
            id
            variationId: databaseId
            name
            description
            type
            onSale
            price
            regularPrice
            salePrice
            image {
              id
              altText
              mediaItemUrl
              mediaDetails {
                height
                width
              }
              title
            }
          }
        }
        quantity
        total
        subtotal
        subtotalTax
      }
    }
    appliedCoupons {
      code
      discountAmount
      discountTax
    }
    subtotal
    subtotalTax
    shippingTax
    shippingTotal
    total(format: RAW)
    totalTax
    feeTax
    feeTotal
    discountTax
    discountTotal
    # new
    availableShippingMethods {
      supportsShippingCalculator
      packageDetails
      rates {
        cost
        methodId
        label
        instanceId
      }
    }
    chosenShippingMethods
    needsShippingAddress
  }
}
`;

export default GET_CART;
