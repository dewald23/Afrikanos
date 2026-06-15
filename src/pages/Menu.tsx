import { Flame, Star, Utensils, Wine, Award, CheckCircle } from 'lucide-react';

export default function Menu() {
  const starters = [
    { name: "Mussels", desc: "Creamy Garlic & Wine", price: "R 90" },
    { name: "Fish Cakes", desc: "Served with Sweet Chilli Mayo", price: "R 60" },
    { name: "Calamari", desc: "100g Strips & Tartar sauce", price: "R 80" },
    { name: "Homemade Meatballs & Pizza Bread", desc: "Perfect for sharing", price: "R 70" },
    { name: "Kudu Carpaccio", desc: "A true South African delicacy", price: "R 110" },
    { name: "Mac & Cheese Bites", desc: "Crispy and golden bites", price: "R 70" },
    { name: "Crumbed Mushrooms", desc: "Served with dipping sauce", price: "R 75" },
    { name: "Biltong & Blue Cheese Salad", desc: "A savory, flavorful local blend", price: "R 75" }
  ];

  const burgers = [
    { name: "The Classic Beef", price: "R 125" },
    { name: "Bacon & Cheese", price: "R 140" },
    { name: "Mushroom Truffle", price: "R 165" },
    { name: "Holy Macaroni", price: "R 155" },
    { name: "Blue Cheese & Fig", price: "R 155" }
  ];

  const mains = [
    { name: "500g BBQ Pork Ribs", price: "R 190" },
    { name: "Lamb Shank", price: "R 175" },
    { name: "Oxtail", desc: "Cooked in a rich Red Wine Sauce", price: "R 180" },
    { name: "Fish & Chips (Hake)", desc: "Fresh local line hake", price: "R 135" },
    { name: "Hake, Chips & Calamari", desc: "The ultimate seafood board", price: "R 175" }
  ];

  const pizzas = [
    { name: "The Predator", desc: "Biltong, Blue Cheese, Fig & Rocket", price: "R 155", popular: true },
    { name: "The Kahuna", desc: "Bacon, Feta, Balsamic & Caramelized Onion", price: "R 145" },
    { name: "Treehugger", desc: "Mushrooms, Peppers, Onions & Olives", price: "R 135" }
  ];

  return (
    <>
      {/* Hero Header Banner conforming to Wilde Hond Standards */}
      <section className="relative h-[45vh] flex items-center justify-center bg-[#101923] overflow-hidden border-b-4 border-[#FFC107] z-10">
        <div className="absolute inset-0">
          <img 
            src="/images/food/Afrikanos_Gourmet_Burger_CloseUp.webp" 
            alt="Handwritten culinary checklist and dining menu setup" 
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          {/* Ambient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#101923] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="text-[#FFC107] font-mono tracking-widest uppercase text-xs md:text-sm mb-3 font-bold">
            Danger Point's Legendary Kitchen
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider mb-2">
            The Afrikanos <span className="text-[#FFC107]">Grub</span>
          </h1>
          <p className="text-xl text-gray-400 italic mt-2">
            Legendary wood-fired pizzas, flame-grilled classics, and coastal favorites.
          </p>
        </div>
      </section>

      {/* Overlapping Content Menu Layout */}
      <section className="relative px-6 pb-24 bg-[#101923] z-20">
        <div className="max-w-4xl mx-auto -mt-16 md:-mt-24 relative animate-fade-in">
          
          {/* Overlapping Card Container */}
          <div className="bg-[#162230] rounded-2xl border-2 border-[#FFC107] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background ambient shine */}
            <div className="absolute top-0 right-0 w-85 h-85 bg-[#FFC107]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-12">
              
              {/* STARTERS SECTION */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
                  <div className="p-2 bg-[#FFC107]/10 text-[#FFC107] rounded-md">
                    <Utensils className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
                    Starters & Nibbles
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {starters.map((item, idx) => (
                    <div key={idx} className="flex flex-col justify-between border-b border-gray-800/40 pb-4 last:border-0">
                      <div className="flex justify-between items-baseline gap-4">
                        <h4 className="font-extrabold text-white text-sm uppercase tracking-wide hover:text-[#FFC107] transition-colors duration-200">
                          {item.name}
                        </h4>
                        <span className="font-mono text-[#FFC107] font-black whitespace-nowrap text-sm">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs mt-1 italic">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* MAINS & BURGERS SPLIT SECTION */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
                
                {/* GOURMET BURGERS */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
                    <div className="p-2 bg-[#FFC107]/10 text-[#FFC107] rounded-md">
                      <Flame className="w-5 h-5 animate-pulse" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">
                        Gourmet Burgers
                      </h2>
                    </div>
                  </div>
                  
                  <p className="text-[10px] uppercase font-mono tracking-wider text-[#FFC107] bg-[#FFC107]/5 py-2 px-3 rounded border border-[#FFC107]/15">
                    * All served on sesame bun with onion rings & hand-cut fries
                  </p>

                  <div className="space-y-4">
                    {burgers.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-baseline border-b border-gray-800/20 pb-3 last:border-0">
                        <span className="font-bold text-gray-300 text-sm hover:text-white transition-colors duration-200">
                          {item.name}
                        </span>
                        <span className="font-mono text-white font-bold text-sm">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* COASTAL MAINS */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
                    <div className="p-2 bg-[#FFC107]/10 text-[#FFC107] rounded-md">
                      <Wine className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">
                      Coastal Mains
                    </h2>
                  </div>

                  <div className="space-y-5">
                    {mains.map((item, idx) => (
                      <div key={idx} className="flex flex-col border-b border-gray-800/20 pb-3 last:border-0">
                        <div className="flex justify-between items-baseline">
                          <span className="font-bold text-gray-300 text-sm hover:text-white transition-colors duration-200">
                            {item.name}
                          </span>
                          <span className="font-mono text-white font-bold text-sm">
                            {item.price}
                          </span>
                        </div>
                        {item.desc && (
                          <p className="text-gray-500 text-[11px] mt-0.5">
                            {item.desc}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* WOOD-FIRED PIZZAS SECTION */}
              <div className="bg-[#101923] p-8 rounded-xl border border-gray-800/80 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-1 bg-[#FFC107] text-[#101923]">
                  <Flame className="w-4 h-4 fill-current" />
                </div>
                
                <h2 className="text-2xl font-black text-[#FFC107] uppercase tracking-wider mb-6 pb-2 border-b border-gray-800 flex items-center gap-2">
                  <span>Volcanic Wood-Fired Pizzas</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {pizzas.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`p-5 rounded-lg border flex flex-col justify-between transition-all duration-300 ${
                        item.popular 
                          ? 'bg-[#162230] border-[#FFC107]/55 shadow-lg relative' 
                          : 'bg-[#162230]/50 border-gray-800'
                      }`}
                    >
                      {item.popular && (
                        <span className="absolute -top-2.5 left-4 bg-[#FFC107] text-[#101923] font-mono font-extrabold text-[9px] uppercase px-2 py-0.5 rounded tracking-widest flex items-center gap-1">
                          <Star className="w-2.5 h-2.5 fill-current" />
                          Legend
                        </span>
                      )}
                      <div>
                        <h4 className="font-extrabold text-white text-sm uppercase tracking-wide mb-1">
                          {item.name}
                        </h4>
                        <p className="text-gray-400 text-[11px] leading-relaxed mb-4">
                          {item.desc}
                        </p>
                      </div>
                      <div className="text-right border-t border-gray-800/60 pt-2 float-right mt-2">
                        <span className="font-mono text-[#FFC107] font-black text-sm">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DESSERT SPOTLIGHT */}
              <div className="relative p-6 rounded-xl bg-gradient-to-r from-[#101923] to-[#162230] border-2 border-dotted border-[#FFC107]/30 text-center">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFC107]/10 text-[#FFC107] px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border border-[#FFC107]/20 flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#FFC107]" />
                  Ma's Traditional Recipe
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider mt-2">
                  Ma Se Traditional Malva
                </h3>
                <p className="text-gray-400 text-xs mt-1">
                  Served hot with rich vanilla ice cream or velvet custard.
                </p>
                <div className="mt-3 text-[#FFC107] font-mono font-black text-lg">
                  R 75
                </div>
              </div>

              {/* Sourcing and Standards */}
              <div className="pt-6 border-t border-gray-800 text-center text-[11px] text-gray-500 space-y-1 max-w-xl mx-auto uppercase tracking-wider font-semibold">
                <p className="flex items-center justify-center gap-1.5 text-gray-400">
                  <CheckCircle className="w-3.5 h-3.5 text-[#FFC107]" />
                  <span>Sourced with respect & passion in Danger Point, Gansbaai</span>
                </p>
                <p>
                  Gluten-free alternatives or allergy accommodations available upon request.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
