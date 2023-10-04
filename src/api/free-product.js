import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "https://wloskiodzera.headlesshub.com",
  consumerKey: process.env.WOO_KEY,
  consumerSecret: process.env.WOO_SECRET,
  version: "wc/v3"
});


export default async function handler(req, res) {
  const { item, email } = req.body
  try {
    api.post('orders', {
      payment_method: 'bacs',
      payment_method_title: 'Direct Bank Transfer',
      set_paid: false,
      billing: {
        email: email,
      },
      line_items: item,
    })
      .then((response) => {
        console.log(response.data);
        res.json(response.data);
      }).catch((error) => {
        res.status(500).json(error);
      });
  } catch (err) {
    return res.status(500).json({ err: err });
  }
}