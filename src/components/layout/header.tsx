
"use client";

import * as React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/common/logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Menu, HomeIcon, InfoIcon, BriefcaseIcon, MailIcon, LayoutDashboardIcon, CpuIcon, RocketIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/components', label: 'Components', icon: RocketIcon },
  { href: '/templates', label: 'Templates', icon: LayoutDashboardIcon },
  { href: '/ai-suggester', label: 'AI Suggester', icon: CpuIcon },
  { href: '/about', label: 'About', icon: InfoIcon },
  { href: '/services', label: 'Services', icon: BriefcaseIcon },
  { href: '/contact', label: 'Contact', icon: MailIcon },
];

export function Header() {
  const pathname = usePathname();

  const NavLinks = ({ mobile = false, onItemClick }: { mobile?: boolean, onItemClick?: () => void }) => (
    navItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        onClick={onItemClick}
        className={cn(
          "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          pathname === item.href ? "bg-accent text-accent-foreground" : "text-foreground/80 hover:text-accent-foreground",
          mobile ? "w-full justify-start text-base py-3" : ""
        )}
      >
        <item.icon className="h-4 w-4" />
        {item.label}
      </Link>
    ))
  );

  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Go to homepage">
          <Logo />
          <span className="font-headline text-xl font-semibold text-foreground">Code Showcase</span>
        </Link>
        <nav className="hidden items-center space-x-1 md:flex">
          <NavLinks />
        </nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-6 bg-background">
              <SheetTitle className="sr-only">Main Menu</SheetTitle>
              <div className="flex flex-col space-y-4">
                <Link href="/" onClick={() => setIsSheetOpen(false)} className="mb-4 flex items-center gap-2" aria-label="Go to homepage">
                  <Logo />
                  <span className="font-headline text-xl font-semibold text-foreground">Code Showcase</span>
                </Link>
                <NavLinks mobile onItemClick={() => setIsSheetOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
