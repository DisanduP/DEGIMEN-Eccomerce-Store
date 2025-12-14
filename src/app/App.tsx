import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductListingPage } from './pages/ProductListingPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage, CartItem } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AuthPage } from './pages/AuthPage';
import { NewArrivalsPage } from './pages/NewArrivalsPage';
import { AboutPage } from './pages/AboutPage';
import { products } from './data/products';
import { toast, Toaster } from 'sonner';

type Page = 'home' | 'products' | 'product' | 'cart' | 'checkout' | 'auth' | 'new-arrivals' | 'about';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleNavigate = (page: string, productId?: number) => {
    setCurrentPage(page as Page);
    if (productId) {
      setSelectedProductId(productId);
    }
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (product: any, quantity: number) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
      toast.success(`Updated ${product.name} quantity in cart`);
    } else {
      setCartItems([...cartItems, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
        category: product.category
      }]);
      toast.success(`${product.name} added to cart`);
    }
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast.success('Item removed from cart');
  };

  const selectedProduct = selectedProductId 
    ? products.find(p => p.id === selectedProductId) 
    : null;

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Toaster position="top-right" richColors />
      
      {currentPage !== 'auth' && (
        <Navbar 
          onNavigate={handleNavigate} 
          cartItemCount={cartItemCount}
          currentPage={currentPage}
        />
      )}

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate}
            products={products}
          />
        )}

        {currentPage === 'products' && (
          <ProductListingPage 
            onNavigate={handleNavigate}
            products={products}
          />
        )}

        {currentPage === 'product' && selectedProduct && (
          <ProductDetailPage 
            product={selectedProduct}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentPage === 'cart' && (
          <CartPage 
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'checkout' && (
          <CheckoutPage 
            cartItems={cartItems}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'auth' && (
          <AuthPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'new-arrivals' && (
          <NewArrivalsPage 
            onNavigate={handleNavigate}
            products={products}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
      </main>

      {currentPage !== 'auth' && <Footer />}
    </div>
  );
}