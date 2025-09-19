"use client";

import { useState, useMemo } from 'react';
import type { Produce, Farmer } from '@/lib/data';
import { ProduceCard } from '@/components/produce-card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Apple, Carrot, Leaf, Grape, PlusCircle } from 'lucide-react';
import { AddProduceForm } from '@/components/add-produce-form';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type ProduceListingsProps = {
  produce: Produce[];
  farmers: Farmer[];
};

type FilterType = Produce['type'] | 'all';

const produceTypes: { name: FilterType, icon: React.ReactNode }[] = [
  { name: 'all', icon: <Grape /> },
  { name: 'fruit', icon: <Apple /> },
  { name: 'vegetable', icon: <Carrot /> },
  { name: 'herb', icon: <Leaf /> },
];

export function ProduceListings({ produce: initialProduce, farmers }: ProduceListingsProps) {
  const [filter, setFilter] = useState<FilterType>('all');
  const [produceItems, setProduceItems] = useState<Produce[]>(initialProduce);

  const farmerMap = useMemo(() => {
    return farmers.reduce((acc, farmer) => {
      acc[farmer.id] = farmer;
      return acc;
    }, {} as Record<string, Farmer>);
  }, [farmers]);

  const filteredProduce = useMemo(() => {
    if (filter === 'all') return produceItems;
    return produceItems.filter(p => p.type === filter);
  }, [filter, produceItems]);

  const handleImageGenerated = (produceId: string, imageUrl: string) => {
    setProduceItems(prevItems =>
      prevItems.map(item =>
        item.id === produceId ? { ...item, imageUrl } : item
      )
    );
  };
  
  const handleAddProduce = (newProduce: Omit<Produce, 'id' | 'imageUrl'>) => {
    const newProduceItem: Produce = {
      ...newProduce,
      id: `p${produceItems.length + 1}`,
    };
    setProduceItems(prevItems => [newProduceItem, ...prevItems]);
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-headline text-3xl md:text-5xl text-foreground tracking-tight">Today's Harvest</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl">
          Discover fresh, locally-sourced produce available today from nearby farms.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
              <div className="flex items-center gap-3">
                <PlusCircle className="text-primary"/> 
                <span className="font-headline text-xl">Are you a farmer? Post new produce</span>
              </div>
          </AccordionTrigger>
          <AccordionContent>
            <AddProduceForm farmers={farmers} onAddProduce={handleAddProduce} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div>
        <div className="flex justify-center items-center gap-2 md:gap-4 pb-8">
            {produceTypes.map(({ name, icon }) => (
              <Button
                key={name}
                variant={filter === name ? 'default' : 'outline'}
                onClick={() => setFilter(name)}
                className={cn(
                  "capitalize transition-all duration-200 ease-in-out transform hover:scale-105",
                  "shadow-sm border-input"
                )}
              >
                {icon}
                <span className="ml-2 hidden md:inline">{name}</span>
              </Button>
            ))}
          </div>

        {filteredProduce.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProduce.map((item) => (
              <ProduceCard
                key={item.id}
                produce={item}
                farmer={farmerMap[item.farmerId]}
                onImageGenerated={handleImageGenerated}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border-2 border-dashed rounded-lg">
              <p className="text-muted-foreground text-xl font-body">No produce found for this category. Check back tomorrow!</p>
          </div>
        )}
      </div>
    </div>
  );
}
