
"use client";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function InfoSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-green-900 text-white py-20 md:py-32">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="font-headline text-4xl md:text-5xl font-bold leading-tight"
            variants={itemVariants}
          >
            More than just a provider of fresh, organic produce
          </motion.h2>

          <motion.div
            className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/20"
            variants={itemVariants}
          >
            <p className="font-bold text-lg mb-2">Founded in 1998</p>
            <p className="text-green-200">
              Our journey began with a simple belief: that everyone deserves
              access to high-quality, nutritious food that nurtures both the
              body and the planet.
            </p>
          </motion.div>

          <motion.div className="flex gap-6 text-sm text-green-300" variants={itemVariants}>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-lime-400" /> ISO 22000
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-lime-400" /> ISO 1400
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-lime-400" /> ISO 12500
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-64 md:h-80"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64">
             <Image
                src="https://picsum.photos/seed/fresh-seal/300/300"
                alt="Fresh Seal"
                data-ai-hint="fresh seal"
                width={300}
                height={300}
                className="animate-spin-slow"
              />
          </div>
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl"
             initial={{ y: 50, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Image
              src="https://picsum.photos/seed/harvest-hands/600/400"
              alt="Hands holding fresh produce"
              data-ai-hint="harvest hands"
              layout="fill"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
