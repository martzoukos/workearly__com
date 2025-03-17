import { Client } from "@hubspot/api-client";
import type { NextApiRequest, NextApiResponse } from "next";

const PORTAL_ID = "26637090";
const FORM_ID = "5fa1e491-f301-4c10-b809-57cacc762f14";

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

    const formData = {
      fields: [
        { name: "email", value: email },
        { name: "firstname", value: name },
        { name: "lastname", value: surname },
        { name: "mobilephone", value: mobile },
        { name: "message", value: message },
      ],
      context: {
        pageUri: req.headers.referer,
        pageName: pageName,
      },
    };

    // const response = await hubspotClient.apiRequest({
    //   method: "POST",
    //   path: `/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
    //   // path: `/marketing/v3/forms/${PORTAL_ID}/${FORM_ID}/submissions`,
    //   // path: `/submissions/v3/integration/secure/submit/${PORTAL_ID}/${FORM_ID}`,
    //   body: formData,
    // });

    // const response = await fetch(hubspotEndpoint, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
    //   },
    //   body: JSON.stringify(formData),
    // });

    // const data = await response.json();

    // if (!response.ok) {
    //   return res
    //     .status(response.status)
    //     .json({ error: "HubSpot API error", details: data });
    // }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("HubSpot API Error:", JSON.stringify(error));
    res.status(500).json({ message: "Internal Server Error", error });
  }
}
