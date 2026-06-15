import { Link } from 'react-router-dom';

export default function Home() {
  const coreServices = [
    {
      title: "Crocodile Cage Diving",
      subtitle: "Eye-to-Eye Adventure",
      link: "/diving.html",
      image: "/images/crocodile/Afrikanos_Cage_Dive_Ready.webp",
      desc: "Immerse yourself inside our custom-heated safety cage and watch Africa's apex reptiles circle inches away."
    },
    {
      title: "Crocodile Tours",
      subtitle: "Guided Hatchling Excursions",
      link: "/tours.html",
      image: "/images/crocodile/Afrikanos_Sunbathing_Giants.webp",
      desc: "Perfect educational walk-throughs for the whole family. Hold younger hatchlings and learn from experts."
    },
    {
      title: "Heritage Dining",
      subtitle: "Bespoke Wild Game & Pizzas",
      link: "/restaurant.html",
      image: "/images/food/Afrikanos_Restaurant_Or_Crocodiles.webp",
      desc: "Savor signature game skewers cooked over open embers or specialty sourdough stone-baked pizzas."
    }
  ];

  return (
    <>
      {/* Immersive Video Header */}
      <header className="relative h-[75vh] flex items-center justify-center overflow-hidden z-10">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          poster="/images/crocodile/Afrikanos_Crocodile_Encounter.webp"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://afrikanos.co.za/wp-content/uploads/2022/10/Afrikanos-Web-Site-Book-Now-Landing-Page-Video-Section-3-Benefits-Video-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#101923]/60"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-[#FFC107] font-black uppercase tracking-widest text-xs sm:text-sm block mb-4 border-b-2 border-[#FFC107] pb-2 w-max mx-auto">
            Gansbaai, Western Cape
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-wider mb-4 leading-none">
            AFRIKANOS
          </h1>
          <p className="text-lg md:text-2xl text-white font-bold opacity-90 uppercase tracking-widest mb-10">
            Crocodile Cage Diving & Luxury Dining
          </p>
          <Link 
            to="/contact.html" 
            className="bg-[#FFC107] text-[#101923] font-black py-4 px-10 rounded text-sm uppercase tracking-widest hover:bg-white hover:text-[#101923] transition-all duration-200 shadow-2xl"
          >
            BOOK AN ADVENTURE
          </Link>
        </div>
      </header>

      {/* Main Core Overlapping Card Section - Wilde Hond Signature style */}
      <section className="relative z-20 -mt-20 max-w-7xl mx-auto px-6 pb-24 w-full">
        {/* The Overlapping Card */}
        <div className="bg-[#101923] rounded-xl overflow-hidden border-2 border-[#FFC107] shadow-2xl p-8 md:p-14">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FFC107] font-black text-xs uppercase tracking-widest block mb-2">The Wild Call</span>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wider">Uncompromising Wilderness Encounters</h2>
            <div className="w-16 h-1 bg-[#FFC107] mx-auto mt-4 mb-6"></div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Afrikanos represents the ultimate destination in South Africa's scenic Whale Coast. Guided by ocean conservationists and apex predator specialists, we host high-octane cage dives, premium heritage restaurant menus, and educational croc-rearing excursions.
            </p>
          </div>

          {/* Three Column service grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((srv, idx) => (
              <div 
                key={idx} 
                className="bg-[#162230] rounded-lg overflow-hidden border border-gray-800 hover:border-[#FFC107]/60 transition-all duration-300 flex flex-col justify-between shadow-lg h-[460px] group"
              >
                <div>
                  {/* Photo area */}
                  <div className="h-44 w-full overflow-hidden border-b border-gray-800 relative">
                    <img 
                      src={srv.image} 
                      alt={srv.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>
                  {/* Text Details */}
                  <div className="p-6">
                    <span className="text-[#FFC107] font-black text-[10px] uppercase tracking-widest block mb-2">{srv.subtitle}</span>
                    <h3 className="text-xl font-black text-white uppercase tracking-wide mb-3">{srv.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{srv.desc}</p>
                  </div>
                </div>
                {/* CTA Action Bar */}
                <div className="p-6 border-t border-gray-800/80">
                  <Link 
                    to={srv.link} 
                    className="text-white hover:text-[#FFC107] font-black text-xs uppercase tracking-wider flex items-center transition-all duration-200"
                  >
                    Explore Experience 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Informational Callout matching the Wilde Hond design */}
        <div className="mt-16 bg-[#162230] p-8 md:p-12 rounded-xl border border-gray-800 shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center text-left gap-8">
          <div>
            <h3 className="text-xl font-black text-white uppercase tracking-wider mb-2">Ready to secure your booking slot?</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
              Crocodile cage diving operates in heated pools daily. We recommend securing bookings at least 48 hours in advance to guarantee your preferred time slot.
            </p>
          </div>
          <Link 
            to="/contact.html" 
            className="bg-[#FFC107] text-[#101923] font-black px-8 py-4 rounded text-sm uppercase tracking-widest whitespace-nowrap hover:bg-white hover:text-[#101923] transition-colors duration-200"
          >
            BOOK SECURELY NOW
          </Link>
        </div>
      </section>
    </>
  );
}
