import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

interface PayPalButtonProps {
  amount: string; 
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ amount }) => {
  return (
    <PayPalScriptProvider options={{ clientId: "AVgEGurCkItgXRvwAoMekuRZrdEyjvd7QwXpvtpWHjY6g64Duw8XLbfeSxiM84BYytDTYWkiyFw33QSe" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          if (!actions.order) {
            throw new Error("Order actions not available");
          }
          return actions.order.create({
            intent: "CAPTURE", 
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",  
                  value: amount,  
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          if (!actions.order) {
            throw new Error("Order actions not available");
          }
          return actions.order.capture().then((details) => {
            const name = "Customer";
            alert(`Transaction completed by ${name}`);
          }).catch((error) => {
            console.error("Error capturing the order:", error);
            alert("Error processing payment. Please try again.");
          });
        }}
        onError={(error) => {
          console.error("Payment failed with error:", error);
          alert("Payment failed. Please try again.");
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
