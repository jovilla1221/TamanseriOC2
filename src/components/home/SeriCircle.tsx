import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const tiers = [
  {
    name: "Explorer",
    level: "Bronze",
    price: "100.000",
    color: "#D4AC69",
    bgColor: "bg-[#D4AC69]",
    features: [
      "5x kunjungan gratis / tahun",
      "Diskon 10% tiket & makanan",
      "Newsletter bulanan",
      "Digital member card"
    ]
  },
  {
    name: "Family",
    level: "Gold",
    price: "500.000",
    color: "#FFC20E",
    bgColor: "bg-secondary",
    isFeatured: true,
    features: [
      "Kunjungan gratis tanpa batas",
      "Diskon 30% tiket & makanan",
      "Gratis camping 2x / tahun",
      "Gratis masuk di bulan ulang tahun",
      "Akses VIP ke event khusus"
    ]
  },
  {
    name: "Adventurer",
    level: "Silver",
    price: "250.000",
    color: "#C0C0C0",
    bgColor: "bg-[#C0C0C0]",
    features: [
      "12x kunjungan gratis / tahun",
      "Diskon 20% tiket & makanan",
      "Prioritas booking",
      "Undangan event member"
    ]
  }
];

export function SeriCircle() {
  return (
    <section id="membership" className="py-24 bg-[#1A5F3C]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-4">Gabung Seri Circle</h2>
          <p className="text-lg text-[#FFF8E7] max-w-2xl mx-auto">
            Membership eksklusif untuk pengunjung setia Taman Seri. Dapatkan berbagai keuntungan, diskon, dan akses prioritas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {tiers.map((tier, idx) => (
            <Card 
              key={idx} 
              className={`relative overflow-hidden bg-white ${tier.isFeatured ? 'border-4 border-secondary shadow-2xl scale-105 z-10 md:-mt-8 md:-mb-8' : 'border-2 border-[#2E8B57] shadow-xl'}`}
            >
              {tier.isFeatured && (
                <div className="absolute top-6 -right-12 rotate-45 bg-secondary text-secondary-foreground font-black px-12 py-1 shadow-md text-sm">
                  BEST VALUE
                </div>
              )}
              
              <div className="p-8 text-center border-b border-muted">
                <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold mb-4 ${tier.bgColor} text-black`}>
                  {tier.level}
                </div>
                <h3 className="text-2xl font-display font-bold text-card-foreground mb-2">{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm font-bold text-muted-foreground">Rp</span>
                  <span className="text-4xl font-display font-black text-primary">{tier.price}</span>
                  <span className="text-sm font-medium text-muted-foreground">/tahun</span>
                </div>
              </div>
              
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className={`mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${tier.isFeatured ? 'bg-secondary/20 text-secondary-foreground' : 'bg-primary/10 text-primary'}`}>
                        <Check className="w-3 h-3 font-bold" />
                      </div>
                      <span className="text-sm font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full rounded-full py-6 font-bold ${tier.isFeatured ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' : 'bg-primary text-white hover:bg-primary-dark'}`}>
                  Gabung Sekarang
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
