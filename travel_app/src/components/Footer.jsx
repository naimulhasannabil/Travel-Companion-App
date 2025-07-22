import React from "react";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Plane } from "lucide-react";

const Footer = () => {
    const footerLinks = {
        company: [
          { label: 'About Us', href: '#' },
          { label: 'Our Team', href: '#' },
          { label: 'Careers', href: '#' },
          { label: 'Press', href: '#' },
          { label: 'Blog', href: '#' }
        ],
        destinations: [
          { label: 'Europe', href: '#' },
          { label: 'Asia', href: '#' },
          { label: 'Americas', href: '#' },
          { label: 'Africa', href: '#' },
          { label: 'Oceania', href: '#' }
        ],
        support: [
          { label: 'Help Center', href: '#' },
          { label: 'Contact Us', href: '#' },
          { label: 'Booking Support', href: '#' },
          { label: 'Travel Insurance', href: '#' },
          { label: 'Safety Guidelines', href: '#' }
        ],
        legal: [
          { label: 'Privacy Policy', href: '#' },
          { label: 'Terms of Service', href: '#' },
          { label: 'Cookie Policy', href: '#' },
          { label: 'Refund Policy', href: '#' },
          { label: 'Accessibility', href: '#' }
        ]
    };

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Youtube, href: '#', label: 'YouTube' }
    ];

    return(
        <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Get the latest travel deals, destination guides, and exclusive offers delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900"
              />
              <button className="bg-white text-orange-600 px-6 py-3 rounded-r-lg hover:bg-gray-100 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Plane className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Travel</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted travel companion for extraordinary adventures around the world. 
                We create unforgettable experiences that connect you with amazing destinations and cultures.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-300">123 Travel Street, Adventure City, AC 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-300">info@travel.com</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-orange-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Destinations</h4>
              <ul className="space-y-3">
                {footerLinks.destinations.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-orange-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-orange-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-orange-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Travel Company. All rights reserved. Made with ❤️ for travelers worldwide.
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;