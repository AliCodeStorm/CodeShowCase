"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  suggestUiChanges,
  type SuggestUiInput,
  type SuggestUiOutput,
} from "@/ai/flows/suggest-component-combinations";
import {
  Loader2,
  Sparkles,
  MessageSquare,
  FileCode,
  Lightbulb,
} from "lucide-react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CodeBlock } from "./code-block";

const formSchema = z.object({
  needs: z
    .string()
    .min(10, { message: "Please describe your UI needs." })
    .max(2000),
  existingComponentContext: z.string().max(5000).optional(),
});

type FormData = z.infer<typeof formSchema>;

export function AiSuggestionForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<SuggestUiOutput | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      needs: "",
      existingComponentContext: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const input: SuggestUiInput = {
        needs: data.needs,
        existingComponentContext: data.existingComponentContext || undefined,
      };
      const res = await suggestUiChanges(input);
      setResult(res);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (result) {
      document.getElementById("ai-results")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [result]);

  const hasSuggestions = Array.isArray(result?.suggestedCombinations) && result.suggestedCombinations.length > 0;

  return (
    <div className="w-full space-y-8 ">
      {/* Response Area */}
      <div className="space-y-6" id="ai-results">
        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {hasSuggestions && (
          <div className="bg-muted p-4 rounded-md border shadow-sm">
            <div className="flex items-center mb-2 text-primary font-semibold">
              <MessageSquare className="h-4 w-4 mr-2" /> Suggestions
            </div>
            <ul className="list-disc pl-6 text-muted-foreground text-sm space-y-1">
                {result?.suggestedCombinations?.map((item: string, i: number) => (
                <li key={i}>{item}</li>
                ))}
            </ul>
          </div>
        )}

        <div className="space-y-2">
          <div className="flex items-center text-primary font-semibold">
            <FileCode className="h-4 w-4 mr-2" />
            {result?.suggestionType === "creation"
              ? "Generated Code"
              : "Updated Code"}
          </div>

          {result?.fileNameSuggestion && (
            <div className="text-sm text-muted-foreground">
              Suggested file:{" "}
              <code className="bg-secondary px-1 py-0.5 rounded text-foreground">
                {result.fileNameSuggestion}
              </code>
            </div>
          )}

          <CodeBlock
            code={result?.generatedCode || "// No code generated."}
            language="tsx"
            className="bg-background border rounded-lg max-h-[600px] overflow-auto"
          />
        </div>

      </div>

      {/* Input Form */}
      <div className="border-t bg-background pt-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="needs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What do you need?</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="e.g. Create a pricing component with toggle"
                      className="resize-none min-h-[80px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="existingComponentContext"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Optional Code</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Paste code to edit or improve"
                      className="resize-none min-h-[60px] font-mono text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit" disabled={isLoading} className="w-full sm:w-auto text-lg py-3 px-8 shadow-lg hover:shadow-primary/50 transition-shadow">
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" /> Thinking...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4" /> Ask AI
                  </span>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );

}
