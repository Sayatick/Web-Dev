import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
{
 id: 1,
  name: 'Apple iPhone 15 128Gb (черный)',
  description: 'Смартфон Apple с мощным процессором и отличной камерой. Подойдет для фото, видео и ежедневных задач.',
  price: 365006,
  rating: 4.9,
  image: 'https://cdn.new-brz.net/app/public/models/MTP03HX-A/large/w/231108150042273871.webp',
  images: [
    'https://cdn.new-brz.net/app/public/models/MTP03HX-A/large/w/231108150042273871.webp',
    'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=100&h=100&fit=crop&q=80',
    'https://images.unsplash.com/photo-1591290621749-7a61fb4ba38d?w=100&h=100&fit=crop&q=80'
  ],
  link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/',
  categoryId: 1,
  likes: 0
},
{
   id: 2,
   name: 'Samsung Galaxy S24 5G 8/256 (серый)',
   description: 'Флагман Samsung с быстрым экраном и сильной камерой. Отличный выбор для производительности и фото.',
   price: 450000,
   rating: 4.8,
   image: 'https://resources.cdn-kaspi.kz/img/m/p/h05/hca/84961127989278.png?format=gallery-medium',
   images: [
     'https://resources.cdn-kaspi.kz/img/m/p/h05/hca/84961127989278.png?format=gallery-medium',
     'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=100&h=100&fit=crop&q=80',
     'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=100&h=100&fit=crop&q=80'
   ],
   link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-seryi-116040863/',
   categoryId: 1,
   likes: 0
},
{
 id: 3,
 name: 'Samsung Galaxy S24 Ultra 5G 12/512 (черный)',
 description: 'Топовая модель с максимальными возможностями камеры и производительности. Большой экран и премиум-класс.',
 price: 650000,
 rating: 4.9,
 image: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/h74/84963524706334.png?format=gallery-medium',
 images: [
   'https://resources.cdn-kaspi.kz/img/m/p/hd1/h74/84963524706334.png?format=gallery-medium',
   'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=100&h=100&fit=crop&q=80',
   'https://images.unsplash.com/photo-1561291286-d3fee7d55364?w=100&h=100&fit=crop&q=80'
 ],
  link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-chernyi-116044201/',
  categoryId: 1,
  likes: 0
 },
{

  id: 4,
  name: 'Xiaomi Redmi Note 13 4G NFC 8/128 (черный)',
  description: 'Доступный смартфон с хорошим экраном и батареей. Отлично подходит для учебы и повседневного использования.',
  price: 150000,
  rating: 4.8,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h94/ha3/84949304115230.png?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h94/ha3/84949304115230.png?format=gallery-medium',
    'https://images.unsplash.com/photo-1596291016803-11b3121ef429?w=100&h=100&fit=crop&q=80',
    'https://images.unsplash.com/photo-1467652601471-37787218582c?w=100&h=100&fit=crop&q=80'
  ],
   link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-4g-nfc-8-gb-128-gb-chernyi-115993727/',
   categoryId: 1,
   likes: 0
  },
  {
   id: 5,
   name: 'Xiaomi Redmi Note 13 5G 8/256 (черный)',
   description: 'Быстрый 5G смартфон с хорошим балансом цены и характеристик. Подходит для игр и соцсетей.',
   price: 124701,
   rating: 4.8,
   image: 'https://resources.cdn-kaspi.kz/img/m/p/h09/h76/84917870788638.jpg?format=gallery-medium',
   images: [
     'https://resources.cdn-kaspi.kz/img/m/p/h09/h76/84917870788638.jpg?format=gallery-medium',
     'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=100&h=100&fit=crop&q=80',
     'https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=100&h=100&fit=crop&q=80'
   ],
   link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-5g-8-gb-256-gb-chernyi-115911103/',
   categoryId: 1,
   likes: 0
 },
 {
    id: 6,
    name: 'Apple AirPods Pro (2nd generation)',
    description: 'Беспроводные наушники с активным шумоподавлением. Комфортная посадка и качественный звук.',
    price: 75000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h5e/64511113199646.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hb7/h5e/64511113199646.jpg?format=gallery-medium',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=100&h=100&fit=crop&q=80'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-belyi-106362968/',
    categoryId: 3,
    likes: 0
  },
  {
    id: 7,
    name: 'Apple AirPods Pro (белый)',
    description: 'Классические AirPods Pro с шумоподавлением и прозрачным режимом. Хороши для работы, учебы и спорта.',
    price: 108640,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h34/ha2/63785534455838.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h34/ha2/63785534455838.jpg?format=gallery-medium',
      'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=100&h=100&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop&q=80'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-belyi-4804718/',
    categoryId: 3,
    likes: 0
  },
  {
    id: 8,
    name: 'Apple MacBook Air 13 (2022) 8GB/256GB MLXY3',
    description: 'Легкий ноутбук на Apple Silicon для учебы и работы. Долгая автономность и отличный экран.',
    price: 850000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h31/64515217850398.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hbf/h31/64515217850398.jpg?format=gallery-medium',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=100&h=100&fit=crop&q=80',
      'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=100&h=100&fit=crop&q=80'
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxy3-106110064/',
    categoryId: 2,
    likes: 0
  },
  {
    id: 9,
    name: 'Apple iPad 10.9 (2022) Wi-Fi 64GB',
    description: 'Планшет для учебы и работы: большой экран 10.9", быстрый процессор, удобен для конспектов и видео.',
    price: 299000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h44/86369746616350.png?format=gallery-medium',
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&fit=crop&q=80'
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-10-9-2022-wi-fi-10-9-djuim-4-gb-64-gb-zheltyi-107270360/',
    categoryId: 4,
    likes: 0
  },
  {
    id: 10,
    name: 'Lenovo Tab M10 Plus 10.6 (4/64)',
    description: 'Удобный планшет для мультимедиа и учебы: большой экран, нормальная батарея, хорош для YouTube/Zoom.',
    price: 165000,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=800&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1557825835-70d97c4aa567?w=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&fit=crop&q=80'
    ],
    link: 'https://kaspi.kz/shop/p/lenovo-tab-m10-plus-tb128xu-10-6-djuim-4-gb-64-gb-serebristyi-106195610/',
    categoryId: 4,
    likes: 0
  },

