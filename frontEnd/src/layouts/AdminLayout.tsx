import { Outlet } from "react-router-dom";
import Header from "../components/layout/admin/Header";
import SideBar from "../components/layout/admin/SideBar";

const AdminLayout = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <div className="flex-1 p-6 bg-gray-50 min-h-screen">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
