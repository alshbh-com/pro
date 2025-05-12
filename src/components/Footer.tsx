
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div className="mb-8">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-300 mb-4">
              بروستاكي - متخصصون في تقديم أشهى أطباق البرجر والدجاج الطازج بأعلى معايير الجودة وأفضل المكونات.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-primary">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-primary transition-colors">
                  قائمة الطعام
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-gray-300 hover:text-primary transition-colors">
                  العروض الحصرية
                </Link>
              </li>
              <li>
                <Link to="/branches" className="text-gray-300 hover:text-primary transition-colors">
                  فروعنا
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-primary">اتصل بنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary ml-2 mt-1" />
                <span className="text-gray-300">فروعنا المختلفة في جميع أنحاء مصر</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary ml-2" />
                <a href="tel:01101189333" className="text-gray-300 hover:text-primary transition-colors">
                  01101189333
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary ml-2" />
                <a href="mailto:info@prostaki.com" className="text-gray-300 hover:text-primary transition-colors">
                  info@prostaki.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} بروستاكي. جميع الحقوق محفوظة.</p>
          <div className="mt-2">
            <a 
              href="https://wa.me/201204486263" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary"
            >
              تواصل مع المطور
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
