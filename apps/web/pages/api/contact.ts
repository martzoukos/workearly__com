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

    const createContactResponse =
      await hubspotClient.crm.contacts.basicApi.create({
        properties: {
          email,
          firstname: name,
          lastname: surname,
          phone: mobile,
          message,
          reference: pageName,
        },
      });

    res.status(200).json(createContactResponse);
  } catch (error) {
    console.error(JSON.stringify(error));
    res.status(500).json(error);
  }
}
