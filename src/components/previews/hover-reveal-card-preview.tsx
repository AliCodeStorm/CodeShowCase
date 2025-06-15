
"use client"; // Recommended for consistency, though pure Tailwind hover effects don't strictly need it.

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
