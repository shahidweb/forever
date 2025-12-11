import { razorPayOrder } from "../../services/orderServices";
import { loadRazorpayScript } from "./loadRazorpay";

export const handleRazorpayPayment = async (totalAmount: number) => {
  const loaded = await loadRazorpayScript();
  if (!loaded) {
    alert("Razorpay SDK failed to load");
    return;
  }

  const { data } = await razorPayOrder({
    amount: totalAmount, // from cart
  });

  return new Promise((resolve, reject) => {
    const options = {
      key: "rzp_test_RqGGim2zOyGnMy", // FROM ENV
      amount: data.amount,
      currency: data.currency,
      name: "FOREVER Store",
      description: "Order Payment",
      order_id: data.orderId,

      handler: function (response: any) {
        resolve({
          orderId: response.razorpay_order_id,
          paymentId: response.razorpay_payment_id,
          signature: response.razorpay_signature,
        });
      },

      modal: {
        ondismiss: function () {
          reject("Payment cancelled");
        },
      },
    };

    const razor = new (window as any).Razorpay(options);
    razor.open();
  });
};
