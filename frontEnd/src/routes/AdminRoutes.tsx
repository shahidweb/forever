import { Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";

import AddItems from "../modules/admin/pages/AddItems";
import AdminOrderCard from "../modules/admin/pages/AdminOrderCard";
import Dashboard from "../modules/admin/pages/Dashboard";
import ListItems from "../modules/admin/pages/ListItems";
import Login from "../modules/admin/pages/Login";
import ProtectedAdmin from "./ProtectedAdmin";

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
        <Route path="add-product" element={<AddItems />} />
        <Route path="products" element={<ListItems />} />
        <Route path="orders" element={<AdminOrderCard />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
