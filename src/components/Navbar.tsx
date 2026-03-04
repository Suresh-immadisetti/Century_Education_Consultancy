import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMessage = "Hello Century Education Consultancy, I would like to book a consultation.";
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    if (path === location.pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section with Animation */}
          <button 
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-3 group"
          >
            <div className="relative overflow-hidden rounded-lg transform group-hover:scale-105 transition-all duration-300">
              <img 
                src={logo} 
                alt="Century Education Consultancy" 
                className="h-12 w-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:block">
              Century Education Consultancy
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`font-medium transition-all hover:text-blue-600 relative group ${
                  isActive(link.path) ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 transition-transform group-hover:scale-x-100 ${
                  isActive(link.path) ? "scale-x-100" : ""
                }`}></span>
              </button>
            ))}

            <a
              href={`https://wa.me/918465079013?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all flex items-center space-x-2 font-medium"
            >
              <Phone className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNavigation(link.path)}
              className={`block py-2 font-medium transition-colors hover:text-blue-600 w-full text-left ${
                isActive(link.path) ? "text-blue-600" : "text-gray-700"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={`https://wa.me/918465079013?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg w-full font-medium"
            onClick={() => setIsOpen(false)}
          >
            <Phone className="h-4 w-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}
    </nav>
  );
}