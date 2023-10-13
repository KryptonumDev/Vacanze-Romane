const CHECKOUT = `
mutation CHECKOUT_MUTATION( $input: CheckoutInput! ) {
  checkout(input: $input) {
    clientMutationId
    customer {
      email
      firstName
    }
    order {
      paymentMethod
      paymentMethodTitle
      billing {
        email
        firstName
      }
      shipping {
        email
        firstName
      }
      id
      orderKey
      orderNumber
      status
      total(format: RAW)
      databaseId
      shippingLines {
        nodes {
          methodTitle
          total
        }
      }
      refunds {
        nodes {
          amount
        }
      }
    }
    result
    redirect
  }
}
`;

export default CHECKOUT;
