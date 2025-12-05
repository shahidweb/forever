import { Route, Routes } from "react-router-dom";
import CustomerLayout from "../layouts/CustomerLayout";
import About from "../modules/customer/pages/About";
import Cart from "../modules/customer/pages/Cart";
import Collections from "../modules/customer/pages/Collections";
import Contact from "../modules/customer/pages/Contact";
import Home from "../modules/customer/pages/Home";
import Login from "../modules/customer/pages/Login";
import MyOrders from "../modules/customer/pages/MyOrders";
import PlaceOrder from "../modules/customer/pages/PlaceOrder";
import ProductDetail from "../modules/customer/pages/ProductDetail";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

function CustomerRoutes() {
  return (
    <Routes>
      <Route element={<CustomerLayout />}>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/collection" element={<ProtectedRoute><Collections /></ProtectedRoute>} />
        <Route path="/product/:id" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/place-order"
          element={
            <ProtectedRoute>
              <PlaceOrder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <MyOrders />
            </ProtectedRoute>
          }
        />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Route>
    </Routes>
  );
}

export default CustomerRoutes;
