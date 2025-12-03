import type { FilterOption, OrderItem } from "./interfaces";

export const RoleType = {
  ADMIN: "admin",
  USER: "user",
};

export const bannerData = {
  preHeading: "OUR BESTSELLERS",
  heading: "Latest Arrivals",
  linkText: "SHOP NOW",
  imageUrl: "/src/assets/img/bannerDress.png", // Replace with your actual image path
  imageAlt: "A model wearing a black sheer scarf",
  linkHref: "/shop/new-arrivals",
};

export const SortOptionId = {
  RELEVANT: "relevant",
  LOW_HIGH: "low-high",
  HIGH_LOW: "high-low",
  NEWEST: "newest",
};

export const sortOptions = [
  { id: SortOptionId.RELEVANT, label: "Relevent" },
  { id: SortOptionId.LOW_HIGH, label: "Price: Low to High" },
  { id: SortOptionId.HIGH_LOW, label: "Price: High to Low" },
  { id: SortOptionId.NEWEST, label: "Newest" },
];

export const filterCategories: FilterOption[] = [
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
  { label: "Kids", value: "kids" },
];

export const filterTypes: FilterOption[] = [
  { label: "Topwear", value: "topwear" },
  { label: "Bottomwear", value: "bottomwear" },
  { label: "Winterwear", value: "winterwear" },
];

export const productSizes = ["S", "M", "L", "XL", "XXL"];


export const orders: OrderItem[] = [
  {
    id: 1,
    name: "Men Round Neck Pure Cotton T-shirt",
    price: 54,
    quantity: 1,
    size: "XL",
    date: "Fri Aug 16 2024",
    payment: "COD",
    status: "Order Placed",
    image: "/src/assets/img/denimJacket.png",
  },
  {
    id: 2,
    name: "Men Round Neck Pure Cotton T-shirt",
    price: 80,
    quantity: 1,
    size: "S",
    date: "Fri Aug 16 2024",
    payment: "COD",
    status: "Order Placed",
    image: "/src/assets/img/casualCotton.png",
  },
  {
    id: 3,
    name: "Men Round Neck Pure Cotton T-shirt",
    price: 80,
    quantity: 2,
    size: "M",
    date: "Fri Aug 16 2024",
    payment: "COD",
    status: "Order Placed",
    image: "/src/assets/img/StripedEveningGown.png",
  }
];
