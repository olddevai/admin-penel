import React from 'react';
import { formatCurrency } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export function CartSummary() {
  const subtotal = 99.99; // This will be calculated from real cart data
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="text-gray-900">{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span className="text-gray-900">{formatCurrency(tax)}</span>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between">
            <span className="text-lg font-medium text-gray-900">Total</span>
            <span className="text-lg font-medium text-gray-900">{formatCurrency(total)}</span>
          </div>
        </div>
        
        <Button className="w-full mt-6">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}