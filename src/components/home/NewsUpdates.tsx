import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    image: '/images/news-1.png',
    title: 'Taman Seri Loa Tuwi Masuk 12 Terbaik ATWI 2023',
    excerpt: 'Penghargaan Anugerah Tempat Wisata Idaman tingkat kabupaten diraih berkat dukungan pengunjung setia.',
    date: '15 Des 2023',
    category: 'Berita'
  },
  {
    image: '/images/news-2.png',
    title: 'Libur Sekolah: Buka Setiap Hari 08.30–18.00',
    excerpt: 'Nikmati libur panjang bersama keluarga dengan HTM tetap Rp 10.000 tanpa kenaikan.',
    date: '10 Jun 2025',
    category: 'Pengumuman'
  },
  {
    image: '/images/facility-4.png',
    title: 'Wahana RC Boat Resmi Dibuka untuk Umum',
    excerpt: 'Keseruan baru di danau Taman Seri. Sewa RC Boat sekarang dan balapan bersama teman.',
    date: '01 Mar 2025',
    category: 'Event'
  }
];

export function NewsUpdates() {
  return (
    <section id="berita" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-black text-[#1A5F3C] mb-4">Berita & Update</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kabar terbaru, promo menarik, dan informasi event di Taman Seri.
          </p>
        </div>

        <Tabs defaultValue="semua" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-muted/50 p-1 rounded-full border border-border">
              <TabsTrigger value="semua" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white">Semua</TabsTrigger>
              <TabsTrigger value="berita" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white">Berita</TabsTrigger>
              <TabsTrigger value="promo" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white">Promo</TabsTrigger>
              <TabsTrigger value="event" className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-white">Event</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="semua" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.map((news, idx) => (
                <Card key={idx} className="overflow-hidden border-border bg-white hover:shadow-xl transition-shadow group flex flex-col h-full">
                  <div className="aspect-video overflow-hidden relative">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {news.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-primary font-medium mb-2">{news.date}</p>
                    <h3 className="text-xl font-display font-bold text-card-foreground leading-tight mb-3 group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-grow">
                      {news.excerpt}
                    </p>
                    <a href="#" className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-dark transition-colors uppercase tracking-wide">
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Other tabs would filter the content, keeping it simple for the landing page */}
          <TabsContent value="berita">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {newsItems.filter(n => n.category === 'Berita').map((news, idx) => (
                  <Card key={idx} className="overflow-hidden border-border bg-white hover:shadow-xl transition-shadow group flex flex-col h-full">
                  <div className="aspect-video overflow-hidden relative">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {news.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-primary font-medium mb-2">{news.date}</p>
                    <h3 className="text-xl font-display font-bold text-card-foreground leading-tight mb-3 group-hover:text-primary transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-grow">
                      {news.excerpt}
                    </p>
                    <a href="#" className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-dark transition-colors uppercase tracking-wide">
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </Card>
               ))}
             </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 py-6 font-bold">
            Lihat Semua Berita
          </Button>
        </div>
      </div>
    </section>
  );
}
