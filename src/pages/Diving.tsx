import { Shield, Clock, Calendar, CheckCircle, Waves, AlertTriangle, ExternalLink, HelpCircle } from 'lucide-react';

export default function Diving() {
  return (
    <>
      {/* Premium Hero Section with Brand Background */}
      <section className="relative h-[45vh] flex items-center justify-center bg-[#101923] overflow-hidden border-b-4 border-[#FFC107] z-10">
        <div className="absolute inset-0">
          <img 
            src="/images/crocodile/Afrikanos_Underwater_Jaws.webp" 
            alt="Deep ocean cage diving background" 
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          {/* Ambient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#101923] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-[#FFC107] font-mono tracking-widest uppercase text-xs md:text-sm mb-3 font-bold">
            Adrenaline Meets Ancient Giants
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider mb-2">
            Crocodile <span className="text-[#FFC107]">Diving</span>
          </h1>
          <p className="text-gray-300 italic text-sm md:text-lg max-w-xl mx-auto font-medium">
            "Closer to a Nile crocodile you’re not going to get!!!!"
          </p>
        </div>
      </section>

      {/* Main Content with 'Overlapping Card' Framework */}
      <section className="relative px-6 pb-24 bg-[#101923] z-20">
        <div className="max-w-4xl mx-auto -mt-16 md:-mt-24 relative">
          
          {/* Overlapping Content Container in Wilde Hond Navy and Gold */}
          <div className="bg-[#162230] rounded-2xl border-2 border-[#FFC107] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Soft decorative background ambient radial light */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFC107]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-12">
              
              {/* Introduction Card */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#FFC107]/10 text-[#FFC107] rounded-md">
                    <Waves className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
                    The Ultimate Free Dive
                  </h2>
                </div>
                <div className="text-gray-300 text-sm md:text-base leading-relaxed space-y-4">
                  <p className="border-l-4 border-[#FFC107] pl-4 italic text-white text-base md:text-lg">
                    Here at Afrikanos, you will get to “free dive” with these majestic creatures—no cages, no restrictions. Our first-in-the-world enclosure safely separates man and crocodile with secure, high-grade stainless steel netting. Come wet yourself!!!!!
                  </p>
                </div>
              </div>

              {/* What to Expect Timeline / Process */}
              <div>
                <h3 className="text-[#FFC107] font-bold text-lg uppercase tracking-wider mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FFC107] rounded-full"></span>
                  What to expect
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#101923] p-6 rounded-xl border border-gray-800/80 hover:border-[#FFC107]/40 transition-colors duration-200">
                    <span className="text-xs font-mono font-bold text-[#FFC107] uppercase bg-[#FFC107]/10 px-2 py-1 rounded">
                      Step 1: The Briefing
                    </span>
                    <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                      You will be part of our daily pond tour. Once you arrive, you will be welcomed and given an educational talk on everything you need to know about crocodiles by our well-trained, experienced crocodile guide. After the briefing, you will be prepped on the upcoming exciting events.
                    </p>
                  </div>

                  <div className="bg-[#101923] p-6 rounded-xl border border-gray-800/80 hover:border-[#FFC107]/40 transition-colors duration-200">
                    <span className="text-xs font-mono font-bold text-[#FFC107] uppercase bg-[#FFC107]/10 px-2 py-1 rounded">
                      Step 2: Prep & Play
                    </span>
                    <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                      The croc pond tour will then commence, and once you’ve gained enough courage, you will be given a locker to store your private valuables to get ready to take on this bucket list experience and get ready to DIVE!
                    </p>
                  </div>
                </div>
              </div>

              {/* Logistics Grid Case */}
              <div className="bg-[#101923] p-8 rounded-xl border-t-4 border-[#FFC107] shadow-lg">
                <h4 className="font-extrabold text-[#FFC107] uppercase mb-6 tracking-widest text-sm flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Experience Logistics
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-gray-300">
                  <div className="space-y-3">
                    <p className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-[#FFC107] mt-0.5 shrink-0" />
                      <span><strong>Duration:</strong> Up to 60 minutes in the water.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-[#FFC107] mt-0.5 shrink-0" />
                      <span><strong>Available:</strong> Tuesday – Sunday at 11:00, 13:00, and 15:00.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#FFC107] mt-0.5 shrink-0" />
                      <span><strong>Includes:</strong> Rash vest, towel, and diving mask.</span>
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="flex items-start gap-2">
                      <span className="text-[#FFC107] font-extrabold font-mono mt-0.5 shrink-0">R</span>
                      <span><strong>Pricing:</strong> <span className="text-[#FFC107] font-bold">R 550</span> per person.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-[#FFC107] mt-0.5 shrink-0" />
                      <span><strong>Requirements:</strong> No under 6-year-olds. Minors (6-12) must be accompanied by a paying adult.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-[#FFC107] font-extrabold text-xs mt-1 shrink-0">📍</span>
                      <span><strong>Note:</strong> Please bring swimwear, sunscreen, and your camera!</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Frequently Asked Questions */}
              <div className="border-t border-gray-800/80 pt-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-[#FFC107]/10 text-[#FFC107] rounded-md">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
                    Frequently Asked Questions
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#101923] p-6 rounded-xl border border-gray-800 hover:border-[#FFC107]/30 transition-all duration-200">
                    <h4 className="font-extrabold text-[#FFC107] text-sm uppercase tracking-wide mb-2">
                      Do I need to be a strong swimmer?
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Not at all! You will be provided with a high-quality rash vest and a secure, professional mask. The water level is managed to ensure you can comfortably stand or hold onto the side railings at all times.
                    </p>
                  </div>

                  <div className="bg-[#101923] p-6 rounded-xl border border-gray-800 hover:border-[#FFC107]/30 transition-all duration-200">
                    <h4 className="font-extrabold text-[#FFC107] text-sm uppercase tracking-wide mb-2">
                      Is the water temperature controlled?
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Our pond is naturally maintained, and we provide comfortable rash vests to help you stay warm during your dive. It’s all part of the wild, authentic experience!
                    </p>
                  </div>

                  <div className="bg-[#101923] p-6 rounded-xl border border-gray-800 hover:border-[#FFC107]/30 transition-all duration-200">
                    <h4 className="font-extrabold text-[#FFC107] text-sm uppercase tracking-wide mb-2">
                      Can I take my phone or camera inside?
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      For safety and to protect your gear, we provide lockers for all private valuables before you enter the water. We recommend bringing a waterproof camera or GoPro, provided it can be securely strapped to your wrist or chest.
                    </p>
                  </div>

                  <div className="bg-[#101923] p-6 rounded-xl border border-gray-800 hover:border-[#FFC107]/30 transition-all duration-200">
                    <h4 className="font-extrabold text-[#FFC107] text-sm uppercase tracking-wide mb-2">
                      What if the weather is bad?
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Safety is our priority. If we need to reschedule your dive due to extreme weather conditions, our team will contact you immediately to move your booking to another slot.
                    </p>
                  </div>
                </div>
              </div>

              {/* Secure Call To Action */}
              <div className="pt-4">
                <a 
                  href="https://afrikanos.activitar.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full bg-[#FFC107] text-[#101923] font-black py-4 px-6 rounded-lg hover:bg-white transition-all duration-300 uppercase tracking-widest text-center shadow-lg hover:shadow-[#FFC107]/20"
                >
                  <span>Hours & Prices & Book Live</span>
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
