
"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

export function AnimatedStatCardPreview() {
  const [currentDisplayCount, setCurrentDisplayCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const targetCount = 75;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) {

      return;
    }

    if (currentDisplayCount < targetCount) {
      const timer = setTimeout(() => {
        setCurrentDisplayCount(prevCount => Math.min(prevCount + 1, targetCount));
      }, 30);
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

