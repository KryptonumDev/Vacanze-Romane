export default async function handler(req, res) {
  const { group_id, email } = req.body
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': "application/json",
      'X-MailerLite-ApiKey': process.env.MAILERLITE_APIKEY,
    };

    const response = await fetch(`https://api.mailerlite.com/api/v2/groups/${group_id}/subscribers/`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email,
      }),
    });

    if (response.ok) {
      return res.json({ success: true });
    } else {
      return res.json({ success: false });
    }
  } catch {
    return res.status(500).json({ success: false });
  }
}