import React from "react";

const Success = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3
        style={{
          padding: "14px 40px",
          backgroundColor: "teal",
          color: "white",
          border: "none",
          borderRadius: "10px",
        }}
      >
        Your Order is Successfull
      </h3>
    </div>
  );
};

export default Success;
