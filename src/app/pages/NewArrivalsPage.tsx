import { ProductCard } from '../components/ProductCard';
import { Product } from '../data/products';

interface NewArrivalsPageProps {
  onNavigate: (page: string, productId?: number) => void;
  products: Product[];
}

export function NewArrivalsPage({ onNavigate, products }: NewArrivalsPageProps) {
  // Show the latest products (for demo, we'll show all products as "new")
  const newArrivals = products;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl mb-4">New Arrivals</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover the latest additions to our premium collection. Fresh styles and cutting-edge products, just for you.
        </p>
      </div>

      {/* Featured Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-2xl p-8 md:p-12 mb-12">
        <div className="max-w-2xl">
          <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm mb-4">
            Just Dropped
          </span>
          <h2 className="text-3xl md:text-4xl mb-4">
            Spring Collection 2024
          </h2>
          <p className="text-emerald-100 mb-6">
            Explore our newest arrivals featuring the latest trends in fashion, tech, and lifestyle. Limited quantities available.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-2xl mb-1">{products.length}+</div>
              <div className="text-sm text-emerald-100">New Products</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-2xl mb-1">3</div>
              <div className="text-sm text-emerald-100">Categories</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <div className="text-2xl mb-1">25%</div>
              <div className="text-sm text-emerald-100">Launch Discount</div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl">All New Products</h2>
          <p className="text-gray-600">{newArrivals.length} items</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onProductClick={(id) => onNavigate('product', id)}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 rounded-2xl p-8 md:p-12 text-center mt-12">
        <h2 className="text-3xl mb-4">Want to be the first to know?</h2>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Subscribe to our newsletter and get notified about new arrivals, exclusive offers, and special promotions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
          />
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
