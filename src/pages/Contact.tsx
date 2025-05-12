
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "تم إرسال رسالتك بنجاح",
      description: "سنتواصل معك في أقرب وقت ممكن.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">اتصل بنا</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">تواصل معنا</h2>
            <p className="text-gray-600 mb-8">
              نحن نقدر ملاحظاتك واستفساراتك. لا تتردد في التواصل معنا بأي من الطرق التالية 
              أو املأ النموذج وسنرد عليك في أقرب وقت ممكن.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center ml-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">اتصل بنا</h3>
                  <a href="tel:01101189333" className="text-primary hover:underline">01101189333</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center ml-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">البريد الإلكتروني</h3>
                  <a href="mailto:info@prostaki.com" className="text-primary hover:underline">info@prostaki.com</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center ml-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">واتساب</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-gray-600 ml-2">للمطعم:</span>
                      <a 
                        href="https://wa.me/201101189333" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        01101189333
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-600 ml-2">للمطور:</span>
                      <a 
                        href="https://wa.me/201204486263" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        01204486263
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">نموذج التواصل</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">الاسم</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">البريد الإلكتروني</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">رقم الهاتف</label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">الرسالة</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-32"
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-orange-600">
                إرسال الرسالة
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
