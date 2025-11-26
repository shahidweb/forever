import { Link } from "react-router-dom";
import type { IProduct } from "../../../shared/types/interfaces";

interface ProductListProps {
  items: IProduct[];
}

function ProductList({ items }: ProductListProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 py-4 pt-0">
      {items.map((item) => (
        <Link className="pb-8" key={item._id} to={`/product/${item._id}`}>
          <div className="cursor-pointer">
            <div className="overflow-hidden">
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full object-cover mb-2 rounded transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h2 className="text-md font-semibold truncate">{item.name}</h2>
            <p className="text-gray-600 font-medium">${item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
