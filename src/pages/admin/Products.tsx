import React from 'react';
import { Plus } from 'lucide-react';
import { ProductTable } from '@/components/admin/ProductTable';
import { Button } from '@/components/ui/Button';

function Products() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>
      <ProductTable />
    </div>
  );
}

export default Products;