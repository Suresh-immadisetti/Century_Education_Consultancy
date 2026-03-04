import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';
import logo from "../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    navigate('/services');
    setTimeout(() => {
      const element = document.getElementById(serviceId);
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleNavigation = (path: string) => {
    if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate('/');
    } else {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info - same as before */}
          <div className="space-y-6">
            <button 
              onClick={() => handleNavigation('/')}
              className="flex items-center space-x-3 group text-left"
            >
              <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-all">
                <img 
                  src={logo} 
                  alt="Century Education Consultancy" 
                  className="h-26 w-auto object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white">Century Education Consultancy</span>
            </button>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for overseas education. Helping students achieve their dreams since 2008.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-blue-400 hover:text-white transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-pink-600 hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-lg hover:bg-blue-700 hover:text-white transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - same as before */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation('/')}
                  className="text-gray-400 hover:text-white transition-colors flex items-center group w-full text-left"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/services')}
                  className="text-gray-400 hover:text-white transition-colors flex items-center group w-full text-left"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/about')}
                  className="text-gray-400 hover:text-white transition-colors flex items-center group w-full text-left"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/contact')}
                  className="text-gray-400 hover:text-white transition-colors flex items-center group w-full text-left"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services - same as before */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleServiceClick('btech')}
                  className="text-gray-400 hover:text-white transition-colors flex items-center group w-full text-left"
                >
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  B.Tech Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('mbbs')}
                  className="text-gray-400 hover:text-white transition-colors flex items-center group w-full text-left"
                >
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  MBBS Abroad
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('pharmacy')}
                  className="text-gray-400 hover:text-white transition-colors flex items-center group w-full text-left"
                >
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Pharmacy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleServiceClick('management')}
                  className="text-gray-400 hover:text-white transition-colors flex items-center group w-full text-left"
                >
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                  Management
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info - same as before */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <Phone className="h-5 w-5 text-blue-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-400">+91 8465079013</p>
                  <p className="text-gray-400">+91 9640497146</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <Mail className="h-5 w-5 text-purple-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">centuryeducationconsultancy@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-pink-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-400">2nd Floor , Singapore Plaza ,4/14 Brodipeta , Guntur-522002 AP</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 group">
                <Clock className="h-5 w-5 text-green-500 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-white font-medium">Working Hours</p>
                  <p className="text-gray-400">Mon-Fri: 9AM - 6PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Updated with policy links */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Century Education Consultancy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => handleNavigation('/privacy-policy')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleNavigation('/terms-of-service')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => handleNavigation('/cookie-policy')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}