import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchProductById,
  setProductRating,
} from "../../../services/productServices";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/reduxHooks";
import Loader from "../components/Loader";
import ProductTabs from "../components/ProductTabs";
import ProductNotFound from "./ProductNotFound";
import RatingStar from "../components/RatingStar";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [mainImage, setMainImage] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { product, loading } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [id]);

  useEffect(() => {
    if (product && product.images) {
      setMainImage(product.images[0]);
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);

  const setRating = (rate: number) => {
    if (!id || !product) return;
    const payload = {
      productId: id,
      rating: rate,
    };
    dispatch(setProductRating(payload));
  };

  if (!product) return <ProductNotFound />;

  return (
    <>
      {loading && <Loader />}
      <div className="max-w-6xl mx-auto mt-10 p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Images */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                className={`w-20 h-20 object-cover border rounded-md cursor-pointer ${
                  mainImage === img ? "border-black" : "border-gray-200"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 flex items-center justify-center">
            <img
              src={mainImage ? mainImage : product.images[0]}
              alt={product.name}
              className="w-full max-h-[500px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Right: Details */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <RatingStar rating={product.rating} setRating={setRating} />
            <span className="text-gray-500 text-sm">
              ({product.ratingCount})
            </span>
          </div>

          {/* Price */}
          <p className="text-3xl font-bold text-gray-900 mb-4">
            ${product.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Select Size</h3>
            <div className="flex gap-3">
              {product.sizes?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2 border rounded-md text-sm font-medium transition-all cursor-pointer ${
                    selectedSize === size
                      ? "border-black text-black"
                      : "border-gray-300 text-gray-500 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button className="w-full md:w-auto px-10 py-3 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition cursor-pointer">
            ADD TO CART
          </button>

          {/* Extra Info */}
          <div className="mt-6 text-gray-500 text-sm leading-6 border-t pt-4">
            <p>✅ 100% Original product.</p>
            <p>💵 Cash on delivery is available.</p>
            <p>🔁 Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 p-6">
        <ProductTabs />
      </div>
    </>
  );
};

export default ProductDetails;
