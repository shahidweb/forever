import { Upload } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { addProduct } from "../../../services/productServices";
import { useAppDispatch } from "../../../shared/hooks/reduxHooks";

const sizesList = ["S", "M", "L", "XL", "XXL"];

export interface IInputProduct {
  name: string;
  description?: string;
  price: number;
  images: string[];
  category: string;
  type: string;
  stock: number;
  bestSeller: boolean;
  sizes: string[];
}

const AdminAddProduct = () => {
  const [sizes, setSizes] = useState<string[]>([]);
  const [images, setImages] = useState<any[]>([]);
  const dispatch = useAppDispatch();
  const { register, reset, handleSubmit } = useForm<IInputProduct>();

  const handleSizeToggle = (size: string) => {
    setSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleImageUpload = (e: any, index: number) => {
    const file = e.target.files[0];
    if (!file) return;

    const newImages = [...images];
    newImages[index] = URL.createObjectURL(file);
    setImages(newImages);
  };

  const onSubmit = (data: IInputProduct) => {
    const payload = convertInFormData(data);
    dispatch(addProduct(payload)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        reset();
      }
    });
  };

  const convertInFormData = (form: IInputProduct) => {
    const formData = new FormData();

    // Append images
    images.forEach((img) => {
      if (img) {
        formData.append("images", img);
      }
    });

    formData.append("name", form.name);
    formData.append("description", form.description ? form.description : "");
    formData.append("category", form.category);
    formData.append("type", form.type);
    formData.append("price", form.price.toString());
    formData.append("stock", form.stock.toString());
    formData.append("sizes", JSON.stringify(sizes));
    formData.append("bestSeller", form.bestSeller ? "true" : "false");
    return formData;
  };

  return (
    <div className="p-6 max-w-3xl">
      {/* Upload Boxes */}
      <p className="font-medium text-gray-700 mb-2">Upload Image</p>
      <div className="flex items-center gap-4 mb-6">
        {[0, 1, 2, 3, 4].map((i) => (
          <label
            key={i}
            className="w-24 h-24 border border-gray-200 rounded-lg flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            {images[i] ? (
              <img
                src={images[i]}
                alt="preview"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center text-gray-500">
                <Upload size={22} />
                <span className="text-sm">Upload</span>
              </div>
            )}
            <input
              type="file"
              className="hidden"
              onChange={(e) => handleImageUpload(e, i)}
            />
          </label>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <p className="font-medium text-gray-600 mb-1">Product name</p>
        <input
          {...register("name")}
          type="text"
          placeholder="Type here"
          className="w-full border rounded-md border-gray-200 px-4 py-2 mb-4"
        />

        {/* Description */}
        <p className="font-medium text-gray-600 mb-1">Product description</p>
        <textarea
          {...register("description")}
          placeholder="Write content here"
          rows={3}
          className="w-full border rounded-md border-gray-200 px-4 py-2 mb-6"
        ></textarea>

        {/* Category / Subcategory / Price */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div>
            <p className="font-medium text-gray-600 mb-1">Product category</p>
            <select
              {...register("category")}
              className="w-full border px-3 py-2 rounded-md border-gray-200"
            >
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
          </div>

          <div>
            <p className="font-medium text-gray-600 mb-1">Sub category</p>
            <select
              {...register("type")}
              className="w-full border px-3 py-2 rounded-md border-gray-200"
            >
              <option value="topwear">Topwear</option>
              <option value="bottomwear">Bottomwear</option>
              <option value="winterwear">Winterwear</option>
            </select>
          </div>

          <div>
            <p className="font-medium text-gray-600 mb-1">Product Price</p>
            <input
              {...register("price")}
              type="number"
              className="w-full border px-3 py-2 rounded-md border-gray-200"
            />
          </div>
          <div>
            <p className="font-medium text-gray-600 mb-1">Stock</p>
            <input
              {...register("stock")}
              type="number"
              className="w-full border px-3 py-2 rounded-md border-gray-200"
            />
          </div>
        </div>

        {/* Sizes */}
        <p className="font-medium text-gray-600 mb-2">Product Sizes</p>
        <div className="flex gap-3 mb-6">
          {sizesList.map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => handleSizeToggle(size)}
              className={`px-4 py-1 rounded border border-gray-200 ${
                sizes.includes(size)
                  ? "bg-black text-white border-black"
                  : "bg-gray-100 border-gray-300 text-gray-600"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Bestseller */}
        <label className="flex items-center gap-2 mb-6">
          <input
            {...register("bestSeller")}
            type="checkbox"
            className="w-4 h-4"
          />
          <span className="text-gray-700">Add to bestseller</span>
        </label>

        {/* Submit */}
        <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AdminAddProduct;
