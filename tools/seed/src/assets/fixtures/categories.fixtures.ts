import { Category } from '@e-shop/types';

type SeederCategory = Category;

export default [
  {
    _id: '673292d0e7d109c007c4507c',
    name: 'Home Appliances',
    slug: 'home-appliances',
  },
  {
    _id: '673292d0e7d109c007c45078',
    name: 'Audio & Headphones',
    slug: 'audio-headphones',
  },
  {
    _id: '673292d0e7d109c007c4507a',
    name: 'Cameras & Camcorders',
    slug: 'cameras-camcorders',
  },
  {
    _id: '673292d0e7d109c007c45077',
    name: 'Mobile & Accessories',
    slug: 'mobile-accessories',
  },
  {
    _id: '673292d0e7d109c007c4507b',
    name: 'TV & Home Theater',
    slug: 'tv-home-theater',
  },
  {
    _id: '673292d0e7d109c007c4507d',
    name: 'Gaming Equipment',
    slug: 'gaming-equipment',
  },
  {
    _id: '673292d0e7d109c007c45079',
    name: 'Computers & Tablets',
    slug: 'computers-tablets',
  },
] satisfies SeederCategory[];
