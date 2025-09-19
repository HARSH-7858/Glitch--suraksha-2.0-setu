import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center text-center text-white">
      <Image
        src="https://picsum.photos/seed/farm/1800/800"
        alt="A vibrant farm landscape with fresh produce."
        data-ai-hint="farm landscape"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter drop-shadow-2xl">
          Fresh from the Farm, Straight to You
        </h2>
        <p className="mt-4 md:mt-6 text-lg md:text-xl max-w-2xl mx-auto font-body drop-shadow-lg">
          Connecting local farmers with students to provide fresh, affordable produce and reduce food waste on campus.
        </p>
      </div>
    </section>
  );
}
