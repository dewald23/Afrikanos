export default function Placeholder() {
  return (
    <>
      <header className="relative h-[40vh] flex items-center justify-center bg-navy">
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-5xl font-bold text-white uppercase">Coming Soon</h1>
      </header>

      <section className="relative z-20 -mt-20 max-w-4xl mx-auto px-6 pb-20 w-full text-center">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gold p-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Under Construction</h2>
          <p className="text-gray-600">This page is currently being updated. Please check back later.</p>
        </div>
      </section>
    </>
  );
}
