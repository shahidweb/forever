import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Subscribe from "../modules/customer/components/Subscribe";

const CustomerLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <Subscribe/>
      <Footer />
    </>
  );
};

export default CustomerLayout;
