import { ProductCard } from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones Pro',
    price: 299.99,
    rating: 4.5,
    reviews: 1234,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    category: 'Audio'
  },
  {
    id: 2,
    name: 'Smart Watch Ultra',
    price: 449.99,
    rating: 4.8,
    reviews: 856,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    category: 'Wearables'
  },
  {
    id: 3,
    name: '4K Drone Camera',
    price: 799.99,
    rating: 4.6,
    reviews: 432,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&q=80',
    category: 'Cameras'
  },
  {
    id: 4,
    name: 'Gaming Laptop Elite',
    price: 1499.99,
    rating: 4.7,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80',
    category: 'Computers'
  },
  {
    id: 5,
    name: 'Bluetooth Speaker',
    price: 129.99,
    rating: 4.4,
    reviews: 2341,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80',
    category: 'Audio'
  },
  {
    id: 6,
    name: 'Wireless Keyboard & Mouse',
    price: 89.99,
    rating: 4.3,
    reviews: 1567,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80',
    category: 'Accessories'
  },
  {
    id: 7,
    name: 'USB-C Hub Pro',
    price: 69.99,
    rating: 4.6,
    reviews: 923,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80',
    category: 'Accessories'
  },
  {
    id: 8,
    name: 'Webcam 1080p',
    price: 79.99,
    rating: 4.2,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1526657782461-9fe13402a841?w=500&q=80',
    category: 'Cameras'
  }
];

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
