
export type Offer = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  oldPrice?: number;
  products: string[];
  featured?: boolean;
};

export const offers: Offer[] = [
  {
    id: 'offer-1',
    title: 'عرض الكل (مكس اند ماتش)',
    description: '3 قطع دجاج + بطاطس + كول سلو + رول توستر',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJpZWQlMjBjaGlja2VufGVufDB8fDB8fHww',
    price: 260,
    oldPrice: 300,
    products: ['chicken-3pcs', 'fries', 'coleslaw', 'toaster-roll'],
    featured: true
  },
  {
    id: 'offer-2',
    title: 'وجبة برجر دجاج مميزة',
    description: 'برجر دجاج كبير + بطاطس كبير + مشروب غازي',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww',
    price: 120,
    oldPrice: 150,
    products: ['burger-1', 'sides-1', 'drink-1'],
    featured: true
  }
];

export const getOfferById = (id: string) => {
  return offers.find(offer => offer.id === id);
};

export const getFeaturedOffers = () => {
  return offers.filter(offer => offer.featured);
};
