"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

export function Hero() {
  const [imageUrl, setImageUrl] = useState("https://picsum.photos/seed/indian-produce/1800/800");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImageUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
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
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center text-center text-white bg-primary/20 group/hero">
        <Image
          src={imageUrl}
          alt="A beautiful arrangement of fresh Indian vegetables and fruits."
          data-ai-hint="indian produce"
          fill
          className="object-cover"
          unoptimized={imageUrl.startsWith('data:image')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover/hero:opacity-100 transition-opacity">
          <Button onClick={triggerFileUpload} variant="secondary" size="lg">
            <Upload className="mr-2 h-5 w-5" />
            Upload New Hero Image
          </Button>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 group-hover/hero:opacity-50 transition-opacity">
          <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground drop-shadow-lg">
            Fresh from the Farm, Straight to You
          </h2>
          <p className="mt-4 md:mt-6 text-lg md:text-xl max-w-2xl mx-auto font-body text-foreground/80 drop-shadow-md">
            Connecting local farmers with students to provide fresh, affordable produce and reduce food waste on campus.
          </p>
        </div>
      </section>
    </>
  );
}