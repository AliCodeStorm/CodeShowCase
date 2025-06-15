import type { UiComponent } from '@/data/components';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeBlock } from './code-block';
import { Badge } from '@/components/ui/badge';

interface ComponentCardProps {
  component: UiComponent;
}

export function ComponentCard({ component }: ComponentCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="font-headline text-xl">{component.name}</CardTitle>
        <CardDescription>{component.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col"> {/* Ensure CardContent can grow and manage flex children */}
        <div className="mb-4 rounded-md border border-dashed border-border p-6 min-h-[100px] flex items-center justify-center bg-background">
          {component.preview}
        </div>
        {/* Fixed height container for the code block */}
        <div className="relative h-[200px]">
          {/* CodeBlock fills the container and handles its own scrolling and internal padding */}
          <CodeBlock code={component.code} className="absolute inset-0 overflow-y-auto" />
        </div>
      </CardContent>
      {component.keywords && component.keywords.length > 0 && (
        <CardFooter className="flex flex-wrap gap-2">
          {component.keywords.map((keyword) => (
            <Badge key={keyword} variant="secondary" className="font-normal">
              {keyword}
            </Badge>
          ))}
        </CardFooter>
      )}
    </Card>
  );
}
