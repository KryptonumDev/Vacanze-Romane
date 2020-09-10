// Gatsby settings for the environment variables
require("dotenv").config()

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
}
const successCode = 200
const errorCode = 400

// Connect to our Mailgun API
const mailgun = require("mailgun-js")
const mg = mailgun({
  apiKey: process.env.API_MAILGUN,
  domain: process.env.API_BASE_URL_MAILGUN,
})

// Our Netlify function
exports.handler = function (event, context, callback) {
  let data = JSON.parse(event.body)
  let { name, email, message } = data
  let mailOptions = {
    from: `${name} <${email}>`,
    to: process.env.MY_EMAIL_ADDRESS,
    replyTo: email,
    text: `${message}`,
  }

  // Our MailGun code
  mg.messages().send(mailOptions, function (error, body) {
    if (error) {
      callback(null, {
        errorCode,
        headers,
        body: JSON.stringify(error),
      })
    } else {
      callback(null, {
        successCode,
        headers,
        body: JSON.stringify(body),
      })
    }
  })
}
