import Image from 'next/image';
import type { PageTemplate } from '@/data/templates';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EyeIcon, CodeIcon } from 'lucide-react'; // Assuming you might add code view later

interface TemplateCardProps {
  template: PageTemplate;
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full aspect-[3/2] bg-muted">
        <Image
          src={template.previewImage}
          alt={`Preview of ${template.name}`}
          layout="fill"
          objectFit="cover"
          data-ai-hint={template.aiHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl">{template.name}</CardTitle>
        <CardDescription>{template.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {template.tags && template.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
            {template.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
                </Badge>
            ))}
            </div>
        )}
      </CardContent>
      <CardFooter>
        {template.livePreviewUrl && (
          <Button asChild variant="default" className="w-full">
            <a href={template.livePreviewUrl} target="_blank" rel="noopener noreferrer">
              <EyeIcon className="mr-2 h-4 w-4" />
              Live Preview
            </a>
          </Button>
        )}
        {/* Placeholder for View Code button if needed later
        <Button variant="outline" className="w-full">
          <CodeIcon className="mr-2 h-4 w-4" />
          View Code
        </Button>
        */}
      </CardFooter>
    </Card>
  );
}
