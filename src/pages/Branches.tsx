
import React from 'react';
import Layout from '@/components/Layout';
import { MapPin, Phone, Clock } from 'lucide-react';
import { branches } from '@/data/branches';

const Branches = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">فروعنا</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <div key={branch.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{branch.name}</h2>
                
                <div className="space-y-4">
                  <div className="flex">
                    <MapPin className="h-5 w-5 text-primary ml-2 mt-1" />
                    <p className="text-gray-600">{branch.address}</p>
                  </div>
                  
                  <div className="flex">
                    <Phone className="h-5 w-5 text-primary ml-2 mt-1" />
                    <a href={`tel:${branch.phone}`} className="text-primary hover:underline">
                      {branch.phone}
                    </a>
                  </div>
                  
                  <div className="flex">
                    <Clock className="h-5 w-5 text-primary ml-2 mt-1" />
                    <p className="text-gray-600">{branch.workingHours}</p>
                  </div>
                </div>
              </div>
              
              <div className="h-64 w-full bg-gray-200">
                {/* Here you would integrate with Google Maps */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  خريطة جوجل 
                  <br />
                  {branch.location.lat}, {branch.location.lng}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Branches;
