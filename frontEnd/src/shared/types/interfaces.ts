export interface BannerProps {
  preHeading: string;
  heading: string;
  linkText: string;
  imageUrl: string;
  imageAlt: string;
  linkHref?: string;
}

export interface IRating {
  userId: string;
  rating: number;
}

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  images: string[];
  category: string;
  type: string;
  description?: string;
  stock: number;
  size?: string;
  quantity: number;
  sizes: string[];
  rating: number; // Average rating (0–5)
  ratingCount: number; // Total users who rated
  ratings: IRating[]; // Detailed rating list
}

export interface FilterOption {
  label: string;
  value: string;
}
export interface IOrderItem {
  quantity: number;
  size: string;
  name: string;
  price: number;
  image: string;
}

export interface IProductItem {
  quantity: number;
  size: string;
  productId: IProduct;
}

export interface IOrder {
  _id: string;
  createdAt: string; // ISO 8601 Date string
  paymentMethod: string;
  status: string;
  paymentStatus:string;
  subtotal: number;
  shipping: number;
  total: number;
  items: IProductItem[];
  address: IAddress;
}

export interface IAddress {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
  phone: string;
}
