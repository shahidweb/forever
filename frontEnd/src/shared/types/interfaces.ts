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

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
  date: string;
  payment: string;
  status: string;
  image: string;
}
