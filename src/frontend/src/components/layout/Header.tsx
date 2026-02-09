import { Link } from '@tanstack/react-router';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { assetUrl } from '@/lib/assetUrl';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Learn More', href: '/learn-more' },
  { name: 'Special Event', href: '/special-event' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={assetUrl('/assets/generated/school-logo.dim_512x512.png')}
            alt="Child Care Nursery School Logo" 
            className="h-10 w-10"
          />
          <span className="font-display text-xl font-bold text-primary">Child Care Nursery School</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
              activeProps={{
                className: 'text-primary bg-accent',
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={assetUrl('/assets/generated/school-logo.dim_512x512.png')}
                  alt="Child Care Nursery School Logo" 
                  className="h-10 w-10"
                />
                <span className="font-display text-xl font-bold text-primary">Child Care Nursery School</span>
              </div>
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link
                      to={item.href}
                      className="px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:text-primary hover:bg-accent rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      activeProps={{
                        className: 'text-primary bg-accent',
                      }}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
