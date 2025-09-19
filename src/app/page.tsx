import { SiteHeader } from '@/components/site-header';
import { produce, farmers } from '@/lib/data';
import { ProduceListings } from '@/components/produce-listings';
import { Hero } from '@/components/hero';
import { InfoSection } from '@/components/info-section';
import { Testimonials } from '@/components/testimonials';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <InfoSection />
        <div className="container py-16 md:py-24">
          <ProduceListings produce={produce} farmers={farmers} />
        </div>
        <Testimonials />
      </main>
    </div>
  );
}
