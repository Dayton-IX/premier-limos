import type { NextApiRequest, NextApiResponse } from 'next'
import TakeoutClient from 'takeout.js'
const client = new TakeoutClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  console.log(req.body)

  try {
    await client.login(process.env.TAKEOUT_API_KEY)
    const emailTemplate = {
      to: "premierlimo07@gmail.com",
      from: req.body.email,
      subject: "New message from " + req.body.name + " (" + req.body.email + ")",
      text: req.body.message
    }
    const result = await client.send(emailTemplate)
    console.log(result)
    if (result) res.status(200).end()
    else res.status(500).end()
  } catch (error) {
    console.log("error in send-email.ts: ", error)
    res.status(500).end()
  }
}
