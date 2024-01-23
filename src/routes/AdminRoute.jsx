import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayoutPage from "../pages/HomeLayoutPage";
import Dashboard from "../pages/element/Dashboard";
import Payment from "../pages/element/Payment";

const AdminRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayoutPage />}>
          <Route index element={<Dashboard />} />
          <Route path="payment" element={<Payment />} />
          {/* restof the route ...... */}
        </Route>
      </Routes>
    </>
  );
};

export default AdminRoute;
