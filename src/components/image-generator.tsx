'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Sparkles } from 'lucide-react';
import { handleGenerateImage } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

interface ImageGeneratorProps {
  initialImageUrl?: string;
  produceName: string;
  imageHint: string;
  onImageGenerated: (imageUrl: string) => void;
}

export function ImageGenerator({ initialImageUrl, produceName, imageHint, onImageGenerated }: ImageGeneratorProps) {
  const [imageUrl, setImageUrl] = useState<string | undefined>(initialImageUrl);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generateImage = async () => {
    setIsLoading(true);
    const result = await handleGenerateImage(produceName);
    setIsLoading(false);

    if (result.success && result.imageUrl) {
      setImageUrl(result.imageUrl);
      onImageGenerated(result.imageUrl);
      toast({
        title: 'Image Generated!',
        description: `A new image for ${produceName} has been created.`,
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: result.error || 'Could not generate image. Please try again.',
      });
    }
  };

  const content = () => {
    if (isLoading) {
      return <Skeleton className="w-full h-full" />;
    }

    if (imageUrl) {
      return (
        <div className="relative w-full h-full group/image">
          <Image
            src={imageUrl}
            alt={`Image of ${produceName}`}
            width={600}
            height={400}
            data-ai-hint={imageHint}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            unoptimized={imageUrl.startsWith('data:image')}
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity">
            <Button onClick={generateImage} disabled={isLoading} variant="secondary">
              <Sparkles className="mr-2 h-4 w-4" />
              Generate New Image
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-full bg-accent flex flex-col items-center justify-center p-4 text-center">
          <Sparkles className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground mb-4 font-body">No image available for {produceName}.</p>
          <Button onClick={generateImage} disabled={isLoading}>
            <Sparkles className="mr-2 h-4 w-4" />
            Generate Image
          </Button>
      </div>
    );
  };

  return <>{content()}</>;
}
