import { useState } from 'react';
import { Star, ShoppingCart, Heart, Truck, Shield, RefreshCw, ChevronLeft } from 'lucide-react';
import { Product } from '../data/products';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface ProductDetailPageProps {
  product: Product;
  onNavigate: (page: string) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
}

const mockReviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "2 days ago",
    comment: "Absolutely love this product! The quality exceeded my expectations and delivery was super fast."
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 4,
    date: "1 week ago",
    comment: "Great product overall. Very satisfied with the purchase. Would recommend to others."
  },
  {
    id: 3,
    name: "Emma Williams",
    rating: 5,
    date: "2 weeks ago",
    comment: "Premium quality and beautiful design. Worth every penny!"
  }
];

export function ProductDetailPage({ product, onNavigate, onAddToCart }: ProductDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <button 
        onClick={() => onNavigate('products')}
        className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 mb-8 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        Back to Products
      </button>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Image Gallery */}
        <div>
          <div className="mb-4 bg-gray-100 rounded-2xl overflow-hidden aspect-square">
            <ImageWithFallback 
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-emerald-600' : 'border-transparent'
                  }`}
                >
                  <ImageWithFallback 
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <p className="text-emerald-600 mb-2">{product.category}</p>
          <h1 className="text-4xl mb-4">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-2xl text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
                <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full">
                  Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Features */}
          <div className="mb-8">
            <h3 className="mb-4">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-3 hover:bg-gray-100 transition-colors"
              >
                -
              </button>
              <span className="px-6 py-3 border-x border-gray-300">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-3 hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>

            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>

            <button 
              onClick={() => setIsFavorited(!isFavorited)}
              className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Heart className={`w-6 h-6 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
            </button>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
            <div className="text-center">
              <Truck className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
              <p className="text-sm text-gray-600">Free Shipping</p>
            </div>
            <div className="text-center">
              <Shield className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
              <p className="text-sm text-gray-600">2-Year Warranty</p>
            </div>
            <div className="text-center">
              <RefreshCw className="w-6 h-6 mx-auto mb-2 text-emerald-600" />
              <p className="text-sm text-gray-600">30-Day Returns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="border-t border-gray-200 pt-16">
        <h2 className="text-3xl mb-8">Customer Reviews</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <div className="text-5xl mb-2">{product.rating}</div>
            <div className="flex items-center justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <p className="text-gray-600">Based on {product.reviews} reviews</p>
          </div>

          <div className="md:col-span-2 space-y-4">
            {[5, 4, 3, 2, 1].map(stars => (
              <div key={stars} className="flex items-center gap-4">
                <span className="text-sm text-gray-600 w-16">{stars} stars</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-emerald-600 h-2 rounded-full"
                    style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : 10}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-12">{stars === 5 ? '70%' : stars === 4 ? '20%' : '10%'}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review Cards */}
        <div className="space-y-6">
          {mockReviews.map(review => (
            <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="mb-1">{review.name}</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
