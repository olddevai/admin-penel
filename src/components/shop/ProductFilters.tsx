import React from 'react';
import { Search, Filter } from 'lucide-react';

export function ProductFilters() {
  return (
    <div className="flex space-x-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
      
      <button className="flex items-center space-x-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
        <Filter className="h-5 w-5" />
        <span>Filter</span>
      </button>
    </div>
  );
}