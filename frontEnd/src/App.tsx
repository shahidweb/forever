import AdminRoutes from "./routes/AdminRoutes";
import CustomerRoutes from "./routes/CustomerRoutes";

function App() {
  return (
    <>
      <CustomerRoutes />
      <AdminRoutes />
    </>
  );
}

export default App;
