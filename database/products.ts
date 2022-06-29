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

type ValidSizes = '1L' | '750ml' | '375ml' | '200ml';
type ValidTypes = 'kentucky' | 'tennessee' | 'straight' | 'single-barrel';

interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
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
  ],
};
