import { produce, farmers } from '@/lib/data';
import { SiteHeader } from '@/components/site-header';
import { ProduceListings } from '@/components/produce-listings';

export default function Home() {
  const allProduce = produce;
  const allFarmers = farmers;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ProduceListings produce={allProduce} farmers={allFarmers} />
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground font-body">
        <p>&copy; {new Date().getFullYear()} Campus Harvest Alert. All rights reserved.</p>
      </footer>
    </div>
  );
}
