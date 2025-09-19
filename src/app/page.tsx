import { SiteHeader } from '@/components/site-header';
import { produce, farmers } from '@/lib/data';
import { ProduceListings } from '@/components/produce-listings';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <SiteHeader />
      <main className="flex-1 container py-8">
        <ProduceListings produce={produce} farmers={farmers} />
      </main>
    </div>
  );
}
