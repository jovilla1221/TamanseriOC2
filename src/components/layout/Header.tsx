import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, Search, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { TicketModal } from '../ui/TicketModal';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [ticketModalOpen, setTicketModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Lokasi', href: '#lokasi' },
    { name: 'Membership', href: '#membership' },
    { name: 'Berita', href: '#berita' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-primary/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className={`font-display font-black text-2xl md:text-3xl tracking-tight ${scrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
              Taman Seri<span className="text-secondary">.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-secondary font-medium transition-colors text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button className="text-white hover:text-secondary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-white/90 font-medium text-sm border border-white/30 rounded-full px-3 py-1">
              <span className="text-white">ID</span>
              <span className="text-white/50">|</span>
              <span className="text-white/50">EN</span>
            </div>
            <Button 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-6 font-bold uppercase tracking-wide"
              onClick={() => setTicketModalOpen(true)}
            >
              Pesan Tiket
            </Button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-primary text-white border-primary-border">
                <div className="flex flex-col gap-6 mt-10">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-white text-xl font-display font-bold hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <Button 
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full w-full mt-4 font-bold uppercase tracking-wide"
                    onClick={() => setTicketModalOpen(true)}
                  >
                    Pesan Tiket
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Floating Ticket Button */}
      <button
        onClick={() => setTicketModalOpen(true)}
        className="fixed right-6 bottom-6 z-50 bg-secondary text-secondary-foreground rounded-full p-4 shadow-lg hover:scale-105 transition-transform animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        <Ticket className="w-6 h-6" />
      </button>

      <TicketModal open={ticketModalOpen} onOpenChange={setTicketModalOpen} />
    </>
  );
}
