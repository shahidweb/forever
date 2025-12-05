import { NavLink } from "react-router-dom";
import { Plus, List, ShoppingBag } from "lucide-react";

const AdminSidebar = () => {
  const menu = [
    {
      id: 1,
      label: "Add Items",
      icon: <Plus size={18} />,
      link: "/admin/add-product",
    },
    {
      id: 2,
      label: "List Items",
      icon: <List size={18} />,
      link: "/admin/products",
    },
    {
      id: 3,
      label: "Orders",
      icon: <ShoppingBag size={18} />,
      link: "/admin/orders",
    },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 shadow-sm p-4">
      <div className="flex flex-col gap-3">
        {menu.map((item) => (
          <NavLink
            key={item.id}
            to={item.link}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer
              transition-all
              ${
                isActive
                  ? "bg-gray-100 border-gray-300 shadow-sm"
                  : "border-gray-200 hover:bg-gray-50"
              }`
            }
          >
            <span className="text-gray-600">{item.icon}</span>
            <span className="text-gray-700 font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
