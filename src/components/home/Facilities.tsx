import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const facilities = [
  {
    image: '/images/facility-1.png',
    title: 'Kolam Renang',
    desc: 'Berenang sepuasnya dengan HTM hanya Rp 10.000. Cocok untuk anak-anak dan keluarga.'
  },
  {
    image: '/images/facility-2.png',
    title: 'Danau & Pemandangan',
    desc: 'Suasana sejuk dengan view danau alami. Spot favorit untuk nongkrong sore.'
  },
  {
    image: '/images/facility-3.png',
    title: 'Camping Ground',
    desc: 'Area camping untuk keluarga atau rombongan. Rasakan serunya bermalam di alam terbuka.'
  },
  {
    image: '/images/facility-4.png',
    title: 'RC Boat',
    desc: 'Main perahu remote control di danau. Keseruan baru untuk anak-anak dan dewasa.'
  },
  {
    image: '/images/facility-5.png',
    title: 'Mushola',
    desc: 'Fasilitas ibadah yang nyaman dan bersih untuk pengunjung Muslim di area alam.'
  },
  {
    image: '/images/facility-6.png',
    title: 'Jajanan & Gorengan',
    desc: 'Legendary gorengan Rp 5.000 dapat 3. Gurih, renyah, hangat baru diangkat.'
  }
];

export function Facilities() {
  return (
    <section id="fasilitas" className="py-24 bg-[#FFF8E7]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-black text-[#1A5F3C] mb-4">Fasilitas Kami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nikmati berbagai fasilitas lengkap yang kami sediakan untuk kenyamanan dan keseruan liburan keluarga Anda di Taman Seri.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="overflow-hidden border-[#FEEDCA] bg-white group cursor-pointer h-full hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                  <img 
                    src={fac.image} 
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
                    <h3 className="text-2xl font-display font-black text-white group-hover:-translate-y-1 transition-transform duration-300">
                      {fac.title}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {fac.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
