
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { offers, getOfferById } from '@/data/offers';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { getProductById } from '@/data/products';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const OfferDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const offer = getOfferById(id || '');

  if (!offer) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold mb-6">العرض غير متوفر</h1>
          <Link to="/offers">
            <Button>العودة للعروض</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const handleAddOfferToCart = () => {
    addToCart({
      id: offer.id,
      name: offer.title,
      price: offer.price,
      image: offer.image,
      quantity: 1,
    });
    
    toast.success(`تم إضافة ${offer.title} إلى السلة`);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={offer.image} 
                alt={offer.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold mb-4">{offer.title}</h1>
              <p className="text-gray-600 mb-6 text-lg">{offer.description}</p>
              
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold text-primary">{offer.price} جنيه</span>
                {offer.oldPrice && (
                  <span className="text-xl text-gray-400 line-through">{offer.oldPrice} جنيه</span>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-4">محتويات العرض:</h3>
              <ul className="list-disc list-inside mb-8 space-y-2">
                {offer.products.map((productId) => {
                  const product = getProductById(productId);
                  return product ? (
                    <li key={productId} className="text-gray-700">
                      {product.name}
                    </li>
                  ) : null;
                })}
              </ul>
              
              <Button 
                className="w-full md:w-auto bg-primary hover:bg-orange-600 text-lg py-6"
                onClick={handleAddOfferToCart}
              >
                أضف إلى السلة
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

const Offers = () => {
  const { id } = useParams<{ id: string }>();
  
  // If there's an ID parameter, show the offer detail page
  if (id) {
    return <OfferDetail />;
  }

  const { addToCart } = useCart();

  const handleAddOfferToCart = (offer) => {
    addToCart({
      id: offer.id,
      name: offer.title,
      price: offer.price,
      image: offer.image,
      quantity: 1,
    });
    
    toast.success(`تم إضافة ${offer.title} إلى السلة`);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">العروض الحصرية</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                {offer.oldPrice && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full">
                    خصم {Math.round(((offer.oldPrice - offer.price) / offer.oldPrice) * 100)}%
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-3">{offer.title}</h2>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-2xl font-bold text-primary">{offer.price} جنيه</span>
                  {offer.oldPrice && (
                    <span className="text-lg text-gray-400 line-through">{offer.oldPrice} جنيه</span>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="px-6 pb-6 pt-0">
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <Link to={`/offers/${offer.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">
                      التفاصيل
                    </Button>
                  </Link>
                  <Button 
                    className="flex-1 bg-primary hover:bg-orange-600"
                    onClick={() => handleAddOfferToCart(offer)}
                  >
                    اطلب الآن
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Offers;
