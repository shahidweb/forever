import { X } from "lucide-react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/reduxHooks";
import { useEffect } from "react";
import {
  deleteProduct,
  fetchAllProductList,
} from "../../../services/productServices";

const AdminProductList: React.FC = () => {
  const { data } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const onDelete = (id: string) => {
    console.log(id);
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    dispatch(fetchAllProductList());
  }, []);
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-semibold mb-4">All Products List</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700 text-sm">
              <th className="py-3 px-4 font-medium border border-gray-200">
                Image
              </th>
              <th className="py-3 px-4 font-medium border border-gray-200">
                Name
              </th>
              <th className="py-3 px-4 font-medium border border-gray-200">
                Category
              </th>
              <th className="py-3 px-4 font-medium border border-gray-200">
                Price
              </th>
              <th className="py-3 px-4 font-medium border border-gray-200">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((product) => (
              <tr
                key={product._id}
                className="border border-gray-200  hover:bg-gray-50 transition cursor-pointer"
              >
                {/* Image */}
                <td className="py-3 px-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-14 h-14 rounded object-cover border"
                  />
                </td>

                {/* Name */}
                <td className="py-3 px-4 text-gray-800">{product.name}</td>

                {/* Category */}
                <td className="py-3 px-4 text-gray-600">{product.category}</td>

                {/* Price */}
                <td className="py-3 px-4 text-gray-800 font-semibold">
                  ${product.price}
                </td>

                {/* Delete Icon */}
                <td className="py-3 px-4">
                  <button
                    onClick={() => onDelete(product._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductList;
