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
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'
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
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-seryi-116040863/'
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
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-chernyi-116044201/'
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
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-4g-nfc-8-gb-128-gb-chernyi-115993727/'
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
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-5g-8-gb-256-gb-chernyi-115911103/'
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
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-belyi-106362968/'
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
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-belyi-4804718/'
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
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxy3-106110064/'
  },
  {
    id: 9,
    name: 'Sony PlayStation 5 (белый)',
    description: 'Игровая приставка нового поколения. Поддержка современных игр, высокая производительность и скорость.',
    price: 380000,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=gallery-medium',
      'https://images.unsplash.com/photo-1633356122544-f134324ef627?w=100&h=100&fit=crop&q=80',
      'https://images.unsplash.com/photo-1535016120754-fd58615ccaed?w=100&h=100&fit=crop&q=80'
    ],
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/'
  },
  {
    id: 10,
    name: 'Sony PlayStation 5 Slim',
    description: 'Компактная версия PS5 с теми же возможностями. Отличный вариант, если хочешь меньше корпус.',
    price: 370000,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      'https://images.unsplash.com/photo-1607853554595-a1e8b3d92e4d?w=100&h=100&fit=crop&q=80',
      'https://images.unsplash.com/photo-1535016120754-fd58615ccaed?w=100&h=100&fit=crop&q=80'
    ],
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/'
  }
];
