import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const attractions = [
  {
    image: '/images/nearby-1.png',
    name: 'Museum Mulawarman',
    distance: '~15 km',
    desc: 'Museum kerajaan Kutai Kartanegara dengan koleksi sejarah berharga.'
  },
  {
    image: '/images/nearby-2.png',
    name: 'Kota Raja Kutai Lama',
    distance: '~20 km',
    desc: 'Situs sejarah & budaya pusat pemerintahan awal Kerajaan Kutai.'
  },
  {
    image: '/images/nearby-3.png',
    name: 'Tenggarong Kota',
    distance: '~10 km',
    desc: 'Ibu kota Kabupaten Kukar dengan landmark Jembatan Kukar & tepian Mahakam.'
  },
];

export function NearbyAttractions() {
  return (
    <section className="py-24 bg-[#FFF8E7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black text-[#1A5F3C] mb-4">Jelajahi Sekitar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lengkapi liburan Anda dengan mengunjungi destinasi wisata menarik lainnya di sekitar Taman Seri.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {attractions.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="overflow-hidden border-[#FEEDCA] bg-white h-full hover:shadow-lg transition-shadow">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-display font-bold text-card-foreground leading-tight">{item.name}</h3>
                      </div>
                      <div className="flex items-center text-sm font-medium text-secondary mb-3 bg-secondary/10 w-fit px-2 py-1 rounded">
                        <MapPin className="w-3 h-3 mr-1" />
                        {item.distance}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 bg-white border-primary text-primary hover:bg-primary hover:text-white" />
            <CarouselNext className="static translate-y-0 bg-white border-primary text-primary hover:bg-primary hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
