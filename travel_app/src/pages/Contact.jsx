import React, { useState} from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Globe, Users } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        travelType: 'leisure'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          travelType: 'leisure'
        });
        alert('Thank you for your message! We\'ll get back to you soon.');
    };

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
          icon: MapPin,
          title: 'Visit Our Office',
          details: ['123 Travel Street', 'Adventure City, AC 12345', 'United States'],
          color: 'from-blue-500 to-blue-600'
        },
        {
          icon: Phone,
          title: 'Call Us',
          details: ['+1 (555) 123-4567', '+1 (555) 987-6543', 'Mon-Fri: 9AM-6PM'],
          color: 'from-green-500 to-green-600'
        },
        {
          icon: Mail,
          title: 'Email Us',
          details: ['info@travel.com', 'support@travel.com', 'booking@travel.com'],
          color: 'from-purple-500 to-purple-600'
        },
        {
          icon: Clock,
          title: 'Business Hours',
          details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM', 'Sunday: Closed'],
          color: 'from-orange-500 to-red-500'
        }
    ];

    const stats = [
        { number: '24/7', label: 'Customer Support', icon: MessageCircle },
        { number: '50+', label: 'Countries Served', icon: Globe },
        { number: '10,000+', label: 'Happy Customers', icon: Users },
        { number: '99%', label: 'Satisfaction Rate', icon: Phone }
    ];

    return (
        <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Touch
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to plan your next adventure? We're here to help make your travel dreams come true.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Travel Type</label>
                    <select
                      name="travelType"
                      value={formData.travelType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    >
                      <option value="leisure">Leisure Travel</option>
                      <option value="business">Business Travel</option>
                      <option value="adventure">Adventure Travel</option>
                      <option value="family">Family Vacation</option>
                      <option value="honeymoon">Honeymoon</option>
                      <option value="group">Group Travel</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your travel plans and how we can assist you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-medium flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We're here to help you plan the perfect trip. Reach out to us through any of the following channels, and our travel experts will get back to you promptly.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-64 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p className="text-lg font-medium">Interactive Map</p>
                    <p className="text-sm opacity-90">Find us on the map</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our travel services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How far in advance should I book my trip?",
                answer: "We recommend booking 2-3 months in advance for the best deals and availability, especially for popular destinations during peak seasons."
              },
              {
                question: "Do you offer travel insurance?",
                answer: "Yes, we offer comprehensive travel insurance options to protect your investment and provide peace of mind during your travels."
              },
              {
                question: "Can you help with visa requirements?",
                answer: "Absolutely! Our travel experts can guide you through visa requirements and assist with the application process for your destination."
              },
              {
                question: "What if I need to cancel my trip?",
                answer: "Cancellation policies vary by package and timing. We'll work with you to minimize fees and explore options like rescheduling or travel credits."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    );
};

export default Contact;