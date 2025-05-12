
import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'sonner';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
};

type CartContextType = {
  cart: CartItem[];
  isOpen: boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, size?: string) => void;
  updateQuantity: (id: string, size: string | undefined, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  isOpen: false,
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  toggleCart: () => {},
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Load from localStorage on initial render
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [isOpen, setIsOpen] = useState(false);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      // Check if item already exists with the same size
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id && cartItem.size === item.size
      );

      if (existingItemIndex !== -1) {
        // Item exists, update quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += item.quantity;
        toast.success(`تم تحديث ${item.name} في السلة`);
        return updatedCart;
      } else {
        // Item doesn't exist, add new item
        toast.success(`تم إضافة ${item.name} إلى السلة`);
        return [...prevCart, item];
      }
    });
    
    // Open cart when adding items
    setIsOpen(true);
  };

  const removeFromCart = (id: string, size?: string) => {
    const itemToRemove = cart.find((item) => item.id === id && item.size === size);
    
    setCart((prevCart) => 
      prevCart.filter((item) => !(item.id === id && item.size === size))
    );
    
    if (itemToRemove) {
      toast.info(`تم إزالة ${itemToRemove.name} من السلة`);
    }
  };

  const updateQuantity = (id: string, size: string | undefined, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, size);
      return;
    }

    setCart((prevCart) => 
      prevCart.map((item) => 
        item.id === id && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    toast.info('تم تفريغ السلة');
  };

  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        isOpen, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        toggleCart 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
