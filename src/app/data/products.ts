export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  category: string;
  description: string;
  features: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1723961617032-ef69c454cb31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaGVhZHBob25lc3xlbnwxfHx8fDE3NjU2MjQzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1723961617032-ef69c454cb31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaGVhZHBob25lc3xlbnwxfHx8fDE3NjU2MjQzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1612690669207-fed642192c40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwZ2FkZ2V0fGVufDF8fHx8MTc2NTY5OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1723961617032-ef69c454cb31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwaGVhZHBob25lc3xlbnwxfHx8fDE3NjU2MjQzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    rating: 4.8,
    reviews: 342,
    category: "Tech",
    description: "Experience superior sound quality with our premium wireless headphones. Featuring advanced noise cancellation technology and exceptional comfort for all-day wear.",
    features: [
      "Active Noise Cancellation",
      "40-hour battery life",
      "Premium leather ear cushions",
      "Bluetooth 5.0 connectivity",
      "Built-in microphone for calls"
    ],
    inStock: true
  },
  {
    id: 2,
    name: "Luxury Automatic Watch",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaHxlbnwxfHx8fDE3NjU2OTA3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaHxlbnwxfHx8fDE3NjU2OTA3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaHxlbnwxfHx8fDE3NjU2OTA3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    rating: 4.9,
    reviews: 128,
    category: "Fashion",
    description: "Timeless elegance meets precision engineering. This luxury automatic watch is crafted with Swiss movement and premium materials.",
    features: [
      "Swiss automatic movement",
      "Sapphire crystal glass",
      "Water resistant to 100m",
      "Premium leather strap",
      "2-year warranty"
    ],
    inStock: true
  },
  {
    id: 3,
    name: "Designer Sunglasses",
    price: 249,
    image: "https://images.unsplash.com/photo-1722842529941-825976fc14f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHN1bmdsYXNzZXN8ZW58MXx8fHwxNzY1NjI0MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1722842529941-825976fc14f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHN1bmdsYXNzZXN8ZW58MXx8fHwxNzY1NjI0MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    rating: 4.6,
    reviews: 256,
    category: "Fashion",
    description: "Protect your eyes in style with these premium designer sunglasses featuring UV protection and polarized lenses.",
    features: [
      "100% UV protection",
      "Polarized lenses",
      "Lightweight titanium frame",
      "Scratch-resistant coating",
      "Includes leather case"
    ],
    inStock: true
  },
  {
    id: 4,
    name: "Minimalist Leather Sneakers",
    price: 189,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1636601170757-ac7a5e19b7ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwc25lYWtlcnN8ZW58MXx8fHwxNzY1NzIyOTU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1636601170757-ac7a5e19b7ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwc25lYWtlcnN8ZW58MXx8fHwxNzY1NzIyOTU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    rating: 4.7,
    reviews: 512,
    category: "Fashion",
    description: "Clean, timeless design meets exceptional comfort. These minimalist sneakers are crafted from premium Italian leather.",
    features: [
      "Premium Italian leather",
      "Memory foam insole",
      "Handcrafted construction",
      "Available in multiple colors",
      "Eco-friendly materials"
    ],
    inStock: true
  },
  {
    id: 5,
    name: "Premium Leather Bag",
    price: 449,
    image: "https://images.unsplash.com/photo-1760624294582-5341f33f9fa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbGVhdGhlciUyMGJhZ3xlbnwxfHx8fDE3NjU3MjI5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1760624294582-5341f33f9fa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbGVhdGhlciUyMGJhZ3xlbnwxfHx8fDE3NjU3MjI5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    rating: 4.8,
    reviews: 189,
    category: "Lifestyle",
    description: "The perfect companion for the modern professional. This premium leather bag combines style with functionality.",
    features: [
      "Full-grain leather",
      "Multiple compartments",
      "Padded laptop sleeve (15\")",
      "Adjustable shoulder strap",
      "YKK zippers"
    ],
    inStock: true
  },
  {
    id: 6,
    name: "Smart Fitness Watch",
    price: 349,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1612690669207-fed642192c40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwZ2FkZ2V0fGVufDF8fHx8MTc2NTY5OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1612690669207-fed642192c40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwZ2FkZ2V0fGVufDF8fHx8MTc2NTY5OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    rating: 4.5,
    reviews: 423,
    category: "Tech",
    description: "Track your fitness goals with precision. This smart watch features advanced health monitoring and GPS tracking.",
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water resistant (50m)",
      "7-day battery life",
      "Sleep tracking"
    ],
    inStock: true
  },
  {
    id: 7,
    name: "Luxury Cashmere Scarf",
    price: 159,
    image: "https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzY1NjE0Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzY1NjE0Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    rating: 4.9,
    reviews: 87,
    category: "Fashion",
    description: "Wrap yourself in luxury with this premium cashmere scarf. Incredibly soft and warm.",
    features: [
      "100% pure cashmere",
      "Hand-woven",
      "Hypoallergenic",
      "Multiple color options",
      "Gift box included"
    ],
    inStock: true
  },
  {
    id: 8,
    name: "Premium Yoga Mat",
    price: 89,
    originalPrice: 119,
    image: "https://images.unsplash.com/photo-1559385301-0187cb6eff46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzY1NjI2ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1559385301-0187cb6eff46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzY1NjI2ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    rating: 4.6,
    reviews: 298,
    category: "Lifestyle",
    description: "Elevate your practice with this eco-friendly premium yoga mat featuring superior grip and cushioning.",
    features: [
      "Eco-friendly materials",
      "Non-slip surface",
      "Extra thick (6mm)",
      "Easy to clean",
      "Includes carrying strap"
    ],
    inStock: true
  }
];
