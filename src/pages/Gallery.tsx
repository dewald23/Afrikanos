export default function Gallery() {
  const images = [
    {
      url: "/images/crocodile/Afrikanos_Cage_Dive_Ready.webp",
      caption: "Our Custom Heated Dive Cage",
      category: "Diving"
    },
    {
      url: "/images/crocodile/Afrikanos_Underwater_Jaws.webp",
      caption: "Face-to-Face with Titans",
      category: "Experience"
    },
    {
      url: "/images/crocodile/Afrikanos_Sunbathing_Giants.webp",
      caption: "Nile Crocs in the Sun",
      category: "Tours"
    },
    {
      url: "/images/food/Afrikanos_Restaurant_Or_Crocodiles.webp",
      caption: "Premium Warm Wooden Interiors",
      category: "Restaurant"
    },
    {
      url: "/images/food/Afrikanos_Gourmet_Burger_CloseUp.webp",
      caption: "Gourmet Flame-Grilled Burger",
      category: "Cuisine"
    },
    {
      url: "/images/crocodile/Afrikanos_Wetsuit_Squad_Thumbs_Up.webp",
      caption: "Crew Ready for Action",
      category: "Crew"
    },
    {
      url: "/images/food/Afrikanos_Bar_Vibes.webp",
      caption: "Vibrant Bar and Lounge",
      category: "Restaurant"
    },
    {
      url: "/images/food/Afrikanos_Feast_Mode.webp",
      caption: "Epic Culinary Platters",
      category: "Cuisine"
    },
    {
      url: "/images/crocodile/Afrikanos_Crocodile_Encounter.webp",
      caption: "Underwater Vantage Point",
      category: "Experience"
    }
  ];

  return (
    <>
      {/* Hero Banner Header */}
      <header className="relative h-[40vh] flex items-center justify-center bg-[#101923]">
        <div className="absolute inset-0">
          <img 
            src="/images/general/Afrikanos_Welcome_Board.webp" 
            alt="Pristine coastal sunshine beach landscape" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101923] via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider mb-2">
            The <span className="text-[#FFC107]">Gallery</span>
          </h1>
          <p className="text-gray-300 font-bold uppercase tracking-widest text-sm">A visual snapshot of wild excellence</p>
        </div>
      </header>

      {/* Overlapping Content Box */}
      <section className="relative z-20 -mt-20 max-w-6xl mx-auto px-6 pb-24 w-full">
        <div className="bg-[#101923] rounded-xl overflow-hidden border-2 border-[#FFC107] shadow-2xl p-6 md:p-12">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#FFC107] font-black text-xs uppercase tracking-widest block mb-2">The Afrikanos Lens</span>
            <h2 className="text-3xl font-black text-white uppercase tracking-wide">Capturing Prehistoric Beauty</h2>
            <p className="text-gray-300 text-sm mt-3 leading-relaxed">
              Browse snapshots of guest memories, safe underwater diving operations, signature dishes, and our beautifully design-oriented space in Western Cape.
            </p>
          </div>

          {/* Premium Grid System */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="group relative h-80 rounded-lg overflow-hidden border border-gray-800 shadow-lg"
              >
                {/* Background image */}
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual shade filter */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col justify-end">
                  <span className="bg-[#FFC107] text-[#101923] font-black text-[10px] uppercase px-2.5 py-1 rounded-sm w-max tracking-wider mb-2">
                    {img.category}
                  </span>
                  <h3 className="text-lg font-black text-white uppercase tracking-wide">
                    {img.caption}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 pt-8 border-t border-gray-800">
            <span className="text-gray-400 font-bold uppercase tracking-wider text-xs">Share your experience on Instagram</span>
            <span className="block text-[#FFC107] font-black text-xl mt-1 tracking-wide">#AFRIKANOSWILD</span>
          </div>

        </div>
      </section>
    </>
  );
}
