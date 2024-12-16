import React from 'react';
import { Trash2 } from 'lucide-react';
import { CartItem } from '@/types';
import { formatCurrency } from '@/lib/utils';

const cartItems: CartItem[] = []; // This will be replaced with real data

export function CartList() {
  return (
    <div className="bg-white rounded-lg shadow-md">
      {cartItems.length === 0 ? (
        <div className="p-8 text-center">
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <ul className="divide-y divide-gray-200">
          {cartItems.map((item) => (
            <li key={item.productId} className="p-6 flex items-center">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">Product Name</h3>
                <p className="mt-1 text-sm text-gray-500">Digital Download</p>
              </div>
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">
                  {formatCurrency(99.99)}
                </p>
              </div>
              <button className="ml-4 text-red-500 hover:text-red-700">
                <Trash2 className="h-5 w-5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}