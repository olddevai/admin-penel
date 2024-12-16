import React from 'react';
import { Product } from '@/types';
import { Button } from '../ui/Button';
import { formatCurrency } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">{formatCurrency(product.price)}</span>
          <Button
            onClick={() => onAddToCart(product.id)}
            variant="primary"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}