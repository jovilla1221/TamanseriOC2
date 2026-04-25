import { MapPin } from "lucide-react";

export function LocationMap() {
  return (
    <section id="lokasi" className="py-0 relative h-[500px] w-full bg-muted flex items-center justify-center overflow-hidden">
      {/* Using a styled static representation of a map instead of heavy iframe/leaflet for performance and design consistency */}
      <div className="absolute inset-0 bg-[#e5e3df]">
        {/* Abstract map patterns to look like a stylized map */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A5F3C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute top-[30%] left-[20%] w-[60%] h-12 bg-sky-200/50 rotate-12 rounded-full blur-sm"></div>
        <div className="absolute top-[40%] right-[20%] w-64 h-64 bg-green-200/50 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative group cursor-pointer animate-bounce" style={{ animationDuration: '2s' }}>
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-xl border-4 border-white mb-2">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <div className="w-12 h-3 bg-black/20 rounded-[100%] mx-auto blur-[2px]"></div>
          
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-2xl p-4 w-64 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <h4 className="font-display font-bold text-primary mb-1">Taman Seri Loa Tuwi</h4>
            <p className="text-xs text-muted-foreground mb-3">Tenggarong Seberang, Kutai Kartanegara</p>
            <div className="text-xs font-bold text-secondary-foreground bg-secondary px-3 py-1 rounded-full inline-block">
              Buka Hari Ini
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a 
          href="https://maps.google.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-colors font-bold rounded-full px-6 py-3 shadow-lg flex items-center gap-2"
        >
          <MapPin className="w-4 h-4" />
          Buka di Google Maps
        </a>
      </div>
    </section>
  );
}
