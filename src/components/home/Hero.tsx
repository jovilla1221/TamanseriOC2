import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TicketModal } from '../ui/TicketModal';

const slides = [
  {
    image: '/images/hero-1.png',
    category: 'KOLAM RENANG',
    quote: '"Murah meriah, anak-anak senang, orang tua pun santai. HTM cuma 10K!"',
    attribution: 'Keluarga Wisatawan, Taman Seri'
  },
  {
    image: '/images/hero-2.png',
    category: 'PEMANDANGAN DANAU',
    quote: '"Tempat yang menyenangkan buat dikunjungin, sambil berenang bisa menikmati asrinya pepohonan."',
    attribution: 'Pengunjung Taman Seri'
  },
  {
    image: '/images/hero-3.png',
    category: 'KULINER',
    quote: '"Rela jauh-jauh ke Taman Seri cuma buat gorengan? GAK SALAH SIH — gurih, renyah, dan masih hangat!"',
    attribution: 'Foodie Lokal'
  },
  {
    image: '/images/hero-4.png',
    category: 'CAMPING & RC BOAT',
    quote: '"Selain berenang, bisa camping juga. Liburan bareng keluarga makin seru!"',
    attribution: 'Komunitas Outdoor'
  },
  {
    image: '/images/hero-5.png',
    category: 'PENGHARGAAN',
    quote: '"12 Terbaik Anugerah Tempat Wisata Idaman (ATWI) 2023"',
    attribution: 'Anugerah Tempat Wisata Idaman'
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ticketModalOpen, setTicketModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-primary">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 md:px-6 pt-20">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="inline-block px-3 py-1 mb-6 rounded-full bg-secondary/90 text-secondary-foreground font-bold text-xs uppercase tracking-widest backdrop-blur-sm">
                  {slides[currentSlide].category}
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white leading-tight mb-6">
                  {slides[currentSlide].quote}
                </h1>
                
                <p className="text-lg md:text-xl text-white/80 font-medium mb-10 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-secondary inline-block" />
                  {slides[currentSlide].attribution}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 py-6 font-display font-bold text-lg uppercase tracking-wide group"
                    onClick={() => setTicketModalOpen(true)}
                  >
                    INFO LEBIH LANJUT
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentSlide ? 'bg-secondary w-8' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <TicketModal open={ticketModalOpen} onOpenChange={setTicketModalOpen} />
    </section>
  );
}
