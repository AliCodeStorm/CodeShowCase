'use client'
import type { UiComponent } from '@/data/components';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CodeModalButton } from './codeWindow';
import { NoSSR } from '@/components/NoSSR';

interface ComponentCardProps {
  component: UiComponent;
}

export function ComponentCard({ component }: ComponentCardProps) {
  return (
    <NoSSR>
      <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <div>
            <CardTitle className="font-headline text-xl">{component.name}</CardTitle>
            <CardDescription>{component.description}</CardDescription>
          </div>
          <CodeModalButton componentName={component.name} preview={component.preview} code={component.code} instructions={component.instructions} />
        </CardHeader>

        <CardContent className="flex-grow flex flex-col">
          <div className="mb-4 rounded-md border border-dashed border-border p-6 min-h-[100px] max-h-[200px] bg-background overflow-y-auto">
            <div className="w-full">{component.preview}</div>
          </div>
        </CardContent>

        {Array.isArray(component.keywords) && component.keywords.length > 0 && (
          <CardFooter className="flex flex-wrap gap-2">
            {component.keywords.map((keyword) => (
              <Badge key={keyword} variant="secondary" className="font-normal">
                {keyword}
              </Badge>
            ))}
          </CardFooter>
        )}
      </Card>
    </NoSSR>
  );
}
