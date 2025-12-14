import { ArrowRight } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../data/products';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string, productId?: number) => void;
  products: Product[];
}

export function HomePage({ onNavigate, products }: HomePageProps) {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
                Premium Quality,
                <span className="block text-emerald-400">Timeless Style</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Discover our curated collection of premium fashion, tech, and lifestyle products designed for the modern individual.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate('products')}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full transition-colors inline-flex items-center justify-center gap-2 group"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full transition-colors">
                  Explore Collection
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-600/20 rounded-3xl blur-3xl"></div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzY1NjE0Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Fashion model"
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl mb-2">Featured Products</h2>
            <p className="text-gray-600">Handpicked favorites from our collection</p>
          </div>
          <button 
            onClick={() => onNavigate('products')}
            className="hidden md:flex items-center gap-2 text-emerald-600 hover:gap-3 transition-all"
          >
            View All
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onProductClick={(id) => onNavigate('product', id)}
            />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center">Shop by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              onClick={() => onNavigate('products')}
              className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzY1NjE0Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Fashion"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white text-2xl mb-2">Fashion</h3>
                  <p className="text-white/80">Explore Collection</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => onNavigate('products')}
              className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1612690669207-fed642192c40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwZ2FkZ2V0fGVufDF8fHx8MTc2NTY5OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tech"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white text-2xl mb-2">Tech</h3>
                  <p className="text-white/80">Explore Collection</p>
                </div>
              </div>
            </div>

            <div 
              onClick={() => onNavigate('products')}
              className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1559385301-0187cb6eff46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzY1NjI2ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Lifestyle"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-white text-2xl mb-2">Lifestyle</h3>
                  <p className="text-white/80">Explore Collection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl mb-2">Premium Quality</h3>
            <p className="text-gray-600">All products are carefully selected and verified for quality</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl mb-2">Fast Shipping</h3>
            <p className="text-gray-600">Free express shipping on orders over $100</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl mb-2">Easy Returns</h3>
            <p className="text-gray-600">30-day return policy on all products</p>
          </div>
        </div>
      </section>
    </div>
  );
}
