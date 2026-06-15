import { ShieldCheck, CalendarClock, Scale, Info } from 'lucide-react';

export default function Legal() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#101923] py-24 md:py-32 overflow-hidden border-b-4 border-[#FFC107] z-10">
        {/* Decorative Grid or Accents */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,193,7,0.15),rgba(255,255,255,0))] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative text-center">
          <p className="text-[#FFC107] font-mono tracking-widest uppercase text-xs md:text-sm mb-4 font-bold">
            Guaranteed Standards & Security
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-wider mb-6">
            Legal Policies
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
            Transparent, secure, and uncomplicated booking terms for your prehistoric adventure in Gansbaai, South Africa.
          </p>
        </div>
      </section>

      {/* Main Body with Overlapping Card for pristine multi-dimensional visual stacking */}
      <section className="relative px-6 pb-24 bg-[#101923] z-20">
        <div className="max-w-4xl mx-auto -mt-16 md:-mt-24 relative">
          
          {/* Overlapping Content Container */}
          <div className="bg-[#162230] rounded-2xl border-2 border-[#FFC107] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background ambient shine */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC107]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-16">
              
              {/* Introduction Banner */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-xl bg-[#101923]/60 border border-gray-800">
                <div className="p-3 bg-[#FFC107]/10 text-[#FFC107] rounded-lg shrink-0">
                  <Scale className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-[#FFC107] font-bold text-lg uppercase tracking-wider mb-2 flex items-center gap-2">
                    Our Commitment <span className="text-xs text-gray-400 font-mono">(Last Updated: June 2026)</span>
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    By booking or engaging with Afrikanos Bar, Grill, and Crocodile Diving, you accept our standard operating procedures, liability limitations, and adventure guarantees.
                  </p>
                </div>
              </div>

              {/* Privacy Policy */}
              <div className="border-b border-gray-800/80 pb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#FFC107]/10 text-[#FFC107] rounded-md">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
                    Privacy Policy
                  </h2>
                </div>
                <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                  <p>
                    At Afrikanos, we respect your privacy and are committed to protecting your personal data. This privacy policy informs you how we look after your personal data when you visit our website, book an experience, or utilize our premium dining services.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-[#101923] p-5 rounded-lg border border-gray-800">
                      <h4 className="text-[#FFC107] font-bold text-sm uppercase tracking-wider mb-2">
                        1. Information We Collect
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        We collect transactional and personal data essential to secure your bookings, including full names, contact telephone numbers, email addresses, and secure transaction reference ids.
                      </p>
                    </div>
                    <div className="bg-[#101923] p-5 rounded-lg border border-gray-800">
                      <h4 className="text-[#FFC107] font-bold text-sm uppercase tracking-wider mb-2">
                        2. Direct Communication
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        We never trade, rent, or lease your databases or personal parameters to third parties. Emails and mobile notifications are exclusively handled for booking receipts, safety criteria, and direct updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking & Cancellation */}
              <div className="border-b border-gray-800/80 pb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#FFC107]/10 text-[#FFC107] rounded-md">
                    <CalendarClock className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
                    Booking & Cancellation
                  </h2>
                </div>
                <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                  <p>
                    All bookings for crocodile diving, guided pond tours, or restaurant private venues are strictly scheduled to maintain ultimate safety margins and exclusive client focus.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-[#FFC107] rounded-full mt-2.5 shrink-0" />
                      <div>
                        <strong className="text-white font-semibold">Deposit Requirements:</strong> All online reservations require a secure booking deposit to confirm and lock down time slots.
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-[#FFC107] rounded-full mt-2.5 shrink-0" />
                      <div>
                        <strong className="text-white font-semibold">48-Hour Cancellation Window:</strong> Cancellations must be registered at least 48 hours prior to safety brief time for a complete, zero-penalty deposit refund.
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-[#FFC107] rounded-full mt-2.5 shrink-0" />
                      <div>
                        <strong className="text-white font-semibold">Late Cancellation Penalty:</strong> Cancellations made under 48 hours, or failure to present on schedule, forfeit the standard booking deposit.
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-[#FFC107] rounded-full mt-2.5 shrink-0" />
                      <div>
                        <strong className="text-white font-semibold">Weather & Wildlife Exigencies:</strong> Crocodile diving requires precise ecological standards. In rare situations where safe conditions cannot be met, bookings will be rescheduled or fully refunded without secondary administrative cost.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Adventure Indulgence and Liability Advisory */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#FFC107]/10 text-[#FFC107] rounded-md">
                    <Info className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black text-white uppercase tracking-wider">
                    Safety & Liability Disclaimer
                  </h2>
                </div>
                <div className="bg-[#101923] p-6 rounded-lg border border-gray-800 text-gray-400 text-xs md:text-sm leading-relaxed space-y-4">
                  <p>
                    Crocodile diving and interaction with marine species involves inherent hazards. While our custom diving cages are manufactured to military-grade specifications, all dive participants must undergo a mandatory safety briefing and execute standard liability checklists upon arrival.
                  </p>
                  <p>
                    Minors must possess signed consent documents from parents or appointed legal guardians. We reserves all rights to decline dive entry to persons not complying with on-site safety marshal rules.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
