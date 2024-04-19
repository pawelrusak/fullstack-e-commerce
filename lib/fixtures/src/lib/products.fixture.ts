import { Product } from '@e-shop/types';

type ProductBase = Partial<Omit<Product, 'subCategory'>> & {
  subCategory: { name: string };
};

export default [
  {
    name: 'JPhone 13 High Quality Value Buy Best Cam...',
    price: 999.0,
    isFeatured: true,
    subCategory: {
      name: 'Phone',
    },
  },
  {
    name: 'WH-1000XM4 Wireless Headphones High Qu...',
    price: 59.0,
    isFeatured: true,
    subCategory: {
      name: 'Audio',
    },
  },
  {
    name: 'S21 Laptop Ultra HD LED Screen Feature 2023 ...',
    price: 1199.0,
    isFeatured: true,
    subCategory: {
      name: 'Laptop',
    },
  },
  {
    name: 'Mini Polaroid Camera for Girls with Flash Li...',
    price: 79.0,
    isFeatured: true,
    subCategory: {
      name: 'Camera',
    },
  },
  {
    name: 'AG OLED65CXPUA 4K Smart OLED TV New ...',
    price: 2799.0,
    isFeatured: true,
    subCategory: {
      name: 'Television',
    },
  },
  {
    name: 'Orange Watch 12 High Quality Health Sensor...',
    price: 959.99,
    isFeatured: false,
    subCategory: {
      name: 'Watch',
    },
  },
  {
    name: 'Ultra Tablet Qwerty HD 10765 Series Low Pri...',
    price: 799.0,
    isFeatured: false,
    subCategory: {
      name: 'Tablet',
    },
  },
  {
    name: 'Surface Laptop 4 XPS 13 Plus 64GB i7 Touch ...',
    price: 2399.99,
    isFeatured: false,
    subCategory: {
      name: 'Laptop',
    },
  },
  {
    name: 'CamPro HERO10 Black Sleek Design 2023 4K ...',
    price: 1499.99,
    isFeatured: false,
    subCategory: {
      name: 'Camera',
    },
  },
  {
    name: 'LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB Movie ...',
    price: 4599.0,
    isFeatured: false,
    subCategory: {
      name: 'Television',
    },
  },
  {
    name: 'VBI Mini 2 Fly More Combo Drone Sjrc F22S 4K Pro Ptz 5 Km Version Alpha ...',
    price: 819.0,
    isFeatured: false,
    subCategory: {
      name: 'Camera',
    },
  },
  {
    name: 'Wireless Bluetooth Speaker Portable Sou...',
    price: 1199.0,
    isFeatured: false,
    subCategory: {
      name: 'Audio',
    },
  },
  {
    name: 'Tablet Pro 128 GB HD RAM 8 GB i8 1080P 4K ...',
    price: 129.0,
    isFeatured: false,
    subCategory: {
      name: 'Tablet',
    },
  },
  {
    name: 'Mobile Watch A Series GPS 7/144 45 mm Red...',
    price: 999.0,
    isFeatured: false,
    subCategory: {
      name: 'Watch',
    },
  },
  {
    name: 'LT Phone RAM 16/256 GB Rose Gold Guaran...',
    price: 999.0,
    isFeatured: false,
    subCategory: {
      name: 'Phone',
    },
  },
  {
    name: 'Gaming Laptop ZDY 15.6 Inch 512 GB VGA ...',
    price: 1659.0,
    isFeatured: false,
    subCategory: {
      name: 'Laptop',
    },
  },
  {
    name: 'Wash Machine 11 KG Front Loading Steam ...',
    price: 5699.0,
    isFeatured: false,
    subCategory: {
      name: 'Home',
    },
  },
  {
    name: 'QuietComfort 45 Wireless Headphone ...',
    price: 329.99,
    isFeatured: false,
    subCategory: {
      name: 'Audio',
    },
  },
  {
    name: 'Orange Watch 12 High Quality Health Sensor...',
    price: 959.99,
    isFeatured: false,
    subCategory: {
      name: 'Watch',
    },
  },
  {
    name: 'CamPro HERO10 Black Sleek Design 2023 4K ...',
    price: 1499.99,
    isFeatured: false,
    subCategory: {
      name: 'Camera',
    },
  },
  {
    name: 'Surface Laptop 4 XPS 13 Plus 64GB i7 Touch ...',
    price: 2399.99,
    isFeatured: false,
    subCategory: {
      name: 'Laptop',
    },
  },
  {
    name: 'Tablet Pro 128 GB HD RAM 8 GB i8 1080P 4K ...',
    price: 129.0,
    isFeatured: false,
    subCategory: {
      name: 'Tablet',
    },
  },
  {
    name: 'AG OLED65CXPUA 4K Smart OLED TV New ...',
    price: 2799.0,
    isFeatured: false,
    subCategory: {
      name: 'Television',
    },
  },
  {
    name: 'Crystal 4K Smart 50” Black LED TV HD Quali...',
    price: 8199.0,
    isFeatured: false,
    subCategory: {
      name: 'Television',
    },
  },
  {
    name: 'Mini Tablet Pro 16 inch HD Pencil 128 GB Sys...',
    price: 259.0,
    isFeatured: false,
    subCategory: {
      name: 'Tablet',
    },
  },
  {
    name: '134S Wireless Max Hifi Stereo Headphone Be...',
    price: 29.0,
    isFeatured: false,
    subCategory: {
      name: 'Audio',
    },
  },
  {
    name: 'Game Station 15 Disc Edition with Console ...',
    price: 5299.99,
    isFeatured: false,
    subCategory: {
      name: 'Gaming',
    },
  },
  {
    name: 'NexSUS ROCK Strix Scar 17 Gaming Laptop',
    price: 2999.99,
    isFeatured: false,
    subCategory: {
      name: 'Laptop',
    },
  },
  {
    name: '2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD',
    price: 1659.0,
    isFeatured: false,
    subCategory: {
      name: 'Laptop',
    },
  },
  {
    name: 'Mobile Watch A Series GPS 7/144 45 mm Red Rubber Band',
    price: 999.0,
    isFeatured: false,
    subCategory: {
      name: 'Watch',
    },
  },
  {
    name: 'LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color USB HQ',
    price: 2299.0,
    isFeatured: false,
    subCategory: {
      name: 'Television',
    },
  },
  {
    name: 'Console Game Stick HD Wireless Bluetooth Connect',
    price: 109.0,
    isFeatured: false,
    subCategory: {
      name: 'Gaming',
    },
  },
  {
    name: 'Mini Tablet Pro 16 inch HD Pencil 128 GB System RAM 28',
    price: 259.0,
    isFeatured: false,
    subCategory: {
      name: 'Tablet',
    },
  },
] satisfies ProductBase[];
