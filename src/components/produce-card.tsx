"use client";

import type { Produce, Farmer } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageGenerator } from '@/components/image-generator';

interface ProduceCardProps {
  produce: Produce;
  farmer: Farmer;
  onImageGenerated: (produceId: string, imageUrl: string) => void;
}

export function ProduceCard({ produce, farmer, onImageGenerated }: ProduceCardProps) {
  const imageHint = produce.name.toLowerCase().split(' ').slice(0, 2).join(' ');

  return (
    <Card className="group flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card">
      <CardHeader className="p-0">
        <div className="aspect-[3/2] w-full overflow-hidden">
           <ImageGenerator
            initialImageUrl={produce.imageUrl}
            produceName={produce.name}
            imageHint={imageHint}
            onImageGenerated={(imageUrl) => onImageGenerated(produce.id, imageUrl)}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow space-y-2">
        <div className="flex justify-between items-start gap-2">
            <CardTitle className="font-headline text-xl">{produce.name}</CardTitle>
            <Badge variant="secondary" className="capitalize shrink-0">{produce.type}</Badge>
        </div>
        <CardDescription className="font-body text-base text-muted-foreground">{produce.description}</CardDescription>
        <p className="font-headline text-lg text-primary font-bold">{produce.price}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">{farmer.farm}</p>
          <p>Contact: {farmer.name} at {farmer.contact}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
