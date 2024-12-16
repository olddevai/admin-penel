import React from 'react';
import { Product } from '@/types';
import { ProductCard } from '@/components/products/ProductCard';

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={(id) => console.log('Add to cart:', id)}
        />
      ))}
    </div>
  );
}