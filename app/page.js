import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate-fade-up">
            Welcome to U.A.F.C (Pumula South)
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Turning the lost into members, members into Disciples and Disciples into LEADERS.
          </p>
          <div className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            <span className="block font-semibold text-white">Acts 17:28</span>
            <span className="block italic text-gray-300 mt-2">"In HIM WE LIVE, MOVE AND HAVE OUR BEING"</span>
          </div>
          <div className="space-x-4 animate-fade-up animation-delay-300">
            <Link
              href="/about"
              className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Visit Us
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">New Here?</h2>
              <p className="text-gray-600 mb-6">
                We're so glad you're interested in visiting UAFC Pumula South. Our doors are
                open to everyone seeking to grow in their faith and find community.
                Looking for a place to belong, to be loved, and to serve? Join us this weekend as we gather to worship, learn, and grow together. Experience the love, support, and encouragement of our church family. See you there. God bless you.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold"
              >
                Plan Your Visit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1523803326055-9729b9e02e5a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Church community"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sunday Service",
                date: "Every Sunday",
                time: "9:00 AM & 12:30 AM",
                image: "https://images.unsplash.com/photo-1634334867745-376b3c609ed9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                title: "Children's ministry",
                date: "Every Sunday",
                time: "9:30 PM",
                image: "https://images.unsplash.com/photo-1533659124865-d6072dc035e1?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                title: "Youth Service",
                date: "Every Sartuday",
                time: "2:00 PM",
                image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              }
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.date}</p>
                  <p className="text-gray-600 mb-4">{event.time}</p>
                  <Link
                    href="/events"
                    className="text-primary hover:text-primary/80 font-semibold inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}