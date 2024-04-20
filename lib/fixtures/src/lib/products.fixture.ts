import { Product } from '@e-shop/types';

type ProductBase = Partial<Omit<Product, 'subCategory'>> & {
  subCategory: {
    name: string;
    category: {
      name: string;
    };
  };
};

export default [
  // 1
  {
    name: 'JPhone 13 High Quality Value Buy Best Camera Performance',
    price: 999.0,
    isFeatured: true,
    subCategory: {
      name: 'Phone',
      category: {
        name: 'Mobile & Accessories',
      },
    },
  },
  // 2
  {
    name: 'WH-1000XM4 Wireless Headphones High Quality',
    price: 59.0,
    isFeatured: true,
    subCategory: {
      name: 'Audio',
      category: {
        name: 'Audio & Headphones',
      },
    },
  },
  // 3
  {
    name: 'S21 Laptop Ultra HD LED Screen Feature 2023 Latest Model',
    price: 1199.0,
    isFeatured: true,
    subCategory: {
      name: 'Laptop',
      category: {
        name: 'Computers & Tablets',
      },
    },
  },
  // 4
  {
    name: 'Mini Polaroid Camera for Girls with Flash Light',
    price: 79.0,
    isFeatured: true,
    subCategory: {
      name: 'Camera',
      category: {
        name: 'Cameras & Camcorders',
      },
    },
  },
  // 5
  {
    name: 'AG OLED65CXPUA 4K Smart OLED TV New Model',
    price: 2799.0,
    isFeatured: true,
    subCategory: {
      name: 'Television',
      category: {
        name: 'TV & Home Theater',
      },
    },
  },
  // 6
  {
    name: 'Orange Watch 12 High Quality Health Sensors',
    price: 959.99,
    isFeatured: false,
    subCategory: {
      name: 'Watch',
      category: {
        name: 'Mobile & Accessories',
      },
    },
  },
  // 7
  {
    name: 'Ultra Tablet Qwerty HD 10765 Series Low Price',
    price: 799.0,
    isFeatured: false,
    subCategory: {
      name: 'Tablet',
      category: {
        name: 'Computers & Tablets',
      },
    },
  },
  // 8
  {
    name: 'Surface Laptop 4 XPS 13 Plus 64GB i7 Touch Screen',
    price: 2399.99,
    isFeatured: false,
    subCategory: {
      name: 'Laptop',
      category: {
        name: 'Computers & Tablets',
      },
    },
  },
  // 9
  {
    name: 'CamPro HERO10 Black Sleek Design 2023 4K Video',
    price: 1499.99,
    isFeatured: false,
    subCategory: {
      name: 'Camera',
      category: {
        name: 'Cameras & Camcorders',
      },
    },
  },
  // 10
  {
    name: 'LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB Movie Playback',
    price: 4599.0,
    isFeatured: false,
    subCategory: {
      name: 'Television',
      category: {
        name: 'TV & Home Theater',
      },
    },
  },
  // 11
  {
    name: 'VBI Mini 2 Fly More Combo Drone Sjrc F22S 4K Pro Ptz 5 Km Version Alpha Edition',
    price: 819.0,
    isFeatured: false,
    subCategory: {
      name: 'Camera',
      category: {
        name: 'Cameras & Camcorders',
      },
    },
  },
  // 12
  {
    name: 'Wireless Bluetooth Speaker Portable Sound System',
    price: 1199.0,
    isFeatured: false,
    subCategory: {
      name: 'Audio',
      category: {
        name: 'Audio & Headphones',
      },
    },
  },
  // 13
  {
    name: 'Tablet Pro 128 GB HD RAM 8 GB i8 1080P 4K Display',
    price: 129.0,
    isFeatured: false,
    subCategory: {
      name: 'Tablet',
      category: {
        name: 'Computers & Tablets',
      },
    },
  },
  // 14
  {
    name: 'Mobile Watch A Series GPS 7/144 45 mm Red Design',
    price: 999.0,
    isFeatured: false,
    subCategory: {
      name: 'Watch',
      category: {
        name: 'Mobile & Accessories',
      },
    },
  },
  // 15
  {
    name: 'LT Phone RAM 16/256 GB Rose Gold Guaranteed Quality',
    price: 999.0,
    isFeatured: false,
    subCategory: {
      name: 'Phone',
      category: {
        name: 'Mobile & Accessories',
      },
    },
  },
  // 16
  {
    name: 'Gaming Laptop ZDY 15.6 Inch 512 GB VGA High Performance',
    price: 1659.0,
    isFeatured: false,
    subCategory: {
      name: 'Laptop',
      category: {
        name: 'Computers & Tablets',
      },
    },
  },
  // 17
  {
    name: 'Wash Machine 11 KG Front Loading Steam Cycle Feature',
    price: 5699.0,
    isFeatured: false,
    subCategory: {
      name: 'Home',
      category: {
        name: 'Home Appliances',
      },
    },
  },
  // 18
  {
    name: 'QuietComfort 45 Wireless Headphones Advanced Noise Cancelling',
    price: 329.99,
    isFeatured: false,
    subCategory: {
      name: 'Audio',
      category: {
        name: 'Audio & Headphones',
      },
    },
  },
  // 19
  {
    name: 'Orange Watch 12 High Quality Health Sensor Advanced Tracking',
    price: 959.99,
    isFeatured: false,
    subCategory: {
      name: 'Watch',
      category: {
        name: 'Mobile & Accessories',
      },
    },
  },
  // 20
  {
    name: 'CamPro HERO10 Black Sleek Design 2023 4K Ultra HD',
    price: 1499.99,
    isFeatured: false,
    subCategory: {
      name: 'Camera',
      category: {
        name: 'Cameras & Camcorders',
      },
    },
  },
  // 21
  {
    name: 'Tablet Pro 128 GB HD RAM 8 GB i8 1080P 4K Advanced Graphics',
    price: 129.0,
    isFeatured: false,
    subCategory: {
      name: 'Tablet',
      category: {
        name: 'Computers & Tablets',
      },
    },
  },
  // 22
  {
    name: 'AG OLED65CXPUA 4K Smart OLED TV New Generation',
    price: 2799.0,
    isFeatured: false,
    subCategory: {
      name: 'Television',
      category: {
        name: 'TV & Home Theater',
      },
    },
  },
  // 23
  {
    name: 'Crystal 4K Smart 50” Black LED TV HD Quality High Definition',
    price: 8199.0,
    isFeatured: false,
    subCategory: {
      name: 'Television',
      category: {
        name: 'TV & Home Theater',
      },
    },
  },
  // 24
  {
    name: 'Mini Tablet Pro 16 inch HD Pencil 128 GB System RAM 28 GB',
    price: 259.0,
    isFeatured: false,
    subCategory: {
      name: 'Tablet',
      category: {
        name: 'Computers & Tablets',
      },
    },
  },
  // 25
  {
    name: '134S Wireless Max Hifi Stereo Headphones Best Sound',
    price: 29.0,
    isFeatured: false,
    subCategory: {
      name: 'Audio',
      category: {
        name: 'Audio & Headphones',
      },
    },
  },
  // 26
  {
    name: 'Game Station 15 Disc Edition with Console Full Set',
    price: 5299.99,
    isFeatured: false,
    subCategory: {
      name: 'Gaming',
      category: {
        name: 'Gaming Equipment',
      },
    },
  },
  // 27
  {
    name: 'NexSUS ROCK Strix Scar 17 Gaming Laptop High Performance',
    price: 2999.99,
    isFeatured: false,
    subCategory: {
      name: 'Laptop',
      category: {
        name: 'Computers & Tablets',
      },
    },
  },
  // 28
  {
    name: '2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD Performance',
    price: 1659.0,
    isFeatured: false,
    subCategory: {
      name: 'Laptop',
      category: {
        name: 'Computers & Tablets',
      },
    },
  },
  // 29
  {
    name: 'Mobile Watch A Series GPS 7/144 45 mm Red Rubber Band Advanced',
    price: 999.0,
    isFeatured: false,
    subCategory: {
      name: 'Watch',
      category: {
        name: 'Mobile & Accessories',
      },
    },
  },
  // 30
  {
    name: 'LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color USB HQ Visual',
    price: 2299.0,
    isFeatured: false,
    subCategory: {
      name: 'Television',
      category: {
        name: 'TV & Home Theater',
      },
    },
  },
  // 31
  {
    name: 'Console Game Stick HD Wireless Bluetooth Connect Gaming Experience',
    price: 109.0,
    isFeatured: false,
    subCategory: {
      name: 'Gaming',
      category: {
        name: 'Gaming Equipment',
      },
    },
  },
] satisfies ProductBase[];
