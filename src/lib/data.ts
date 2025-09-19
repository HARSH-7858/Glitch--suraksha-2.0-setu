
export type Farmer = {
  id: string;
  name: string;
  farm: string;
  contact: string;
};

export type Produce = {
  id: string;
  name: string;
  type: 'vegetable' | 'fruit' | 'herb';
  description: string;
  imageUrl?: string;
  farmerId: string;
  price: string;
};

export const farmers: Farmer[] = [
  { id: 'f1', name: 'John Doe', farm: 'Green Acres Farm', contact: '555-1234' },
  { id: 'f2', name: 'Jane Smith', farm: 'Sunnyside Gardens', contact: '555-5678' },
  { id: 'f3', name: 'Sam Wilson', farm: 'Harvest Moon Fields', contact: '555-8765' },
];

export const produce: Produce[] = [
  {
    id: 'p1',
    name: 'Heirloom Tomatoes',
    type: 'fruit',
    description: 'Juicy and flavorful tomatoes, perfect for salads and sauces. Grown with organic methods.',
    imageUrl: 'https://picsum.photos/seed/tomato/600/400',
    farmerId: 'f1',
    price: '$3.99/lb',
  },
  {
    id: 'p2',
    name: 'Rainbow Carrots',
    type: 'vegetable',
    description: 'A colorful mix of purple, yellow, and orange carrots. Sweet and crunchy.',
    imageUrl: 'https://picsum.photos/seed/carrots/600/400',
    farmerId: 'f2',
    price: '$2.50/bunch',
  },
  {
    id: 'p3',
    name: 'Fresh Basil',
    type: 'herb',
    description: 'Aromatic basil leaves, ideal for pesto, pasta, and garnish.',
    imageUrl: 'https://picsum.photos/seed/basil/600/400',
    farmerId: 'f1',
    price: '$2.00/bunch',
  },
  {
    id: 'p4',
    name: 'Gala Apples',
    type: 'fruit',
    description: 'Crisp and sweet Gala apples, great for snacking or baking.',
    imageUrl: 'https://picsum.photos/seed/apples/600/400',
    farmerId: 'f3',
    price: '$1.99/lb',
  },
  {
    id: 'p5',
    name: 'Curly Kale',
    type: 'vegetable',
    description: 'Nutrient-rich kale, perfect for smoothies, salads, or chips.',
    imageUrl: 'https://picsum.photos/seed/kale/600/400',
    farmerId: 'f2',
    price: '$3.00/bunch',
  },
  {
    id: 'p6',
    name: 'Strawberries',
    type: 'fruit',
    description: 'Sweet, sun-ripened strawberries, freshly picked this morning.',
    imageUrl: 'https://picsum.photos/seed/strawberry/600/400',
    farmerId: 'f3',
    price: '$4.50/pint',
  },
  {
    id: 'p7',
    name: 'Zucchini',
    type: 'vegetable',
    description: 'Versatile summer squash, great for grilling, roasting, or making zoodles.',
    imageUrl: 'https://picsum.photos/seed/zucchini/600/400',
    farmerId: 'f1',
    price: '$1.50/each',
  },
  {
    id: 'p8',
    name: 'Peppermint',
    type: 'herb',
    description: 'Cool and refreshing mint, perfect for teas, cocktails, and desserts.',
    imageUrl: 'https://picsum.photos/seed/mint/600/400',
    farmerId: 'f2',
    price: '$1.75/bunch',
  },
];
