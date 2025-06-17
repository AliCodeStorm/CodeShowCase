
import * as React from 'react';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, Smile } from "lucide-react";
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { AnimatedStatCardPreview } from '@/components/previews/animated-stat-card-preview';
import { PulsingNotificationBellPreview } from '@/components/previews/pulsing-notification-bell-preview';
import { HoverRevealCardPreview } from '@/components/previews/hover-reveal-card-preview';
import { Header } from '@/components/layout/header';


export interface UiComponent {
  id: string;
  name: string;
  description: string;
  category: string;
  preview: ReactNode;
  code: string;
  keywords?: string[];
  instructions?:string;
}

export const uiComponents: UiComponent[] = [
  {
    id: 'primary-button',
    name: 'Primary Button',
    description: 'A standard primary button for main actions.',
    category: 'Buttons',
    preview: React.createElement(Button, null, 'Primary Action'),
    code: `import { Button } from '@/components/ui/button';\n\n<Button>Primary Action</Button>`,
    keywords: ['button', 'action', 'primary'],
  },
  {
    id: 'secondary-button',
    name: 'Secondary Button',
    description: 'A secondary button for alternative actions.',
    category: 'Buttons',
    preview: React.createElement(Button, { variant: "secondary" }, 'Secondary Action'),
    code: `import { Button } from '@/components/ui/button';\n\n<Button variant="secondary">Secondary Action</Button>`,
    keywords: ['button', 'action', 'secondary'],
  },
  {
    id: 'outline-button',
    name: 'Outline Button',
    description: 'An outlined button for less prominent actions.',
    category: 'Buttons',
    preview: React.createElement(Button, { variant: "outline" }, 'Outline Action'),
    code: `import { Button } from '@/components/ui/button';\n\n<Button variant="outline">Outline Action</Button>`,
    keywords: ['button', 'action', 'outline'],
  },
  {
    id: 'input-with-label',
    name: 'Input with Label',
    description: 'A standard text input field with an associated label, good for forms.',
    category: 'Forms',
    preview: React.createElement(
      'div',
      { className: 'grid w-full max-w-sm items-center gap-1.5' },
      React.createElement(Label, { htmlFor: 'email-preview' }, 'Email Address'),
      React.createElement(Input, { type: 'email', id: 'email-preview', placeholder: 'you@example.com' })
    ),
    code: `
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email-preview">Email Address</Label>
  <Input type="email" id="email-preview" placeholder="you@example.com" />
</div>
    `.trim(),
    keywords: ['form', 'input', 'label', 'text field'],
  },
  {
    id: 'simple-card',
    name: 'Simple Card',
    description: 'A card component to display grouped content.',
    category: 'Layout',
    preview: React.createElement(
      Card,
      { className: "w-full max-w-sm" },
      React.createElement(
        CardHeader,
        null,
        React.createElement(CardTitle, null, "Card Title"),
        React.createElement(CardDescription, null, "This is a description for the card.")
      ),
      React.createElement(
        CardContent,
        null,
        React.createElement("p", null, "Card content goes here. It can be any React node.")
      ),
      React.createElement(
        CardFooter,
        null,
        React.createElement(Button, { variant: "outline" }, "Learn More")
      )
    ),
    code: `
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>This is a description for the card.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here. It can be any React node.</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline">Learn More</Button>
  </CardFooter>
</Card>
    `.trim(),
    keywords: ['card', 'container', 'panel', 'layout'],
  },
  {
    id: 'alert-info',
    name: 'Informational Alert',
    description: 'An alert component to display important messages.',
    category: 'Feedback',
    preview: React.createElement(
      Alert,
      null,
      React.createElement(Terminal, { className: "h-4 w-4" }),
      React.createElement(AlertTitle, null, "Heads up!"),
      React.createElement(AlertDescription, null, "You can add components to your app using the cli.")
    ),
    code: `
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>
    `.trim(),
    keywords: ['alert', 'notification', 'message', 'feedback'],
  },
  {
    id: 'animated-stat-card',
    name: 'Animated Statistic Card',
    description: 'A card that displays a statistic with a count-up animation and hover effect. The code provided is the full component definition.',
    category: 'Animated',
    preview: React.createElement(AnimatedStatCardPreview),
    code: `
"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

export function AnimatedStatCardPreview() {
  const [currentDisplayCount, setCurrentDisplayCount] = useState(0); // This is what's displayed
  const [isMounted, setIsMounted] = useState(false);
  const targetCount = 75; // Example target number

  useEffect(() => {
    setIsMounted(true); // Signal that the component has mounted on the client
  }, []);

  useEffect(() => {
    if (!isMounted) {
      // Don't run the animation logic if not mounted or if already at target
      return;
    }

    if (currentDisplayCount < targetCount) {
      const timer = setTimeout(() => {
        setCurrentDisplayCount(prevCount => Math.min(prevCount + 1, targetCount));
      }, 30); // Adjust speed as needed
      return () => clearTimeout(timer);
    }
  }, [currentDisplayCount, targetCount, isMounted]);

  return (
    <Card className="w-full max-w-xs text-center hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-primary">Active Users</CardTitle>
        <CardDescription>Current real-time users</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Display 0 until mounted, then display the animated count */}
        <div className="text-4xl font-bold">
          {isMounted ? currentDisplayCount : 0}
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button variant="ghost">View Details</Button>
      </CardFooter>
    </Card>
  );
}
    `.trim(),
    keywords: ['card', 'statistic', 'animation', 'counter', 'dashboard'],
  },
  {
    id: 'progress-bar-labeled',
    name: 'Labeled Progress Bar',
    description: 'A progress bar with a label indicating the current percentage.',
    category: 'Feedback',
    preview: React.createElement(
      'div',
      { className: 'w-full max-w-sm space-y-2' },
      React.createElement('span', { className: 'text-sm font-medium text-foreground' }, 'Upload Progress: 66%'),
      React.createElement(Progress, { value: 66, className: 'w-full' })
    ),
    code: `
import { Progress } from '@/components/ui/progress';

<div className="w-full max-w-sm space-y-2">
  <span className="text-sm font-medium text-foreground">Upload Progress: 66%</span>
  <Progress value={66} className="w-full" />
</div>
  `.trim(),
    keywords: ['progress', 'loading', 'indicator', 'bar', 'upload'],
  },

  {
    id: 'avatar-group',
    name: 'Avatar Group',
    description: 'Displays a group of user avatars, typically used for showing participants or team members.',
    category: 'Display',
    preview: React.createElement(
      'div',
      { className: 'flex -space-x-2 overflow-hidden p-1' },
      React.createElement(Avatar, { className: "border-2 border-background shadow-md" },
        React.createElement(AvatarImage, { src: "https://placehold.co/40x40.png", }),
        React.createElement(AvatarFallback, null, "U1")
      ),
      React.createElement(Avatar, { className: "border-2 border-background shadow-md" },
        React.createElement(AvatarImage, { src: "https://placehold.co/40x40.png", }),
        React.createElement(AvatarFallback, null, "U2")
      ),
      React.createElement(Avatar, { className: "border-2 border-background shadow-md" },
        React.createElement(AvatarFallback, null, React.createElement(Smile, { className: "w-5 h-5" }))
      ),
      React.createElement(Avatar, { className: "border-2 border-background shadow-md" },
        React.createElement(AvatarFallback, null, "+3")
      )
    ),
    code: `
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Smile } from 'lucide-react'; // Example Icon

<div className="flex -space-x-2 overflow-hidden p-1">
  <Avatar className="border-2 border-background shadow-md">
    <AvatarImage src="https://placehold.co/40x40.png" alt="User 1" data-ai-hint="person face" />
    <AvatarFallback>U1</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background shadow-md">
    <AvatarImage src="https://placehold.co/40x40.png" alt="User 2" data-ai-hint="woman portrait" />
    <AvatarFallback>U2</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background shadow-md">
    {/* Example with an icon fallback */}
    <AvatarFallback><Smile className="w-5 h-5" /></AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background shadow-md">
    <AvatarFallback>+3</AvatarFallback>
  </Avatar>
</div>
    `.trim(),
    keywords: ['avatar', 'users', 'group', 'team', 'profile', 'display'],
  },
  {
    id: 'simple-tabs',
    name: 'Simple Tabs',
    description: 'A set of tabs to switch between different content sections.',
    category: 'Navigation',
    preview: React.createElement(
      Tabs,
      { defaultValue: "account", className: "w-full max-w-md" },
      React.createElement(
        TabsList,
        { className: "grid w-full grid-cols-2" },
        React.createElement(TabsTrigger, { value: "account" }, "Account"),
        React.createElement(TabsTrigger, { value: "password" }, "Password")
      ),
      React.createElement(
        TabsContent,
        { value: "account", className: "p-4 border rounded-b-md min-h-[80px]" },
        "Account details would be shown here."
      ),
      React.createElement(
        TabsContent,
        { value: "password", className: "p-4 border rounded-b-md min-h-[80px]" },
        "Password settings would be shown here."
      )
    ),
    code: `
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

<Tabs defaultValue="account" className="w-full max-w-md">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account" className="p-4 border rounded-b-md min-h-[80px]">
    Account details would be shown here.
  </TabsContent>
  <TabsContent value="password" className="p-4 border rounded-b-md min-h-[80px]">
    Password settings would be shown here.
  </TabsContent>
</Tabs>
    `.trim(),
    keywords: ['tabs', 'navigation', 'sections', 'content', 'organize'],
  },
  {
    id: 'pulsing-notification-bell',
    name: 'Pulsing Notification Bell',
    description: 'A notification bell icon that gently pulses. The animation is self-contained in the component code.',
    category: 'Animated',
    preview: React.createElement(PulsingNotificationBellPreview),
    code: `
"use client";

import * as React from 'react';
import { Bell } from 'lucide-react';

export function PulsingNotificationBellPreview() {
  return (
    <>
      <style jsx>{\`
        .pulse-bell {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      \`}</style>
      <div className="flex items-center justify-center p-4">
        <Bell className="h-10 w-10 text-primary pulse-bell" />
      </div>
    </>
  );
}
    `.trim(),
    keywords: ['notification', 'bell', 'animated', 'pulse', 'alert icon'],
  },
  {
    id: 'hover-reveal-card',
    name: 'Sign Up Card',
    description: 'A sign-up card that displays more details or a call-to-action button when hovered. Styled using Tailwind CSS for smooth transitions.',
    category: 'Forms',
    preview: React.createElement(HoverRevealCardPreview),
    code: `
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, Lock, User } from 'lucide-react';

export function HoverRevealCardPreview() {
  return (
    <div
      className={cn(
        "w-full max-w-md space-y-4 p-6 rounded-lg shadow-md bg-gradient-to-br from-gray-50 to-white border"
      )}
    >
      <h2 className="text-2xl font-semibold text-center">Create an Account</h2>
      <div className="space-y-2">
        <div className="flex items-center space-x-2 border rounded-md px-3 py-2">
          <User className="h-5 w-5 text-gray-500" />
          <Input
            type="text"
            placeholder="Name"
            className="border-none shadow-none focus-visible:ring-0"
          />
        </div>
        <div className="flex items-center space-x-2 border rounded-md px-3 py-2">
          <Mail className="h-5 w-5 text-gray-500" />
          <Input
            type="email"
            placeholder="Email"
            className="border-none shadow-none focus-visible:ring-0"
          />
        </div>
        <div className="flex items-center space-x-2 border rounded-md px-3 py-2">
          <Lock className="h-5 w-5 text-gray-500" />
          <Input
            type="password"
            placeholder="Password"
            className="border-none shadow-none focus-visible:ring-0"
          />
        </div>
      </div>
      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Sign Up</Button>
    </div>
  );
}

    `.trim(),
    keywords: ['card', 'signup', 'icons', 'animated', 'interactive', 'ui effect'],
  },

  {
    id: 'navbar',
    name: 'Navbar',
    description: 'A set of tabs to switch between different content sections.',
    category: 'Navbar',
instructions: `
  "// 1. Import the component",
  'import { PulsingNotificationBellPreview } from "@/components/examples";',
  "",
  "// 2. Use in your UI",
  "<PulsingNotificationBellPreview />"`.trim(),

preview: React.createElement(Header),
code: `

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

    `.trim(),
    keywords: ['tabs', 'navigation', 'sections', 'content', 'organize'],
  },
];
