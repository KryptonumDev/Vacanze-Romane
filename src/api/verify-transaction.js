export default async function handler(req, res) {
  try {
    if (!req.query.id || !req.query.session || !req.query.origin) return res.status(500).json('Błąd')

    const transactionHeaders = new Headers();
    transactionHeaders.append("Content-Type", "application/json");
    transactionHeaders.append("Authorization", `Basic ${btoa(`${Number(process.env.P24_POS_ID)}:${process.env.P24_REST_API_KEY}`)}`);

    await fetch(`https://sandbox.przelewy24.pl/api/v1/transaction/by/sessionId/${req.query.session}`, {
      method: 'GET',
      headers: transactionHeaders,
    })
      .then(response => response.json())
      .then(async (response) => {
        console.log(response)
        if (response.data.status == 1 || response.data.status == 2) {
          return res.redirect(`${req.query.origin}/dziekujemy/`)
        } else {
          return res.redirect(`${req.query.origin}/blad-platnosci?nr-zamowienia=${req.query.id}&nr-platnosci=${req.query.session}`)
        }
      })
  } catch (err) {
    console.log(err)
    return res.redirect(`${req.query.origin}/blad?nr-zamowienia=${req.query.id}&nr-platnosci=${req.query.session}`)
  }
}