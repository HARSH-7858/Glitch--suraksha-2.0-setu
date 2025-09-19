'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Upload, ImagePlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ImageUploaderProps {
  initialImageUrl?: string;
  produceName: string;
  imageHint: string;
  onImageUploaded: (imageUrl: string) => void;
}

export function ImageUploader({ initialImageUrl, produceName, imageHint, onImageUploaded }: ImageUploaderProps) {
  const [imageUrl, setImageUrl] = useState<string | undefined>(initialImageUrl);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsLoading(true);
      const reader = new FileReader();
      reader.onloadstart = () => {
        setIsLoading(true);
      };
      reader.onloadend = () => {
        const result = reader.result as string;
        setImageUrl(result);
        onImageUploaded(result);
        setIsLoading(false);
        toast({
          title: 'Image Uploaded!',
          description: `A new image for ${produceName} has been uploaded.`,
        });
      };
      reader.onerror = () => {
        setIsLoading(false);
        toast({
          variant: 'destructive',
          title: 'Upload Failed',
          description: 'Could not read the selected file. Please try again.',
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
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
            <Button onClick={triggerFileUpload} variant="secondary">
              <Upload className="mr-2 h-4 w-4" />
              Upload New Image
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-full bg-accent flex flex-col items-center justify-center p-4 text-center">
          <ImagePlus className="h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground mb-4 font-body">No image available for {produceName}.</p>
          <Button onClick={triggerFileUpload}>
            <Upload className="mr-2 h-4 w-4" />
            Upload Image
          </Button>
      </div>
    );
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
      {content()}
    </>
  );
}
