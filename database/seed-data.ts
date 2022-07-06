import bcrypt from 'bcryptjs';

interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  ABV: string;
}

interface SeedUser {
  name: String;
  email: String;
  password: String;
  role: 'admin' | 'client';
}

type ValidSizes = '1L' | '750ml' | '375ml' | '200ml';
type ValidTypes = 'kentucky' | 'tennessee' | 'straight' | 'single-barrel';

interface SeedData {
  users: SeedUser[];
  products: SeedProduct[];
}

export const initialData: SeedData = {
  users: [
    {
      name: 'Tomas Ferreras',
      email: 'tomas@google.com',
      password: bcrypt.hashSync('123456'),
      role: 'admin',
    },
    {
      name: 'Ivan Peuscovich',
      email: 'ivan@google.com',
      password: bcrypt.hashSync('123456'),
      role: 'client',
    },
  ],

  products: [
    {
      title: 'Bourbon Cream',
      description:
        'Bourbon Cream is handcrafted using Buffalo Trace Kentucky Straight Bourbon, making it a perfect marriage of rich delicious cream and smooth Kentucky bourbon.',
      images: ['bourbon-cream.webp', 'knob-creek.webp'],
      inStock: 12,
      price: 56,
      sizes: ['375ml', '750ml', '1L'],
      type: 'kentucky',
      ABV: '15%',
      slug: 'bourbon-cream',
      tags: ['bourbon', 'cream', 'buffalo'],
    },
    {
      title: 'Knob Creek 12 Year',
      description:
        'Knob Creek Small Batch Bourbon is one of four bourbons that comprise Jim Beam’s Small Batch Bourbon Collection. The others are Basil Hayden’s, Baker’s Bourbon, and Booker’s Bourbon. Knob Creek 12 Year was originally positioned as a limited edition bourbon when it was released in late 2019.',
      images: ['knob-creek.webp'],
      inStock: 2,
      price: 150,
      sizes: ['200ml', '375ml', '750ml'],
      type: 'straight',
      ABV: '50%',
      slug: 'Knob-Creek-12-Year',
      tags: ['knob', '12', 'creek'],
    },
    {
      title: 'Jack Daniel’s single barrel',
      description:
        'Bottled at 94-proof, Single Barrel Select layers subtle notes of caramel and spice with bright fruit notes and sweet aromatics for a Tennessee Whiskey with one-of-a-kind flavor.',
      images: ['jackdaniels-single-barrel.webp'],
      inStock: 2,
      price: 50,
      sizes: ['200ml', '750ml', '1L'],
      type: 'single-barrel',
      ABV: '45%',
      slug: 'Jack-Daniels-single-barrel',
      tags: ['daniels', 'jack', 'single'],
    },
    {
      title: 'Jim Beam white-label',
      description:
        '220 years of experience goes into every bottle. Along with corn, rye, malted barley, water, time, pride, and of course, true passion. Isn’t it good to know some things never go out of style? Take a sip and you’ll know what we mean.',
      images: ['jim-beam-white.webp'],
      inStock: 24,
      price: 32,
      sizes: ['200ml', '375ml', '750ml', '1L'],
      type: 'kentucky',
      ABV: '50.5%',
      slug: 'jim-beam-white-label',
      tags: ['kentucky', 'bourbon', 'jim', 'beam'],
    },
    {
      title: 'Wild Turkey 101',
      description:
        'For over 60 years, Wild Turkey has been making 101 the same way, the right way. Aged in American White Oak barrels coated in the deepest alligator char, Wild Turkey 101 has an impossible-to-miss character. For over 60 years, Wild Turkey has been making 101 the same way, the right way. Aged in American White Oak barrels coated in the deepest alligator char, Wild Turkey 101 has an impossible-to-miss character.',
      images: ['wild-turkey-101.webp'],
      inStock: 8,
      price: 54,
      sizes: ['200ml', '375ml', '750ml', '1L'],
      type: 'kentucky',
      ABV: '50.5%',
      slug: 'wild-turkey-101',
      tags: ['kentucky', 'bourbon', 'jim', 'beam'],
    },
    {
      title: 'Puni',
      description:
        '220 years of experience goes into every bottle. Along with corn, rye, malted barley, water, time, pride, and of course, true passion. Isn’t it good to know some things never go out of style? Take a sip and you’ll know what we mean.',
      images: ['jackdaniels-single-barrel.webp'],
      inStock: 24,
      price: 32,
      sizes: ['200ml', '375ml', '750ml', '1L'],
      type: 'single-barrel',
      ABV: '45.5%',
      slug: 'puni',
      tags: ['bourbon', 'puni', 'turkey', 'beam'],
    },
    {
      title: 'Jack Daniel’s single barrel',
      description:
        'Bottled at 94-proof, Single Barrel Select layers subtle notes of caramel and spice with bright fruit notes and sweet aromatics for a Tennessee Whiskey with one-of-a-kind flavor.',
      images: ['jackdaniels-single-barrel.webp'],
      inStock: 2,
      price: 50,
      sizes: ['200ml', '750ml', '1L'],
      type: 'single-barrel',
      ABV: '45%',
      slug: 'Jack-Daniels-single-barrelwer',
      tags: ['daniels', 'jack', 'single'],
    },
    {
      title: 'Bourbon Cream',
      description:
        'Bourbon Cream is handcrafted using Buffalo Trace Kentucky Straight Bourbon, making it a perfect marriage of rich delicious cream and smooth Kentucky bourbon.',
      images: ['bourbon-cream.webp', 'knob-creek.webp'],
      inStock: 12,
      price: 56,
      sizes: ['375ml', '750ml', '1L'],
      type: 'kentucky',
      ABV: '15%',
      slug: 'bourbon-creamasdf',
      tags: ['bourbon', 'cream', 'buffalo'],
    },
    {
      title: 'Wild Turkey 101',
      description:
        'For over 60 years, Wild Turkey has been making 101 the same way, the right way. Aged in American White Oak barrels coated in the deepest alligator char, Wild Turkey 101 has an impossible-to-miss character. For over 60 years, Wild Turkey has been making 101 the same way, the right way. Aged in American White Oak barrels coated in the deepest alligator char, Wild Turkey 101 has an impossible-to-miss character.',
      images: ['wild-turkey-101.webp'],
      inStock: 8,
      price: 54,
      sizes: ['200ml', '375ml', '750ml', '1L'],
      type: 'kentucky',
      ABV: '50.5%',
      slug: 'wild-turkey-101fsd',
      tags: ['kentucky', 'bourbon', 'jim', 'beam'],
    },
    {
      title: 'Puni',
      description:
        '220 years of experience goes into every bottle. Along with corn, rye, malted barley, water, time, pride, and of course, true passion. Isn’t it good to know some things never go out of style? Take a sip and you’ll know what we mean.',
      images: ['jackdaniels-single-barrel.webp'],
      inStock: 24,
      price: 32,
      sizes: ['200ml', '375ml', '750ml', '1L'],
      type: 'single-barrel',
      ABV: '45.5%',
      slug: 'puniii',
      tags: ['bourbon', 'puni', 'turkey', 'beam'],
    },
  ],
};
