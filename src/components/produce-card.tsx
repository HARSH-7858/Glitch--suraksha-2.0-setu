"use client";

import type { Produce, Farmer } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageUploader } from '@/components/image-uploader';
import { motion } from 'framer-motion';

interface ProduceCardProps {
  produce: Produce;
  farmer: Farmer;
  onImageUpdated: (produceId: string, imageUrl: string) => void;
}

export function ProduceCard({ produce, farmer, onImageUpdated }: ProduceCardProps) {
  const imageHint = produce.name.toLowerCase().split(' ').slice(0, 2).join(' ');

  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="group flex flex-col h-full overflow-hidden bg-card border-none shadow-lg rounded-2xl">
        <CardHeader className="p-0">
          <div className="aspect-[3/2] w-full overflow-hidden relative">
            <ImageUploader
              initialImageUrl={produce.imageUrl}
              produceName={produce.name}
              imageHint={imageHint}
              onImageUploaded={(imageUrl) => onImageUpdated(produce.id, imageUrl)}
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow space-y-3">
          <div className="flex justify-between items-start gap-2">
              <CardTitle className="font-headline text-2xl text-foreground">{produce.name}</CardTitle>
              <Badge variant="secondary" className="capitalize shrink-0 bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs">{produce.type}</Badge>
          </div>
          <p className="font-body text-base text-muted-foreground">{produce.description}</p>
          <p className="font-headline text-xl text-primary font-bold pt-2">{produce.price}</p>
        </CardContent>
        <CardFooter className="p-6 pt-2">
          <div className="text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">{farmer.farm}</p>
            <p>Contact: {farmer.name} at {farmer.contact}</p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
