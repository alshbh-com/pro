
import React, { useState } from 'react';
import { X, ShoppingCart, MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

const Cart = () => {
  const { cart, isOpen, toggleCart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [userLocation, setUserLocation] = useState<{latitude: number, longitude: number} | null>(null);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const getLocation = () => {
    if (!navigator.geolocation) {
      toast.error("متصفحك لا يدعم خدمة تحديد الموقع");
      return;
    }

    setIsGettingLocation(true);
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        setIsGettingLocation(false);
        toast.success("تم تحديد موقعك بنجاح");
      },
      (error) => {
        setIsGettingLocation(false);
        console.error("Error getting location:", error);
        toast.error("حدث خطأ أثناء تحديد موقعك");
      }
    );
  };

  const handleCheckout = () => {
    // Format the cart items for WhatsApp
    let orderText = `طلب جديد من بروستاكي:\n\n${cart
      .map((item) => `${item.name} ${item.size ? `(${item.size === 'small' ? 'صغير' : 'كبير'})` : ''} (${item.quantity}) - ${item.price * item.quantity} جنيه`)
      .join('\n')}\n\nالإجمالي: ${totalPrice} جنيه`;
    
    // Add location if available
    if (userLocation) {
      const googleMapsUrl = `https://www.google.com/maps?q=${userLocation.latitude},${userLocation.longitude}`;
      orderText += `\n\nموقع العميل: ${googleMapsUrl}`;
    }
    
    // Encode the text for URL
    const encodedOrderText = encodeURIComponent(orderText);
    
    // Open WhatsApp with formatted message
    window.open(`https://wa.me/201101189333?text=${encodedOrderText}`, '_blank');
  };

  return (
    <div 
      className={`fixed top-0 left-0 h-full w-full md:w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center bg-primary text-white">
          <h2 className="text-xl font-bold">سلة التسوق</h2>
          <Button variant="ghost" size="icon" onClick={toggleCart} className="text-white">
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Cart items */}
        <div className="flex-grow overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <ShoppingCart className="h-16 w-16 mb-4 text-gray-300" />
              <p className="mb-4 text-lg">سلة التسوق فارغة</p>
              <Button variant="outline" onClick={toggleCart}>
                استمر في التسوق
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={`${item.id}-${item.size}`} className="flex gap-4 border-b pb-4">
                  <div className="h-20 w-20 bg-gray-100 rounded-md overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.name}</h3>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-5 w-5 text-gray-500"
                        onClick={() => removeFromCart(item.id, item.size)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    {item.size && (
                      <p className="text-sm text-gray-500">
                        الحجم: {item.size === 'small' ? 'صغير' : 'كبير'}
                      </p>
                    )}
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border rounded">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                      <div className="font-bold text-primary">
                        {item.price * item.quantity} جنيه
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-4 border-t bg-gray-50">
            <div className="flex justify-between mb-4">
              <span className="font-medium">الإجمالي:</span>
              <span className="font-bold text-primary">{totalPrice} جنيه</span>
            </div>
            
            {/* Location button */}
            <Button 
              variant="outline" 
              className="w-full mb-2 gap-2" 
              onClick={getLocation}
              disabled={isGettingLocation}
            >
              {isGettingLocation ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <MapPin className="h-4 w-4" />
              )}
              {userLocation ? "تم تحديد موقعك" : "تحديد موقعي"}
            </Button>
            
            <Button 
              className="w-full bg-primary hover:bg-orange-600 mb-2" 
              size="lg"
              onClick={handleCheckout}
            >
              أكمل الطلب عبر واتساب
            </Button>
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={clearCart}
            >
              إفراغ السلة
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
