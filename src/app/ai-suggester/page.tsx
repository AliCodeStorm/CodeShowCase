
import { AiSuggestionForm } from '@/components/feature/ai-suggestion-form';
import { Sparkles, Lightbulb } from 'lucide-react';

export const metadata = {
  title: 'AI UI Assistant - Code Showcase',
  description: 'Leverage AI to design, build, and refine your UI. Get suggestions, generate new components, or get help editing existing ones.',
};

export default function AiSuggesterPage() {
  return (
    <div className="space-y-10 py-8">
      <header className="text-center px-4">
        <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6 shadow-md">
          <Lightbulb className="h-12 w-12 text-primary" />
        </div>
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          AI UI Assistant
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          Unleash the power of AI for your UI development. Describe your requirements, and our AI can assist with:
        </p>
        <ul className="mt-6 text-lg text-foreground/90 list-none space-y-2 max-w-xl mx-auto text-left sm:text-center">
            <li className="flex items-center justify-center sm:justify-start">
                <Sparkles className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                Suggesting optimal component combinations.
            </li>
            <li className="flex items-center justify-center sm:justify-start">
                <Sparkles className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                Generating code for new UI components.
            </li>
            <li className="flex items-center justify-center sm:justify-start">
                <Sparkles className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                Modifying existing components with new code.
            </li>
            <li className="flex items-center justify-center sm:justify-start">
                <Sparkles className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                Creating new pages with complete code and layouts.
            </li>
        </ul>
      </header>
      <div className="px-4">
        <AiSuggestionForm />
      </div>
    </div>
  );
}
