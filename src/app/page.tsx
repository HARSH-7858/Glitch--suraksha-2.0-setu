import { SiteHeader } from '@/components/site-header';
import { produce, farmers } from '@/lib/data';
import { ProduceListings } from '@/components/produce-listings';
import { Hero } from '@/components/hero';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <div className="container py-8 md:py-12">
          <ProduceListings produce={produce} farmers={farmers} />
        </div>
      </main>
    </div>
  );
}
