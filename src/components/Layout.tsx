import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, MapPin } from 'lucide-react';

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#101923] text-white">
      {/* Brand Navigation conforming to Wilde Hond Standards */}
      <nav className="bg-[#101923] py-4 border-b-4 border-[#FFC107] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 relative">
          
          {/* Left Navigation (Desktop Only - flex-1 and mr-8/space-x-8) */}
          <div className="hidden md:flex flex-1 justify-end space-x-8 text-white font-bold uppercase text-sm mr-8">
            <Link to="/diving.html" className="hover:text-[#FFC107] transition-all">Diving</Link>
            <Link to="/tours.html" className="hover:text-[#FFC107] transition-all">Tours</Link>
            <Link to="/restaurant.html" className="hover:text-[#FFC107] transition-all">Restaurant</Link>
          </div>

          {/* Centered Logo */}
          <div className="flex-shrink-0 py-2">
            <Link to="/index.html" className="flex justify-center items-center">
              <img 
                src="/images/general/Afrikano.Logo..webp" 
                alt="Afrikanos - The African Crocodile Experience" 
                className="h-24 md:h-32 w-auto object-contain transition-all duration-300"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>

          {/* Right Navigation (Desktop Only - flex-1 and ml-8/space-x-8) */}
          <div className="hidden md:flex flex-1 justify-start space-x-8 text-white font-bold uppercase text-sm ml-8 items-center">
            <Link to="/menu.html" className="hover:text-[#FFC107] transition-all">Menu</Link>
            <Link to="/gallery.html" className="hover:text-[#FFC107] transition-all">Gallery</Link>
            <Link to="/contact.html" className="hover:text-[#FFC107] transition-all">Contact</Link>
            <Link to="/contact.html" className="bg-[#FFC107] text-[#101923] px-5 py-2 rounded font-bold hover:bg-white hover:text-[#101923] transition-all text-center ml-4">BOOK NOW</Link>
          </div>

          {/* Mobile Menu Trigger Button (Hidden on Desktop) */}
          <div className="flex md:hidden absolute right-6 top-1/2 -translate-y-1/2 z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#FFC107] p-2 hover:bg-white/5 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC107] transition-all duration-200"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
          
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        <div 
          className={`md:hidden absolute left-0 right-0 top-full bg-[#101923]/98 border-b-4 border-[#FFC107] backdrop-blur-xl shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-[100vh] opacity-100 py-6 border-t border-gray-800' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex flex-col space-y-4 px-8 text-center font-bold uppercase tracking-widest text-sm">
            <Link 
              to="/diving.html" 
              onClick={() => setIsOpen(false)}
              className="py-3 text-white hover:text-[#FFC107] border-b border-gray-800/50 hover:border-[#FFC107]/40 transition-all duration-200"
            >
              Diving
            </Link>
            <Link 
              to="/tours.html" 
              onClick={() => setIsOpen(false)}
              className="py-3 text-white hover:text-[#FFC107] border-b border-gray-800/50 hover:border-[#FFC107]/40 transition-all duration-200"
            >
              Tours
            </Link>
            <Link 
              to="/restaurant.html" 
              onClick={() => setIsOpen(false)}
              className="py-3 text-white hover:text-[#FFC107] border-b border-gray-800/50 hover:border-[#FFC107]/40 transition-all duration-200"
            >
              Restaurant
            </Link>
            <Link 
              to="/menu.html" 
              onClick={() => setIsOpen(false)}
              className="py-3 text-white hover:text-[#FFC107] border-b border-gray-800/50 hover:border-[#FFC107]/40 transition-all duration-200"
            >
              Menu
            </Link>
            <Link 
              to="/gallery.html" 
              onClick={() => setIsOpen(false)}
              className="py-3 text-white hover:text-[#FFC107] border-b border-gray-800/50 hover:border-[#FFC107]/40 transition-all duration-200"
            >
              Gallery
            </Link>
            <Link 
              to="/contact.html" 
              onClick={() => setIsOpen(false)}
              className="py-3 text-white hover:text-[#FFC107] border-b border-gray-800/50 hover:border-[#FFC107]/40 transition-all duration-200"
            >
              Contact
            </Link>
            
            <div className="pt-4 pb-2">
              <Link 
                to="/contact.html" 
                onClick={() => setIsOpen(false)}
                className="block bg-[#FFC107] text-[#101923] py-3.5 rounded font-black text-center tracking-widest text-sm hover:bg-white hover:text-[#101923] transition-all shadow-xl"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Core Viewport */}
      <main className="flex-grow flex flex-col bg-[#101923]">
        <Outlet />
      </main>

      {/* Brand Footer conforming to Wilde Hond Standards */}
      <footer className="bg-[#101923] text-white py-12 border-t-4 border-[#FFC107] mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* Column 1: Brand/Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/images/general/Afrikano.Logo..webp" 
              alt="Afrikanos Logo" 
              className="h-20 w-auto mb-4 object-contain"
              referrerPolicy="no-referrer"
            />
            <p className="text-sm text-gray-400">The African Crocodile Experience. Danger Point, Gansbaai.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[#FFC107] font-bold uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/diving.html" className="hover:text-[#FFC107] transition duration-200">Crocodile Diving</Link>
              </li>
              <li>
                <Link to="/tours.html" className="hover:text-[#FFC107] transition duration-200">Pond Tours</Link>
              </li>
              <li>
                <Link to="/restaurant.html" className="hover:text-[#FFC107] transition duration-200">Restaurant & Bar</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support & Info */}
          <div>
            <h4 className="text-[#FFC107] font-bold uppercase tracking-widest mb-4">Support & Info</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact.html" className="hover:text-[#FFC107] transition duration-200">Contact Us</Link>
              </li>
              <li>
                <Link to="/legal.html" className="hover:text-[#FFC107] transition duration-200">Legal Policies</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div>
            <h4 className="text-[#FFC107] font-bold uppercase tracking-widest mb-4">Connect With Us</h4>
            <p className="text-sm mb-4">
              082 220 3344<br />
              <a href="mailto:hello@afrikanos.co.za" className="hover:text-[#FFC107] transition">hello@afrikanos.co.za</a>
            </p>
            
            {/* Social & Map Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/AfrikanosGansbaai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#FFC107] hover:text-[#101923] transition-all duration-200 text-white"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/afrikanosgansbaai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#FFC107] hover:text-[#101923] transition-all duration-200 text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              {/* Google Maps */}
              <a 
                href="https://www.google.com/maps/place/Afrikanos+Bar+and+Grill+-+Gansbaai/@-34.6167809,19.3309578,15z/data=!4m5!3m4!1s0x0:0xd7fba03ac7673f51!8m2!3d-34.6168144!4d19.3309558" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-[#FFC107] hover:text-[#101923] transition-all duration-200 text-white"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
        </div>
        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs mt-10">
          &copy; 2026 Afrikanos. All rights reserved. | <Link to="/legal.html" className="hover:text-[#FFC107] hover:underline transition-colors">Legal Policies</Link>
        </div>
      </footer>
    </div>
  );
}
