import React from 'react';
import { useNavigate } from 'react-router-dom';

type OrderType = 'dine-in' | 'pickup' | 'delivery';

type OrderTypeSelectorProps = {
  onSelect?: (type: OrderType) => void;
};

const OrderTypeSelector = ({ onSelect }: OrderTypeSelectorProps) => {
  const navigate = useNavigate();

  const handleSelect = (type: OrderType) => {
    if (onSelect) {
      onSelect(type);
    } else {
      navigate('/menu');
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
      <div 
        className="flex flex-col items-center p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md"
        onClick={() => handleSelect('dine-in')}
      >
        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fHww" 
            alt="Dine-in" 
            className="w-full h-full object-cover" 
          />
        </div>
        <span className="text-lg font-medium text-gray-700">تناول في المطعم</span>
      </div>
      
      <div 
        className="flex flex-col items-center p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md"
        onClick={() => handleSelect('pickup')}
      >
        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGlja3VwfGVufDB8fDB8fHww" 
            alt="Self-Pickup" 
            className="w-full h-full object-cover" 
          />
        </div>
        <span className="text-lg font-medium text-gray-700">استلام من المطعم</span>
      </div>
      
      <div 
        className="flex flex-col items-center p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md"
        onClick={() => handleSelect('delivery')}
      >
        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
          <img 
            src="/public/lovable-uploads/4bde5df7-fb7b-4a49-9758-3cf5f04e00b6.png" 
            alt="Delivery" 
            className="w-full h-full object-cover" 
          />
        </div>
        <span className="text-lg font-medium text-gray-700">توصيل للمنزل</span>
      </div>
    </div>
  );
};

export default OrderTypeSelector;
