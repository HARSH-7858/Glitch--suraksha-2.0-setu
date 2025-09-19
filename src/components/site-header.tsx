import { Logo } from '@/components/icons';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10 items-center">
          <div className="flex items-center gap-2">
            <Logo className="h-7 w-7 text-primary" />
            <span className="font-bold text-lg">Gensai</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">About us</a>
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Products</a>
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Subscription</a>
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Testimonials</a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
           <Button variant="outline" className="group rounded-full hidden sm:flex">
             Shop Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
           </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
