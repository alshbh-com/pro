
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCart, CartItem } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

type ProductProps = {
  id: string;
  name: string;
  description: string;
  image: string;
  smallPrice?: number;
  largePrice?: number;
  regularPrice?: number;
  category: string;
};

const ProductCard = ({ id, name, description, image, smallPrice, largePrice, regularPrice, category }: ProductProps) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    smallPrice && largePrice ? 'small' : undefined
  );

  const handleAddToCart = () => {
    let price = regularPrice ?? 0;
    if (selectedSize === 'small') price = smallPrice ?? 0;
    if (selectedSize === 'large') price = largePrice ?? 0;

    const item: CartItem = {
      id,
      name,
      price,
      image,
      quantity: 1,
      size: selectedSize
    };

    addToCart(item);
    toast.success(`تم إضافة ${name} إلى السلة`);
  };

  return (
    <Card className="h-full flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      
      <CardContent className="p-4 flex-grow">
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        {(smallPrice && largePrice) ? (
          <div className="flex gap-2 mb-4">
            <Button
              variant={selectedSize === 'small' ? 'default' : 'outline'}
              size="sm"
              className={selectedSize === 'small' ? 'bg-primary' : ''}
              onClick={() => setSelectedSize('small')}
            >
              صغير - {smallPrice} جنيه
            </Button>
            <Button
              variant={selectedSize === 'large' ? 'default' : 'outline'}
              size="sm"
              className={selectedSize === 'large' ? 'bg-primary' : ''}
              onClick={() => setSelectedSize('large')}
            >
              كبير - {largePrice} جنيه
            </Button>
          </div>
        ) : (
          <div className="font-bold text-primary text-lg mb-4">
            {regularPrice} جنيه
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-orange-600"
        >
          اطلب الآن
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
