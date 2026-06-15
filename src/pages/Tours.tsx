import { Compass, Eye, Users, Clock, Calendar, Shield, HelpCircle, ExternalLink } from 'lucide-react';

export default function Tours() {
  return (
    <>
      {/* Hero Header Banner conforming to Wilde Hond Standards */}
      <section className="relative h-[45vh] flex items-center justify-center bg-[#101923] overflow-hidden border-b-4 border-[#FFC107] z-10">
        <div className="absolute inset-0">
          <img 
            src="/images/crocodile/Afrikanos_Poolside_Stare.webp" 
            alt="Nile crocodiles in natural pond habitat" 
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          {/* Ambient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#101923] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-[#FFC107] font-mono tracking-widest uppercase text-xs md:text-sm mb-3 font-bold">
            Family Friendly & Educational
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider mb-2">
            Crocodile <span className="text-[#FFC107]">Pond Tours</span>
          </h1>
          <p className="text-gray-300 italic text-sm md:text-lg max-w-xl mx-auto font-medium">
            "Educational, thrilling, and safe for the whole family."
          </p>
        </div>
      </section>

      {/* Overlapping Content Card Framework */}
      <section className="relative px-6 pb-24 bg-[#101923] z-20">
        <div className="max-w-4xl mx-auto -mt-16 md:-mt-24 relative">
          
          {/* Overlapping Content Container in Wilde Hond Navy and Gold */}
          <div className="bg-[#162230] rounded-2xl border-2 border-[#FFC107] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Soft decorative background ambient radial light */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFC107]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-12">
              
              {/* Introduction */}
              <div className="space-y-4">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  Discover the prehistoric beauty of the Nile crocodile up close. Our Pond Tours offer a unique perspective on these apex predators, allowing you to observe their natural behaviors from both above and below the water line.
                </p>
              </div>

              {/* Two Ways to Explore Grid */}
              <div className="space-y-6">
                <h3 className="text-[#FFC107] font-bold text-lg uppercase tracking-wider flex items-center gap-2">
                  <Compass className="w-5 h-5" />
                  Two Ways to Explore
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Underwater Viewing Cave */}
                  <div className="bg-[#101923] p-6 rounded-xl border border-gray-800 hover:border-[#FFC107]/30 transition-all duration-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-[#FFC107]/10 text-[#FFC107] rounded-lg">
                        <Eye className="w-6 h-6" />
                      </div>
                      <h4 className="font-extrabold text-white text-base uppercase tracking-wider">
                        Underwater Viewing Cave
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Experience the crocodiles in their element through reinforced, secure viewing windows. Watch them glide beneath the surface in this one-of-a-kind underwater perspective.
                    </p>
                  </div>

                  {/* Elevated Walkways */}
                  <div className="bg-[#101923] p-6 rounded-xl border border-gray-800 hover:border-[#FFC107]/30 transition-all duration-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-[#FFC107]/10 text-[#FFC107] rounded-lg">
                        <Compass className="w-6 h-6" />
                      </div>
                      <h4 className="font-extrabold text-white text-base uppercase tracking-wider">
                        Elevated Walkways
                      </h4>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Get a bird's-eye view of the pond. These vantage points are perfect for photography and offer a safe, elevated look at the habitat from above.
                    </p>
                  </div>
                </div>

                {/* Guide Talk Highlight */}
                <div className="p-5 rounded-lg bg-[#101923]/60 border border-gray-800 text-gray-300 text-sm leading-relaxed">
                  Every tour is accompanied by an informative talk provided by our expert crocodile guides. They’ll share fascinating insights into crocodile biology, conservation, and the unique history of the Afrikanos experience, making this a truly educational outing for all ages.
                </div>
              </div>

              {/* Logistics & Tour details Box */}
              <div className="bg-[#101923] p-8 rounded-xl border-t-4 border-[#FFC107] shadow-lg">
                <h4 className="font-extrabold text-[#FFC107] uppercase mb-6 tracking-widest text-sm flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Tour Logistics
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-gray-300">
                  <div className="space-y-3">
                    <p className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-[#FFC107] mt-0.5 shrink-0" />
                      <span><strong>Frequency:</strong> Tours run every 45 minutes.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-[#FFC107] mt-0.5 shrink-0" />
                      <span><strong>Available:</strong> Tuesday – Sunday, 11:00 till late.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Compass className="w-4 h-4 text-[#FFC107] mt-0.5 shrink-0" />
                      <span><strong>Educational Talk:</strong> Included in every tour session.</span>
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="flex items-start gap-2">
                      <span className="text-[#FFC107] font-extrabold font-mono mt-0.5 shrink-0">R</span>
                      <span><strong>Pricing:</strong> Please enquire for current rates.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-[#FFC107] mt-0.5 shrink-0" />
                      <span><strong>Family Friendly:</strong> Suitable for all ages; infants under 2 enter for free.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#FFC107] font-extrabold text-xs mt-1 shrink-0">👥</span>
                      <span><strong>Group Bookings:</strong> We welcome schools and large groups; please contact us to arrange.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="space-y-6 pt-4 border-t border-gray-800">
                <h3 className="text-[#FFC107] font-bold text-lg uppercase tracking-wider flex items-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  Frequently Asked Questions
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#101923] p-5 rounded-lg border border-gray-800">
                    <h5 className="font-extrabold text-white text-sm uppercase tracking-wide mb-2">
                      Are bookings required?
                    </h5>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      While walk-ins are welcome, we recommend online bookings during peak periods to secure your desired time slot and guide availability.
                    </p>
                  </div>
                  <div className="bg-[#101923] p-5 rounded-lg border border-gray-800">
                    <h5 className="font-extrabold text-white text-sm uppercase tracking-wide mb-2">
                      Can under 6-year-olds attend?
                    </h5>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Absolutely! The pond tour, walks, overhead decks, and underwater viewing areas are completely family-friendly and open to kids of all ages. Only the cage dive has age limits.
                    </p>
                  </div>
                </div>
              </div>

              {/* Secure Booking Button */}
              <div className="pt-4">
                <a 
                  href="https://afrikanos.activitar.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full bg-[#FFC107] text-[#101923] font-black py-4 px-6 rounded-lg hover:bg-white transition-all duration-300 uppercase tracking-widest text-center shadow-lg hover:shadow-[#FFC107]/20"
                >
                  <span>Check Availability & Book</span>
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
