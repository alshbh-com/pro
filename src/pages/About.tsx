
import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">من نحن</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">قصة بروستاكي</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              بدأنا رحلتنا في عام 2018 بهدف تقديم تجربة طعام فريدة تجمع بين الجودة العالية والأسعار المناسبة. 
              نؤمن بأن الطعام الجيد يجب أن يكون متاحًا للجميع، ولذلك نحرص على استخدام أفضل المكونات الطازجة 
              وتقديم خدمة ممتازة لعملائنا.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              اليوم، أصبح بروستاكي وجهة مفضلة لمحبي البرجر والدجاج الطازج في مصر، ونفخر بتقديم وجبات لذيذة 
              بنكهات محلية وعالمية تناسب جميع الأذواق.
            </p>
            <Link to="/menu">
              <Button className="bg-primary hover:bg-orange-600">
                استكشف قائمتنا
              </Button>
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnQlMjBraXRjaGVufGVufDB8fDB8fHww" 
              alt="مطعم بروستاكي" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">قيمنا</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">الجودة</h3>
              <p className="text-gray-600">
                نستخدم أفضل المكونات الطازجة ونتبع معايير صارمة في التحضير والطهي.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">الابتكار</h3>
              <p className="text-gray-600">
                نسعى دائمًا لتقديم وصفات جديدة ومبتكرة تلبي تطلعات عملائنا وتتجاوز توقعاتهم.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">خدمة العملاء</h3>
              <p className="text-gray-600">
                نؤمن بأن تجربة تناول الطعام لا تقتصر على الطعام فقط، بل تشمل الخدمة الممتازة والأجواء المريحة.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">فريقنا</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            خلف كل وجبة لذيذة يقف فريق متميز من الطهاة والموظفين المتفانين الذين يعملون بشغف 
            لتقديم أفضل تجربة لعملائنا. نفخر بفريقنا الذي يجمع بين الخبرة والإبداع والالتزام بأعلى معايير الجودة.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D" 
            alt="فريق بروستاكي" 
            className="w-full max-w-4xl mx-auto h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="bg-primary text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">انضم إلينا في رحلة الطعم الرائعة</h2>
          <p className="max-w-3xl mx-auto mb-8 text-lg">
            ندعوك لزيارة أحد فروعنا وتجربة قائمتنا المميزة. استمتع بأشهى الوجبات في أجواء مريحة 
            وخدمة ممتازة.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/branches">
              <Button className="bg-white text-primary hover:bg-gray-100">
                اكتشف فروعنا
              </Button>
            </Link>
            <Link to="/menu">
              <Button className="bg-white text-primary hover:bg-gray-100">
                استعرض القائمة
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
