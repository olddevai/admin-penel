import React from 'react';
import { OrderTable } from '@/components/admin/OrderTable';

function Orders() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Orders</h1>
      <OrderTable />
    </div>
  );
}

export default Orders;