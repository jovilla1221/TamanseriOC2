import { Link } from 'wouter';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-[#0F4C3A] pt-20 pb-10 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/">
              <span className="font-display font-black text-3xl tracking-tight text-white">
                Taman Seri<span className="text-secondary">.</span>
              </span>
            </Link>
            <p className="text-white/80 max-w-sm">
              Segarnya Alam, Serunya Berenang. Destinasi wisata alam keluarga terbaik di Kutai Kartanegara.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <FaTiktok className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">Kolam Renang</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">Danau & View</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">Camping Ground</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">RC Boat</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">Mushola</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">Jajanan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-6">Info</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">Fasilitas</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">Harga Tiket</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">Jam Operasional</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white/80 hover:text-secondary transition-colors">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-3">
                <span className="font-bold text-white min-w-16">Alamat:</span>
                <span>Jl. Loa Tuwi, Dusun Loa Tuwi, Desa Loa Ulung, Kec. Tenggarong Seberang, Kabupaten Kutai Kartanegara, Kalimantan Timur</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold text-white min-w-16">Jam:</span>
                <div>
                  <p>Selasa–Jumat: 14.00–18.00</p>
                  <p>Sabtu–Minggu: 08.30–18.00</p>
                  <p className="text-secondary">Senin Tutup</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10 inline-block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <span className="font-display font-black text-secondary-foreground text-xl">12</span>
                </div>
                <div>
                  <p className="font-bold font-display leading-tight">Terbaik ATWI</p>
                  <p className="text-xs text-white/70">Anugerah Tempat Wisata Idaman 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © 2026 Taman Seri Loa Tuwi. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
