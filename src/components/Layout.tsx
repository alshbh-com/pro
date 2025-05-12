
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';
import { CartProvider } from '@/contexts/CartContext';
import { Toaster } from 'sonner';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-orange-50">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Cart />
        <Toaster 
          position="top-center" 
          toastOptions={{
            style: { direction: 'rtl' },
            className: 'rtl'
          }} 
        />
      </div>
    </CartProvider>
  );
};

export default Layout;
