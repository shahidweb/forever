import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IProductProps } from "../../../shared/types/interfaces";
import ProductNotFound from "./ProductNotFound";

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProductProps | null>(null);

  useEffect(() => {
    if (id) {
      fetch("/data/products.json")
        .then((res) => res.json())
        .then((data) => {
          const foundProduct = data.find(
            (p: IProductProps) => p.id === Number(id)
          );
          setProduct(foundProduct || null);
        })
        .catch((err) => console.error("Error loading data:", err));
    }
  }, [id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);

  if (!product) return <ProductNotFound />;

  return (
    <div className="p-6 flex flex-col md:flex-row items-center gap-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-60 h-80 object-cover rounded-lg shadow-md"
      />
      <div>
        <h2 className="text-3xl font-bold mb-3">{product.name}</h2>
        <p className="text-xl font-semibold text-gray-700 mb-2">
          ${product.price}
        </p>
        <p className="text-gray-500 mb-4">Category: {product.category}</p>
        <p className="text-gray-500 mb-4">Type: {product.type}</p>
        <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
