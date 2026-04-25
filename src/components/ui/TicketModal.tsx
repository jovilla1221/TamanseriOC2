import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Check, Info, Minus, Plus } from 'lucide-react';

export function TicketModal({ open, onOpenChange }: { open: boolean, onOpenChange: (o: boolean) => void }) {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const [tickets, setTickets] = useState({
    dewasa: 0,
    anak: 0,
    balita: 0
  });

  const [addons, setAddons] = useState({
    gorengan: false,
    tenda: false,
    rcboat: false
  });

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep(1);
      setTickets({ dewasa: 0, anak: 0, balita: 0 });
      setAddons({ gorengan: false, tenda: false, rcboat: false });
    }, 300);
  };

  const calculateTotal = () => {
    const ticketTotal = (tickets.dewasa * 10000) + (tickets.anak * 10000);
    const addonsTotal = (addons.gorengan ? 5000 : 0) + (addons.tenda ? 50000 : 0) + (addons.rcboat ? 25000 : 0);
    return ticketTotal + addonsTotal;
  };

  return (
    <Dialog open={open} onOpenChange={(val) => { if(!val) handleClose(); else onOpenChange(val); }}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-white">
        <DialogHeader className="p-6 bg-primary text-white">
          <DialogTitle className="text-2xl font-display font-black">Pesan Tiket Taman Seri</DialogTitle>
        </DialogHeader>

        <div className="p-6">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-8 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-muted -z-10" />
            <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-secondary -z-10 transition-all duration-300`} style={{ width: `${((step - 1) / 3) * 100}%` }} />
            
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                step >= i ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                {step > i ? <Check className="w-4 h-4" /> : i}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <h3 className="text-xl font-bold">Pilih Tanggal Kunjungan</h3>
              <div className="flex justify-center border rounded-xl p-4 bg-muted/20">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md"
                  disabled={(date) => date < new Date(new Date().setHours(0,0,0,0)) || date.getDay() === 1}
                />
              </div>
              <div className="flex items-start gap-3 p-4 bg-primary/10 rounded-xl text-primary text-sm">
                <Info className="w-5 h-5 shrink-0 mt-0.5" />
                <p>Taman Seri tutup pada hari Senin. Jam operasional: Selasa-Jumat 14.00-18.00, Sabtu-Minggu 08.30-18.00.</p>
              </div>
              <Button 
                className="w-full bg-primary hover:bg-primary-dark text-white rounded-full py-6 text-lg"
                disabled={!date}
                onClick={() => setStep(2)}
              >
                Lanjut Pilih Tiket
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <h3 className="text-xl font-bold">Pilih Tiket & Tambahan</h3>
              
              <div className="space-y-4">
                <TicketRow title="Dewasa (13+ th)" price={10000} value={tickets.dewasa} onChange={(v) => setTickets({...tickets, dewasa: v})} />
                <TicketRow title="Anak-anak (3-12 th)" price={10000} value={tickets.anak} onChange={(v) => setTickets({...tickets, anak: v})} />
                <TicketRow title="Balita (< 3 th)" price={0} value={tickets.balita} onChange={(v) => setTickets({...tickets, balita: v})} />
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="font-bold mb-4">Tambahan Opsional</h4>
                <div className="space-y-3">
                  <AddonRow title="Paket Gorengan (3 pcs)" price={5000} checked={addons.gorengan} onChange={(c) => setAddons({...addons, gorengan: c})} />
                  <AddonRow title="Sewa Tenda Camping" price={50000} checked={addons.tenda} onChange={(c) => setAddons({...addons, tenda: c})} />
                  <AddonRow title="Sewa RC Boat" price={25000} checked={addons.rcboat} onChange={(c) => setAddons({...addons, rcboat: c})} />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border mt-6">
                <div>
                  <p className="text-sm text-muted-foreground">Total Pembayaran</p>
                  <p className="text-2xl font-bold text-primary">Rp {calculateTotal().toLocaleString('id-ID')}</p>
                </div>
                <Button 
                  className="bg-primary hover:bg-primary-dark text-white rounded-full px-8"
                  disabled={calculateTotal() === 0 && tickets.balita === 0}
                  onClick={() => setStep(3)}
                >
                  Lanjut
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <h3 className="text-xl font-bold">Data Pengunjung</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nama Lengkap</label>
                  <input type="text" className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none" placeholder="Masukkan nama lengkap" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nomor WhatsApp</label>
                  <input type="tel" className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none" placeholder="08..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input type="email" className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary outline-none" placeholder="email@contoh.com" />
                </div>
              </div>

              <Button 
                className="w-full bg-primary hover:bg-primary-dark text-white rounded-full py-6 text-lg mt-6"
                onClick={() => setStep(4)}
              >
                Lanjut Pembayaran
              </Button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 text-center py-8">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-display font-black text-primary">Pemesanan Berhasil!</h3>
              <p className="text-muted-foreground mb-8">
                Terima kasih. E-tiket Anda telah dikirim ke WhatsApp dan Email Anda. Sampai jumpa di Taman Seri!
              </p>
              <Button 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 py-6 font-bold"
                onClick={handleClose}
              >
                Tutup
              </Button>
            </div>
          )}

        </div>
      </DialogContent>
    </Dialog>
  );
}

function TicketRow({ title, price, value, onChange }: { title: string, price: number, value: number, onChange: (v: number) => void }) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-xl bg-white">
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm text-primary">{price === 0 ? 'Gratis' : `Rp ${price.toLocaleString('id-ID')}`}</p>
      </div>
      <div className="flex items-center gap-3 bg-muted/30 rounded-full p-1">
        <button 
          onClick={() => value > 0 && onChange(value - 1)}
          className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center text-primary disabled:opacity-50"
          disabled={value === 0}
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-4 text-center font-bold">{value}</span>
        <button 
          onClick={() => onChange(value + 1)}
          className="w-8 h-8 rounded-full bg-primary shadow flex items-center justify-center text-white"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function AddonRow({ title, price, checked, onChange }: { title: string, price: number, checked: boolean, onChange: (c: boolean) => void }) {
  return (
    <div 
      className={`flex items-center justify-between p-3 border rounded-xl cursor-pointer transition-colors ${checked ? 'border-primary bg-primary/5' : 'bg-white'}`}
      onClick={() => onChange(!checked)}
    >
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">+ Rp {price.toLocaleString('id-ID')}</p>
      </div>
      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${checked ? 'border-primary bg-primary text-white' : 'border-muted-foreground/30'}`}>
        {checked && <Check className="w-4 h-4" />}
      </div>
    </div>
  );
}