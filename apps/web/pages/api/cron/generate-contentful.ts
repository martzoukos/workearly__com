import { generateContentful } from "@workearly/api/server";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const authHeader = req.headers.authorization;

  if (authHeader !== `Bearer ${process.env.CRON_SECRET_TOKEN}`) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    await generateContentful();
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error running generateContentful:", err);
    res.status(500).json({ error: "Failed to generate content" });
  }
}
