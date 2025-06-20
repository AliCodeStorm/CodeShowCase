
import * as React from 'react';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
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
import SearchInput from '@/components/previews/CustomInput';
import CardCheckBox from '@/components/previews/CheckBoxCard';

export interface UiComponent {
  id: string;
  name: string;
  description: string;
  category: string;
  preview: ReactNode;
  code: string;
  keywords?: string[];
  instructions?: string;
}

export const uiComponents: UiComponent[] = [
  //primary button
  {
    id: 'primary-button',
    name: 'Primary Button',
    description: 'A standard primary button for main actions.',
    category: 'Buttons',
    preview: React.createElement(Button, null, 'Primary Action'),
    code: `import { Button } from '@/components/ui/button';\n\n<Button>Primary Action</Button>`,
    keywords: ['button', 'action', 'primary'],
  },
  //secondry button
  {
    id: 'secondary-button',
    name: 'Secondary Button',
    description: 'A secondary button for alternative actions.',
    category: 'Buttons',
    preview: React.createElement(Button, { variant: "secondary" }, 'Secondary Action'),
    code: `import { Button } from '@/components/ui/button';\n\n<Button variant="secondary">Secondary Action</Button>`,
    keywords: ['button', 'action', 'secondary'],
  },
  //Ourline button
  {
    id: 'outline-button',
    name: 'Outline Button',
    description: 'An outlined button for less prominent actions.',
    category: 'Buttons',
    preview: React.createElement(Button, { variant: "outline" }, 'Outline Action'),
    code: `import { Button } from '@/components/ui/button';\n\n<Button variant="outline">Outline Action</Button>`,
    keywords: ['button', 'action', 'outline'],
  },
  //input label
  {
    id: 'input-with-label',
    name: 'Input with Label',
    description: 'A standard text input field with an associated label, good for forms.',
    category: 'Forms',
    preview: React.createElement(SearchInput),
    code: `
'use client'
import React from 'react';

const SearchInput = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="relative">
                    <input id="username" name="username" type="text" placeholder="" className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit" />
                    <label htmlFor="username" className="absolute -top-4 text-xs left-0 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700 peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm">
                        Name
                    </label>
                </div>
            </div>
        </div>
    );
}

export default SearchInput;

    `.trim(),
    keywords: ['form', 'input', 'label', 'text field'],
  },
  // Check Box 
  {
    id: 'card-with-checkbox',
    name: 'Checkboxs',
    description: 'A standard text input field with an associated label, good for forms.',
    category: 'Checkbox',
    preview: React.createElement(CardCheckBox),
    code: `
import React from 'react';

const CardCheckBox = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-[300px] px-4 py-5 bg-white flex flex-col gap-3 rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.09)]">
        <legend className="text-xl font-semibold mb-3 select-none">Choose One</legend>

        <label
          htmlFor="html"
          className="font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
        >
          <div className="w-5 fill-blue-500">
            {/* HTML Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
              <path d="M30.713,0.501L71.717,460.42l184.006,51.078l184.515-51.15L481.287,0.501H30.713z M395.754,109.646 l-2.567,28.596l-1.128,12.681h-0.187H256h-0.197h-79.599l5.155,57.761h74.444H256h115.723h15.201l-1.377,15.146l-13.255,148.506 l-0.849,9.523L256,413.854v0.012l-0.259,0.072l-115.547-32.078l-7.903-88.566h26.098h30.526l4.016,44.986l62.82,16.965l0.052-0.014 v-0.006l62.916-16.977l6.542-73.158H256h-0.197H129.771l-13.863-155.444l-1.351-15.131h141.247H256h141.104L395.754,109.646z" />
            </svg>
          </div>
          HTML
          <input defaultChecked type="radio" name="status" className="peer/html w-4 h-4 absolute accent-current right-3" id="html" />
        </label>

        <label
          htmlFor="css"
          className="font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
        >
          <div className="w-5">
            {/* CSS Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
            </svg>
          </div>
          CSS
          <input type="radio" name="status" className="w-4 h-4 absolute accent-current right-3" id="css" />
        </label>

        <label
          htmlFor="javascript"
          className="font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
        >
          <div className="w-5">
            {/* JavaScript Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.008,0.5C0.438,0.583,0.48,1.27,0.521,1.958c0,169.668,0,339.31,0,508.974c169.364,1.135,340.808,0.162,510.979,0.486c0-170.309,0-340.61,0-510.918C341.342,0.5,171.167,0.5,1.008,0.5z M259.893,452.167c-11.822,11.919-30.478,18.938-53.429,18.938c-37.643,0-58.543-18.34-71.884-43.711c12.842-8.2,25.966-16.122,39.344-23.795c5.456,15.262,23.886,32.42,44.683,21.857c13.183-6.699,11.661-27.01,11.661-49.054c0-45.773,0-98.578,0-139.872c-0.042-0.688-0.083-1.375,0.482-1.458c15.707,0,31.413,0,47.116,0c0,36.788,0,78.402,0,117.529C277.866,395.199,280.91,430.988,259.893,452.167z M470.696,409.917c-2.674,39.884-35.243,61.063-79.17,61.188c-43.062,0.124-70.624-19.013-87.433-48.567c12.085-8.317,25.778-15.017,38.375-22.822c10.08,15.761,27.537,30.91,53.429,28.652c16.131-1.406,34.856-14.555,24.285-34.482c-5.127-9.66-17.516-14.567-28.656-19.425c-35.352-15.424-76.828-29.571-72.861-84.992c1.327-18.514,9.852-31.525,20.889-40.796c11.311-9.5,26.46-15.867,46.629-16.511c36.629-1.173,56.723,15.12,70.429,37.884c-11.664,8.891-24.514,16.608-37.401,24.281c-4.229-12.995-24.644-25.658-41.772-17.969c-7.789,3.493-14.788,13.761-10.684,26.224c3.66,11.115,18.589,17.199,30.599,22.344C433.706,340.486,474.331,355.693,470.696,409.917z" />
            </svg>
          </div>
          JavaScript
          <input type="radio" name="status" className="w-4 h-4 absolute accent-blue-500 right-3" id="javascript" />
        </label>
      </div>
    </div>
  );
};

export default CardCheckBox;
    `.trim(),
    keywords: ['form', 'input', 'label', 'text field'],
  },
  // Card component
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
