import { useState } from 'react';
import { Check, CreditCard, Lock } from 'lucide-react';
import { CartItem } from './CartPage';

interface CheckoutPageProps {
  cartItems: CartItem[];
  onNavigate: (page: string) => void;
}

export function CheckoutPage({ cartItems, onNavigate }: CheckoutPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    // Payment
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const steps = [
    { number: 1, name: 'Shipping' },
    { number: 2, name: 'Payment' },
    { number: 3, name: 'Review' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitOrder = () => {
    alert('Order placed successfully! (This is a demo)');
    onNavigate('home');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl mb-8">Checkout</h1>

      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex items-center justify-center">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className="flex flex-col items-center">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                    currentStep > step.number 
                      ? 'bg-emerald-600 text-white' 
                      : currentStep === step.number
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {currentStep > step.number ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <span>{step.number}</span>
                  )}
                </div>
                <span className="text-sm mt-2 hidden sm:block">{step.name}</span>
              </div>
              {index < steps.length - 1 && (
                <div 
                  className={`w-24 h-1 mx-4 transition-colors ${
                    currentStep > step.number ? 'bg-emerald-600' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            {/* Step 1: Shipping Information */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl mb-6">Shipping Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2">First Name</label>
                    <input 
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Last Name</label>
                    <input 
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
                      placeholder="Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Email</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Phone</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm mb-2">Address</label>
                    <input 
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">City</label>
                    <input 
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
                      placeholder="New York"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">State</label>
                    <input 
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
                      placeholder="NY"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm mb-2">ZIP Code</label>
                    <input 
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
                      placeholder="10001"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Payment Information */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl mb-6 flex items-center gap-2">
                  <CreditCard className="w-6 h-6" />
                  Payment Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm mb-2">Card Number</label>
                    <input 
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Cardholder Name</label>
                    <input 
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm mb-2">Expiry Date</label>
                      <input 
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">CVV</label>
                      <input 
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600"
                        placeholder="123"
                        maxLength={4}
                      />
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3">
                    <Lock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-600">
                      Your payment information is encrypted and secure. We never store your credit card details.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Review Order */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl mb-6">Review Your Order</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3">Shipping Address</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p>{formData.firstName} {formData.lastName}</p>
                      <p>{formData.address}</p>
                      <p>{formData.city}, {formData.state} {formData.zipCode}</p>
                      <p>{formData.email}</p>
                      <p>{formData.phone}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3">Payment Method</h3>
                    <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                      <CreditCard className="w-6 h-6 text-gray-600" />
                      <div>
                        <p>•••• •••• •••• {formData.cardNumber.slice(-4)}</p>
                        <p className="text-sm text-gray-600">{formData.cardName}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3">Order Items</h3>
                    <div className="space-y-3">
                      {cartItems.map(item => (
                        <div key={item.id} className="bg-gray-50 p-4 rounded-lg flex justify-between">
                          <div>
                            <p>{item.name}</p>
                            <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                          </div>
                          <p>${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button 
                onClick={() => currentStep > 1 ? setCurrentStep(currentStep - 1) : onNavigate('cart')}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {currentStep === 1 ? 'Back to Cart' : 'Previous'}
              </button>
              
              {currentStep < 3 ? (
                <button 
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                >
                  Continue
                </button>
              ) : (
                <button 
                  onClick={handleSubmitOrder}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                >
                  Place Order
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-24">
            <h2 className="text-xl mb-6">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">{item.name} × {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl">Total</span>
                <span className="text-2xl">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
