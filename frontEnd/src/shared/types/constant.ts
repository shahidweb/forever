import type { FilterOption } from "./interfaces";

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

export const DeliveryStatus: any = {
  pending: "Pending",
  processing: "Processing",
  paid: "Paid",
  shipped: "Shipped",
  "out_of_delivery:": "Out of Delivery",
  delivered: "Delivered",
  cancelled: "Cancelled",
};

export const PaymentMethod: any = {
  stripe: "Stripe",
  razorpay: "Razorpay",
  cod: "COD",
};
