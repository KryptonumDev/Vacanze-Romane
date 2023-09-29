import {
  P24,
  Currency,
  Country,
  Language,
  Encoding,
} from "@ingameltd/node-przelewy24";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { generateCsvDataMieszkanie } from "../utils/generate-csv-data-mieszkanie";
import { generateCsvDataDom } from "../utils/generate-csv-data-dom";
import { GroupID } from "../constants/mailerLite";

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
    const { amount, email, urlReturn, urlStatus, description, params, data, type } = req.body
    const group_id = type === 'dom' ? GroupID.house : GroupID.flat;
    api.post(`orders`, params)
      .then(async ({ data: dresponse }) => {
        await fetch(`https://api.mailerlite.com/api/v2/groups/${group_id}/subscribers/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-MailerLite-ApiKey': process.env.MAILERLITE_APIKEY,
          },
          body: JSON.stringify({
            email: email,
            type: 'active',
            fields: {
              marketing_permissions: '1',
              name: params.billing.first_name + ' ' + params.billing.last_name,
            }
          }),
          cache: 'no-cache',
        }).then(async () => {
          const constructedData = type === 'dom' ? generateCsvDataDom(data, dresponse.id) : generateCsvDataMieszkanie(data, dresponse.id)
          const link = type === 'dom' ? process.env.DOM_WEBHOOK : process.env.MIESZKANIE_WEBHOOK
          console.log(constructedData)
          fetch(link, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(constructedData),
          })
            .then((res) => res.json())
            .then(async (make) => {
              const order = {
                sessionId: dresponse.order_key,
                amount: Number(amount),
                currency: Currency.PLN,
                description: description,
                email: email,
                country: Country.Poland,
                language: Language.PL,
                urlReturn: urlReturn + `?id=${dresponse.id}&session=${dresponse.order_key}`,
                urlStatus: urlStatus + `?id=${dresponse.id}&session=${dresponse.order_key}&row=${make}&type=${type}`,
                timeLimit: 60,
                encoding: Encoding.UTF8,
              }

              const response = await p24.createTransaction(order)
              // TODO: add link to local storage and show it on /blad-platnosci page if transaction is not completed
              return res.json({ link: response.link })
            })
        }).catch((error) => {
          console.error(error)
          return res.status(500).json({ error: error.message })
        })
      })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error.message })
  }
}