interface SEED_DATA {
  products: productInterface[];
}

interface productInterface {
  description: string;
  image: string;
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  ABV: number;
}

type ValidSizes = '1L' | '750ml' | '375ml' | '200ml';
type ValidTypes =
  | 'kentucky'
  | 'tennessee'
  | 'rye'
  | 'single-barrel'
  | 'accessories';

export const initialData: SEED_DATA = {
  products: [
    {
      title: "Baker's 7 Year Old",
      description:
        "Baker's 7 Year Old Kentucky Straight Bourbon Whiskey is named after Baker Beam, the grand nephew of of the legendary Jim Beam. The bourbon is made from a mash dominated by corn and fermented using a special strain of jug yeast that has been in the Beam family for over six decades. Following fermentation, the bourbon is distilled and then matured in new, American oak casks for a minimum of seven years. As a result, the bourbon has an aroma of honeyed fruit, creamy vanilla and caramel. The aroma gives way to notes of roasted nuts, candied fruits, vanilla, toffee and milk chocolate. The finish is rich and lasting, with sweet and spicy flavors mingling with each other.",
      image: 'Bakers-7-YO-Bourbon-Whiskey.webp',
      inStock: 12,
      price: 69.99,
      sizes: ['200ml', '375ml', '750ml', '1L'],
      type: 'kentucky',
      ABV: 53.5,
      slug: 'bakers-7-year-old',
      tags: ['baker', '7 years', 'kentucky', 'straight'],
    },
    {
      title: "Booker's Bourbon",
      description:
        "Unlike anything you have ever tasted, Booker's is one of the only uncut, unfiltered, straight-from-the-barrel, bourbons available today. It's bottled at its natural proof of between 121 and 127, and aged between six and eight years. Booker's Bourbon delivers a range of intense flavors from oak tannin and smoky vanilla to lighter tones of mocha and coffee. Add spring water to customize the taste and finish to your palate. The complexity provided by this straight-from-the-barrel bourbon makes Booker's the rarest, absolute best bourbon you'll ever taste.",
      image: 'Bookers-Bourbon-Whiskey.webp',
      inStock: 14,
      price: 100,
      sizes: ['200ml', '375ml', '750ml', '1L'],
      type: 'kentucky',
      ABV: 63,
      slug: 'bookers-bourbon',
      tags: ['booker', 'bourbon', 'kentucky'],
    },
    {
      title: 'Buffalo Trace',
      description:
        'The Buffalo Trace name is meant to honor the routes, or traces, of the pioneers who ventured out into the wilds of North American in search of a life. One, the Great Buffalo Trace, led to a settlement near Frankfort, Kentucky, where the distillery was born and has produced some of the finest American whiskey for more than 200 years. But even if Davy Crockett tales of the American migration west don’t excite you, the distillery’s spice-driven well-aged whiskeys certainly will. Its spice-and-char-driven flavor renders the bourbon an excellent choice for a memorable Manhattan (and mixing in general with its 90-proof extra octane). When enjoyed neat, it’s slippery and spicy on the tongue, with silky notes of butterscotch; add a bit of water and it opens up with significant vanilla and allspice. It’s the benchmark whiskey to start with in understanding the Buffalo Trace line, which is well worth exploring.',
      image: 'Buffalo-Trace.webp',
      inStock: 42,
      price: 25,
      sizes: ['200ml', '375ml', '750ml', '1L'],
      type: 'kentucky',
      ABV: 45,
      slug: 'buffalo-trace',
      tags: ['buffalo', 'trace', 'kentucky', 'bourbon'],
    },
    {
      title: 'Bulleit Bourbon 10 Year Old',
      description:
        'According to Tom Bulleit, great-great-grandson of Augustus Bulleit, the first batch of Bulleit bourbon was made around 1830 and its production was discontinued after Augustus’s death in 1860. It’s original mash bill was two-thirds rye and one-third corn. In 1987, Tom Bulleit oversaw the distillation of the first batch of the modern-day Bulleit bourbon and paid tribute to the original mash bill by keeping the rye content higher than most bourbons on the market. In 1997, the Bulleit brand name was bought by Seagram and was introduced to U.S. markets in 1999. The Bulleit brand was acquired by Diageo when the company bought Seagram Company in 2000. Although Bulleit’s label says, “Distilled by the Bulleit Distilling Co.,” the company currently sources its bourbon. Until very recently, Four Roses was the supplier, and it is not officially known who Bulleit’s current supplier is. The brand also has no age statement and cask strength versions of their bourbon and also a rye whiskey. Bulleit is scheduled to open their own distillery at the end of 2016.',
      image: 'Bulleit-10-YO-Bourbon-Whiskey-1.webp',
      inStock: 13,
      price: 37.99,
      sizes: ['200ml', '375ml', '750ml', '1L'],
      type: 'kentucky',
      ABV: 45.6,
      slug: 'bulleit-bourbon-10-year-old',
      tags: ['bulleit', '10 years', 'kentucky', 'bourbon'],
    },
    {
      title: 'Bulleit Bourbon',
      description:
        "Bulleit Bourbon is inspired by the whiskey that was pioneered over 150 years ago. Only ingredients of the very highest quality are used. The complexity of Bulleit Bourbon comes from its unique blend of rye, corn, and barley malt, along with special strains of yeast and pure Kentucky limestone-filtered water. Due to its especially high rye content, Bulleit Bourbon has a bold, spicy character with a finish that's distinctively clean and smooth. Medium amber in color, with gentle spiciness and sweet oak aromas, the mid-palate is smooth with tones of maple, oak, and nutmeg. The finish is long, dry, and satiny with a light-tasting toffee flavor that lingers long after the final sip. Simply combine our bourbon whiskey with cloves, lemon juice, brown sugar and hot water for a comforting Hot Toddy. Bulleit Bourbon earned a gold medal at the 2021 San Francisco World Spirits Competition. Includes one 90 proof 1 L bottle of Bourbon Whiskey. Please drink responsibly.",
      image: 'Bulleit-Bourbon.webp',
      inStock: 10,
      price: 32.99,
      sizes: ['200ml', '375ml', '750ml', '1L'],
      type: 'kentucky',
      ABV: 45,
      slug: 'bulleit-bourbon',
      tags: ['bulleit', 'kentucky', 'bourbon'],
    },
    {
      title: 'Bulleit Rye',
      description:
        "Savor the bold, spicy character of Bulleit 95 Rye Whiskey. With its russet color and aromas of biscuit, spice and dried apricot, our straight rye whiskey makes a good first impression before it's even opened. Its distinctive taste leads into a generous finish that is long, satiny and woody with a hint of light toffee. The flavor profile of our rye whiskey allows you to enjoy its clean finish that lingers long after the final sip. Simply combine our rye whiskey with sweet vermouth, a dash of bitters and a cherry for a classic Manhattan cocktail. Bulleit 95 Rye Whiskey earned a gold medal at the 2021 San Francisco World Spirits Competition. Includes one 90 proof 1 L bottle of 95 Rye Whiskey. Please drink responsibly.",
      image: 'Bulleit-Rye.webp',
      inStock: 19,
      price: 28.99,
      sizes: ['200ml', '375ml', '750ml', '1L'],
      type: 'kentucky',
      ABV: 46,
      slug: 'bulleit-rye',
      tags: ['bulleit', 'rye', 'kentucky', 'bourbon'],
    },
    {
      title: 'Bulleit Tattoo Edition',
      description:
        'Bulleit Bourbon Tattoo Edition is a series of four unique tattoo designs on the iconic Bulleit bottle. These collectible bottles were created in partnership with some of the country’s top tattoo artists whose work is inspired by the frontier spirit and culture of the cities they live in. The collaborations mark the first time the Bulleit Bourbon bottle has been altered, transforming the frontier-inspired bottles into collectable pieces of modern art. Each bottle includes a hangtag featuring a scannable QR code to access an interactive Augmented Reality experience, bringing each artist’s design to life digitally. Bulleit Bourbon Tattoo Edition is a series of four unique tattoo designs on the iconic Bulleit bottle. These collectible bottles were created in partnership with some of the country’s top tattoo artists whose work is inspired by the frontier spirit and culture of the cities they live in. The collaborations mark the first time the Bulleit Bourbon bottle has been altered, transforming the frontier-inspired bottles into collectable pieces of modern art. Each bottle includes a hangtag featuring a scannable QR code to access an interactive Augmented Reality experience, bringing each artist’s design to life digitally.',
      image: 'Bulleit-Tattoo-Edition.webp',
      inStock: 21,
      price: 34,
      sizes: ['200ml', '375ml', '750ml', '1L'],
      type: 'kentucky',
      ABV: 45,
      slug: 'bulleit-tattoo-edition',
      tags: ['bulleit', 'tattoo', 'bourbon'],
    },
    {
      title: 'Eagle Rare Bourbon Whiskey',
      description:
        "Eagle Rare Bourbon Whiskey is masterfully crafted and carefully aged for no less than ten years. Every barrel is discriminately selected to offer consistent flavor but with a seemingly individual personality. Eagle Rare is a bourbon that lives up to its name with its lofty, distinctive taste experience. Easily one of the most tactile yet assertive and expressive bourbons I've tasted in the last two years; fasten your seat belts.",
      image: 'Eagle-Rare-Bourbon-Whiskey.webp',
      inStock: 9,
      price: 48,
      sizes: ['200ml', '375ml', '750ml', '1L'],
      type: 'kentucky',
      ABV: 44.7,
      slug: 'eagle-rare-bourbon-whiskey',
      tags: ['eagle', 'rare', 'bourbon', 'whiskey'],
    },
    {
      title: 'Elijah Craig Small Batch Bourbon',
      description:
        'Elijah Craig was a Virginia-born Baptist reverend who preached the word of the bible on the frontier but practiced the art and science of farm distilling, one of many at the time who tried to find further fortune to spin from crops. While it’s not clear if he actually invented the process, Craig is given credit for popularizing the signature American bourbon practice of aging the spirit in charred oak barrels, a step that is now included in the federal laws that govern the making of the popular whiskey. The high corn percentage and the likely addition of wheat to the mash bill of Elijah Craig add a plush, soft texture to the Elijah Craig small batch that is nearly confectionary, in the best possible way. Its fruity, perfumed nose is alluring and its caramel and vanilla notes become even more pronounced with just a few drops of water. It’s such an easy sipper.',
      image: 'Elijah-Craig-Small-Batch-Bourbon-1.webp',
      inStock: 18,
      price: 29.99,
      sizes: ['200ml', '375ml', '750ml', '1L'],
      type: 'kentucky',
      ABV: 47,
      slug: 'elijah-craig-small-batch-bourbon',
      tags: ['elijah', 'small', 'batch', 'craig'],
    },
    {
      title: 'Evan Williams Single Barrel vintage bourbon 2013',
      description:
        "This 5-time Whiskey of the Year award winner is hand selected by Heaven Hill's Master Distiller for characteristics unique to each vintage. Every bottle is marked with the vintage date it was put into oak, along with the year it was bottled and the serial number of the barrel that the Bourbon was drawn from. Bottled at 86.6 proof and from bourbons aged 7-8 years. Aromas of dark caramel, sweet oak and charred wood. Flavors are lush and spicy, oak with honey, apple and orange notes. The finish is long, graceful and relaxed. Smooth from start to finish, with a fair amount of oak and a medium body.",
      image: 'Evan-Williams-Single-Barrel-vintage-bourbon-whiskey-2013.webp',
      inStock: 18,
      price: 29.5,
      sizes: ['200ml', '375ml', '750ml', '1L'],
      type: 'single-barrel',
      ABV: 47,
      slug: 'evan-williams-single-barrel-vintage-bourbon-2013',
      tags: ['evan', 'williams', 'single-barrel', 'vintage'],
    },
    {
      title: 'Gentleman Jack',
      description:
        'There’s not much to more say about the well known Jack Daniel’s Gentleman Jack Whiskey that hasn’t already been said about the original Jack Daniel’s Old No. 7. While both are maple charcoal filtered / mellowed prior to barreling, Gentleman Jack Whiskey is charcoal filtered one more time prior to bottling, supposedly adding complexity and mellowness to the whiskey. It doubles up on the Tennessee Whiskey charcoal filtering requirement. Not much is publicly known about whether Jack Daniel’s selects specific barrels to turn into Gentleman Jack Whiskey or indiscriminately divert some percentage of regular Jack for the second filtering. My best guess is that they do not specifically set aside special barrels for Gentleman Jack. Other than that, I do know that they market the heck out of it and have various product placements, such as on Shameless (the US version of the TV show). And I hate to say it to start-off a review, but the regular Old No.7 is not good. That said, let’s find out if the second charcoal filtering makes a different in this Gentleman Jack Whiskey review, because I really hope that it does.',
      image: 'Gentleman-Jack.webp',
      inStock: 18,
      price: 25,
      sizes: ['200ml', '375ml', '750ml', '1L'],
      type: 'tennessee',
      ABV: 40,
      slug: 'gentleman-jack',
      tags: ['gentleman', 'jack', 'tennessee'],
    },
  ],
};
