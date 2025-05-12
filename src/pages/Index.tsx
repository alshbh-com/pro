
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import Layout from '@/components/Layout';
import OrderTypeSelector from '@/components/OrderTypeSelector';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts } from '@/data/products';
import { getFeaturedOffers } from '@/data/offers';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const featuredOffers = getFeaturedOffers();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-400 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">أشهى وجبات البرجر والدجاج</h1>
            <p className="text-xl mb-8 max-w-2xl">استمتع بأشهى وجبات البرجر والدجاج الطازج المحضر بأجود المكونات</p>
            <Link to="/menu">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <ShoppingCart className="ml-2 h-5 w-5" />
                اطلب الآن
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Order Type Selector */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-8">اختر طريقة الطلب</h2>
          <OrderTypeSelector />
        </div>
      </section>

      {/* Exclusive Offers */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title">عروض حصرية 🍟</h2>
            <Link to="/offers" className="text-primary flex items-center hover:underline">
              عرض الكل
              <ArrowRight className="mr-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredOffers.map((offer) => (
              <div key={offer.id} className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                  <p className="mb-3">{offer.description}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold">{offer.price} جنيه</span>
                    {offer.oldPrice && (
                      <span className="text-lg text-gray-300 line-through">{offer.oldPrice} جنيه</span>
                    )}
                  </div>
                  <Link to={`/offers/${offer.id}`}>
                    <Button className="bg-primary hover:bg-orange-600 w-full sm:w-auto">
                      اطلب الآن
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title">استكشف القائمة 🍔</h2>
            <Link to="/menu" className="text-primary flex items-center hover:underline">
              عرض القائمة كاملة
              <ArrowRight className="mr-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                smallPrice={product.smallPrice}
                largePrice={product.largePrice}
                regularPrice={product.regularPrice}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">هل أنت جاهز للطلب؟</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">اطلب الآن واستمتع بأشهى الوجبات من بروستاكي</p>
          <Link to="/menu">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              اطلب الآن
            </Button>
          </Link>
        </div>
      </section>

      {/* Fixed Order Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <Link to="/menu">
          <Button size="lg" className="bg-primary text-white hover:bg-orange-600 shadow-lg rounded-full px-6">
            <ShoppingCart className="ml-2 h-5 w-5" />
            اطلب الآن
          </Button>
        </Link>
      </div>
    </Layout>
  );
};

export default Index;
