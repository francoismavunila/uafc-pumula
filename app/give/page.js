import { CreditCard, Heart, Gift, DollarSign } from 'lucide-react';

export default function Give() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 animate-fade-up">Give</h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Support our ministry and make a difference in our community
          </p>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ways to Give</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the giving method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: CreditCard,
                title: "Online Giving",
                description: "Make a secure one-time or recurring donation online"
              },
              {
                icon: Gift,
                title: "Text to Give",
                description: "Text GIVE to (555) 123-4567 to donate from your phone"
              },
              {
                icon: Heart,
                title: "In Person",
                description: "Give during our weekly services using cash or check"
              }
            ].map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <method.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                  Give Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Giving Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Make a Donation</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                {[100, 250, 500, 1000].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className="flex items-center justify-center space-x-2 p-4 border-2 border-gray-200 rounded-md hover:border-primary hover:text-primary transition-colors"
                  >
                    <DollarSign className="h-5 w-5" />
                    <span className="font-semibold">{amount}</span>
                  </button>
                ))}
              </div>

              <div>
                <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-1">
                  Custom Amount
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="number"
                    id="custom-amount"
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Enter amount"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="fund" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Fund
                </label>
                <select
                  id="fund"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                >
                  <option>General Fund</option>
                  <option>Missions</option>
                  <option>Building Fund</option>
                  <option>Youth Ministry</option>
                </select>
              </div>

              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-600">Make this a recurring monthly donation</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors"
              >
                Continue to Payment
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}