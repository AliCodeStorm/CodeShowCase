"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CodeModalButtonProps {
  componentName: string;
  preview: React.ReactNode;
  code: string;
  instructions?: string;
}

export const CodeModalButton: React.FC<CodeModalButtonProps> = ({
  componentName,
  preview,
  code,
  instructions,
}) => {
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
      const timer = setTimeout(() => setHasCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          title="View Code"
          className="text-muted-foreground hover:text-primary"
        >
          <span className="text-lg font-mono">{'</>'}</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="w-full max-w-screen-lg max-h-screen overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg">{componentName} Preview & Code</DialogTitle>
        </DialogHeader>

        <div className="w-full mb-4 rounded-md border p-4 bg-background min-h-[100px] max-h-[200px] overflow-y-auto">{preview}</div>

        {instructions && (
          <div className="relative mt-6 rounded-lg border bg-muted/50 p-4 shadow-inner max-h-[300px] overflow-auto">
            <p className="mb-2 text-sm font-semibold text-muted-foreground">Integration Steps</p>
            <pre className="font-mono text-sm py-2 text-foreground whitespace-pre overflow-x-auto">
              <code>{instructions}</code>
            </pre>
          </div>
        )}
        <div className="relative rounded-lg border bg-muted/50 p-4 shadow-inner max-h-[400px] overflow-auto">
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-2 top-2 h-8 w-8 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={onCopy}
            aria-label="Copy code"
          >
            {hasCopied ? (
              <Check className="h-4 w-4 text-emerald-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
          <pre className="font-mono text-sm py-2 text-foreground whitespace-pre overflow-x-auto">

            <code>{code}</code>
          </pre>
        </div>
      </DialogContent>
    </Dialog>
  );
};
