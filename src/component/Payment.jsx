import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KEY =
  "pk_test_51MdJKFHSPMDHGHQldEUVWJqaBMX9D5yCGlAwmIPinp9UfOz2RNO8DM3REDLfrOmQvCZaNO8mURtcHtR50EHIPN2h00KO8jrcHu";

const Payment = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const Navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const getPayment = async () => {
      try {
        const res = axios.post("http://localhost:8000/api/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 5000,
        });
        console.log(res.data);
        Navigate("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && getPayment();
  }, [stripeToken, Navigate]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h3>Payment Method</h3>
      {stripeToken ? (
        <span>Please wait here.....</span>
      ) : (
        <StripeCheckout
          name="MaLak KhAns"
          image="https://avatars.githubusercontent.com/u/93384711?s=400&u=f033fed5686e4b22c8ea9eeb3d6b1c650d2fb123&v=4"
          billingAddress
          shippingAddress
          description="Your Total is $20"
          amount={20}
          token={onToken}
          stripeKey={KEY}
        >
          <button
            style={{
              padding: "10px",
              backgroundColor: "teal",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "22px",
              cursor: "pointer",
            }}
          >
            Payment
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Payment;

// https://avatars.githubusercontent.com/u/93384711?s=400&u=f033fed5686e4b22c8ea9eeb3d6b1c650d2fb123&v=4
// pk_test_51MdJKFHSPMDHGHQldEUVWJqaBMX9D5yCGlAwmIPinp9UfOz2RNO8DM3REDLfrOmQvCZaNO8mURtcHtR50EHIPN2h00KO8jrcHu
