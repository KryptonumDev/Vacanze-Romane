const functions = require("firebase-functions")
const sgMail = require("@sendgrid/mail")
const cors = require("cors")({
  origin: true,
})

exports.sendEmail = functions.https.onRequest((request, response) => {
  const { reason, name, email, message } = request.body
  const msg = {
    to: "lca22480@eoopy.com",
    from: email,
    subject: `[Reason:${reason}] Message from ${name}`,
    text: message,
  }

  sgMail.setApiKey(functions.config().sendgrid.key)
  console.log(reason)

  cors(request, response, () => {
    sgMail.send(msg, (err, res) => {
      if (err) {
        console.log(err)
        response.sendStatus(500)
      } else {
        response.send(res)
      }
    })
  })
})
