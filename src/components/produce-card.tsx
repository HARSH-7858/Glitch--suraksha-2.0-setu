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
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50">
      <CardHeader>
        <div className="aspect-[3/2] w-full overflow-hidden rounded-t-lg">
          <ImageGenerator
            initialImageUrl={produce.imageUrl}
            produceName={produce.name}
            imageHint={imageHint}
            onImageGenerated={(imageUrl) => onImageGenerated(produce.id, imageUrl)}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex justify-between items-start gap-2">
            <CardTitle className="font-headline text-2xl">{produce.name}</CardTitle>
            <Badge variant="secondary" className="capitalize shrink-0">{produce.type}</Badge>
        </div>
        <CardDescription className="font-body text-base">{produce.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="text-sm text-muted-foreground">
          <p className="font-semibold">{farmer.farm}</p>
          <p>Contact: {farmer.name} at {farmer.contact}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