{
  id: 11,
  name: 'Dell Inspiron 15 3530 (i5 / 8GB / 512GB)',
  description: 'Бюджетный ноутбук для учебы и работы: офис, браузер, учебные проекты.',
  price: 329990,
  rating: 4.3,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/p1c/2856842.PNG?format=gallery-medium',
  images: [
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&fit=crop&q=80',
    'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&fit=crop&q=80',
    'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&fit=crop&q=80'
  ],
  link: 'https://kaspi.kz/shop/p/dell-inspiron-15-3530-15-6-8-gb-ssd-512-gb-win-11-home-210-bgci-116700970/?c=750000000',
  categoryId: 2,
  likes: 0
},
{
  id: 12,
  name: 'HP Pavilion 14 (dv0084ur)',
  description: 'Универсальный ноутбук: учеба, работа, мультимедиа. Удобный формат 14".',
  price: 399990,
  rating: 4.4,
  image: 'https://th.bing.com/th/id/OIP.qJTzqNc9KYJQiPW6roWoPgHaHa?w=210&h=210&c=7&r=0&o=7&pid=1.7&rm=3',
  images: [
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&fit=crop&q=80',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&fit=crop&q=80',
    'https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=900&fit=crop&q=80'
  ],
  link: 'https://kaspi.kz/shop/p/hp-pavilion-14-dv0084ur-14-8-gb-ssd-512-gb-win-11-home-104989077/?c=750000000',
  categoryId: 2,
  likes: 0
},
{
  id: 13,
  name: 'Lenovo IdeaPad 5 15 (Ryzen / 16GB / 512GB)',
  description: 'Сбалансированный ноутбук для повседневных задач и учебы.',
  price: 419990,
  rating: 4.5,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p0f/p8e/41040020.jpg?format=gallery-medium',
  images: [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&fit=crop&q=80',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&fit=crop&q=80',
    'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&fit=crop&q=80'
  ],
  link: 'https://kaspi.kz/shop/p/lenovo-ideapad-5-15alc05-15-6-16-gb-ssd-512-gb-win-11-home-101598794/?c=750000000',
  categoryId: 2,
  likes: 0
},
{
  id: 14,
  name: 'ASUS VivoBook 15 (X1504ZA)',
  description: 'Стильный ноутбук с большим экраном 15.6" для учебы и работы.',
  price: 389990,
  rating: 4.2,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/hd3/86542194966558.png?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/hf7/h2a/86542195097630.png?format=gallery-medium',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&fit=crop&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&fit=crop&q=80'
  ],
  link: 'https://kaspi.kz/shop/p/asus-vivobook-15-x1504za-bq690-15-6-16-gb-ssd-512-gb-freedos-116912940/?c=750000000',
  categoryId: 2,
  likes: 0
},

