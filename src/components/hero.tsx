"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full overflow-hidden bg-background text-foreground">
      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-20 md:py-32">
        {/* Text Content */}
        <motion.div 
          className="space-y-6 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="font-headline text-5xl md:text-7xl font-bold leading-tight tracking-tighter"
            variants={itemVariants}
          >
            Organic, Sustainable, and Fresh
          </motion.h1>
          <motion.p className="text-lg text-muted-foreground" variants={itemVariants}>
            Organic Produce • Healthier Tomorrow
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button size="lg" className="group bg-primary text-primary-foreground hover:bg-primary/90">
              Shop Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Image and Cards */}
        <motion.div 
          className="relative h-[400px] md:h-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Lettuce Image */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] md:w-[450px] md:h-[300px] z-10"
            variants={imageVariants}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://picsum.photos/seed/lettuce-fresh/600/400" alt="Fresh Lettuce" data-ai-hint="fresh lettuce" layout="fill" className="object-cover" />
              <div className="absolute bottom-2 left-2 flex items-center gap-2">
                <div className="bg-yellow-300/80 backdrop-blur-sm text-green-900 text-xs font-bold p-2 rounded-lg flex items-center gap-1">
                  <Leaf className="h-4 w-4" /> 100% NATURAL
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Tomato */}
          <motion.div
            className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 z-20"
            variants={itemVariants}
            animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="https://picsum.photos/seed/tomato-float/200/200" alt="Tomato" data-ai-hint="fresh tomato" layout="fill" className="object-contain" />
          </motion.div>
          
          {/* Floating Pepper */}
          <motion.div
            className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-24 h-24 md:w-32 md:h-32 z-20"
            variants={itemVariants}
             animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
             <Image src="https://picsum.photos/seed/pepper-float/200/200" alt="Bell Pepper" data-ai-hint="red bell pepper" layout="fill" className="object-contain" />
          </motion.div>

          {/* Distribution Card */}
          <motion.div
            className="absolute bottom-8 left-0 -translate-x-1/4 md:-translate-x-1/2 bg-card/80 backdrop-blur-md p-4 rounded-2xl shadow-lg w-56 z-20"
            variants={itemVariants}
          >
            <p className="text-sm font-bold mb-2 flex items-center gap-2"><MapPin className="text-primary"/> Distribution in Top 3 Countries</p>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center"><span>🇮🇳 India</span> <span className="font-mono">250,000 kg</span></div>
              <div className="w-full bg-secondary rounded-full h-1.5"><div className="bg-green-500 h-1.5 rounded-full" style={{width: '90%'}}></div></div>
              <div className="flex justify-between items-center"><span>🇳🇵 Nepal</span> <span className="font-mono">150,000 kg</span></div>
               <div className="w-full bg-secondary rounded-full h-1.5"><div className="bg-orange-400 h-1.5 rounded-full" style={{width: '60%'}}></div></div>
              <div className="flex justify-between items-center"><span>🇧🇩 Bangladesh</span> <span className="font-mono">80,000 kg</span></div>
               <div className="w-full bg-secondary rounded-full h-1.5"><div className="bg-yellow-400 h-1.5 rounded-full" style={{width: '40%'}}></div></div>
            </div>
          </motion.div>
          
          {/* Farmers Card */}
          <motion.div
             className="absolute top-8 right-0 -translate-y-1/4 translate-x-1/4 bg-card/80 backdrop-blur-md p-4 rounded-2xl shadow-lg w-48 z-20 text-center"
             variants={itemVariants}
          >
            <div className="relative w-16 h-16 mx-auto mb-2">
                <Image src="https://picsum.photos/seed/farmer-avatar/100/100" alt="Local Farmer" data-ai-hint="indian farmer" layout="fill" className="object-cover rounded-full" />
            </div>
            <p className="text-sm font-bold flex items-center justify-center gap-2"><Users className="text-primary"/> Grown by Local Farmers</p>
            <p className="text-xs text-muted-foreground">Supporting local communities</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
