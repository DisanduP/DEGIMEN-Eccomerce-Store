import { useState, useMemo } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../data/products';

interface ProductListingPageProps {
  onNavigate: (page: string, productId?: number) => void;
  products: Product[];
}

export function ProductListingPage({ onNavigate, products }: ProductListingPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<string>('All');
  const [minRating, setMinRating] = useState<number>(0);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', 'Fashion', 'Tech', 'Lifestyle'];
  const priceRanges = [
    { label: 'All', min: 0, max: Infinity },
    { label: 'Under $100', min: 0, max: 100 },
    { label: '$100 - $300', min: 100, max: 300 },
    { label: '$300 - $500', min: 300, max: 500 },
    { label: 'Over $500', min: 500, max: Infinity }
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      
      const priceRangeMatch = priceRange === 'All' || (() => {
        const range = priceRanges.find(r => r.label === priceRange);
        return range && product.price >= range.min && product.price < range.max;
      })();
      
      const ratingMatch = product.rating >= minRating;
      
      return categoryMatch && priceRangeMatch && ratingMatch;
    });
  }, [products, selectedCategory, priceRange, minRating]);

  const FilterSection = () => (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl">Filters</h3>
        <button 
          onClick={() => setShowFilters(false)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <h4 className="mb-4">Category</h4>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center cursor-pointer group">
              <input 
                type="radio"
                name="category"
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="ml-3 text-gray-700 group-hover:text-emerald-600">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h4 className="mb-4">Price Range</h4>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <label key={range.label} className="flex items-center cursor-pointer group">
              <input 
                type="radio"
                name="price"
                checked={priceRange === range.label}
                onChange={() => setPriceRange(range.label)}
                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="ml-3 text-gray-700 group-hover:text-emerald-600">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-8">
        <h4 className="mb-4">Minimum Rating</h4>
        <div className="space-y-2">
          {[4.5, 4.0, 3.5, 0].map(rating => (
            <label key={rating} className="flex items-center cursor-pointer group">
              <input 
                type="radio"
                name="rating"
                checked={minRating === rating}
                onChange={() => setMinRating(rating)}
                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
              />
              <span className="ml-3 text-gray-700 group-hover:text-emerald-600">
                {rating > 0 ? `${rating}+ Stars` : 'All Ratings'}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button 
        onClick={() => {
          setSelectedCategory('All');
          setPriceRange('All');
          setMinRating(0);
        }}
        className="w-full py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl mb-2">Shop All Products</h1>
        <p className="text-gray-600">{filteredProducts.length} products found</p>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters - Desktop */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <FilterSection />
        </aside>

        {/* Mobile Filter Button */}
        <button 
          onClick={() => setShowFilters(true)}
          className="md:hidden fixed bottom-6 right-6 bg-emerald-600 text-white p-4 rounded-full shadow-lg z-40 flex items-center gap-2"
        >
          <SlidersHorizontal className="w-5 h-5" />
          <span>Filters</span>
        </button>

        {/* Mobile Filter Overlay */}
        {showFilters && (
          <div className="md:hidden fixed inset-0 bg-black/50 z-50" onClick={() => setShowFilters(false)}>
            <div 
              className="absolute right-0 top-0 bottom-0 w-80 bg-white overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <FilterSection />
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  onProductClick={(id) => onNavigate('product', id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg mb-4">No products found matching your filters.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('All');
                  setPriceRange('All');
                  setMinRating(0);
                }}
                className="text-emerald-600 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
