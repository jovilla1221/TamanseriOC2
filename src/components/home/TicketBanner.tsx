import { Button } from "@/components/ui/button";
import { Clock, MapPin, Ticket } from "lucide-react";
import { useState } from "react";
import { TicketModal } from "../ui/TicketModal";

export function TicketBanner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative w-full py-20 bg-primary overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl translate-x-[-50%] translate-y-[-50%]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full mix-blend-overlay filter blur-3xl translate-x-[20%] translate-y-[20%]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left text-white max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-4">Yuk ke Taman Seri!</h2>
            <p className="text-xl md:text-2xl font-medium text-white/80 mb-8">Pesan Tiket Online Lebih Mudah</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Alamat</h4>
                  <p className="text-white/80 text-sm">Jl. Loa Tuwi, Loa Ulung, Tenggarong Seberang</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Jam Buka</h4>
                  <p className="text-white/80 text-sm">Sabtu-Minggu: 08.30-18.00</p>
                  <p className="text-white/80 text-sm">Selasa-Jumat: 14.00-18.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full text-center relative border-4 border-secondary/30">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground font-bold px-6 py-2 rounded-full shadow-lg whitespace-nowrap">
              HTM Rp 10.000
            </div>
            
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 mt-4">
              <Ticket className="w-10 h-10 text-primary" />
            </div>
            
            <h3 className="text-2xl font-display font-bold text-card-foreground mb-2">Berenang Sepuasnya</h3>
            <p className="text-muted-foreground mb-8">Harga tiket sudah termasuk akses kolam renang untuk seluruh area.</p>
            
            <Button 
              className="w-full bg-primary hover:bg-primary-dark text-white rounded-full py-7 text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              onClick={() => setModalOpen(true)}
            >
              PESAN TIKET SEKARANG
            </Button>
          </div>
        </div>
      </div>
      
      <TicketModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
