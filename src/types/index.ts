export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  cryptoPrice: {
    BTC: number;
    ETH: number;
  };
  stock: number;
  downloads: number;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  userId: string;
  products: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'pending' | 'completed' | 'failed';
  paymentMethod: string;
  createdAt: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}