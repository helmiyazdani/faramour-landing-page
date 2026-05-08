export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface Product {
  image: string;
  name: string;
  price: string;
  tag?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
