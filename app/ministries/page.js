import { Users, Heart, BookOpen, Music, Child, Globe, HandHeart, Coffee } from 'lucide-react';

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
            {[
              {
                icon: Child,
                title: "Children's Ministry",
                description: "Nurturing young hearts in faith through engaging activities and Biblical teaching"
              },
              {
                icon: Users,
                title: "Youth Ministry",
                description: "Empowering teenagers to live boldly for Christ in today's world"
              },
              {
                icon: Heart,
                title: "Young Adults",
                description: "Building community and growing in faith together"
              },
              {
                icon: Coffee,
                title: "Small Groups",
                description: "Connecting in meaningful relationships and studying God's Word"
              },
              {
                icon: Music,
                title: "Worship Ministry",
                description: "Leading the congregation in praise and worship"
              },
              {
                icon: HandHeart,
                title: "Outreach",
                description: "Serving our local community with the love of Christ"
              },
              {
                icon: Globe,
                title: "Missions",
                description: "Supporting and participating in global missions"
              },
              {
                icon: BookOpen,
                title: "Bible Study",
                description: "Deep diving into Scripture for spiritual growth"
              }
            ].map((ministry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <ministry.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{ministry.title}</h3>
                <p className="text-gray-600 mb-4">{ministry.description}</p>
                <button className="text-primary hover:text-primary/80 font-semibold inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Ministry */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Children's Ministry</h2>
              <p className="text-gray-600 mb-6">
                Our children's ministry is dedicated to partnering with parents to
                lead children toward a gospel-centered life. Through age-appropriate
                teaching, worship, and activities, we create a safe and fun
                environment where kids can learn about Jesus.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Child className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sunday School</h3>
                    <p className="text-gray-600">Every Sunday at 9:00 AM & 11:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Bible Adventures</h3>
                    <p className="text-gray-600">Wednesday evenings at 6:30 PM</p>
                  </div>
                </div>
              </div>
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Get Involved
              </button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1602516297586-312f705402cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Children's Ministry"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            There are many ways to serve and connect at Grace Church. Find your
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