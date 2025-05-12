
export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  smallPrice?: number;
  largePrice?: number;
  regularPrice?: number;
  category: string;
  featured?: boolean;
};

export const products: Product[] = [
  // وجبات فردية
  {
    id: 'single-meal-saving',
    name: 'وجبة التوفير',
    description: 'قطعة ريوس - قطمة ستريس - أرز - بطاطس - تومية أو كول سلو',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 85,
    category: 'وجبات فردية',
    featured: true
  },
  {
    id: 'single-meal-fly-wings',
    name: 'وجبة فلاي وينجز',
    description: '3 قطع اجنحه - 1 خبز - بطاطس، تومية أو كول سلو',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 90,
    category: 'وجبات فردية',
    featured: true
  },
  {
    id: 'single-meal-2-pieces',
    name: 'وجبة 2 قطعة',
    description: '2 قطعة بروست - 2 خبز - بطاطس، تومية',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 110,
    category: 'وجبات فردية',
    featured: true
  },
  {
    id: 'single-meal-3-pieces',
    name: 'وجبة 3 قطع',
    description: '3 قطع بروست - 2 خبز - بطاطس - تومية - كول سلو',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 150,
    category: 'وجبات فردية',
    featured: true
  },
  {
    id: 'single-meal-4-pieces',
    name: 'وجبة 4 قطع',
    description: '4 قطع بروست - 2 خبز - بطاطس - تومية - كول سلو',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 185,
    category: 'وجبات فردية',
    featured: true
  },
  {
    id: 'single-meal-brostaki',
    name: 'وجبة بروستاكي',
    description: '2 قطع بروست - 2 ستريس - أرز - خبز - بطاطس، تومية',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 185,
    category: 'وجبات فردية',
    featured: true
  },
  {
    id: 'single-meal-5-pieces',
    name: 'وجبة 5 قطع',
    description: '5 قطع بروست - 2 خبز - بطاطس، تومية، كول سلو',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 220,
    category: 'وجبات فردية',
    featured: true
  },
  {
    id: 'single-meal-6-pieces',
    name: 'وجبة 6 قطع',
    description: '6 قطع بروست - 2 خبز - بطاطس، تومية، كول سلو',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 260,
    category: 'وجبات فردية',
    featured: true
  },
  {
    id: 'single-meal-3-strips',
    name: 'وجبة 3 ستريس',
    description: '3 قطع ستريس - خبز - بطاطس - تومية',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 105,
    category: 'وجبات فردية',
    featured: true
  },
  {
    id: 'single-meal-5-strips',
    name: 'وجبة 5 ستريس',
    description: '5 قطع ستريس - خبز - بطاطس - تومية - كول سلو',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 180,
    category: 'وجبات فردية',
    featured: true
  },
  {
    id: 'single-meal-9-strips',
    name: 'وجبة 9 ستريس',
    description: '9 قطع ستريس - خبز - بطاطس - تومية - كول سلو',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 210,
    category: 'وجبات فردية',
    featured: true
  },
  
  // الابتكارات
  {
    id: 'invention-khaltabita',
    name: 'الخلطبيطة',
    description: 'طبقة توست، طبقة أرز - ستريس، تومية',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 60,
    category: 'الابتكارات',
    featured: true
  },
  {
    id: 'invention-mrgarga',
    name: 'المرجرجة',
    description: 'بطاطس - ستريس - تركي - دوريتوس - ميكس صوصات',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 55,
    category: 'الابتكارات',
    featured: true
  },
  
  // وجبات عائلية
  {
    id: 'family-meal-7-pieces',
    name: 'وجبة 7 قطع',
    description: '7 قطع دجاج – 1 خبز – كول سلو – كاتشب – بطاطس – كيزر',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 315,
    category: 'وجبات عائلية',
    featured: true
  },
  {
    id: 'family-meal-family',
    name: 'وجبة فاميلي',
    description: '8 قطع دجاج – 2 خبز – كول سلو – كاتشب – بطاطس – كيزر',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 380,
    category: 'وجبات عائلية',
    featured: true
  },
  {
    id: 'family-meal-9-pieces',
    name: 'وجبة 9 قطع',
    description: '9 قطع دجاج – 2 خبز – كول سلو – كاتشب – بطاطس – كيزر – أرز',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 460,
    category: 'وجبات عائلية',
    featured: true
  },
  {
    id: 'family-meal-super-family',
    name: 'سوبر فاميلي',
    description: '12 قطعة دجاج – 3 خبز – كول سلو – كاتشب – بطاطس – كيزر – أرز',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 500,
    category: 'وجبات عائلية',
    featured: true
  },
  {
    id: 'family-meal-lamma',
    name: 'وجبة اللمّة',
    description: '16 قطعة دجاج – 4 خبز – كول سلو – كاتشب – بطاطس – كيزر – أرز',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 630,
    category: 'وجبات عائلية',
    featured: true
  },
  {
    id: 'family-meal-jumbo',
    name: 'وجبة الجامبو',
    description: '20 قطعة دجاج – 5 خبز – كول سلو – كاتشب – بطاطس – كيزر – أرز',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 830,
    category: 'وجبات عائلية',
    featured: true
  },
  
  // وجبات ناشفل
  {
    id: 'nashville-meal-3-pieces',
    name: 'وجبة 3 قطع',
    description: '3 قطع تندر – 1 خبز بريوش – بطاطس – توومية حارة',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 155,
    category: 'وجبات ناشفل',
    featured: true
  },
  {
    id: 'nashville-meal-5-pieces',
    name: 'وجبة 5 قطع',
    description: '5 قطع تندر – 2 خبز بريوش – بطاطس – توومية حارة',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 205,
    category: 'وجبات ناشفل',
    featured: true
  },
  {
    id: 'nashville-meal-7-pieces',
    name: 'وجبة 7 قطع',
    description: '7 قطع تندر – 3 خبز بريوش – بطاطس – توومية حارة',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 255,
    category: 'وجبات ناشفل',
    featured: true
  },
  
  // ساندوتشات ناشفل
  {
    id: 'nashville-sandwich-zalzal',
    name: 'ساندوتش زلزال',
    description: 'شريحة تندر – مخلل – خيار مخلل – صوص حار – توومية – خبز بريوش – كول سلو',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800',
    regularPrice: 105,
    category: 'ساندوتشات ناشفل',
    featured: true
  },
  {
    id: 'nashville-sandwich-volt',
    name: 'ساندوتش فولت',
    description: 'شريحتين تندر – مخلل – خيار مخلل – صوص حار – توومية – خبز بريوش – كول سلو',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800',
    regularPrice: 115,
    category: 'ساندوتشات ناشفل',
    featured: true
  },
  {
    id: 'nashville-sandwich-dynamite',
    name: 'ساندوتش ديناميت',
    description: 'شريحتين تندر – مخلل – خيار مخلل – صوص حار – سويت شيلي – خبز بريوش – هالبينو – كول سلو',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800',
    regularPrice: 120,
    category: 'ساندوتشات ناشفل',
    featured: true
  },
  
  // برجر فرخ
  {
    id: 'chicken-burger-classico',
    name: 'كلاسيكو',
    description: 'ستربس – خس – صوص بروستكي',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    smallPrice: 80,
    largePrice: 145,
    category: 'برجر فرخ',
    featured: true
  },
  {
    id: 'chicken-burger-abu-elgebn',
    name: 'أبو الجبن',
    description: 'ستربس – موزاريلا ستيك – خس – طماطم – صوص بروستكي – صوص جبنة',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    smallPrice: 85,
    largePrice: 149,
    category: 'برجر فرخ',
    featured: true
  },
  {
    id: 'chicken-burger-ranish',
    name: 'رانيش',
    description: 'ستربس – خس – طماطم – صوص رانش – صوص بروستكي',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    smallPrice: 85,
    largePrice: 149,
    category: 'برجر فرخ',
    featured: true
  },
  {
    id: 'chicken-burger-fire',
    name: 'فاير',
    description: 'ستربس – خس – صوص بروستكي – هالبينو – صوص حار',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    smallPrice: 85,
    largePrice: 149,
    category: 'برجر فرخ',
    featured: true
  },
  {
    id: 'chicken-burger-mayo',
    name: 'مايو',
    description: 'ستربس – خس – صوص مايونيز سبايسي – صوص كاري – سماك باودر',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    smallPrice: 95,
    largePrice: 160,
    category: 'برجر فرخ',
    featured: true
  },
  {
    id: 'chicken-burger-franco-mozzarella',
    name: 'فرانكو موتزاريلا',
    description: 'ستربس – موتزاريلا ستيك – باربكيو – خس – صوص بروستكي',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    regularPrice: 90,
    category: 'برجر فرخ',
    featured: true
  },
  {
    id: 'chicken-burger-americano',
    name: 'أمريكانو',
    description: 'ستربس – موتزاريلا – باربكيو – خس – صوص بروستكي',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    regularPrice: 90,
    category: 'برجر فرخ',
    featured: true
  },
  {
    id: 'chicken-burger-zinger-supreme',
    name: 'زنجر سوبرريم',
    description: 'ستربس – خس – صوص بروستكي – صوص رانش – جبنة شيدر',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800',
    regularPrice: 90,
    category: 'برجر فرخ',
    featured: true
  },
  
  // برجر لحم
  {
    id: 'beef-burger-classic',
    name: 'كلاسيك برجر',
    description: 'شريحة لحم – خس – شيدر – بصل – طماطم – مايونيز',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800',
    smallPrice: 70,
    largePrice: 120,
    category: 'برجر لحم',
    featured: true
  },
  {
    id: 'beef-burger-cowboy',
    name: 'كاوبوي برجر',
    description: 'شريحة لحم – خس – شيدر – بصل – طماطم – مايونيز – حلقات بصل – صوص باربكيو',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800',
    smallPrice: 85,
    largePrice: 140,
    category: 'برجر لحم',
    featured: true
  },
  {
    id: 'beef-burger-cheese-lovers',
    name: 'تشيز لافرز',
    description: 'شريحة لحم – خس – شيدر – بصل – طماطم – مايونيز – صوص جبنة',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800',
    smallPrice: 80,
    largePrice: 140,
    category: 'برجر لحم',
    featured: true
  },
  {
    id: 'beef-burger-american',
    name: 'أمريكان برجر',
    description: 'شريحة لحم – خس – شيدر – بصل – طماطم – مايونيز – صوص رانش',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800',
    smallPrice: 80,
    largePrice: 140,
    category: 'برجر لحم',
    featured: true
  },
  
  // رول
  {
    id: 'roll-potato-souri',
    name: 'بطاطس سوري',
    description: 'بطاطس – خبز سوري – توومية – كاتشب',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800',
    regularPrice: 30,
    category: 'رول',
    featured: true
  },
  {
    id: 'roll-rostki',
    name: 'روستكي رول',
    description: 'ستربس – خبز سوري – خس – صوص بروستكي',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800',
    regularPrice: 35,
    category: 'رول',
    featured: true
  },
  {
    id: 'roll-ranish-souri',
    name: 'رانيش سوري',
    description: 'ستربس – خبز سوري – خس – صوص بروستكي – صوص رانش',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800',
    regularPrice: 40,
    category: 'رول',
    featured: true
  },
  {
    id: 'roll-toaster',
    name: 'توستستر',
    description: 'استربس – خبز توست – مايونيز – شيدر – طماطم – خس',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800',
    regularPrice: 50,
    category: 'رول',
    featured: true
  },
  
  // الإضافات
  {
    id: 'extras-seasoned-rice',
    name: 'أرز مبهر',
    description: 'أرز مطبوخ بتوابل خاصة',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800',
    regularPrice: 25,
    category: 'الإضافات',
    featured: false
  },
  {
    id: 'extras-rizo',
    name: 'ريزو',
    description: 'طبق ريزو خاص',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800',
    regularPrice: 60,
    category: 'الإضافات',
    featured: false
  },
  {
    id: 'extras-onion-rings',
    name: 'حلقات بصل',
    description: 'حلقات بصل مقرمشة',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800',
    regularPrice: 25,
    category: 'الإضافات',
    featured: false
  },
  {
    id: 'extras-cheese-fingers-small',
    name: 'صوابع جبنة صغير',
    description: 'أصابع جبنة مقرمشة - حجم صغير',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800',
    regularPrice: 30,
    category: 'الإضافات',
    featured: false
  },
  {
    id: 'extras-cheese-fingers-large',
    name: 'صوابع جبنة كبير',
    description: 'أصابع جبنة مقرمشة - حجم كبير',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800',
    regularPrice: 55,
    category: 'الإضافات',
    featured: false
  },
  {
    id: 'sauce-toomia',
    name: 'توومية',
    description: 'صوص ثوم',
    image: 'https://images.unsplash.com/photo-1533640924469-f04e06f8898d?w=800',
    regularPrice: 10,
    category: 'الصوصات',
    featured: false
  },
  {
    id: 'sauce-coleslaw',
    name: 'كول سلو',
    description: 'سلطة كول سلو',
    image: 'https://images.unsplash.com/photo-1533640924469-f04e06f8898d?w=800',
    regularPrice: 10,
    category: 'الصوصات',
    featured: false
  },
  {
    id: 'sauce-bbq',
    name: 'باربكيو',
    description: 'صوص باربكيو',
    image: 'https://images.unsplash.com/photo-1533640924469-f04e06f8898d?w=800',
    regularPrice: 10,
    category: 'الصوصات',
    featured: false
  },
  {
    id: 'sauce-cheddar',
    name: 'شيدر',
    description: 'صوص جبنة شيدر',
    image: 'https://images.unsplash.com/photo-1533640924469-f04e06f8898d?w=800',
    regularPrice: 10,
    category: 'الصوصات',
    featured: false
  },
  {
    id: 'sauce-ranch',
    name: 'رانش',
    description: 'صوص رانش',
    image: 'https://images.unsplash.com/photo-1533640924469-f04e06f8898d?w=800',
    regularPrice: 10,
    category: 'الصوصات',
    featured: false
  },
  
  // المسحب
  {
    id: 'mshb-3-pieces',
    name: 'مسحب 3 قطع',
    description: '3 قطع مسحب – بطاطس – 2 خبز – كول سلو',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 80,
    category: 'المسحب',
    featured: true
  },
  {
    id: 'mshb-5-pieces',
    name: 'مسحب 5 قطع',
    description: '5 قطع مسحب – بطاطس – 3 خبز – كول سلو – صوص',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 110,
    category: 'المسحب',
    featured: true
  },
  {
    id: 'mshb-8-pieces',
    name: 'مسحب 8 قطع',
    description: '8 قطع مسحب – بطاطس عائلي – 5 خبز – 4 كول سلو',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800',
    regularPrice: 200,
    category: 'المسحب',
    featured: true
  },
  
  // البطاطس
  {
    id: 'potatoes-packet',
    name: 'باكيت بطاطس',
    description: 'بطاطس مقلية كلاسيكية',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800',
    regularPrice: 35,
    category: 'البطاطس',
    featured: false
  },
  {
    id: 'potatoes-cheddar',
    name: 'بطاطس شيدر',
    description: 'بطاطس مقلية – صوص جبنة شيدر',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800',
    regularPrice: 30,
    category: 'البطاطس',
    featured: false
  },
  {
    id: 'potatoes-cheddar-jalapeno-small',
    name: 'بطاطس شيدر وهالبينو صغير',
    description: 'بطاطس مقلية – صوص شيدر – شرائح هالبينو',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800',
    regularPrice: 25,
    category: 'البطاطس',
    featured: false
  },
  {
    id: 'potatoes-cheddar-jalapeno-large',
    name: 'بطاطس شيدر وهالبينو كبير',
    description: 'بطاطس مقلية – صوص شيدر – شرائح هالبينو',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800',
    regularPrice: 35,
    category: 'البطاطس',
    featured: false
  },
  {
    id: 'potatoes-brostaki-small',
    name: 'بطاطس بروستكي صغير',
    description: 'بطاطس مقلية – صوص شيدر – صوص بروستكي',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800',
    regularPrice: 30,
    category: 'البطاطس',
    featured: false
  },
  {
    id: 'potatoes-brostaki-large',
    name: 'بطاطس بروستكي كبير',
    description: 'بطاطس مقلية – صوص شيدر – صوص بروستكي',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800',
    regularPrice: 40,
    category: 'البطاطس',
    featured: false
  }
];

export const categories = [
  { id: 'single-meals', name: 'وجبات فردية' },
  { id: 'family-meals', name: 'وجبات عائلية' },
  { id: 'nashville-meals', name: 'وجبات ناشفل' },
  { id: 'nashville-sandwiches', name: 'ساندوتشات ناشفل' },
  { id: 'chicken-burger', name: 'برجر فرخ' },
  { id: 'beef-burger', name: 'برجر لحم' },
  { id: 'roll', name: 'رول' },
  { id: 'inventions', name: 'الابتكارات' },
  { id: 'mshb', name: 'المسحب' },
  { id: 'extras', name: 'الإضافات' },
  { id: 'potatoes', name: 'البطاطس' },
  { id: 'sauces', name: 'الصوصات' }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
