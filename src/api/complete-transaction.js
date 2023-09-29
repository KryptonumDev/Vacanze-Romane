import { P24 } from "@ingameltd/node-przelewy24";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: `${process.env.WORDPRESS_URL}/`,
  consumerKey: process.env.WOO_KEY,
  consumerSecret: process.env.WOO_SECRET,
  version: 'wc/v3'
});

const p24 = new P24(
  Number(process.env.P24_MERCHANT_ID),
  Number(process.env.P24_POS_ID),
  process.env.P24_REST_API_KEY,
  process.env.P24_CRC,
  {
    sandbox: false
  }
);

export default async function handler(req, res) {
  try {
    const { merchantId, posId, sessionId, amount, originAmount, currency, orderId, methodId, statement, sign } = req.body
    if (!req.query.id || !req.query.session) return res.json({ error: 'Missing query params' })

    const transactionHeaders = new Headers();
    transactionHeaders.append("Content-Type", "application/json");
    transactionHeaders.append("Authorization", `Basic ${btoa(`${Number(process.env.P24_POS_ID)}:${process.env.P24_REST_API_KEY}`)}`);


    p24.verifyTransaction({
      amount: amount,
      currency: currency,
      orderId: orderId,
      sessionId: sessionId,
    }).then(response => {
      if (!response) throw new Error('Verification failed')

      api.put(`orders/${req.query.id}`, {
        status: 'processing',
        transaction_id: `p24 session: ${req.query.session}`
      }).then(() => {
        const link = req.query.type === 'dom' ? process.env.DOM_PAYD_WEBHOOK : process.env.MIESZKANIE_PAYD_WEBHOOK
        fetch(link, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            row: req.query.row,
          }),
        }).then(() => {
          return res.json({ success: true })
        })
      }).catch(err => {
        console.log('Error: ' + err)
        return res.json({ error: err })
      })
    })
  } catch (err) {
    console.log(err)
    return res.json({ error: err })
  }
}