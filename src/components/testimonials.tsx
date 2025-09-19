
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "has been a game-changer for me.",
    fullText:
      "love that I can customize my box each week. It's so convenient and has made eating healthy so much easier",
    author: "Aghnie",
    role: "Staff Creative",
    color: "bg-yellow-300",
    textColor: "text-yellow-900",
  },
  {
    quote: "effortless healthy eating made simple",
    fullText:
      "It's incredibly convenient and has made eating healthy so much simpler.",
    author: "Louvie",
    role: "Copywriter",
    color: "bg-lime-400",
    textColor: "text-lime-900",
  },
];

export function Testimonials() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full bg-green-900 py-20 md:py-32">
      <div className="container">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.author} variants={itemVariants}>
              <Card
                className={`${testimonial.color} ${testimonial.textColor} rounded-3xl border-none shadow-xl`}
              >
                <CardContent className="p-8 md:p-10 space-y-4">
                  <h3 className="text-3xl font-bold font-headline">
                    {testimonial.quote}
                  </h3>
                  <p className="text-lg">{testimonial.fullText}</p>
                  <div className="pt-4">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="opacity-80">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
