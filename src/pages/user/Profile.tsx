import React from 'react';
import { User, Lock, CreditCard, Bell } from 'lucide-react';

function Profile() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Account Settings</h1>
      
      <div className="bg-white shadow-md rounded-lg divide-y divide-gray-200">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <User className="h-5 w-5 text-gray-400" />
            <h2 className="text-lg font-medium">Profile Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Lock className="h-5 w-5 text-gray-400" />
            <h2 className="text-lg font-medium">Security</h2>
          </div>
          <button className="text-blue-600 hover:text-blue-700">
            Change Password
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <CreditCard className="h-5 w-5 text-gray-400" />
            <h2 className="text-lg font-medium">Payment Methods</h2>
          </div>
          <button className="text-blue-600 hover:text-blue-700">
            Add Payment Method
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Bell className="h-5 w-5 text-gray-400" />
            <h2 className="text-lg font-medium">Notifications</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Email notifications for new products
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Email notifications for orders
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;