import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Store, LayoutDashboard, ShoppingCart, User, Settings } from 'lucide-react';

function Layout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  const adminLinks = [
    { to: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/admin/products', icon: Store, label: 'Products' },
    { to: '/admin/orders', icon: ShoppingCart, label: 'Orders' },
    { to: '/admin/customers', icon: User, label: 'Customers' },
    { to: '/admin/settings', icon: Settings, label: 'Settings' },
  ];

  const userLinks = [
    { to: '/', icon: Store, label: 'Shop' },
    { to: '/cart', icon: ShoppingCart, label: 'Cart' },
    { to: '/profile', icon: User, label: 'Profile' },
    { to: '/orders', icon: LayoutDashboard, label: 'Orders' },
  ];

  const links = isAdmin ? adminLinks : userLinks;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {isAdmin ? 'Admin Portal' : 'Digital Market'}
          </h1>
        </div>
        <ul className="space-y-2 p-4">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={cn(
                  'flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors',
                  location.pathname === link.to
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                )}
              >
                <link.icon className="h-5 w-5" />
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;