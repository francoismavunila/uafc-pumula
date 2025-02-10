import { Play, Download, Calendar, Clock, Search } from 'lucide-react';

export default function Sermons() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1578508709719-8c6647668ef3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 animate-fade-up">Sermons</h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Watch and listen to our latest messages
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search sermons..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary">
              <option>All Series</option>
              <option>Faith Foundations</option>
              <option>Life's Purpose</option>
              <option>Hope in Christ</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary">
              <option>All Speakers</option>
              <option>Pastor John Smith</option>
              <option>Pastor Sarah Johnson</option>
              <option>Guest Speakers</option>
            </select>
          </div>
        </div>
      </section>

      {/* Latest Sermon */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Latest Message</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://images.unsplash.com/photo-1585519916621-7af4c8636a18?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Latest sermon"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Finding Peace in Troubled Times</h3>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  March 24, 2024
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  45 minutes
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                Join Pastor John as he explores how we can find lasting peace in the midst of life's challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center space-x-2 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                  <Play className="h-5 w-5" />
                  <span>Watch Now</span>
                </button>
                <button className="flex items-center space-x-2 border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors">
                  <Download className="h-5 w-5" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Archive */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Sermon Archive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Power of Faith",
                speaker: "Pastor Sarah Johnson",
                date: "March 17, 2024",
                duration: "38 minutes",
                image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Living with Purpose",
                speaker: "Pastor John Smith",
                date: "March 10, 2024",
                duration: "42 minutes",
                image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Grace in Action",
                speaker: "Pastor Michael Davis",
                date: "March 3, 2024",
                duration: "40 minutes",
                image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((sermon, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={sermon.image}
                    alt={sermon.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{sermon.title}</h3>
                  <p className="text-gray-600 mb-2">{sermon.speaker}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {sermon.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {sermon.duration}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                      <Play className="h-4 w-4" />
                      <span>Watch</span>
                    </button>
                    <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}