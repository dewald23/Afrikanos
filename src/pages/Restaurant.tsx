import { Link } from 'react-router-dom';
import { Utensils, Wine, Shield, Clock, MapPin, Users, Heart, ExternalLink } from 'lucide-react';

export default function Restaurant() {
  return (
    <>
      {/* Premium Hero Section matching Wilde Hond Standards */}
      <section className="relative h-[45vh] flex items-center justify-center bg-[#101923] overflow-hidden border-b-4 border-[#FFC107] z-10">
        <div className="absolute inset-0">
          <img 
            src="/images/food/Afrikanos_Bar_Vibes.webp" 
            alt="Warm premium restaurant interior and dining table" 
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          {/* Ambient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#101923] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-[#FFC107] font-mono tracking-widest uppercase text-xs md:text-sm mb-3 font-bold">
            Delights at Danger Point
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider mb-2">
            Restaurant <span className="text-[#FFC107]">& Bar</span>
          </h1>
          <p className="text-gray-300 italic text-sm md:text-lg max-w-xl mx-auto font-medium">
            "Good food, great vibes, and the best view in Gansbaai."
          </p>
        </div>
      </section>

      {/* Main Content using the Overlapping Card design framework */}
      <section className="relative px-6 pb-24 bg-[#101923] z-20">
        <div className="max-w-4xl mx-auto -mt-16 md:-mt-24 relative">
          
          {/* Overlapping Content Container in Wilde Hond Navy and Gold */}
          <div className="bg-[#162230] rounded-2xl border-2 border-[#FFC107] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background ambient shine */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFC107]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-12">
              
              {/* Introduction */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#FFC107]/10 text-[#FFC107] rounded-md">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
                    Dine With Us
                  </h2>
                </div>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed border-l-4 border-[#FFC107] pl-4">
                  Whether you're wrapping up a thrilling crocodile dive or just looking for the perfect spot to unwind, the Afrikanos Restaurant & Bar offers a menu designed to satisfy every craving. From our signature gourmet burgers to wood-fired pizzas and fresh local steaks, we pride ourselves on serving quality meals in a relaxed, family-friendly setting.
                </p>

                {/* Link to the Menu page */}
                <div className="mt-8 mb-4 text-center">
                  <Link to="/menu.html" className="inline-block text-[#FFC107] font-bold py-2 px-6 border-2 border-[#FFC107] rounded hover:bg-[#FFC107] hover:text-[#101923] transition-all uppercase tracking-widest text-sm">
                    View Our Full Menu
                  </Link>
                </div>
              </div>

              {/* Why Dine With Us & Features Grid */}
              <div className="space-y-6">
                <h3 className="text-[#FFC107] font-bold text-lg uppercase tracking-wider flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Why Dine With Us?
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Family Atmosphere */}
                  <div className="bg-[#101923] p-6 rounded-xl border border-gray-800 hover:border-[#FFC107]/30 transition-all duration-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-[#FFC107]/10 text-[#FFC107] rounded-lg">
                        <Users className="w-6 h-6" />
                      </div>
                      <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">
                        Family Atmosphere
                      </h4>
                    </div>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      Kids love our secure outdoor play area, giving parents the peace of mind to enjoy their meal and drinks.
                    </p>
                  </div>

                  {/* Fully Stocked Bar */}
                  <div className="bg-[#101923] p-6 rounded-xl border border-gray-800 hover:border-[#FFC107]/30 transition-all duration-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-[#FFC107]/10 text-[#FFC107] rounded-lg">
                        <Wine className="w-6 h-6" />
                      </div>
                      <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">
                        Fully Stocked Bar
                      </h4>
                    </div>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      Enjoy a selection of crisp Western Cape wines, refreshing craft beers, and our popular gin on tap.
                    </p>
                  </div>

                  {/* Events & Functions */}
                  <div className="bg-[#101923] p-6 rounded-xl border border-gray-800 hover:border-[#FFC107]/30 transition-all duration-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-[#FFC107]/10 text-[#FFC107] rounded-lg">
                        <Utensils className="w-6 h-6" />
                      </div>
                      <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">
                        Events & Functions
                      </h4>
                    </div>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      We are the perfect venue for birthdays, weddings, and corporate gatherings. Our team is dedicated to making your special occasion memorable.
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed p-5 bg-[#101923]/40 rounded-lg border border-gray-800/60">
                  Our restaurant is the heart of the Afrikanos experience—a place where adventure meets comfort. We invite you to grab a table, enjoy a sundowner, and soak in the unique atmosphere at Danger Point.
                </p>
              </div>

              {/* Logistics/Dining Info Box */}
              <div className="bg-[#101923] p-8 rounded-xl border-t-4 border-[#FFC107] shadow-lg">
                <h4 className="font-extrabold text-[#FFC107] uppercase mb-6 tracking-widest text-sm flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Dining Information
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-gray-300">
                  <div className="space-y-3">
                    <p className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-[#FFC107] mt-0.5 shrink-0" />
                      <span><strong>Operating Hours:</strong> Tuesday – Sunday, 11:00 till late.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Utensils className="w-4 h-4 text-[#FFC107] mt-0.5 shrink-0" />
                      <span><strong>Cuisine:</strong> Pizza, Burgers, Steaks & Local Favorites.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Wine className="w-4 h-4 text-[#FFC107] mt-0.5 shrink-0" />
                      <span><strong>Features:</strong> Licensed Bar, Kid-friendly play area.</span>
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="flex items-start gap-2">
                      <span className="text-[#FFC107] font-semibold mt-0.5 shrink-0">📅</span>
                      <span><strong>Booking:</strong> Walk-ins welcome; reservations recommended for groups.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-[#FFC107] mt-0.5 shrink-0" />
                      <span><strong>Functions:</strong> Available for private events and weddings.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#FFC107] mt-0.5 shrink-0" />
                      <span><strong>Location:</strong> Located on-site at Afrikanos, Danger Point.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Booking Call To Action */}
              <div className="pt-4">
                <a 
                  href="https://afrikanos.activitar.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full bg-[#FFC107] text-[#101923] font-black py-4 px-6 rounded-lg hover:bg-white transition-all duration-300 uppercase tracking-widest text-center shadow-lg hover:shadow-[#FFC107]/20"
                >
                  <span>Book Your Table</span>
                  <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <p className="text-center text-xs text-gray-400 mt-3 uppercase tracking-wider font-semibold">
                  Secure Live Booking Powered by Activitar
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}

