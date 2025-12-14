import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  cartItemCount: number;
  currentPage: string;
}

export function Navbar({ onNavigate, cartItemCount, currentPage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex-shrink-0 cursor-pointer"
          >
            <span className="text-2xl tracking-tight">LUXE</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`hover:text-emerald-600 transition-colors ${currentPage === 'home' ? 'text-emerald-600' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('products')}
              className={`hover:text-emerald-600 transition-colors ${currentPage === 'products' ? 'text-emerald-600' : ''}`}
            >
              Shop
            </button>
            <button 
              onClick={() => onNavigate('new-arrivals')}
              className={`hover:text-emerald-600 transition-colors ${currentPage === 'new-arrivals' ? 'text-emerald-600' : ''}`}
            >
              New Arrivals
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className={`hover:text-emerald-600 transition-colors ${currentPage === 'about' ? 'text-emerald-600' : ''}`}
            >
              About
            </button>
          </div>

          {/* Search & Icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
              <Search className="w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="bg-transparent border-none outline-none ml-2 w-full text-sm"
              />
            </div>

            <button 
              onClick={() => onNavigate('cart')}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </button>

            <button 
              onClick={() => onNavigate('auth')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search className="w-4 h-4 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="bg-transparent border-none outline-none ml-2 w-full text-sm"
                />
              </div>
              <button 
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className="text-left hover:text-emerald-600 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  onNavigate('products');
                  setMobileMenuOpen(false);
                }}
                className="text-left hover:text-emerald-600 transition-colors"
              >
                Shop
              </button>
              <button 
                onClick={() => {
                  onNavigate('new-arrivals');
                  setMobileMenuOpen(false);
                }}
                className="text-left hover:text-emerald-600 transition-colors"
              >
                New Arrivals
              </button>
              <button 
                onClick={() => {
                  onNavigate('about');
                  setMobileMenuOpen(false);
                }}
                className="text-left hover:text-emerald-600 transition-colors"
              >
                About
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}