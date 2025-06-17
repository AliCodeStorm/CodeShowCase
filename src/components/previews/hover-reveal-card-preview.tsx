import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, Lock, User } from 'lucide-react';

export function HoverRevealCardPreview() {
  return (
    <div className="relative w-full max-w-md p-6 rounded-lg bg-gradient-to-br from-gray-50 to-white overflow-hidden shadow-md border">
      {/* Beam animation border using pseudo-element */}
      <div className="pointer-events-none absolute inset-0 z-0 before:absolute before:inset-0 before:rounded-lg before:animate-rotate-beam before:bg-gradient-to-r before:from-accent before:via-blue-500 before:to-blue-300 before:blur-xl before:opacity-30" />

      <div className="relative z-10 space-y-4">
        <h2 className="text-2xl font-semibold text-center">Create an Account</h2>
        <div className="space-y-2">
          <div className="flex items-center space-x-2 border rounded-md px-3 py-2 bg-white">
            <User className="h-5 w-5 text-gray-500" />
            <Input
              type="text"
              placeholder="Name"
              className="border-none shadow-none focus-visible:ring-0"
            />
          </div>
          <div className="flex items-center space-x-2 border rounded-md px-3 py-2 bg-white">
            <Mail className="h-5 w-5 text-gray-500" />
            <Input
              type="email"
              placeholder="Email"
              className="border-none shadow-none focus-visible:ring-0"
            />
          </div>
          <div className="flex items-center space-x-2 border rounded-md px-3 py-2 bg-white">
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
    </div>
  );
}
