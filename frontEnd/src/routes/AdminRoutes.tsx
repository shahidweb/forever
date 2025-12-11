import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";

import AdminOrderCard from "../modules/admin/pages/AdminOrderCard";
import Dashboard from "../modules/admin/pages/Dashboard";
import AdminProductList from "../modules/admin/pages/AdminProductList";
import Login from "../modules/admin/pages/Login";
import ProtectedAdmin from "./ProtectedAdmin";
import AdminAddProduct from "../modules/admin/pages/AdminAddProduct";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <ProtectedAdmin>
            <AdminLayout />
          </ProtectedAdmin>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="add-product" element={<AdminAddProduct />} />
        <Route path="products" element={<AdminProductList />} />
        <Route path="orders" element={<AdminOrderCard />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
