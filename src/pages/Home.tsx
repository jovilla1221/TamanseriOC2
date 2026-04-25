import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { Facilities } from '@/components/home/Facilities';
import { VisitorMoments } from '@/components/home/VisitorMoments';
import { LocationMap } from '@/components/home/LocationMap';
import { NearbyAttractions } from '@/components/home/NearbyAttractions';
import { TicketBanner } from '@/components/home/TicketBanner';
import { SeriCircle } from '@/components/home/SeriCircle';
import { NewsUpdates } from '@/components/home/NewsUpdates';

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        <Hero />
        <Facilities />
        <VisitorMoments />
        <LocationMap />
        <NearbyAttractions />
        <TicketBanner />
        <SeriCircle />
        <NewsUpdates />
      </main>
      <Footer />
    </div>
  );
}