{
  id: 15,
  name: 'Sony WH-1000XM4',
  description: 'Топовые беспроводные наушники с активным шумоподавлением (ANC).',
  price: 149990,
  rating: 4.7,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/p80/pde/11569143.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p9c/pde/11569144.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/p95/pe1/11569150.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/sony-wh-1000xm4-chernyi-100471402/?c=750000000',
  categoryId: 3,
  likes: 0
},
{
  id: 16,
  name: 'Bose QuietComfort 45',
  description: 'Комфортные беспроводные наушники Bose с ANC, хороший звук и посадка.',
  price: 159990,
  rating: 4.6,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/h40/h36/64374654369822.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/haf/h7a/64374651715614.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/hb4/h28/64374659612702.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/bose-quietcomfort-45-chernyi-102331789/?c=750000000',
  categoryId: 3,
  likes: 0
},
{
  id: 17,
  name: 'JBL Tune 660NC',
  description: 'Накладные наушники JBL с активным шумоподавлением. Хороший бюджетный вариант.',
  price: 69990,
  rating: 4.3,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h7e/h07/63995372699678.jpg?format=gallery-medium',
  images: [
    'https://resources.cdn-kaspi.kz/img/m/p/hb4/h28/64374659612702.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h40/h1e/63995382628382.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/h33/hda/63995377385502.jpg?format=gallery-medium'
  ],
  link: 'https://kaspi.kz/shop/p/jbl-tune-660nc-rozovyi-101475799/?c=750000000',
  categoryId: 3,
  likes: 0
},

{
  id: 18,
  name: 'Apple iPad 10.2 (2021)',
  description: 'Классический iPad для учебы и творчества: заметки, чтение, видео.',
  price: 199990,
  rating: 4.8,
  image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=900&fit=crop&q=80',
  images: [
    'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=900&fit=crop&q=80',
    'https://images.unsplash.com/photo-1510557880182-3f8f6f62b2b7?w=900&fit=crop&q=80',
    'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=900&fit=crop&q=80'
  ],
  link: 'https://kaspi.kz/shop/p/apple-ipad-2021-wi-fi-10-2-64gb-seryi-102301598/?c=750000000',
  categoryId: 4,
  likes: 0
},
{
  id: 19,
  name: 'Samsung Galaxy Tab A8',
  description: 'Надёжный планшет для мультимедиа: YouTube, фильмы, чтение.',
  price: 129990,
  rating: 4.5,
  image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=900&fit=crop&q=80',
  images: [
    'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=900&fit=crop&q=80',
    'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=900&fit=crop&q=80',
    'https://images.unsplash.com/photo-1510557880182-3f8f6f62b2b7?w=900&fit=crop&q=80'
  ],
  link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a8-10-5-32gb-wi-fi-seryi-102431443/?c=750000000',
  categoryId: 4,
  likes: 0
},
{
  id: 20,
  name: 'Lenovo Tab M10 Plus',
  description: 'Большой экран и хороший звук для фильмов и учебы.',
  price: 119990,
  rating: 4.4,
  image: 'https://resources.cdn-kaspi.kz/img/m/p/h69/h2e/79486075404318.jpg?format=gallery-medium',
  images: [
    'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=900&fit=crop&q=80',
    'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=900&fit=crop&q=80',
    'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=900&fit=crop&q=80'
  ],
  link: 'https://kaspi.kz/shop/p/lenovo-tab-m10-plus-3-gen-10-6-128gb-wi-fi-seryi-105211356/?c=750000000',
  categoryId: 4,
  likes: 0
},
]