import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";

const images = [
  '/images/visitor-1.png',
  '/images/visitor-2.png',
  '/images/visitor-3.png',
  '/images/facility-1.png',
  '/images/facility-6.png',
];

export function VisitorMoments() {
  return (
    <section className="py-20 bg-[#0A3D2E] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4">Momen Seru<br/><span className="text-secondary">Pengunjung</span></h2>
            <p className="text-lg text-white/70 max-w-xl">
              Lihat keseruan liburan mereka di Taman Seri. Bagikan momen Anda dengan tagar #tamanseriloatuwi.
            </p>
          </div>
          <div className="hidden md:block">
            <a href="#" className="inline-flex items-center gap-2 text-white font-bold hover:text-secondary transition-colors">
              Lihat di TikTok
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="pl-4 md:pl-0 md:container md:mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((src, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-[80%] md:basis-1/3 lg:basis-1/4">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="rounded-2xl overflow-hidden aspect-square border-4 border-white/10 relative group"
                >
                  <img src={src} alt="Visitor moment" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A5F3C]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-medium">@taman.seri</p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="container mx-auto mt-10 flex justify-end gap-4 md:hidden pr-4">
            <CarouselPrevious className="static translate-y-0 bg-white/10 border-white/20 text-white hover:bg-secondary hover:text-secondary-foreground" />
            <CarouselNext className="static translate-y-0 bg-white/10 border-white/20 text-white hover:bg-secondary hover:text-secondary-foreground" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
