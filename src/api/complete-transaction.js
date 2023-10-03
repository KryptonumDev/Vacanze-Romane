import { v4 } from 'uuid';
import { P24 } from "@ingameltd/node-przelewy24";

const p24 = new P24(
  Number(process.env.P24_MERCHANT_ID),
  Number(process.env.P24_POS_ID),
  process.env.P24_REST_API_KEY,
  process.env.P24_CRC,
  {
    sandbox: false
  }
)

export default async function handler(req, res) {
  try {
    const { merchantId, posId, sessionId, amount, originAmount, currency, orderId, methodId, statement, sign } = req.body
    
    const id = req.query.id

    const response = await p24.verifyTransaction({
      amount: amount,
      currency: currency,
      orderId: orderId,
      sessionId: sessionId,
    })

    const order = await fetch(`${process.env.WORDPRESS_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${process.env.AUTHORISE_USERNAME}:${process.env.AUTHORISE_PASSWORD}`)}`
      },
      body: JSON.stringify({
        query: `
          mutation UPDATE_ORDER( $input: UpdateOrderInput! ) {
            updateOrder(input: $input) {
              clientMutationId
            }
          }
        `,
        variables: {
          input: {
            clientMutationId: v4(),
            orderId: Number(id),
            status: "COMPLETED",
          },
        }
      }),
      cache: 'no-cache',
    })

    if (order.status !== 200) {
      console.log(order)
      return res.status(order.status).json({ res: response, order: order })
    }

    if (response.status !== 200) {
      console.log(response)
      return res.status(response.status).json({ res: response, order: order })
    }

    return res.status(200).json({ res: response, order: order })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ res: err })
  }
}