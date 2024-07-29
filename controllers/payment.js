import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51MC5f4SGuSVFAKOEP85uAGO3xPdkYMwBz3d6znXFKkw0SREM95HPlMmR91Tr9SmfWSq6TkuhecHNQLVaa6BO6TWJ00dK5ffNCc"
);

export const payment = async (req, res) => {
  const { amount, paymentMethod } = req.body;
  const userId = req.user.userId;
  if (!userId || !amount || !paymentMethod) {
    return res.status(400).json({
      error: "Missing required fields",
    });
  }
  try {
    stripe.products
      .create({
        name: "Order",
        description: "your first product detail",
      })
      .then((product) => {
        stripe.prices
          .create({
            unit_amount: 1200,
            currency: "inr",
            recurring: {
              interval: "month",
            },
            product: product.id,
          })
          .then((price) => {
            console.log("Success! Here is your  product id: " + product.id);
            console.log("Success! Here is price id: " + price.id);
            return res.status(200).send("payment done succcessfully");
          });
      });
  } catch (error) {}
};
