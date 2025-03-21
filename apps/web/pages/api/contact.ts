import { Client } from "@hubspot/api-client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Bad request" });
  }

  try {
    const hubspotClient = new Client({
      accessToken: process.env.HUBSPOT_API_KEY,
    });

    const { name, surname, email, mobile, message, pageName } = req.body;

    if (!email || !name || !surname || !mobile || !message || !pageName) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const formSubmissionResponse = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/26637090/5fa1e491-f301-4c10-b809-57cacc762f14`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: [
            {
              name: "email",
              value: email,
            },
            {
              name: "firstname",
              value: name,
            },
            {
              name: "lastname",
              value: surname,
            },
            {
              name: "mobilephone",
              value: mobile,
            },
            {
              name: "message",
              value: message,
            },
          ],
        }),
      }
    );

    const data = await formSubmissionResponse.json();

    try {
      await hubspotClient.crm.contacts.basicApi.create({
        properties: {
          email,
          firstname: name,
          lastname: surname,
          phone: mobile,
          message,
        },
      });
    } catch (error) {
      if ((error as any).code === 409) {
        return res.status(200).json(data);
      }
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error(JSON.stringify(error));
    return res.status(500).json(error);
  }
}
