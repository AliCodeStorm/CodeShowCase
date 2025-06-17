"use client";

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface CodeBlockProps {
  code: string;
  className?: string;
  language?: string;
}

export function CodeBlock({ code, className, language = 'jsx' }: CodeBlockProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const { toast } = useToast();

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setHasCopied(true);
    toast({
      title: "Copied to clipboard!",
      description: "The code snippet has been copied.",
    });
  };

  useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => {
        setHasCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  return (
    <div className={cn("relative rounded-lg border bg-muted/50 p-4 shadow-inner", className)}>
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-2 top-2 h-8 w-8 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        onClick={onCopy}
        aria-label="Copy code"
      >
        {hasCopied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
      </Button>
      <pre className="font-code text-sm overflow-x-auto whitespace-pre-wrap break-words py-2 text-foreground">
        <code>{code}</code>
      </pre>
    </div>
  );
}
