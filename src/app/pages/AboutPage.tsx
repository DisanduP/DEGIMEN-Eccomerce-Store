import { Award, Heart, Shield, TrendingUp, Users, Package } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl mb-6">
              About LUXE
            </h1>
            <p className="text-xl text-gray-300">
              We're redefining premium online shopping with carefully curated products, 
              exceptional quality, and an unmatched customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Founded in 2020, LUXE began with a simple mission: to make premium products 
                accessible to discerning customers who value quality and authenticity.
              </p>
              <p>
                What started as a small collection of handpicked items has grown into a 
                comprehensive marketplace featuring the finest fashion, technology, and 
                lifestyle products from around the world.
              </p>
              <p>
                Today, we serve thousands of satisfied customers globally, maintaining our 
                commitment to quality, authenticity, and exceptional service.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1559385301-0187cb6eff46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzY1NjI2ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury lifestyle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl mb-4">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                Every product is carefully vetted and tested to meet our rigorous quality 
                standards. We never compromise on excellence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl mb-4">Customer Obsessed</h3>
              <p className="text-gray-600 leading-relaxed">
                Your satisfaction is our priority. From browsing to delivery, we ensure 
                every touchpoint exceeds expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl mb-4">Trust & Transparency</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in honest business practices, clear communication, and building 
                lasting relationships with our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-4xl mb-2">50K+</div>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-4xl mb-2">100K+</div>
            <p className="text-gray-600">Orders Delivered</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-4xl mb-2">4.9</div>
            <p className="text-gray-600">Average Rating</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-emerald-600" />
            </div>
            <div className="text-4xl mb-2">15+</div>
            <p className="text-gray-600">Industry Awards</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The people behind LUXE</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzY1NjE0Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
              { name: 'Michael Chen', role: 'Head of Product', image: 'https://images.unsplash.com/photo-1612690669207-fed642192c40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwZ2FkZ2V0fGVufDF8fHx8MTc2NTY5OTg3NXww&ixlib=rb-4.1.0&q=80&w=1080' },
              { name: 'Emma Williams', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1559385301-0187cb6eff46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzY1NjI2ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080' }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-square bg-gray-200">
                  <ImageWithFallback 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Experience LUXE?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover the difference premium quality makes.
          </p>
          <button 
            onClick={() => onNavigate('products')}
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-full transition-colors inline-flex items-center gap-2"
          >
            Start Shopping
            <TrendingUp className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
