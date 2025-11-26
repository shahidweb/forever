import { Route, Routes } from "react-router-dom";
import CustomerLayout from "../layouts/CustomerLayout";
import About from "../modules/customer/pages/About";
import Collections from "../modules/customer/pages/Collections";
import Contact from "../modules/customer/pages/Contact";
import Home from "../modules/customer/pages/Home";
import ProductDetail from "../modules/customer/pages/ProductDetail";
import Cart from "../modules/customer/pages/Cart";
import PlaceOrder from "../modules/customer/pages/PlaceOrder";
import MyOrders from "../modules/customer/pages/MyOrders";
import Login from "../modules/customer/pages/Login";
import PageNotFound from "../modules/customer/pages/PageNotFound";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

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
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
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
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default CustomerRoutes;
