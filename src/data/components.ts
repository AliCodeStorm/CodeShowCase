
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


export interface UiComponent {
  id: string;
  name: string;
  description: string;
  category: string;
  preview: ReactNode;
  code: string;
  keywords?: string[];
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
/*
This is the code for the AnimatedStatCardPreview component.
You can save this in a file like 'src/components/my-animated-stat-card.tsx'.

Then import and use it in your page/component:
import { AnimatedStatCardPreview } from '@/components/previews/animated-stat-card-preview'; // Or your custom path
// In your component:
// <AnimatedStatCardPreview />
*/

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
      React.createElement(Label, { htmlFor: 'progress-preview-2' }, 'Upload Progress: 66%'),
      React.createElement(Progress, { id: 'progress-preview-2', value: 66, className: 'w-full' })
    ),
    code: `
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';

<div className="w-full max-w-sm space-y-2">
  <Label htmlFor="progress-preview-2">Upload Progress: 66%</Label>
  <Progress id="progress-preview-2" value={66} className="w-full" />
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
        React.createElement(AvatarImage, { src: "https://placehold.co/40x40.png", "data-ai-hint": "person face" }),
        React.createElement(AvatarFallback, null, "U1")
      ),
      React.createElement(Avatar, { className: "border-2 border-background shadow-md" },
        React.createElement(AvatarImage, { src: "https://placehold.co/40x40.png", "data-ai-hint": "woman portrait" }),
        React.createElement(AvatarFallback, null, "U2")
      ),
      React.createElement(Avatar, { className: "border-2 border-background shadow-md" },
        React.createElement(AvatarFallback, null, React.createElement(Smile, {className: "w-5 h-5"}))
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
/*
Save this as a component, e.g., 'src/components/my-pulsing-bell.tsx'
Then import and use it:
import { PulsingNotificationBellPreview as MyPulsingBell } from '@/components/previews/pulsing-notification-bell-preview'; // Or your custom path
// <MyPulsingBell />
*/

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
    name: 'Hover Reveal Card',
    description: 'A card that reveals more information or an action button on hover. Uses Tailwind CSS for transitions.',
    category: 'Animated',
    preview: React.createElement(HoverRevealCardPreview),
    code: `
/*
Save this as a component, e.g., 'src/components/my-hover-card.tsx'
Then import and use it:
import { HoverRevealCardPreview as MyHoverCard } from '@/components/previews/hover-reveal-card-preview'; // Or your custom path
// <MyHoverCard />
*/

"use client";

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function HoverRevealCardPreview() {
  return (
    <Card className="group relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardHeader className="relative z-10 p-0">
        <Image
          src="https://placehold.co/400x250.png"
          alt="Feature Image"
          width={400}
          height={250}
          className="rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
          data-ai-hint="abstract background"
        />
      </CardHeader>
      <CardContent className="relative z-10 bg-background p-4">
        <CardTitle className="mb-2 text-xl font-headline">Interactive Card</CardTitle>
        <p className="text-sm text-muted-foreground">
          Hover over this card to see a cool reveal effect and an action button.
        </p>
      </CardContent>
      {/* Overlay for reveal effect */}
      <div className="absolute inset-0 z-20 flex translate-y-full flex-col items-center justify-center bg-gradient-to-t from-background/90 via-background/70 to-transparent p-6 text-center opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
        <h3 className="mb-3 text-2xl font-bold text-primary">Discover More</h3>
        <p className="mb-4 text-sm text-foreground">
          Unlock exclusive features and dive deeper into what we offer.
        </p>
        <Button size="lg">
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </Card>
  );
}
    `.trim(),
    keywords: ['card', 'hover', 'reveal', 'animated', 'interactive', 'ui effect'],
  },
];
