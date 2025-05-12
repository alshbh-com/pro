
export type Branch = {
  id: string;
  name: string;
  address: string;
  phone: string;
  workingHours: string;
  location: {
    lat: number;
    lng: number;
  };
};

export const branches: Branch[] = [
  {
    id: 'branch-1',
    name: 'فرع المعادي',
    address: 'شارع 9، المعادي، القاهرة',
    phone: '01101189333',
    workingHours: 'من 10 صباحًا حتى 12 منتصف الليل',
    location: {
      lat: 29.9602,
      lng: 31.2569
    }
  },
  {
    id: 'branch-2',
    name: 'فرع مدينة نصر',
    address: 'شارع عباس العقاد، مدينة نصر، القاهرة',
    phone: '01101189333',
    workingHours: 'من 10 صباحًا حتى 12 منتصف الليل',
    location: {
      lat: 30.0444,
      lng: 31.2357
    }
  },
  {
    id: 'branch-3',
    name: 'فرع الدقي',
    address: 'شارع التحرير، الدقي، الجيزة',
    phone: '01101189333',
    workingHours: 'من 10 صباحًا حتى 12 منتصف الليل',
    location: {
      lat: 30.0388,
      lng: 31.2126
    }
  }
];
