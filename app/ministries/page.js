import { Users, Music, Globe, HandHeart, Camera, BookOpen, DollarSign, ClipboardList } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export default function Ministries() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 animate-fade-up">Our Ministries</h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Find your place to serve and grow in faith
          </p>
        </div>
      </section>

      {/* Ministry Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Ushers</h3>
              <p className="text-gray-600 mb-4">Welcoming and guiding the congregation with warmth and hospitality</p>
              <button className="text-primary hover:text-primary/80 font-semibold inline-flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <HandHeart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Hosting</h3>
              <p className="text-gray-600 mb-4">Creating a welcoming environment and coordinating church events</p>
              <button className="text-primary hover:text-primary/80 font-semibold inline-flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Music className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Praise and Worship</h3>
              <p className="text-gray-600 mb-4">Leading the congregation in spiritual worship through music</p>
              <button className="text-primary hover:text-primary/80 font-semibold inline-flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Evangelism and outreach Team</h3>
              <p className="text-gray-600 mb-4">Sharing the gospel and reaching out to the community</p>
              <button className="text-primary hover:text-primary/80 font-semibold inline-flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Camera className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Media Team</h3>
              <p className="text-gray-600 mb-4">Capturing and sharing church moments through various media</p>
              <button className="text-primary hover:text-primary/80 font-semibold inline-flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Discipleship and Counselling Team</h3>
              <p className="text-gray-600 mb-4">Guiding and mentoring individuals in their spiritual journey</p>
              <button className="text-primary hover:text-primary/80 font-semibold inline-flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Finance Committee</h3>
              <p className="text-gray-600 mb-4">Managing church finances with integrity and transparency</p>
              <button className="text-primary hover:text-primary/80 font-semibold inline-flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <ClipboardList className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Administration Committee</h3>
              <p className="text-gray-600 mb-4">Overseeing church operations and ensuring smooth administration</p>
              <button className="text-primary hover:text-primary/80 font-semibold inline-flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            There are many ways to serve and connect at our church. Find your
            place in our community and make a difference.
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors">
            Start Serving Today
          </button>
        </div>
      </section>
    </div>
  );
}