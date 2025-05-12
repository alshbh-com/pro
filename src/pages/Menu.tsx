
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { products, categories } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const { addToCart } = useCart();
  
  // Show notification when the page loads
  useEffect(() => {
    // This will show a notification when the menu page is loaded
    // You can modify the condition to show this only when there are new updates or offers
    toast.message("مرحباً بك في قائمة الطعام الجديدة!", {
      description: "تفقد العروض الخاصة والأطباق الجديدة",
      duration: 5000,
    });
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-6 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-12 text-center">قائمة الطعام</h1>

        {/* Category Images Section - Add 3 featured categories with images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="relative h-40 md:h-64 rounded-xl overflow-hidden shadow-lg group border-none">
            <img 
              src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJpZWQlMjBjaGlja2VufGVufDB8fDB8fHww" 
              alt="وجبات فردية" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <CardContent className="p-4 w-full">
                <h3 className="text-white text-xl font-bold mb-2">وجبات فردية</h3>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="bg-primary w-full md:w-auto"
                  onClick={() => setActiveCategory('single-meals')}
                >
                  استعرض
                </Button>
              </CardContent>
            </div>
          </Card>
          
          <Card className="relative h-40 md:h-64 rounded-xl overflow-hidden shadow-lg group border-none">
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww" 
              alt="برجر فرخ" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <CardContent className="p-4 w-full">
                <h3 className="text-white text-xl font-bold mb-2">برجر فرخ</h3>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="bg-primary w-full md:w-auto"
                  onClick={() => setActiveCategory('chicken-burger')}
                >
                  استعرض
                </Button>
              </CardContent>
            </div>
          </Card>
          
          <Card className="relative h-40 md:h-64 rounded-xl overflow-hidden shadow-lg group border-none">
            <img 
              src="https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJpZXN8ZW58MHx8MHx8fDA%3D" 
              alt="البطاطس" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <CardContent className="p-4 w-full">
                <h3 className="text-white text-xl font-bold mb-2">البطاطس</h3>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="bg-primary w-full md:w-auto"
                  onClick={() => setActiveCategory('potatoes')}
                >
                  استعرض
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <div className="mb-8 overflow-x-auto">
            <TabsList className="bg-gray-100 p-1 h-auto flex flex-nowrap min-w-max">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="py-2 px-4 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products
                  .filter((product) => {
                    // Match category name to the right category
                    const categoryName = categories.find(cat => cat.id === category.id)?.name;
                    return product.category === categoryName;
                  })
                  .map((product) => (
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
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </Layout>
  );
};

export default Menu;
