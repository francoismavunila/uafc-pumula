import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">U.A.F.C - Pumula South</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                123 Faith Street, City, ST 12345
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                +263 783 857 780
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                mavunila002@gmail.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/sermons" className="hover:text-primary transition-colors">Sermons</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="/ministries" className="hover:text-primary transition-colors">Ministries</Link></li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-xl font-bold mb-4">Service Times</h3>
            <ul className="space-y-2">
              <li>Sunday: 9:00 AM & 11:00 AM</li>
              <li>Friday Home Group: 7:00 PM</li>
              <li>Youth Service: Saturday 2:00 PM</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} UAFC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}