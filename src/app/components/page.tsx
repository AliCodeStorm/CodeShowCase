
"use client";

import * as React from 'react';
import { useState, useMemo } from 'react';
import { ComponentCard } from '@/components/feature/component-card';
import { uiComponents, type UiComponent } from '@/data/components';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SearchIcon, InfoIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ComponentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = useMemo(() => {
    const allCategories = new Set(uiComponents.map(c => c.category));
    return ['all', ...Array.from(allCategories)];
  }, []);

  const filteredComponents = useMemo(() => {
    return uiComponents.filter(component => {
      const matchesCategory = selectedCategory === 'all' || component.category === selectedCategory;
      const matchesSearch = 
        component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        component.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (component.keywords && component.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight lg:text-5xl">
          UI Component Library
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore our collection of reusable UI components. Preview, copy, and integrate them into your projects.
        </p>
      </header>

      <Alert className="mb-8 shadow-md rounded-lg">
        <InfoIcon className="h-5 w-5" />
        <AlertTitle className="font-headline text-lg">Getting Started with Components</AlertTitle>
        <AlertDescription className="text-muted-foreground space-y-2 mt-2">
          <p>Welcome to the component library! Here's how to integrate these components into your project:</p>
          <ol className="list-decimal list-inside space-y-1.5 pl-2">
            <li>
              <strong>Tailwind CSS & ShadCN UI Setup:</strong> This project comes pre-configured with Tailwind CSS and the core ShadCN UI setup. To add new ShadCN UI components that might not be listed here (e.g., a specific component from their library), you can typically use their CLI: <code>npx shadcn-ui@latest add &lt;component-name&gt;</code>. Always refer to the official ShadCN UI documentation for the most up-to-date instructions.
            </li>
            <li>
              <strong>Using Components from this Library:</strong>
              <ul className="list-disc list-inside space-y-1 pl-4 mt-1">
                <li>
                  <strong>Standard Components:</strong> For most components, you can directly copy the provided code snippet and paste it into your JSX files. Ensure you also import any necessary components from <code>@/components/ui</code>, <code>lucide-react</code>, or other relevant paths as shown in the snippet.
                </li>
                <li>
                  <strong>Animated & Interactive Components:</strong> Some components, especially those featuring animations (like the 'Animated Stat Card') or requiring client-side interactivity, might use React Hooks such as <code>useState</code> or <code>useEffect</code>. These components will often need the <code>"use client";</code> directive at the top of the file where they are defined or used. The code snippets provided here are designed to be ready-to-use, often including this directive if necessary within their definition.
                </li>
              </ul>
            </li>
          </ol>
          <p className="mt-2">Explore the components below and happy coding!</p>
        </AlertDescription>
      </Alert>

      <div className="sticky top-16 z-40 bg-background/90 py-4 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search components..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
              aria-label="Search components"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[200px]" aria-label="Filter by category">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category} className="capitalize">
                  {category === 'all' ? 'All Categories' : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {filteredComponents.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredComponents.map((component) => (
            <ComponentCard key={component.id} component={component} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No components found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
