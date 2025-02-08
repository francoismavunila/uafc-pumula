import { Users, Heart, BookOpen, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1533000759938-aa0ba70beceb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 animate-fade-up">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Discover our story, mission, and the heart behind Grace Church
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to sharing God's love, building a strong community,
              and making a positive impact in our world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Community",
                description: "Building meaningful relationships and supporting one another"
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
              {
                icon: Clock,
                title: "Legacy",
                description: "Creating lasting impact for future generations"
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
              <p>
                We are a fairly new branch of UAFC, located at Pumula South close to Premier High School.
              </p>
              <p>
                We believe in the Word of God and the power of the Holy Spirit, sharing love and the baptism in the Holy Spirit.
              </p>
              <p>
                We are a vibrant group that maintains high standards.
              </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://www.uafcsa.org.za/wp-content/uploads/2020/03/cropped-logo.png"
                alt="Church history"
                className="object-cover w-full h-full border-2 border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals who serve and guide our church community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Pastor Ndlovu",
                role: "Senior Pastor",
                image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              },
              {
                name: "Sister ",
                role: "Worship Director",
                image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              },
              {
                name: "Pastor",
                role: "Youth Pastor",
                image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
            ].map((leader, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                <p className="text-gray-600">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}