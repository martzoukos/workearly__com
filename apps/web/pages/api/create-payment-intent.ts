import {
  COURSE_DETAILS_COLLECTION_QUERY,
  getServerClient,
} from "@workearly/api";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-02-24.acacia",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, courseDetailsId } = req.body;

    if (!name || !email || !courseDetailsId) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const [client] = getServerClient();

    const { data } = await client
      .query(COURSE_DETAILS_COLLECTION_QUERY, {
        where: { sys: { id: courseDetailsId } },
        limit: 1,
      })
      .toPromise();

    const courseDetailsEntity = data?.courseDetailsCollection?.items.at(0);

    const amount = courseDetailsEntity?.finalCost;

    if (!amount) {
      return res.status(404).json({ error: "Course not found" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "eur",
      metadata: {
        name,
        email,
        courseId: courseDetailsEntity.id || "",
        contentfulId: courseDetailsId,
        courseTitle: courseDetailsEntity.title || "",
      },
      receipt_email: email,
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
