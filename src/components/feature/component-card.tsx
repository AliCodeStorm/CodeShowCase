import type { UiComponent } from '@/data/components';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CodeModalButton } from './codeWindow';

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
      <CardContent className="flex-grow flex flex-col">
        <div className="mb-4 rounded-md border border-dashed border-border p-6 min-h-[100px] flex items-center justify-center bg-background">
          {component.preview}
        </div>
        <CodeModalButton componentName={component.name} code={component.code} />
        {/* <div className="relative h-[200px]">
          
          <CodeBlock code={component.code} className="absolute inset-0 overflow-y-auto" />
        </div> */}
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
