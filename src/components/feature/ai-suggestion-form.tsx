
"use client";

import * as React from 'react';
import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { suggestUiChanges, type SuggestUiOutput, type SuggestUiInput } from '@/ai/flows/suggest-component-combinations';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Sparkles, Wand2, FileCode, MessageSquare, Lightbulb } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CodeBlock } from './code-block';

const formSchema = z.object({
  needs: z.string().min(10, { message: "Please describe your UI needs in at least 10 characters." }).max(2000),
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
      needs: '',
      existingComponentContext: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const apiInput: SuggestUiInput = {
        needs: data.needs,
        existingComponentContext: data.existingComponentContext || undefined,
      };
      const response = await suggestUiChanges(apiInput);
      setResult(response);
    } catch (err) {
      console.error("AI Suggestion Error:", err);
      setError(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-xl border-primary/30 rounded-xl">
      <CardHeader className="text-center">
        <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-3 mx-auto shadow-sm">
            <Wand2 className="h-10 w-10 text-primary" />
        </div>
        <CardTitle className="font-headline text-3xl">Describe Your UI Challenge</CardTitle>
        <CardDescription className="text-md">
          Whether you need component ideas, new code, or help editing existing components, our AI is here to assist.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6 px-8 py-10">
            <FormField
              control={form.control}
              name="needs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="needs" className="text-lg font-semibold">Your UI Needs / Task*</FormLabel>
                  <FormControl>
                    <Textarea
                      id="needs"
                      placeholder="e.g., 'Create a responsive pricing card component with three tiers', 'Suggest components for a user dashboard', or 'Help me add a dark mode toggle to this existing Navbar code (paste code below).'"
                      className="min-h-[150px] text-base focus:border-primary/80 shadow-sm"
                      {...field}
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
                  <FormLabel htmlFor="existingComponentContext" className="text-lg font-semibold">Existing Code (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      id="existingComponentContext"
                      placeholder="If you're asking for an edit, paste the existing component code here..."
                      className="min-h-[120px] font-code text-sm focus:border-primary/80 shadow-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-center p-6 bg-secondary/30 rounded-b-lg">
            <Button type="submit" disabled={isLoading} size="lg" className="w-full sm:w-auto text-lg py-3 px-8 shadow-lg hover:shadow-primary/50 transition-shadow">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Thinking...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Get AI Assistance
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>

      {error && (
        <div className="p-6">
          <Alert variant="destructive" className="shadow-md rounded-lg">
            <AlertTitle className="font-headline">Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        </div>
      )}

      {result && (
        <div className="p-6 mt-6 border-t border-primary/30 space-y-6">
          <h2 className="font-headline text-3xl font-bold text-center text-primary">AI Response</h2>
          
          {result.suggestedCombinations && result.suggestedCombinations.length > 0 && (
            <Card className="bg-background shadow-md border-dashed border-border/70 rounded-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                  Suggested Combinations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                  {result.suggestedCombinations.map((combo, index) => (
                    <li key={index}>{combo}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {result.generatedCode && (
            <Card className="bg-background shadow-md border-dashed border-border/70 rounded-lg">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center">
                  <FileCode className="mr-2 h-5 w-5 text-primary" />
                  {result.suggestionType === 'creation' ? 'Generated Code' : 'Updated Code'}
                </CardTitle>
                {result.fileNameSuggestion && (
                  <CardDescription>Suggested filename: <code className="font-semibold text-foreground bg-secondary px-1 py-0.5 rounded text-sm">{result.fileNameSuggestion}</code></CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <CodeBlock code={result.generatedCode} language="typescript" className="max-h-[500px] overflow-y-auto" />
              </CardContent>
            </Card>
          )}
          
          <Card className="bg-accent/10 shadow-sm border-accent/40 rounded-lg">
            <CardHeader>
              <CardTitle className="font-headline text-xl flex items-center">
                <Lightbulb className="mr-2 h-5 w-5 text-accent" />
                AI Reasoning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground whitespace-pre-wrap text-sm leading-relaxed">{result.reasoning}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </Card>
  );
}
