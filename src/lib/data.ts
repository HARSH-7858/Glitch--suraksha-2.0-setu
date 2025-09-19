
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
  { id: 'f1', name: 'Ramesh Patel', farm: 'Green Valley Organics', contact: '555-1234' },
  { id: 'f2', name: 'Sunita Sharma', farm: 'Sunrise Fields', contact: '555-5678' },
  { id: 'f3', name: 'Vikram Singh', farm: 'Harvest Moon Farms', contact: '555-8765' },
];

export const produce: Produce[] = [
  {
    id: 'p1',
    name: 'Heirloom Tomatoes',
    type: 'vegetable',
    description: 'Juicy and flavorful tomatoes, perfect for salads and sauces. Grown with organic methods.',
    imageUrl: 'https://picsum.photos/seed/tomatoes/600/400',
    farmerId: 'f1',
    price: '₹120/kg',
  },
  {
    id: 'p2',
    name: 'Indian Carrots (Gajar)',
    type: 'vegetable',
    description: 'A colorful mix of red and orange carrots. Sweet and crunchy, perfect for halwa.',
    imageUrl: 'https://picsum.photos/seed/carrots/600/400',
    farmerId: 'f2',
    price: '₹50/bunch',
  },
  {
    id: 'p3',
    name: 'Holy Basil (Tulsi)',
    type: 'herb',
    description: 'Aromatic holy basil leaves, great for teas and religious offerings.',
    imageUrl: 'https://picsum.photos/seed/basil/600/400',
    farmerId: 'f1',
    price: '₹40/bunch',
  },
  {
    id: 'p4',
    name: 'Alphonso Mangoes',
    type: 'fruit',
    description: 'Sweet and fragrant Alphonso mangoes, the king of fruits.',
    imageUrl: 'https://picsum.photos/seed/mangoes/600/400',
    farmerId: 'f3',
    price: '₹500/dozen',
  },
  {
    id: 'p5',
    name: 'Spinach (Palak)',
    type: 'vegetable',
    description: 'Nutrient-rich spinach, perfect for palak paneer and healthy curries.',
    imageUrl: 'https://picsum.photos/seed/spinach/600/400',
    farmerId: 'f2',
    price: '₹60/bunch',
  },
  {
    id: 'p6',
    name: 'Grapes',
    type: 'fruit',
    description: 'Sweet, juicy grapes, freshly picked this morning.',
    imageUrl: 'https://picsum.photos/seed/grapes/600/400',
    farmerId: 'f3',
    price: '₹200/kg',
  },
  {
    id: 'p7',
    name: 'Bottle Gourd (Lauki)',
    type: 'vegetable',
    description: 'Versatile summer squash, great for curries and healthy juices.',
    imageUrl: 'https://picsum.photos/seed/gourd/600/400',
    farmerId: 'f1',
    price: '₹30/each',
  },
  {
    id: 'p8',
    name: 'Coriander (Dhania)',
    type: 'herb',
    description: 'Fresh and aromatic coriander leaves, essential for garnishing Indian dishes.',
    imageUrl: 'https://picsum.photos/seed/coriander/600/400',
    farmerId: 'f2',
    price: '₹25/bunch',
  },
];
