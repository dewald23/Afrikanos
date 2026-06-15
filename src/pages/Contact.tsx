import { Facebook, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <>
      {/* Hero Banner Header */}
      <header className="relative h-[40vh] flex items-center justify-center bg-[#101923]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1600" 
            alt="Deep marine backdrop cage diving" 
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101923] via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider mb-2">
            Secure <span className="text-[#FFC107]">Booking</span>
          </h1>
          <p className="text-gray-300 font-bold uppercase tracking-widest text-sm">Join the Wild Crocodile Core</p>
        </div>
      </header>

      {/* Main Form Overlapping Section */}
      <section className="relative z-20 -mt-20 max-w-4xl mx-auto px-6 pb-24 w-full">
        <div className="bg-[#101923] rounded-xl overflow-hidden border-2 border-[#FFC107] shadow-2xl p-8 md:p-12">
          <div className="text-center mb-10">
             <span className="text-[#FFC107] font-black text-xs uppercase tracking-widest block mb-2">Inquire & Secure</span>
             <h2 className="text-3xl font-black text-white uppercase tracking-wide">Register For An Adventure</h2>
             <p className="text-gray-400 text-sm mt-2">
               Fill out your preferences below and our reservations manager will finalize your cage slots and lunch seating tables.
             </p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-black text-[#FFC107] uppercase tracking-wider mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-[#162230] text-white px-4 py-3.5 rounded border border-gray-800 focus:border-[#FFC107] outline-none transition-colors duration-200 text-sm" 
                  placeholder="e.g. Nicolaas van der Merwe" 
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-black text-[#FFC107] uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-[#162230] text-white px-4 py-3.5 rounded border border-gray-800 focus:border-[#FFC107] outline-none transition-colors duration-200 text-sm" 
                  placeholder="e.g. nicolaas@domain.co.za" 
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="adventure" className="block text-xs font-black text-[#FFC107] uppercase tracking-wider mb-2">Preferred Adventure</label>
                <select 
                  id="adventure" 
                  className="w-full bg-[#162230] text-white px-4 py-3.5 rounded border border-gray-800 focus:border-[#FFC107] outline-none transition-colors duration-200 text-sm appearance-none"
                >
                  <option value="cage-diving">Crocodile Cage Diving (R 850)</option>
                  <option value="shark-diving">White Shark Cage Excursion (R 2,400)</option>
                  <option value="farm-tour">Guided Farm walk-through (R 250)</option>
                  <option value="restaurant">Restaurant Table Reservation Only</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block text-xs font-black text-[#FFC107] uppercase tracking-wider mb-2">Preferred Date</label>
                <input 
                  type="date" 
                  id="date" 
                  className="w-full bg-[#162230] text-white px-4 py-3.5 rounded border border-gray-800 focus:border-[#FFC107] outline-none transition-colors duration-200 text-sm" 
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-black text-[#FFC107] uppercase tracking-wider mb-2">Special Requests or Dietary Requirements</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full bg-[#162230] text-white px-4 py-3.5 rounded border border-gray-800 focus:border-[#FFC107] outline-none transition-colors duration-200 text-sm resize-none" 
                placeholder="Let us know about dietary specifications, children in your group, or group dynamic details..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#FFC107] text-[#101923] font-black py-4 px-6 rounded text-sm hover:bg-white hover:text-[#101923] transition-colors duration-200 uppercase tracking-widest mt-4"
              onClick={() => alert("Thank you! Your booking inquiry has been safely received. Our reservations agent will reach out in the next 15 minutes.")}
            >
              Submit Booking Request
            </button>
          </form>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="bg-white py-16 px-6 text-[#101923] w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Google Map */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              className="w-full h-full border-0" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.710777596007!2d19.3283808!3d-34.6168144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dce17ef2ec4f0e5%3A0xd7fba03ac7673f51!2sAfrikanos%20Bar%20and%20Grill!5e0!3m2!1sen!2sza!4v1620000000000" 
              allowFullScreen 
              loading="lazy"
              title="Afrikanos Location Map"
            />
          </div>

          {/* Right: Contact & Socials */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#101923] uppercase tracking-wider">Contact Us</h2>
            
            {/* Contact Details */}
            <div className="space-y-4 text-gray-700">
              <p><strong>Phone:</strong> 082 220 3344</p>
              <p><strong>Email:</strong> <a href="mailto:hello@afrikanos.co.za" className="hover:text-[#FFC107] transition-colors underline">hello@afrikanos.co.za</a></p>
              <p><strong>Location:</strong> 48 Van Blommenstein Street, Danger Point, Gansbaai, 7220</p>
              <a 
                href="https://www.google.com/maps/dir/-33.7923605,18.8670317/afrikanos/@-34.2037184,18.589506,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x1dce17ef2ec4f0e5:0xd7fba03ac7673f51!2m2!1d19.3309558!2d-34.6168144" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#FFC107] font-bold hover:underline transition-colors mt-2"
              >
                GET DIRECTIONS →
              </a>
            </div>

            {/* Social Media Icons */}
            <div>
              <h4 className="font-bold text-[#101923] uppercase mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/AfrikanosGansbaai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-[#101923] text-white rounded-full hover:bg-[#FFC107] hover:text-[#101923] transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/afrikanosgansbaai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-[#101923] text-white rounded-full hover:bg-[#FFC107] hover:text-[#101923] transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
