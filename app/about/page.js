import {  Heart, BookOpen, Activity, Handshake, Crown, UsersRound, Church, Home, Baby, Users, BookHeart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section - Kept unchanged as requested */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("church.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 animate-fade-up">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Discover our story, mission, and the heart behind UAFC Pumula South branch
          </p>
        </div>
      </section>

      {/* Vision & Motto */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Vision & Motto</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-xl text-gray-800 mb-6">
              <span className="font-semibold">Vision:</span> Turning the lost into members, members into Disciples and Disciples into LEADERS.
            </p>
            <p className="text-xl text-gray-800 mb-6">
              <span className="font-semibold">Motto:</span> LOVE, SERVE AND INSPIRE
            </p>
            <p className="text-lg text-gray-700">
              Committed to be like CHRIST. IN HIM WE LIVE, MOVE AND HAVE OUR BEING.
            </p>
          </div>
        </div>
      </section>

      {/* Values/Pillars */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-xl text-gray-600">The pillars that guide our ministry and community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Handshake,
                title: "Prayer",
                description: "Maintaining a constant connection with God through prayer and supplication"
              },
              {
                icon: Activity,
                title: "Worship",
                description: "Expressing our love and devotion to God through passionate worship"
              },
              {
                icon: Home,
                title: "Family",
                description: "Nurturing strong family bonds and supporting family values"
              },
              {
                icon: Crown,
                title: "Leadership",
                description: "Developing strong, Christ-centered leaders for the future"
              },
              {
                icon: UsersRound,
                title: "Team Work",
                description: "Working together in unity to achieve God's purpose"
              },
              {
                icon: Church,
                title: "Evangelism",
                description: "Spreading the Gospel and reaching out to our community"
              },
              {
                icon: Heart,
                title: "Love",
                description: "Showing God's love through our actions and service"
              },
              {
                icon: BookOpen,
                title: "Scripture",
                description: "Grounding our faith in Biblical teaching and wisdom"
              },
            ].map((value, index) => (
              <div 
                key={index} 
                className="text-center p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <value.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  We are a fairly new branch of UAFC, located at Pumula South close to Premier High School.
                </p>
                <p>
                  We believe in the Word of God and the power of the Holy Spirit, sharing love and the baptism in the Holy Spirit.
                </p>
                <p>
                  We are a vibrant group that maintains high standards, committed to being like CHRIST. IN HIM WE LIVE, MOVE AND HAVE OUR BEING.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://www.uafcsa.org.za/wp-content/uploads/2020/03/cropped-logo.png"
                alt="Church history"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the dedicated individuals who serve and guide our church community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mr S. NDLOVU",
                role: "Leader",
                image: "s.ndlovu.jpg"
              },
              {
                name: "Mrs  R. NDLOVU",
                role: "Leader",
                image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              },
              // {
              //   name: "Pastor",
              //   role: "Youth Pastor",
              //   image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              // }
            ].map((leader, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="rounded-full object-cover w-full h-full border-4 border-blue-100"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{leader.name}</h3>
                <p className="text-lg text-gray-600">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-xl text-gray-600">Join us in our various ministry programs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Baby,
                title: "Children's Ministry",
                schedule: "Every Sunday",
                description: "Nurturing young hearts in faith and biblical understanding"
              },
              {
                icon: Users,
                title: "Youth",
                schedule: "Regular Meetings",
                description: "Empowering young people to grow in their faith journey"
              },
              {
                icon: Heart,
                title: "Ladies",
                schedule: "Regular Meetings",
                description: "Building strong women of faith through fellowship and prayer"
              },
              {
                icon: BookHeart,
                title: "Couples",
                schedule: "Regular Meetings",
                description: "Strengthening marriages through biblical principles"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="flex items-start p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <service.icon className="h-12 w-12 text-blue-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{service.schedule}</p>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}