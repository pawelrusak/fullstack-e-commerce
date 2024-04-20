import { Product } from '@e-shop/types';

type ProductBase = Partial<Product>;

export default [
  // 1
  {
    _id: '5f43ba27320000271cee0001',
    name: 'JPhone 13 High Quality Value Buy Best Camera Performance',
    price: 999.0,
    isFeatured: true,
    size: { width: 7.6, height: 14.7, depth: 0.8 },
    brand: 'Apple',
    subCategory: {
      _id: '5f43ba27320000271ced01',
      name: 'Phone',
      category: {
        _id: '5f43ba27320000271ced100',
        name: 'Mobile & Accessories',
      },
    },
  },
  // 2
  {
    _id: '5f43ba27320000271cee0002',
    name: 'WH-1000XM4 Wireless Headphones High Quality',
    price: 59.0,
    isFeatured: true,
    size: { width: 15, height: 20, depth: 5 },
    brand: 'Sony',
    subCategory: {
      _id: '5f43ba27320000271ced02',
      name: 'Audio',
      category: {
        _id: '5f43ba27320000271ced101',
        name: 'Audio & Headphones',
      },
    },
  },
  // 3
  {
    _id: '5f43ba27320000271cee0003',
    name: 'S21 Laptop Ultra HD LED Screen Feature 2023 Latest Model',
    price: 1199.0,
    isFeatured: true,
    size: { width: 35, height: 24, depth: 2 },
    brand: 'Samsung',
    subCategory: {
      _id: '5f43ba27320000271ced03',
      name: 'Laptop',
      category: {
        _id: '5f43ba27320000271ced102',
        name: 'Computers & Tablets',
      },
    },
  },
  // 4
  {
    _id: '5f43ba27320000271cee0004',
    name: 'Mini Polaroid Camera for Girls with Flash Light',
    price: 79.0,
    isFeatured: true,
    size: { width: 10, height: 7, depth: 6 },
    brand: 'Panasonic',
    subCategory: {
      _id: '5f43ba27320000271ced04',
      name: 'Camera',
      category: {
        _id: '5f43ba27320000271ced103',
        name: 'Cameras & Camcorders',
      },
    },
  },
  // 5
  {
    _id: '5f43ba27320000271cee0005',
    name: 'AG OLED65CXPUA 4K Smart OLED TV New Model',
    price: 2799.0,
    isFeatured: true,
    size: { width: 145, height: 83, depth: 20 },
    brand: 'LG',
    subCategory: {
      name: 'Television',
      _id: '5f43ba27320000271ced05',
      category: {
        name: 'TV & Home Theater',
        _id: '5f43ba27320000271ced104',
      },
    },
  },
  // 6
  {
    _id: '5f43ba27320000271cee0006',
    name: 'Orange Watch 12 High Quality Health Sensors',
    price: 959.99,
    isFeatured: false,
    size: { width: 5, height: 5, depth: 1.2 },
    brand: 'Samsung',
    subCategory: {
      name: 'Watch',
      _id: '5f43ba27320000271ced06',
      category: {
        name: 'Mobile & Accessories',
        _id: '5f43ba27320000271ced100',
      },
    },
  },
  // 7
  {
    _id: '5f43ba27320000271cee0007',
    name: 'Ultra Tablet Qwerty HD 10765 Series Low Price',
    price: 799.0,
    isFeatured: false,
    size: { width: 28, height: 20, depth: 1.5 },
    brand: 'Dell',
    subCategory: {
      name: 'Tablet',
      _id: '5f43ba27320000271ced07',
      category: {
        name: 'Computers & Tablets',
        _id: '5f43ba27320000271ced102',
      },
    },
  },
  // 8
  {
    _id: '5f43ba27320000271cee0008',
    name: 'Surface Laptop 4 XPS 13 Plus 64GB i7 Touch Screen',
    price: 2399.99,
    isFeatured: false,
    size: { width: 33, height: 23, depth: 2 },
    brand: 'Microsoft',
    subCategory: {
      name: 'Laptop',
      _id: '5f43ba27320000271ced03',
      category: {
        name: 'Computers & Tablets',
        _id: '5f43ba27320000271ced102',
      },
    },
  },
  // 9
  {
    _id: '5f43ba27320000271cee0009',
    name: 'CamPro HERO10 Black Sleek Design 2023 4K Video',
    price: 1499.99,
    isFeatured: false,
    size: { width: 15, height: 10, depth: 9 },
    brand: 'Canon',
    subCategory: {
      name: 'Camera',
      _id: '5f43ba27320000271ced04',
      category: {
        name: 'Cameras & Camcorders',
        _id: '5f43ba27320000271ced103',
      },
    },
  },
  // 10
  {
    _id: '5f43ba27320000271cee0010',
    name: 'LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB Movie Playback',
    price: 4599.0,
    isFeatured: false,
    size: { width: 97, height: 56, depth: 15 },
    brand: 'LG',
    subCategory: {
      _id: '5f43ba27320000271ced05',
      name: 'Television',
      category: {
        _id: '5f43ba27320000271ced104',
        name: 'TV & Home Theater',
      },
    },
  },
  // 11
  {
    _id: '5f43ba27320000271cee0011',
    name: 'VBI Mini 2 Fly More Combo Drone Sjrc F22S 4K Pro Ptz 5 Km Version Alpha Edition',
    price: 819.0,
    isFeatured: false,
    size: { width: 40, height: 40, depth: 10 },
    brand: 'Sony',
    subCategory: {
      name: 'Camera',
      _id: '5f43ba27320000271ced04',
      category: {
        name: 'Cameras & Camcorders',
        _id: '5f43ba27320000271ced103',
      },
    },
  },
  // 12
  {
    _id: '5f43ba27320000271cee0012',
    name: 'Wireless Bluetooth Speaker Portable Sound System',
    price: 1199.0,
    isFeatured: false,
    size: { width: 25, height: 15, depth: 12 },
    brand: 'Sony',
    subCategory: {
      _id: '5f43ba27320000271ced02',
      name: 'Audio',
      category: {
        _id: '5f43ba27320000271ced101',
        name: 'Audio & Headphones',
      },
    },
  },
  // 13
  {
    _id: '5f43ba27320000271cee0013',
    name: 'Tablet Pro 128 GB HD RAM 8 GB i8 1080P 4K Display',
    price: 129.0,
    isFeatured: false,
    size: { width: 29, height: 18, depth: 0.8 },
    brand: 'Lenovo',
    subCategory: {
      _id: '5f43ba27320000271ced07',
      name: 'Tablet',
      category: {
        _id: '5f43ba27320000271ced102',
        name: 'Computers & Tablets',
      },
    },
  },
  // 14
  {
    _id: '5f43ba27320000271cee0014',
    name: 'Mobile Watch A Series GPS 7/144 45 mm Red Design',
    price: 999.0,
    isFeatured: false,
    size: { width: 4.5, height: 4.5, depth: 1.1 },
    brand: 'Samsung',
    subCategory: {
      _id: '5f43ba27320000271ced06',
      name: 'Watch',
      category: {
        _id: '5f43ba27320000271ced100',
        name: 'Mobile & Accessories',
      },
    },
  },
  // 15
  {
    _id: '5f43ba27320000271cee0015',
    name: 'LT Phone RAM 16/256 GB Rose Gold Guaranteed Quality',
    price: 999.0,
    isFeatured: false,
    size: { width: 7.5, height: 15.5, depth: 0.7 },
    brand: 'Apple',
    subCategory: {
      _id: '5f43ba27320000271ced01',
      name: 'Phone',
      category: {
        _id: '5f43ba27320000271ced100',
        name: 'Mobile & Accessories',
      },
    },
  },
  // 16
  {
    _id: '5f43ba27320000271cee0016',
    name: 'Gaming Laptop ZDY 15.6 Inch 512 GB VGA High Performance',
    price: 1659.0,
    isFeatured: false,
    size: { width: 36, height: 25, depth: 2.2 },
    brand: 'Asus',
    subCategory: {
      _id: '5f43ba27320000271ced03',
      name: 'Laptop',
      category: {
        _id: '5f43ba27320000271ced102',
        name: 'Computers & Tablets',
      },
    },
  },
  // 17
  {
    _id: '5f43ba27320000271cee0017',
    name: 'Wash Machine 11 KG Front Loading Steam Cycle Feature',
    price: 5699.0,
    isFeatured: false,
    size: { width: 60, height: 85, depth: 65 },
    brand: 'LG',
    subCategory: {
      _id: '5f43ba27320000271ced08',
      name: 'Home',
      category: {
        _id: '5f43ba27320000271ced105',
        name: 'Home Appliances',
      },
    },
  },
  // 18
  {
    _id: '5f43ba27320000271cee0018',
    name: 'QuietComfort 45 Wireless Headphones Advanced Noise Cancelling',
    price: 329.99,
    isFeatured: false,
    size: { width: 17, height: 20, depth: 6 },
    brand: 'Bose',
    subCategory: {
      _id: '5f43ba27320000271ced02',
      name: 'Audio',
      category: {
        _id: '5f43ba27320000271ced101',
        name: 'Audio & Headphones',
      },
    },
  },
  // 19
  {
    _id: '5f43ba27320000271cee0019',
    name: 'Orange Watch 12 High Quality Health Sensor Advanced Tracking',
    price: 959.99,
    isFeatured: false,
    size: { width: 4.8, height: 4.8, depth: 1.3 },
    brand: 'Samsung',
    subCategory: {
      _id: '5f43ba27320000271ced06',
      name: 'Watch',
      category: {
        _id: '5f43ba27320000271ced100',
        name: 'Mobile & Accessories',
      },
    },
  },
  // 20
  {
    _id: '5f43ba27320000271cee0020',
    name: 'CamPro HERO10 Black Sleek Design 2023 4K Ultra HD',
    price: 1499.99,
    isFeatured: false,
    size: { width: 20, height: 15, depth: 10 },
    brand: 'Canon',
    subCategory: {
      _id: '5f43ba27320000271ced04',
      name: 'Camera',
      category: {
        _id: '5f43ba27320000271ced103',
        name: 'Cameras & Camcorders',
      },
    },
  },
  // 21
  {
    _id: '5f43ba27320000271cee0021',
    name: 'Tablet Pro 128 GB HD RAM 8 GB i8 1080P 4K Advanced Graphics',
    price: 129.0,
    isFeatured: false,
    size: { width: 29, height: 20, depth: 0.85 },
    brand: 'Apple',
    subCategory: {
      _id: '5f43ba27320000271ced07',
      name: 'Tablet',
      category: {
        _id: '5f43ba27320000271ced102',
        name: 'Computers & Tablets',
      },
    },
  },
  // 22
  {
    _id: '5f43ba27320000271cee0022',
    name: 'AG OLED65CXPUA 4K Smart OLED TV New Generation',
    price: 2799.0,
    isFeatured: false,
    size: { width: 146, height: 84, depth: 20 },
    brand: 'LG',
    subCategory: {
      _id: '5f43ba27320000271ced05',
      name: 'Television',
      category: {
        _id: '5f43ba27320000271ced104',
        name: 'TV & Home Theater',
      },
    },
  },
  // 23
  {
    _id: '5f43ba27320000271cee0023',
    name: 'Crystal 4K Smart 50” Black LED TV HD Quality High Definition',
    price: 8199.0,
    isFeatured: false,
    size: { width: 112, height: 65, depth: 15 },
    brand: 'Sony',
    subCategory: {
      _id: '5f43ba27320000271ced05',
      name: 'Television',
      category: {
        _id: '5f43ba27320000271ced104',
        name: 'TV & Home Theater',
      },
    },
  },
  // 24
  {
    _id: '5f43ba27320000271cee0024',
    name: 'Mini Tablet Pro 16 inch HD Pencil 128 GB System RAM 28 GB',
    price: 259.0,
    isFeatured: false,
    size: { width: 30, height: 20, depth: 1 },
    brand: 'Acer',
    subCategory: {
      _id: '5f43ba27320000271ced07',
      name: 'Tablet',
      category: {
        _id: '5f43ba27320000271ced102',
        name: 'Computers & Tablets',
      },
    },
  },
  // 25
  {
    _id: '5f43ba27320000271cee0025',
    name: '134S Wireless Max Hifi Stereo Headphones Best Sound',
    price: 29.0,
    isFeatured: false,
    size: { width: 20, height: 20, depth: 7 },
    brand: 'Sony',
    subCategory: {
      _id: '5f43ba27320000271ced02',
      name: 'Audio',
      category: {
        _id: '5f43ba27320000271ced101',
        name: 'Audio & Headphones',
      },
    },
  },
  // 26
  {
    _id: '5f43ba27320000271cee0026',
    name: 'Game Station 15 Disc Edition with Console Full Set',
    price: 5299.99,
    isFeatured: false,
    size: { width: 55, height: 15, depth: 45 },
    brand: 'Sony',
    subCategory: {
      _id: '5f43ba27320000271ced09',
      name: 'Gaming',
      category: {
        _id: '5f43ba27320000271ced106',
        name: 'Gaming Equipment',
      },
    },
  },
  // 27
  {
    _id: '5f43ba27320000271cee0027',
    name: 'NexSUS ROCK Strix Scar 17 Gaming Laptop High Performance',
    price: 2999.99,
    isFeatured: false,
    size: { width: 39, height: 27, depth: 2.5 },
    brand: 'Asus',
    subCategory: {
      _id: '5f43ba27320000271ced03',
      name: 'Laptop',
      category: {
        _id: '5f43ba27320000271ced102',
        name: 'Computers & Tablets',
      },
    },
  },
  // 28
  {
    _id: '5f43ba27320000271cee0028',
    name: '2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD Performance',
    price: 1659.0,
    isFeatured: false,
    size: { width: 32, height: 23, depth: 1.8 },
    brand: 'HP',
    subCategory: {
      _id: '5f43ba27320000271ced03',
      name: 'Laptop',
      category: {
        _id: '5f43ba27320000271ced102',
        name: 'Computers & Tablets',
      },
    },
  },
  // 29
  {
    _id: '5f43ba27320000271cee0029',
    name: 'Mobile Watch A Series GPS 7/144 45 mm Red Rubber Band Advanced',
    price: 999.0,
    isFeatured: false,
    size: { width: 4.5, height: 4.5, depth: 1.1 },
    brand: 'Apple',
    subCategory: {
      _id: '5f43ba27320000271ced06',
      name: 'Watch',
      category: {
        _id: '5f43ba27320000271ced100',
        name: 'Mobile & Accessories',
      },
    },
  },
  // 30
  {
    _id: '5f43ba27320000271cee0030',
    name: 'LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color USB HQ Visual',
    price: 2299.0,
    isFeatured: false,
    size: { width: 97, height: 57, depth: 15 },
    brand: 'LG',
    subCategory: {
      _id: '5f43ba27320000271ced05',
      name: 'Television',
      category: {
        _id: '5f43ba27320000271ced104',
        name: 'TV & Home Theater',
      },
    },
  },
  // 31
  {
    _id: '5f43ba27320000271cee0031',
    name: 'Console Game Stick HD Wireless Bluetooth Connect Gaming Experience',
    price: 109.0,
    isFeatured: false,
    size: { width: 30, height: 10, depth: 5 },
    brand: 'Acer',
    subCategory: {
      _id: '5f43ba27320000271ced09',
      name: 'Gaming',
      category: {
        _id: '5f43ba27320000271ced106',
        name: 'Gaming Equipment',
      },
    },
  },
] satisfies ProductBase[];
