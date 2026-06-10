export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1594824436998-dd40e4f69395?auto=format&fit=crop&q=80&w=800'
  ];

  return (
    <div className="bg-white pb-24">
      {/* Page Header */}
      <div className="bg-dark text-white py-20 text-center relative overflow-hidden mb-20">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/10 blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Clinic Gallery</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Take a virtual tour of our state-of-the-art clinic infrastructure, advanced equipments, and positive hygiene environment in Kharadi.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((src, i) => (
            <div key={i} className="aspect-square bg-gray-200 rounded-2xl overflow-hidden group cursor-pointer relative shadow-sm hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors z-10"></div>
              <img 
                src={src} 
                alt={`Clinic view ${i + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
