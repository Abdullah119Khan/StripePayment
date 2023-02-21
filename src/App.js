import React from "react";
import { Routes, Route } from "react-router-dom";
import Payment from "./component/Payment";
import Success from "./component/Success";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Payment />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
