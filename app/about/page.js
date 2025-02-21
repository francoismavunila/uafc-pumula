'use client'

import React, { useState, useEffect } from 'react';
import {  
  Heart, BookOpen, Activity, Handshake, Crown, UsersRound, 
  Church, Home, Baby, Users, BookHeart, Download, 
  FileText, Quote, Star, ChevronLeft, ChevronRight
} from 'lucide-react';
export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    { src: "church.jpg", alt: "Church gathering" },
    { src: "church_1.jpg", alt: "Worship service" },
    { src: "church_2.jpg", alt: "Community outreach" },
    { src: "logo.jpeg", alt: "Prayer meeting" }
  ];

  useEffect(() => {
    const animateRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setActiveIndex(randomIndex);
      
      // Reset after animation
      setTimeout(() => {
        setActiveIndex(null);
      }, 2000); // Animation duration
    };

    const interval = setInterval(animateRandomImage, 3000); // Trigger every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20">
      
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

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Vision</h3>
              <p className="text-lg text-gray-800">
                Raising up an army of believers who will grow up in CHRISTLIKENESS, to bring about TRANSFORMATION, BREAKTHROUGHS and NEW BIRTH IN THIS LIFE
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Mission</h3>
              <p className="text-lg text-gray-800">
                To raise up a community of believers who are deeply rooted in Christ, equipped to fulfill their God-given purposes, and empowered to transform their world through the demonstration of God's love, power, and wisdom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values with Expanded Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600">The foundations that shape our community and ministry</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Language of Love",
                verse: "Colossians 4:6",
                description: "Speaking words that edify, encourage, and inspire others.",
                quote: "Words are seeds that take root in our hearts and minds.",
                icon: Heart
              },
              {
                title: "Culture of Service",
                verse: "Mark 10:45",
                description: "Living a life of selfless service to others, just as Jesus did.",
                quote: "Service to others is the rent you pay for your room here on earth.",
                icon: Handshake
              },
              {
                title: "Currency of Faith",
                verse: "Hebrews 11:1",
                description: "Trusting in God's goodness and provision, even when you can't see the outcome.",
                quote: "Faith is not the absence of doubt; it is the presence of trust.",
                icon: Star
              },
              {
                title: "Mandate of Action",
                verse: "James 1:22",
                description: "Taking intentional steps to obey God's leading and fulfill your purpose.",
                quote: "The way to get started is to quit talking and begin doing.",
                icon: Activity
              },
              {
                title: "Standard of Excellence",
                verse: "Colossians 3:23",
                description: "Striving for excellence in all areas of life, as a reflection of God's character.",
                quote: "Excellence is not a destination; it is a continuous journey that never ends.",
                icon: Crown
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <value.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">{value.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{value.description}</p>
                <div className="flex items-center mb-4">
                  <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">{value.verse}</span>
                </div>
                <div className="flex items-center">
                  <Quote className="h-5 w-5 text-blue-600 mr-2" />
                  <p className="text-gray-700 italic">{value.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
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
          
          {/* Animated Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div 
                key={index}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover transition-transform duration-2000 
                    ${activeIndex === index ? 'scale-125' : 'scale-100'}`}
                />
              </div>
            ))}
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
            {/* New Downloads Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Church Resources</h2>
            <p className="text-xl text-gray-600">Download important documents and resources</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Church Profile",
                description: "Learn more about our church's history, vision, and values",
                icon: FileText,
                filename: "UNITED-APOSTOLIC-FAITH-CHURCH-WHAT-WE-TEACH-AND-BELIEVE.pdf"
              },
              {
                title: "Statement of Faith",
                description: "Our core beliefs and doctrinal positions",
                icon: BookHeart,
                filename: "UNITED-APOSTOLIC-FAITH-CHURCH-WHAT-WE-TEACH-AND-BELIEVE.pdf"
              },
              {
                title: "Ministry Programs",
                description: "Details about our various ministry programs and activities",
                icon: Users,
                filename: "UNITED-APOSTOLIC-FAITH-CHURCH-WHAT-WE-TEACH-AND-BELIEVE.pdf"
              }
            ].map((resource, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <resource.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <button 
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => window.open(`/downloads/${resource.filename}`)}
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motto Footer */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Motto</h2>
          <p className="text-xl">Love, Serve and INSPIRE</p>
          <p className="text-lg mt-2 italic">"Committed to be like Christ"</p>
        </div>
      </section>
    </div>
  );
}