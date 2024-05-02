import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log("POST handler called");
  console.log("Request object:", req);
  console.log("Response object methods:", Object.keys(res));
  //   const { planId } = req.body;

  //   if (!planId) {
  //     return res.status(400).json({ error: "Plan ID is required" });
  //   }

  //   try {
  //     const session = await stripe.checkout.sessions.create({
  //       payment_method_types: ["card"],
  //       line_items: [
  //         {
  //           price_data: {
  //             currency: "usd",
  //             product_data: {
  //               name: `Subscription for ${planId}`,
  //             },
  //             unit_amount: 1000,
  //           },
  //           quantity: 1,
  //         },
  //       ],
  //       mode: "payment",
  //       success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
  //       cancel_url: `http://localhost:3000/cancel`,
  //     });

  //     if (session.url) {
  //       res.status(200).json({ url: session.url });
  //     } else {
  //       throw new Error("Stripe session URL not found");
  //     }
  //   } catch (error) {
  //     console.error("Error creating Stripe session:", error);
  //     res.status(500).json({ error: "Failed to create Stripe session" });
  //   }
  // }
}
