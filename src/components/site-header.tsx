import { Logo } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-background/50 backdrop-blur-lg">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-4 items-center">
          <Logo className="h-8 w-8 text-primary" />
          <h1 className="font-headline text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Campus Harvest Alert
          </h1>
        </div>
        <div className="flex items-center justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
